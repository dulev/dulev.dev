import { useState, useEffect } from "react";
import "~/styles/crt-intro.css";

export function CrtIntro() {
  const [phase, setPhase] = useState<"idle" | "active" | "fading" | "done">(
    "idle",
  );

  useEffect(() => {
    // Activate on mount (client-side only)
    setPhase("active");

    const fadeTimer = setTimeout(() => setPhase("fading"), 1500);
    const doneTimer = setTimeout(() => setPhase("done"), 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="crt-overlay"
      data-phase={phase}
    >
      <div className="crt-screen">
        <div className="crt-rolling-bar" />
      </div>
      <div className="crt-bezel" />
    </div>
  );
}
