import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '\u266b',
  running: '\u21f6',
  bike: '\u0394',
  mountains: '/\\',
  terminal: '>_',
}

export function Design8() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent
  const revisionDate = new Date().toISOString().split('T')[0]

  return (
    <>
      <style>{`
        .blueprint-page {
          font-family: 'Fira Code', 'Courier New', monospace;
          background-color: #1a2744;
          cursor: crosshair;
          position: relative;
          overflow-x: hidden;
        }

        .blueprint-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 19px,
              rgba(79, 195, 247, 0.06) 19px,
              rgba(79, 195, 247, 0.06) 20px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 19px,
              rgba(79, 195, 247, 0.06) 19px,
              rgba(79, 195, 247, 0.06) 20px
            );
          pointer-events: none;
          z-index: 0;
        }

        .blueprint-page::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 99px,
              rgba(79, 195, 247, 0.12) 99px,
              rgba(79, 195, 247, 0.12) 100px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 99px,
              rgba(79, 195, 247, 0.12) 99px,
              rgba(79, 195, 247, 0.12) 100px
            );
          pointer-events: none;
          z-index: 0;
        }

        .bp-text {
          font-family: 'Fira Code', 'Courier New', monospace;
          color: #e8edf3;
        }

        .bp-cyan {
          color: #4fc3f7;
        }

        .bp-dim {
          color: rgba(232, 237, 243, 0.35);
        }

        .bp-border {
          border-color: rgba(79, 195, 247, 0.4);
        }

        .bp-border-bright {
          border-color: rgba(79, 195, 247, 0.7);
        }

        .schematic-card {
          position: relative;
          border: 1px solid rgba(79, 195, 247, 0.35);
          background: rgba(26, 39, 68, 0.6);
          backdrop-filter: blur(4px);
        }

        .schematic-card::before,
        .schematic-card::after,
        .schematic-card .corner-bl::before,
        .schematic-card .corner-br::before {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: #4fc3f7;
          border-style: solid;
        }

        .schematic-card::before {
          top: -1px;
          left: -1px;
          border-width: 2px 0 0 2px;
        }

        .schematic-card::after {
          top: -1px;
          right: -1px;
          border-width: 2px 2px 0 0;
        }

        .schematic-card .corner-bl::before {
          bottom: -1px;
          left: -1px;
          border-width: 0 0 2px 2px;
        }

        .schematic-card .corner-br::before {
          bottom: -1px;
          right: -1px;
          border-width: 0 2px 2px 0;
        }

        .dimension-label {
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 9px;
          color: rgba(79, 195, 247, 0.45);
          letter-spacing: 0.05em;
        }

        .connection-line {
          position: relative;
        }

        .connection-line::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -20px;
          width: 1px;
          height: 20px;
          background: repeating-linear-gradient(
            180deg,
            rgba(79, 195, 247, 0.3) 0px,
            rgba(79, 195, 247, 0.3) 4px,
            transparent 4px,
            transparent 8px
          );
        }

        .crosshair-marker {
          position: relative;
        }

        .crosshair-marker::before,
        .crosshair-marker::after {
          content: '';
          position: absolute;
          background: rgba(79, 195, 247, 0.3);
        }

        .crosshair-marker::before {
          width: 1px;
          height: 16px;
          left: 50%;
          top: -20px;
        }

        .crosshair-marker::after {
          width: 16px;
          height: 1px;
          left: calc(50% - 8px);
          top: -12px;
        }

        .title-block {
          border: 1px solid rgba(79, 195, 247, 0.5);
        }

        .title-block-inner {
          border-right: 1px solid rgba(79, 195, 247, 0.3);
        }

        .annotation-arrow {
          position: relative;
        }

        .annotation-arrow::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -24px;
          width: 20px;
          height: 1px;
          background: rgba(79, 195, 247, 0.3);
        }

        .annotation-arrow::after {
          content: '';
          position: absolute;
          top: calc(50% - 3px);
          left: -8px;
          width: 0;
          height: 0;
          border-top: 3px solid transparent;
          border-bottom: 3px solid transparent;
          border-left: 6px solid rgba(79, 195, 247, 0.3);
        }

        @keyframes blueprintDraw {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .bp-fade-in {
          animation: blueprintDraw 0.6s ease-out both;
        }

        .bp-scanline {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(79, 195, 247, 0.08) 20%,
            rgba(79, 195, 247, 0.15) 50%,
            rgba(79, 195, 247, 0.08) 80%,
            transparent 100%
          );
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 50;
        }

        .section-connector {
          position: relative;
        }

        .section-connector::after {
          content: '';
          display: block;
          width: 1px;
          height: 32px;
          margin: 0 auto;
          background: repeating-linear-gradient(
            180deg,
            rgba(79, 195, 247, 0.25) 0px,
            rgba(79, 195, 247, 0.25) 4px,
            transparent 4px,
            transparent 8px
          );
        }

        .ref-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid rgba(79, 195, 247, 0.5);
          font-size: 10px;
          color: #4fc3f7;
          flex-shrink: 0;
        }
      `}</style>

      <div className="blueprint-page relative min-h-screen">
        {/* Scanline effect */}
        <div className="bp-scanline" />

        {/* Border frame around entire page */}
        <div className="pointer-events-none fixed inset-3 z-40 border border-[rgba(79,195,247,0.15)]" />
        <div className="pointer-events-none fixed inset-5 z-40 border border-[rgba(79,195,247,0.08)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 sm:px-10">
          {/* ========== NAVIGATION BAR ========== */}
          <nav
            className="bp-fade-in mb-6 flex items-center justify-between"
            style={{ animationDelay: '0s' }}
          >
            <div className="flex items-center gap-3">
              <span className="bp-dim text-xs">SHEET 08 OF 12</span>
              <span className="bp-dim text-xs">|</span>
              <span className="bp-dim text-xs">REV. C</span>
            </div>
            <Link
              to="/"
              className="bp-text group flex items-center gap-2 border border-[rgba(79,195,247,0.25)] px-4 py-1.5 text-xs tracking-wider transition-all hover:border-[rgba(79,195,247,0.6)] hover:bg-[rgba(79,195,247,0.05)]"
            >
              <span className="bp-cyan transition-transform group-hover:-translate-x-0.5">
                &lt;--
              </span>
              <span>RETURN HOME</span>
            </Link>
          </nav>

          {/* Horizontal rule with annotation */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[rgba(79,195,247,0.2)]" />
            <span className="dimension-label">SCALE: 1:1 | UNITS: px</span>
            <div className="h-px flex-1 bg-[rgba(79,195,247,0.2)]" />
          </div>

          {/* ========== INTRO / HEADER SECTION ========== */}
          <section
            className="bp-fade-in section-connector mb-6"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="schematic-card p-6 sm:p-8">
              <div className="corner-bl" />
              <div className="corner-br" />

              {/* Dimension annotation */}
              <div className="dimension-label absolute -top-5 left-0">
                SEC-01: IDENTIFICATION
              </div>
              <div className="dimension-label absolute -right-2 top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap">
                h: auto
              </div>

              {/* Section reference marker */}
              <div className="mb-4 flex items-center gap-3">
                <span className="ref-circle">A</span>
                <span className="bp-dim text-xs tracking-widest">
                  PRIMARY SUBJECT DATA
                </span>
              </div>

              {/* Name */}
              <h1 className="bp-text mb-2 text-3xl font-light tracking-wide sm:text-4xl">
                {intro.name}
              </h1>

              {/* Tagline */}
              <p className="bp-cyan mb-4 text-sm tracking-wider">
                // {intro.tagline}
              </p>

              {/* Bio */}
              <p className="bp-text mb-6 max-w-2xl text-xs leading-relaxed opacity-60">
                {intro.bio}
              </p>

              {/* Links as schematic references */}
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    label: 'GITHUB',
                    href: intro.links.github,
                    external: true,
                    ref: '01',
                  },
                  {
                    label: 'LINKEDIN',
                    href: intro.links.linkedin,
                    external: true,
                    ref: '02',
                  },
                  {
                    label: '/USES',
                    href: intro.links.uses,
                    external: false,
                    ref: '03',
                  },
                ].map((link) => {
                  const className =
                    'bp-text flex items-center gap-2 border border-[rgba(79,195,247,0.2)] px-3 py-1.5 text-xs tracking-wider transition-all hover:border-[rgba(79,195,247,0.6)] hover:bg-[rgba(79,195,247,0.05)] hover:text-[#4fc3f7]'
                  return link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      <span className="bp-cyan text-[10px] opacity-60">
                        [{link.ref}]
                      </span>
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={className}
                    >
                      <span className="bp-cyan text-[10px] opacity-60">
                        [{link.ref}]
                      </span>
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ========== PROJECTS SECTION ========== */}
          <section
            className="bp-fade-in section-connector mb-6"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Section header */}
            <div className="mb-6 flex items-center gap-3">
              <span className="ref-circle">B</span>
              <span className="bp-dim text-xs tracking-widest">
                PROJECT SCHEMATICS
              </span>
              <div className="h-px flex-1 bg-[rgba(79,195,247,0.15)]" />
              <span className="dimension-label">
                QTY: {projects.length} UNITS
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, i) => (
                <div
                  key={project.name}
                  className="bp-fade-in"
                  style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                >
                  <div className="schematic-card p-5 transition-all duration-300 hover:border-[rgba(79,195,247,0.6)] hover:bg-[rgba(79,195,247,0.03)]">
                    <div className="corner-bl" />
                    <div className="corner-br" />

                    {/* Dimension annotation */}
                    <div className="dimension-label absolute -top-5 left-0">
                      COMPONENT B-{i + 1}
                    </div>
                    <div className="dimension-label absolute -bottom-5 right-0">
                      w: 420 h: auto
                    </div>

                    {/* Project header */}
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h3 className="bp-text text-lg font-medium tracking-wide">
                          {project.name}
                        </h3>
                        <div className="bp-cyan mt-0.5 text-[10px] tracking-widest opacity-50">
                          MODULE {String(i + 1).padStart(3, '0')}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="bp-dim text-[10px]">STATUS</span>
                        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          ACTIVE
                        </span>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="mb-3 h-px bg-[rgba(79,195,247,0.15)]" />

                    {/* Description */}
                    <p className="bp-text mb-4 text-xs leading-relaxed opacity-55">
                      {project.description}
                    </p>

                    {/* Tech specs - looks like a BOM (bill of materials) */}
                    <div className="mb-4">
                      <div className="bp-dim mb-2 text-[10px] tracking-widest">
                        BILL OF MATERIALS:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, ti) => (
                          <span
                            key={t}
                            className="border border-[rgba(79,195,247,0.2)] px-2 py-0.5 text-[10px] tracking-wider text-[#4fc3f7] transition-colors hover:border-[rgba(79,195,247,0.5)] hover:bg-[rgba(79,195,247,0.05)]"
                          >
                            <span className="opacity-40">
                              {String(ti + 1).padStart(2, '0')}.
                            </span>{' '}
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="mb-3 h-px bg-[rgba(79,195,247,0.1)]" />

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bp-cyan text-xs tracking-wider underline decoration-[rgba(79,195,247,0.3)] underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                      >
                        INSPECT --&gt;
                      </a>
                      <Link
                        to={project.cvAnchor}
                        className="bp-text text-xs tracking-wider opacity-40 underline decoration-[rgba(232,237,243,0.2)] underline-offset-4 transition-colors hover:opacity-80"
                      >
                        CV REF
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========== INTERESTS / SPEC TABLE ========== */}
          <section
            className="bp-fade-in section-connector mb-6"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="ref-circle">C</span>
              <span className="bp-dim text-xs tracking-widest">
                OPERATOR SPECIFICATIONS
              </span>
              <div className="h-px flex-1 bg-[rgba(79,195,247,0.15)]" />
            </div>

            <div className="schematic-card p-5">
              <div className="corner-bl" />
              <div className="corner-br" />

              <div className="dimension-label absolute -top-5 left-0">
                SEC-03: PERSONAL METADATA
              </div>

              {/* Table header */}
              <div className="mb-3 grid grid-cols-[40px_1fr_100px_80px] gap-2 border-b border-[rgba(79,195,247,0.2)] pb-2">
                <span className="bp-dim text-[10px] tracking-widest">
                  IDX
                </span>
                <span className="bp-dim text-[10px] tracking-widest">
                  DESIGNATION
                </span>
                <span className="bp-dim text-[10px] tracking-widest">
                  SYMBOL
                </span>
                <span className="bp-dim text-[10px] tracking-widest">
                  STATUS
                </span>
              </div>

              {/* Table rows */}
              {personal.interests.map((interest, i) => (
                <div
                  key={interest.label}
                  className="grid grid-cols-[40px_1fr_100px_80px] gap-2 border-b border-[rgba(79,195,247,0.06)] py-2 transition-colors hover:bg-[rgba(79,195,247,0.03)]"
                >
                  <span className="bp-cyan text-xs opacity-40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="bp-text text-xs tracking-wider">
                    {interest.label}
                  </span>
                  <span className="bp-cyan text-xs font-medium">
                    {interestIcons[interest.icon] || '*'}
                  </span>
                  <span className="text-[10px] text-emerald-400/60">
                    NOMINAL
                  </span>
                </div>
              ))}

              <div className="dimension-label mt-3 text-right">
                RECORDS: {personal.interests.length} | UPDATED: {revisionDate}
              </div>
            </div>
          </section>

          {/* ========== NOTES & ANNOTATIONS SECTION ========== */}
          <section
            className="bp-fade-in mb-10"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="ref-circle">D</span>
              <span className="bp-dim text-xs tracking-widest">
                GENERAL NOTES
              </span>
              <div className="h-px flex-1 bg-[rgba(79,195,247,0.15)]" />
            </div>

            <div className="bp-text space-y-2 pl-4 text-xs leading-relaxed opacity-40">
              <p>
                1. ALL DIMENSIONS IN PIXELS UNLESS OTHERWISE NOTED.
              </p>
              <p>
                2. VIEWPORT IS RESPONSIVE. BREAKPOINTS AT 640px, 768px, 1024px.
              </p>
              <p>
                3. COLOR SYSTEM: PRIMARY #4FC3F7, BACKGROUND #1A2744, TEXT
                #E8EDF3.
              </p>
              <p>
                4. TYPOGRAPHY: FIRA CODE, WEIGHTS 300-700.
              </p>
              <p>
                5. THIS DOCUMENT IS FOR REFERENCE ONLY. DO NOT SCALE.
              </p>
            </div>
          </section>

          {/* ========== TITLE BLOCK (bottom-right, typical blueprint) ========== */}
          <div
            className="bp-fade-in mb-8 flex justify-end"
            style={{ animationDelay: '0.9s' }}
          >
            <div className="title-block w-full max-w-md">
              {/* Top row */}
              <div className="grid grid-cols-3">
                <div className="title-block-inner p-2">
                  <div className="bp-dim text-[8px] tracking-widest">
                    DRAWN BY
                  </div>
                  <div className="bp-text mt-0.5 text-[10px]">
                    {intro.name.toUpperCase()}
                  </div>
                </div>
                <div className="title-block-inner p-2">
                  <div className="bp-dim text-[8px] tracking-widest">
                    CHECKED
                  </div>
                  <div className="bp-text mt-0.5 text-[10px]">---</div>
                </div>
                <div className="p-2">
                  <div className="bp-dim text-[8px] tracking-widest">DATE</div>
                  <div className="bp-text mt-0.5 text-[10px]">
                    {revisionDate}
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-[rgba(79,195,247,0.3)]" />

              {/* Middle row - title */}
              <div className="p-3">
                <div className="bp-dim text-[8px] tracking-widest">TITLE</div>
                <div className="bp-text mt-1 text-sm tracking-wider">
                  PERSONAL HOMEPAGE — BLUEPRINT VARIANT
                </div>
                <div className="bp-cyan mt-0.5 text-[10px] tracking-wider opacity-50">
                  {intro.tagline}
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-[rgba(79,195,247,0.3)]" />

              {/* Bottom row */}
              <div className="grid grid-cols-3">
                <div className="title-block-inner p-2">
                  <div className="bp-dim text-[8px] tracking-widest">
                    SCALE
                  </div>
                  <div className="bp-text mt-0.5 text-[10px]">1:1</div>
                </div>
                <div className="title-block-inner p-2">
                  <div className="bp-dim text-[8px] tracking-widest">
                    SHEET
                  </div>
                  <div className="bp-text mt-0.5 text-[10px]">08 / 12</div>
                </div>
                <div className="p-2">
                  <div className="bp-dim text-[8px] tracking-widest">REV</div>
                  <div className="bp-text mt-0.5 text-[10px]">C</div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== FOOTER ========== */}
          <footer
            className="bp-fade-in border-t border-[rgba(79,195,247,0.1)] pt-6"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center justify-between">
              <span className="bp-dim text-[10px] tracking-widest">
                CONFIDENTIAL — FOR REFERENCE ONLY
              </span>
              <span className="bp-dim text-[10px] tracking-widest">
                {new Date().getFullYear()} / {intro.name.toUpperCase()}
              </span>
            </div>

            {/* Coordinate markers at bottom */}
            <div className="mt-4 flex justify-between">
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((letter) => (
                <div key={letter} className="flex flex-col items-center gap-1">
                  <div className="h-2 w-px bg-[rgba(79,195,247,0.2)]" />
                  <span className="bp-dim text-[8px]">{letter}</span>
                </div>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
