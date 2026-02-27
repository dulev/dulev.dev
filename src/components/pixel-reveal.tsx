import { useEffect, useState, useRef, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Portal } from "@radix-ui/react-portal";
import { atom, getDefaultStore } from "jotai";

// Constants
export const PIXEL_SIZE = 20;
const ROW_MS = 30;
const STAGGER_MS = 80;
const SCAN_BAR_PX = 3;

// Jotai scheduler — tracks last scheduled start time
const revealQueueAtom = atom({ lastStart: 0 });
const store = getDefaultStore();

function scheduleReveal(): number {
  const now = performance.now();
  const { lastStart } = store.get(revealQueueAtom);
  const nextStart = Math.max(now, lastStart + STAGGER_MS);
  store.set(revealQueueAtom, { lastStart: nextStart });
  return nextStart - now;
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

// Component — just wrap children, no props needed
export function PixelReveal({ children }: { children: ReactNode }) {
  const childRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const [activeRow, setActiveRow] = useState(-1);
  const [phase, setPhase] = useState<"hidden" | "animating" | "done">("hidden");
  const gridRef = useRef({ rows: 1 });

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const child = childRef.current;
    if (!sentinel || !child) return;

    if (typeof IntersectionObserver === "undefined") {
      setPhase("done");
      return;
    }

    let delayTimer: ReturnType<typeof setTimeout>;
    let rafId: number;

    // Observe the sentinel (no clip-path) instead of the clipped child,
    // because clip-path causes IntersectionObserver to report zero intersection.
    observe(sentinel, () => {
      const delay = scheduleReveal();

      const { height } = child.getBoundingClientRect();
      const rows = Math.max(1, Math.ceil(height / PIXEL_SIZE));
      gridRef.current = { rows };

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
          }
        };
        rafId = requestAnimationFrame(tick);
      }, delay);
    });

    return () => {
      unobserve(sentinel);
      clearTimeout(delayTimer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const { rows } = gridRef.current;
  const done = phase === "done";

  let clipPath: string | undefined;
  if (phase === "hidden" || activeRow < 0) {
    clipPath = "inset(-50px -50px 100% -50px)";
  } else if (done) {
    clipPath = undefined;
  } else {
    clipPath = `inset(-50px -50px ${100 - (activeRow / rows) * 100}% -50px)`;
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
      <Slot ref={childRef} style={{ clipPath }}>
        {children}
      </Slot>
      {showBar && rect && (
        <Portal>
          <div
            style={{
              position: "fixed",
              left: rect.left,
              width: rect.width,
              top: rect.top + (activeRow / rows) * rect.height,
              height: SCAN_BAR_PX,
              backgroundColor: "#FF6B00",
              boxShadow: "0 0 8px #FF6B00",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          />
        </Portal>
      )}
    </>
  );
}
