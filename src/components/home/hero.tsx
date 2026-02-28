import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi";
import { ScanReveal } from "~/components/scan-reveal";
import {
  Button,
  buttonIconClass,
  ButtonExternalLinkIndicator,
} from "~/components/ui/button";
import { siteContent } from "~/data/content";

// Bookmark geometry
const BOOKMARK_H = 215;
const OVERFLOW = 60;
const TOTAL_H = BOOKMARK_H + OVERFLOW;
const TRIANGLE_PCT = 80;
const BORDER = 3;

const bookmarkClip = `polygon(0% 0%, 100% 0%, 100% ${TRIANGLE_PCT}%, 50% 100%, 0% ${TRIANGLE_PCT}%)`;

// Photo clip is inset by BORDER, so recompute the triangle % to keep the same angle.
const innerH = BOOKMARK_H - 2 * BORDER;
const photoWrapperH = TOTAL_H - BORDER;
const photoTrianglePct =
  ((OVERFLOW + BORDER + (innerH * TRIANGLE_PCT) / 100) / photoWrapperH) * 100;
const photoClip = `polygon(0% 0%, 100% 0%, 100% ${photoTrianglePct}%, 50% 100%, 0% ${photoTrianglePct}%)`;

const PHOTO_SRC = "/images/photoshoot_dulev.png";
const PHOTO_ALT = "Photo of Dimitar Dulev";

function BookmarkPhoto({ enabled }: { enabled: boolean }) {
  return (
    <ScanReveal enabled={enabled}>
      <div className="max-md:hidden absolute bottom-0 right-12 translate-y-[35%] z-10">
        <div className="relative w-[250px]" style={{ height: TOTAL_H }}>
          {/* Shadow */}
          <div
            className="absolute bottom-[-4px] left-[4px] w-full bg-text"
            style={{ height: BOOKMARK_H, clipPath: bookmarkClip }}
          />
          {/* Border + inner fill */}
          <div
            className="absolute bottom-0 left-0 w-full bg-text"
            style={{ height: BOOKMARK_H, clipPath: bookmarkClip }}
          >
            <div
              className="absolute inset-[3px] bg-border"
              style={{ clipPath: bookmarkClip }}
            />
          </div>
          {/* Photo, inset by BORDER */}
          <div
            className="absolute top-0 left-[3px] right-[3px] bottom-[3px]"
            style={{ clipPath: photoClip }}
          >
            <img
              src={PHOTO_SRC}
              alt={PHOTO_ALT}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </ScanReveal>
  );
}

function MobilePhoto() {
  return (
    <div className="md:hidden shrink-0 relative top-[10px] size-[100px] min-[400px]:size-[120px] min-[465px]:size-[140px] border-3 border-text shadow-brutal bg-border">
      <img
        src={PHOTO_SRC}
        alt={PHOTO_ALT}
        className="absolute top-[calc(-20px-6px)] w-full h-[120px] min-[400px]:h-[140px] min-[465px]:h-[160px] object-cover object-top"
      />
    </div>
  );
}

export function Hero() {
  const { intro } = siteContent;
  const [heroDone, setHeroDone] = useState(false);

  return (
    <div className="max-sm:mb-10 mb-28 relative">
      <ScanReveal onComplete={() => setHeroDone(true)}>
        <header className="bg-card border-3 border-text shadow-brutal p-9 pb-8 isolate max-sm:px-4.5 max-sm:py-7 max-sm:pb-6">
          <div className="max-md:flex max-md:justify-between max-md:gap-4 sm:gap-8 max-md:items-start">
            <div>
              <h1 className="font-mono font-bold text-[clamp(2.8rem,7.5vw,4.5rem)] text-text leading-[1.05] m-0 mb-6 -tracking-[1px] relative z-1 underline decoration-dashed decoration-lime underline-offset-8 decoration-[6px] max-sm:max-w-[200px]">
                {intro.name}
              </h1>

              <span className="font-mono font-bold text-[1.15rem] uppercase tracking-[2px] text-orange leading-[1.4] block mt-5 mb-7">
                {intro.tagline}
              </span>
            </div>
            <MobilePhoto />
          </div>

          <p className="font-sans text-base text-muted max-w-[calc(100%-280px)] leading-[1.7] m-0 mb-7 max-sm:max-w-full">
            {intro.bio}
          </p>

          <div className="flex flex-wrap gap-3 max-sm:gap-2">
            <Button variant="lime" size="lg" asChild>
              <Link to="/cv">CV</Link>
            </Button>
            <Button variant="orange" size="lg" asChild className="relative">
              <a href={intro.links.github} target="_blank" rel="noopener noreferrer">
                <ButtonExternalLinkIndicator />
                <PiGithubLogoFill className={buttonIconClass} />
                GitHub
              </a>
            </Button>
            <Button size="lg" asChild className="relative">
              <a href={intro.links.linkedin} target="_blank" rel="noopener noreferrer">
                <ButtonExternalLinkIndicator />
                <PiLinkedinLogoFill className={buttonIconClass} />
                LinkedIn
              </a>
            </Button>
          </div>
        </header>
      </ScanReveal>
      <BookmarkPhoto enabled={heroDone} />
    </div>
  );
}
