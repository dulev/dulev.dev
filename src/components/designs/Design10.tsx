import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestEmojis: Record<string, string> = {
  guitar: '🎸',
  running: '🏃',
  bike: '🚵',
  mountains: '⛰️',
  terminal: '💻',
}

const toolLabels: Record<string, string> = {
  guitar: 'Fretwork',
  running: 'Endurance',
  bike: 'Trail Craft',
  mountains: 'Exploration',
  terminal: 'Digital Tools',
}

export function Design10() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .woodshop-page {
          font-family: 'Libre Baskerville', 'Georgia', serif;
          background-color: #f5e6d0;
          background-image:
            repeating-linear-gradient(
              90deg,
              rgba(180, 130, 80, 0.06) 0px,
              rgba(160, 110, 60, 0.03) 2px,
              rgba(200, 150, 100, 0.05) 4px,
              rgba(170, 120, 70, 0.02) 8px,
              rgba(190, 140, 90, 0.06) 12px,
              rgba(155, 105, 55, 0.03) 16px,
              transparent 18px,
              rgba(180, 130, 80, 0.04) 22px,
              rgba(165, 115, 65, 0.06) 26px,
              transparent 30px
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              rgba(140, 90, 40, 0.02) 80px,
              transparent 82px,
              transparent 160px
            ),
            radial-gradient(ellipse at 30% 20%, rgba(212, 165, 116, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(212, 165, 116, 0.2) 0%, transparent 40%);
          min-height: 100vh;
        }

        .font-serif-wood {
          font-family: 'Libre Baskerville', 'Georgia', serif;
        }

        .wood-plaque {
          background: linear-gradient(
            135deg,
            #8b6914 0%,
            #a07830 15%,
            #c4a265 30%,
            #b8934a 50%,
            #a07830 70%,
            #8b6914 85%,
            #7a5c10 100%
          );
          border: 3px solid #5c3d10;
          border-radius: 6px;
          box-shadow:
            inset 2px 2px 6px rgba(255, 220, 160, 0.25),
            inset -2px -2px 6px rgba(44, 24, 16, 0.3),
            4px 4px 12px rgba(44, 24, 16, 0.35),
            1px 1px 3px rgba(44, 24, 16, 0.2);
          position: relative;
        }

        .wood-card {
          background: linear-gradient(
            160deg,
            #d4a574 0%,
            #c99a68 20%,
            #be8f5c 40%,
            #c99a68 60%,
            #d4a574 80%,
            #dab080 100%
          );
          border: 2px solid #8b6914;
          border-radius: 4px;
          box-shadow:
            inset 1px 1px 4px rgba(255, 220, 160, 0.2),
            inset -1px -1px 4px rgba(44, 24, 16, 0.15),
            3px 3px 8px rgba(44, 24, 16, 0.25),
            1px 1px 2px rgba(44, 24, 16, 0.15);
        }

        .rope-border {
          border: 3px dashed #8b6914;
          border-radius: 10px;
          padding: 3px;
          box-shadow:
            inset 0 0 0 1px rgba(139, 105, 20, 0.15),
            0 0 0 1px rgba(139, 105, 20, 0.1);
        }

        .nail-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 35% 35%,
            #c0c0c0 0%,
            #808080 40%,
            #505050 70%,
            #303030 100%
          );
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.4),
            inset 0 -1px 1px rgba(0, 0, 0, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.2);
          position: absolute;
        }

        .screw-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 40% 40%,
            #d4d4d4 0%,
            #a0a0a0 30%,
            #707070 60%,
            #404040 100%
          );
          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.5),
            inset 0 -1px 1px rgba(0, 0, 0, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.3);
          position: absolute;
        }

        .screw-dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 25%;
          right: 25%;
          height: 1.5px;
          background: rgba(0, 0, 0, 0.4);
          transform: translateY(-50%) rotate(45deg);
          border-radius: 1px;
        }

        .workbench-footer {
          background: linear-gradient(
            180deg,
            #5c3d10 0%,
            #4a3010 30%,
            #3d2508 60%,
            #2c1810 100%
          );
          border-top: 4px solid #8b6914;
          box-shadow:
            inset 0 2px 6px rgba(255, 220, 160, 0.1),
            0 -4px 16px rgba(44, 24, 16, 0.3);
        }

        .workshop-sign {
          background: linear-gradient(
            180deg,
            #e8d5b8 0%,
            #f5e6d0 50%,
            #e8d5b8 100%
          );
          border: 2px solid #8b6914;
          border-radius: 2px;
          box-shadow:
            inset 0 1px 3px rgba(255, 255, 255, 0.5),
            inset 0 -1px 3px rgba(44, 24, 16, 0.1),
            2px 3px 6px rgba(44, 24, 16, 0.2);
        }

        .nailed-header {
          background: linear-gradient(
            90deg,
            #5c3d10 0%,
            #7a5c10 50%,
            #5c3d10 100%
          );
          color: #f5e6d0;
          padding: 6px 16px;
          border-radius: 2px;
          position: relative;
          box-shadow:
            inset 0 1px 2px rgba(255, 220, 160, 0.15),
            inset 0 -1px 2px rgba(0, 0, 0, 0.3),
            0 2px 4px rgba(44, 24, 16, 0.3);
        }

        .tool-label {
          background: linear-gradient(
            135deg,
            #e8d5b8 0%,
            #f0dfc8 50%,
            #e8d5b8 100%
          );
          border: 1.5px solid #a07830;
          border-radius: 3px;
          box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.3),
            1px 2px 4px rgba(44, 24, 16, 0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .tool-label:hover {
          transform: translateY(-2px);
          box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.3),
            2px 4px 8px rgba(44, 24, 16, 0.2);
        }

        @keyframes sawdustFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-6px) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes warmGlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        .sawdust-particle {
          animation: sawdustFloat 4s ease-in-out infinite;
        }

        .warm-glow {
          animation: warmGlow 3s ease-in-out infinite;
        }
      `}</style>

      <div className="woodshop-page relative">
        {/* Sawdust floating particles decoration */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="sawdust-particle absolute rounded-full"
              style={{
                width: `${3 + (i % 3)}px`,
                height: `${3 + (i % 3)}px`,
                backgroundColor: `rgba(212, 165, 116, ${0.2 + (i % 4) * 0.05})`,
                left: `${10 + i * 12}%`,
                top: `${15 + (i * 17) % 70}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-8 sm:px-8">
          {/* ========== TOP NAVIGATION BAR ========== */}
          <nav className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="text-2xl"
                role="img"
                aria-label="woodworking"
              >
                🪵
              </span>
              <span
                className="font-serif-wood text-sm italic tracking-wide"
                style={{ color: '#5c3d10' }}
              >
                A Craftsman's Workshop
              </span>
            </div>
            <Link
              to="/"
              className="font-serif-wood workshop-sign px-4 py-2 text-sm transition-all hover:shadow-md"
              style={{ color: '#2c1810' }}
            >
              &larr; Return Home
            </Link>
          </nav>

          {/* ========== MAIN WORKSHOP SIGN (Header) ========== */}
          <header className="mb-12">
            <div className="wood-plaque relative mx-auto max-w-2xl px-8 py-8 text-center sm:px-12 sm:py-10">
              {/* Corner screws */}
              <div className="screw-dot" style={{ top: 8, left: 8 }} />
              <div className="screw-dot" style={{ top: 8, right: 8 }} />
              <div className="screw-dot" style={{ bottom: 8, left: 8 }} />
              <div className="screw-dot" style={{ bottom: 8, right: 8 }} />

              {/* Name engraved */}
              <h1
                className="font-serif-wood mb-2 text-3xl font-bold tracking-wide sm:text-4xl"
                style={{
                  color: '#f5e6d0',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.4), -1px -1px 1px rgba(255,220,160,0.15)',
                }}
              >
                {intro.name}
              </h1>

              {/* Tagline */}
              <p
                className="font-serif-wood mb-4 text-base italic sm:text-lg"
                style={{
                  color: '#e8d5b8',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                {intro.tagline}
              </p>

              {/* Decorative rule */}
              <div
                className="mx-auto mb-4 h-px w-32"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(245, 230, 208, 0.4), transparent)',
                }}
              />

              {/* Bio */}
              <p
                className="font-serif-wood mx-auto max-w-md text-sm leading-relaxed"
                style={{ color: '#d4b896' }}
              >
                {intro.bio}
              </p>
            </div>
          </header>

          {/* ========== LINKS SECTION ========== */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {[
              {
                label: 'GitHub',
                icon: '🔨',
                href: intro.links.github,
                external: true,
              },
              {
                label: 'LinkedIn',
                icon: '🪚',
                href: intro.links.linkedin,
                external: true,
              },
              {
                label: '/uses',
                icon: '🔧',
                href: intro.links.uses,
                external: false,
              },
            ].map((link) => {
              const className =
                'font-serif-wood tool-label flex items-center gap-2 px-5 py-2.5 text-sm cursor-pointer'
              const style = { color: '#2c1810' }
              const content = (
                <>
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </>
              )

              return link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  style={style}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={className}
                  style={style}
                >
                  {content}
                </Link>
              )
            })}
          </div>

          {/* ========== ROPE DIVIDER ========== */}
          <div className="mb-10 flex items-center gap-4 px-4">
            <div
              className="h-0 flex-1"
              style={{
                borderTop: '3px dashed #a07830',
                opacity: 0.5,
              }}
            />
            <span
              className="font-serif-wood text-sm font-bold uppercase tracking-widest"
              style={{ color: '#8b6914' }}
            >
              Workshop Projects
            </span>
            <div
              className="h-0 flex-1"
              style={{
                borderTop: '3px dashed #a07830',
                opacity: 0.5,
              }}
            />
          </div>

          {/* ========== PROJECTS SECTION ========== */}
          <section className="mb-14">
            <div className="grid gap-8 sm:grid-cols-2">
              {projects.map((project, i) => (
                <div key={project.name} className="wood-card relative p-0 overflow-hidden">
                  {/* Corner nails */}
                  <div className="nail-dot" style={{ top: 6, left: 6 }} />
                  <div className="nail-dot" style={{ top: 6, right: 6 }} />
                  <div className="nail-dot" style={{ bottom: 6, left: 6 }} />
                  <div className="nail-dot" style={{ bottom: 6, right: 6 }} />

                  {/* Nailed header bar */}
                  <div className="nailed-header">
                    <div
                      className="nail-dot"
                      style={{ top: '50%', left: 8, transform: 'translateY(-50%)' }}
                    />
                    <div
                      className="nail-dot"
                      style={{ top: '50%', right: 8, transform: 'translateY(-50%)' }}
                    />
                    <h3
                      className="font-serif-wood text-center text-lg font-bold tracking-wide"
                      style={{ color: '#f5e6d0' }}
                    >
                      {project.name}
                    </h3>
                  </div>

                  {/* Card body */}
                  <div className="px-5 pb-5 pt-4">
                    <p
                      className="font-serif-wood mb-4 text-sm leading-relaxed"
                      style={{ color: '#2c1810' }}
                    >
                      {project.description}
                    </p>

                    {/* Tech stack as workshop material tags */}
                    <div className="rope-border mb-4 p-3">
                      <p
                        className="font-serif-wood mb-2 text-xs font-bold uppercase tracking-wider"
                        style={{ color: '#5c3d10' }}
                      >
                        Materials &amp; Tools
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-serif-wood inline-block rounded-sm px-2 py-0.5 text-xs"
                            style={{
                              backgroundColor: 'rgba(245, 230, 208, 0.6)',
                              color: '#5c3d10',
                              border: '1px solid rgba(139, 105, 20, 0.3)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif-wood text-sm font-bold underline decoration-wavy underline-offset-4 transition-colors"
                        style={{
                          color: '#5c3d10',
                          textDecorationColor: 'rgba(92, 61, 16, 0.3)',
                        }}
                      >
                        View Project &rarr;
                      </a>
                      <Link
                        to={project.cvAnchor}
                        className="font-serif-wood text-sm italic underline underline-offset-4 transition-colors"
                        style={{
                          color: '#8b6914',
                          textDecorationColor: 'rgba(139, 105, 20, 0.3)',
                        }}
                      >
                        CV Entry
                      </Link>
                    </div>
                  </div>

                  {/* Woodgrain overlay */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(92, 61, 16, 0.03) 14px, rgba(92, 61, 16, 0.03) 16px)',
                    }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ========== ROPE DIVIDER ========== */}
          <div className="mb-10 flex items-center gap-4 px-4">
            <div
              className="h-0 flex-1"
              style={{
                borderTop: '3px dashed #a07830',
                opacity: 0.5,
              }}
            />
            <span
              className="font-serif-wood text-sm font-bold uppercase tracking-widest"
              style={{ color: '#8b6914' }}
            >
              Off the Clock
            </span>
            <div
              className="h-0 flex-1"
              style={{
                borderTop: '3px dashed #a07830',
                opacity: 0.5,
              }}
            />
          </div>

          {/* ========== INTERESTS SECTION ========== */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-5">
              {personal.interests.map((interest, i) => (
                <div
                  key={interest.label}
                  className="tool-label relative cursor-default px-6 py-4 text-center"
                  style={{ minWidth: 120 }}
                >
                  {/* Small nail at top center */}
                  <div
                    className="nail-dot"
                    style={{
                      top: -4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />

                  <span className="mb-2 block text-2xl">
                    {interestEmojis[interest.icon] || '✨'}
                  </span>
                  <span
                    className="font-serif-wood block text-sm font-bold"
                    style={{ color: '#2c1810' }}
                  >
                    {interest.label}
                  </span>
                  <span
                    className="font-serif-wood mt-1 block text-xs italic"
                    style={{ color: '#8b6914' }}
                  >
                    {toolLabels[interest.icon] || 'Craft'}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ========== WARM GLOW DECORATION ========== */}
          <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-0">
            <div
              className="warm-glow mx-auto h-32 w-full max-w-4xl"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 100%, rgba(212, 165, 116, 0.15) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>

        {/* ========== FOOTER - Workbench Bottom Bar ========== */}
        <footer className="workbench-footer relative z-10 px-4 py-8 text-center">
          {/* Decorative screws in footer */}
          <div className="mx-auto max-w-4xl">
            <div className="relative inline-block">
              <div
                className="screw-dot"
                style={{ top: -4, left: -24 }}
              />
              <div
                className="screw-dot"
                style={{ top: -4, right: -24 }}
              />
              <p
                className="font-serif-wood text-sm tracking-wide"
                style={{ color: '#d4a574' }}
              >
                Handcrafted with care
              </p>
            </div>
            <p
              className="font-serif-wood mt-2 text-xs italic"
              style={{ color: '#8b6914' }}
            >
              &copy; {new Date().getFullYear()} &middot; Built in the workshop
            </p>

            {/* Decorative rope line */}
            <div
              className="mx-auto mt-4 h-0 w-48"
              style={{
                borderTop: '2px dashed rgba(212, 165, 116, 0.3)',
              }}
            />
          </div>
        </footer>
      </div>
    </>
  )
}
