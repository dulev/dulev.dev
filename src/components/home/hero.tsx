import { useState } from "react";
import { PixelReveal } from "~/components/pixel-reveal";
import { siteContent } from "~/data/content";

const BOOKMARK_H = 215;
const OVERFLOW = 60;
const TOTAL_H = BOOKMARK_H + OVERFLOW;
const TRIANGLE_PCT = 80; // % where triangle starts in bookmark
const BORDER = 3;

const bookmarkClip = `polygon(0% 0%, 100% 0%, 100% ${TRIANGLE_PCT}%, 50% 100%, 0% ${TRIANGLE_PCT}%)`;

// Photo clip — matches the INNER white area (inset by BORDER on sides/bottom).
// Inner bookmark height = BOOKMARK_H - 2*BORDER = 209px.
// Triangle start from container top = OVERFLOW + BORDER + innerH * 80% = 230.2px.
// Photo wrapper height = TOTAL_H - BORDER = 272px.
// 230.2 / 272 = 84.632...% — exact same triangle angle as inner white area.
const innerH = BOOKMARK_H - 2 * BORDER;
const photoWrapperH = TOTAL_H - BORDER;
const photoTrianglePct = (OVERFLOW + BORDER + innerH * TRIANGLE_PCT / 100) / photoWrapperH * 100;
const photoClip = `polygon(0% 0%, 100% 0%, 100% ${photoTrianglePct}%, 50% 100%, 0% ${photoTrianglePct}%)`;

function BookmarkPhoto({ enabled }: { enabled: boolean }) {
  return (
    <PixelReveal enabled={enabled}>
      <div className="absolute bottom-0 right-12 translate-y-[35%] max-sm:right-4 z-10">
        <div className="relative w-[250px] max-sm:w-[190px]" style={{ height: TOTAL_H }}>
        {/* Shadow layer */}
        <div
          className="absolute bottom-[-4px] left-[4px] w-full bg-text"
          style={{ height: BOOKMARK_H, clipPath: bookmarkClip }}
        />
        {/* Border layer */}
        <div
          className="absolute bottom-0 left-0 w-full bg-text"
          style={{ height: BOOKMARK_H, clipPath: bookmarkClip }}
        >
          {/* White bg */}
          <div
            className="absolute inset-[3px] bg-card"
            style={{ clipPath: bookmarkClip }}
          />
        </div>
        {/* Photo — inset by BORDER on left/right/bottom, extends above at top */}
        <div
          className="absolute top-0 left-[3px] right-[3px] bottom-[3px]"
          style={{ clipPath: photoClip }}
        >
          <img
            src="/images/photoshoot_dulev.png"
            alt="Photo of Dulev"
            className="w-full h-full object-cover object-top"
          />
        </div>
        </div>
      </div>
    </PixelReveal>
  );
}

export function Hero() {
  const { intro } = siteContent;
  const [heroDone, setHeroDone] = useState(false);

  return (
    <div className="mb-14 relative">
      <PixelReveal onComplete={() => setHeroDone(true)}>
        <header className="bg-card border-[3px] border-text shadow-brutal p-9 pb-8 isolate max-sm:px-4.5 max-sm:py-7 max-sm:pb-6">
          <h1 className="font-mono font-bold text-[clamp(2.8rem,7.5vw,4.5rem)] text-text leading-[1.05] m-0 mb-6 -tracking-[1px] relative z-[1] underline decoration-dashed decoration-lime underline-offset-[8px] decoration-[6px]">
            {intro.name}
          </h1>

          <span className="font-mono font-bold text-[1.15rem] uppercase tracking-[2px] text-orange leading-[1.4] block mt-5 mb-7">
            {intro.tagline}
          </span>

          <p className="font-sans text-base text-muted max-w-[calc(100%-280px)] leading-[1.7] m-0 mb-7 max-sm:max-w-full">
            {intro.bio}
          </p>

          <div className="flex flex-wrap gap-3 max-sm:gap-2">
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.82rem] font-medium text-text no-underline py-2 px-5 border-[3px] border-text bg-lime shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.82rem] font-medium text-text no-underline py-2 px-5 border-[3px] border-text bg-orange shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
            <a
              href="/uses"
              className="font-mono text-[0.82rem] font-medium text-text no-underline py-2 px-5 border-[3px] border-text bg-card shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              /uses
            </a>
          </div>
        </header>
      </PixelReveal>
      <BookmarkPhoto enabled={heroDone} />
    </div>
  );
}
