import {
  useEffect,
  useState,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { Portal } from "@radix-ui/react-portal";
import { atom, getDefaultStore, useAtomValue } from "jotai";

// Constants
export const CELL_SIZE = 10;
const ROW_MS = 6; // faster: was 15
const MIN_ROWS = 20;
const STAGGER_MS = 40; // faster: was 80
const SCAN_BAR_PX = 4;

// Scheduler — tracks last scheduled start time
const revealQueueAtom = atom({ lastStart: 0 });
// Global flag: once active scans drain to 0 (after at least one completed), disable future scans
const activeScanCountAtom = atom(0);
const scanDoneAtom = atom(false);
const store = getDefaultStore();

function scheduleReveal(): number {
  const now = performance.now();
  const { lastStart } = store.get(revealQueueAtom);
  const nextStart = Math.max(now, lastStart + STAGGER_MS);
  store.set(revealQueueAtom, { lastStart: nextStart });
  return nextStart - now;
}

function incrementActive() {
  store.set(activeScanCountAtom, store.get(activeScanCountAtom) + 1);
}

function decrementActive() {
  const next = store.get(activeScanCountAtom) - 1;
  store.set(activeScanCountAtom, next);
  if (next <= 0) {
    store.set(scanDoneAtom, true);
  }
}

function isScanDone() {
  return store.get(scanDoneAtom);
}

// Shared IntersectionObserver (singleton, fires once per element)
type ObserverCallback = () => void;
const callbacks = new Map<Element, ObserverCallback>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target);
            if (cb) {
              sharedObserver!.unobserve(entry.target);
              callbacks.delete(entry.target);
              cb();
            }
          }
        }
      },
      { threshold: 0.05 },
    );
  }
  return sharedObserver;
}

function observe(el: Element, callback: ObserverCallback) {
  const observer = getObserver();
  if (!observer) {
    callback();
    return;
  }
  callbacks.set(el, callback);
  observer.observe(el);
}

function unobserve(el: Element) {
  callbacks.delete(el);
  getObserver()?.unobserve(el);
}

interface ScanRevealProps {
  children: ReactNode;
  /** When false, the reveal won't start until enabled becomes true. Defaults to true. */
  enabled?: boolean;
  /** Called when the reveal animation finishes. */
  onComplete?: () => void;
}

export function ScanReveal({
  children,
  enabled = true,
  onComplete,
}: ScanRevealProps) {
  const childRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const [activeRow, setActiveRow] = useState(-1);
  const [phase, setPhase] = useState<"hidden" | "animating" | "done">("hidden");
  const gridRef = useRef({ rows: 1 });
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const pendingRef = useRef(false);
  const scanDone = useAtomValue(scanDoneAtom);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const child = childRef.current;
    if (!sentinel || !child) return;
    if (phase !== "hidden") return;

    if (typeof IntersectionObserver === "undefined") {
      setPhase("done");
      onCompleteRef.current?.();
      return;
    }

    if (!enabled) {
      observe(sentinel, () => {
        pendingRef.current = true;
      });
      return () => {
        unobserve(sentinel);
      };
    }

    let delayTimer: ReturnType<typeof setTimeout>;
    let rafId: number;

    const startReveal = () => {
      // If queue has already drained, skip animation entirely
      if (isScanDone()) {
        setPhase("done");
        onCompleteRef.current?.();
        return;
      }

      const delay = pendingRef.current ? 0 : scheduleReveal();
      pendingRef.current = false;

      const { height } = child.getBoundingClientRect();
      const rows = Math.max(MIN_ROWS, Math.ceil(height / CELL_SIZE));
      gridRef.current = { rows };

      incrementActive();

      delayTimer = setTimeout(() => {
        setPhase("animating");
        let startTime: number | null = null;

        const tick = (ts: number) => {
          if (startTime === null) startTime = ts;
          const elapsed = ts - startTime;
          const { rows } = gridRef.current;
          const row = Math.min(Math.floor(elapsed / ROW_MS), rows);
          setActiveRow(row);
          if (row < rows) {
            rafId = requestAnimationFrame(tick);
          } else {
            setPhase("done");
            onCompleteRef.current?.();
            decrementActive();
          }
        };
        rafId = requestAnimationFrame(tick);
      }, delay);
    };

    if (pendingRef.current) {
      startReveal();
    } else {
      observe(sentinel, startReveal);
    }

    return () => {
      unobserve(sentinel);
      clearTimeout(delayTimer);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  const { rows } = gridRef.current;
  const done = phase === "done";

  let maskStyle: CSSProperties | undefined;
  if (done || scanDone) {
    // Fully revealed: either this element finished animating, or global scan is done
    maskStyle = undefined;
  } else if (phase === "hidden" || activeRow < 0) {
    maskStyle = {
      WebkitMaskImage: "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1))",
      maskImage: "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1))",
    };
  } else {
    const pct = (activeRow / rows) * 100;
    maskStyle = {
      WebkitMaskImage: `linear-gradient(to bottom, black ${pct}%, rgba(0,0,0,0.1) ${pct}%)`,
      maskImage: `linear-gradient(to bottom, black ${pct}%, rgba(0,0,0,0.1) ${pct}%)`,
    };
  }

  const showBar = phase === "animating" && activeRow >= 0;
  const rect = childRef.current?.getBoundingClientRect();

  return (
    <>
      <span
        ref={sentinelRef}
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      />
      <Slot ref={childRef} style={maskStyle}>
        {children}
      </Slot>
      {showBar && rect && (
        <Portal>
          <style>{`@keyframes scanline-flicker {
            0%, 100% { opacity: 1; }
            15% { opacity: 0.4; }
            30% { opacity: 0.9; }
            50% { opacity: 0.3; }
            70% { opacity: 0.85; }
            85% { opacity: 0.5; }
          }`}</style>
          <div
            style={{
              position: "fixed",
              left: rect.left,
              width: rect.width,
              top: rect.top + (activeRow / rows) * rect.height,
              height: SCAN_BAR_PX,
              backgroundColor: "#FF6B00",
              boxShadow: "0 0 8px #FF6B00",
              animation: "scanline-flicker 120ms steps(1) infinite",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          />
        </Portal>
      )}
    </>
  );
}
