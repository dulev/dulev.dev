import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '{~}',
  running: '>>/',
  bike: '/|\\',
  mountains: '/^^\\',
  terminal: '>_#',
}

// Darkroom palette — only black, near-black, and red
const BLACK = '#0a0808'
const RED = '#cc2200'
const DARK_GRAY = '#1a1414'
const MID_GRAY = '#2a2020'
const LIGHT_GRAY = '#8a7070'
const TEXT = '#c4a0a0'
const TEXT_DIM = '#6a5050'

// Chemical formula annotations scattered throughout
const CHEMICAL_FORMULAS = [
  'AgBr → Ag + Br',
  'C₆H₄(OH)₂',
  'Na₂S₂O₃',
  'Fe₄[Fe(CN)₆]₃',
  'KBr (restrainer)',
  'pH 10.4',
  'D-76 1:1',
  '20°C / 8min',
  'Ag⁺ + e⁻ → Ag',
  'stop bath: CH₃COOH',
]

// Film strip perforation component
function FilmPerforations({ side }: { side: 'left' | 'right' }) {
  const count = 32
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        [side]: 0,
        width: '28px',
        height: '100vh',
        backgroundColor: '#0d0a0a',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        paddingTop: '12px',
        overflow: 'hidden',
        borderRight: side === 'left' ? `1px solid ${MID_GRAY}` : 'none',
        borderLeft: side === 'right' ? `1px solid ${MID_GRAY}` : 'none',
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            width: '14px',
            height: '10px',
            borderRadius: '2px',
            backgroundColor: 'transparent',
            border: `1px solid ${MID_GRAY}`,
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  )
}

export function Design16() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@300;400;500;600;700&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  // Intersection observer for staggered reveal
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.filter = 'blur(0px)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    const revealEls = root.querySelectorAll('.dr-reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .dr-root {
          font-family: 'Azeret Mono', 'Geist Mono', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${BLACK};
          color: ${TEXT};
          position: relative;
          overflow-x: hidden;
        }

        .dr-root * {
          box-sizing: border-box;
        }

        .dr-reveal {
          opacity: 0;
          filter: blur(4px);
          transition: opacity 2.4s ease-out, filter 2.8s ease-out;
        }

        .dr-reveal-fast {
          opacity: 0;
          filter: blur(3px);
          transition: opacity 1.6s ease-out, filter 2s ease-out;
        }

        .dr-heading {
          font-family: 'Azeret Mono', monospace;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          line-height: 1.15;
        }

        .dr-card {
          background-color: ${DARK_GRAY};
          border: 1px solid ${MID_GRAY};
          box-shadow: 0 0 20px rgba(204, 34, 0, 0.15);
          padding: 28px;
          position: relative;
          transition: box-shadow 0.6s ease, border-color 0.6s ease;
        }

        .dr-card:hover {
          box-shadow: 0 0 40px rgba(204, 34, 0, 0.3), 0 0 80px rgba(204, 34, 0, 0.08);
          border-color: ${RED};
        }

        .dr-link:hover {
          color: ${RED} !important;
          text-shadow: 0 0 12px rgba(204, 34, 0, 0.5);
        }

        .dr-tag {
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .dr-tag:hover {
          background-color: ${RED} !important;
          color: ${BLACK} !important;
        }

        .dr-interest {
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .dr-interest:hover {
          border-color: ${RED} !important;
          box-shadow: 0 0 20px rgba(204, 34, 0, 0.25) !important;
        }

        @keyframes drDevelop {
          0% { opacity: 0; filter: blur(8px) brightness(0.3); }
          40% { opacity: 0.4; filter: blur(3px) brightness(0.6); }
          100% { opacity: 1; filter: blur(0px) brightness(1); }
        }

        .dr-develop {
          animation: drDevelop 3.5s ease-out forwards;
        }

        @keyframes drSafelightPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }

        .dr-safelight {
          animation: drSafelightPulse 8s ease-in-out infinite;
        }

        @keyframes drChemicalFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.15; }
          50% { transform: translateY(-6px); opacity: 0.25; }
        }

        .dr-formula {
          animation: drChemicalFloat 6s ease-in-out infinite;
          font-size: 10px;
          color: ${TEXT_DIM};
          position: absolute;
          pointer-events: none;
          white-space: nowrap;
          font-family: 'Azeret Mono', monospace;
          letter-spacing: 1px;
        }

        @keyframes drFilmGrain {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
      `}</style>

      {/* Film strip perforations */}
      <FilmPerforations side="left" />
      <FilmPerforations side="right" />

      {/* Red safelight overlay */}
      <div
        className="dr-safelight"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: RED,
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 100,
          mixBlendMode: 'screen',
        }}
      />

      <div className="dr-root" ref={rootRef}>
        {/* Inner content wrapper — offset for film perforations */}
        <div style={{ marginLeft: '28px', marginRight: '28px' }}>

          {/* ===== NAVIGATION ===== */}
          <nav
            className="dr-develop"
            style={{
              padding: '24px 32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: `1px solid ${MID_GRAY}`,
            }}
          >
            <span
              style={{
                fontSize: '10px',
                color: TEXT_DIM,
                letterSpacing: '4px',
                textTransform: 'uppercase',
              }}
            >
              darkroom &mdash; design 16
            </span>
            <Link
              to="/"
              className="dr-link"
              style={{
                color: LIGHT_GRAY,
                textDecoration: 'none',
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '8px 16px',
                border: `1px solid ${MID_GRAY}`,
                transition: 'color 0.4s ease, border-color 0.4s ease',
              }}
            >
              &larr; home
            </Link>
          </nav>

          {/* ===== HERO / INTRO ===== */}
          <section
            style={{
              padding: '80px 32px 64px',
              position: 'relative',
              borderBottom: `1px solid ${MID_GRAY}`,
            }}
          >
            {/* Decorative chemical formula */}
            <span
              className="dr-formula"
              style={{
                top: '24px',
                right: '48px',
                animationDelay: '0s',
              }}
            >
              {CHEMICAL_FORMULAS[0]}
            </span>
            <span
              className="dr-formula"
              style={{
                bottom: '32px',
                left: '48px',
                animationDelay: '2s',
              }}
            >
              {CHEMICAL_FORMULAS[1]}
            </span>

            <div
              className="dr-reveal"
              style={{ transitionDelay: '0.2s' }}
            >
              <p
                style={{
                  fontSize: '10px',
                  color: RED,
                  letterSpacing: '6px',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                // exposing print...
              </p>
            </div>

            <h1
              className="dr-heading dr-reveal"
              style={{
                fontSize: 'clamp(36px, 7vw, 72px)',
                color: TEXT,
                marginBottom: '16px',
                transitionDelay: '0.5s',
              }}
            >
              {intro.name}
            </h1>

            <div
              className="dr-reveal"
              style={{
                transitionDelay: '0.9s',
                marginBottom: '24px',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(13px, 2vw, 18px)',
                  color: RED,
                  letterSpacing: '2px',
                  fontWeight: 500,
                }}
              >
                {intro.tagline}
              </p>
            </div>

            <div
              className="dr-reveal"
              style={{ transitionDelay: '1.3s' }}
            >
              <p
                style={{
                  fontSize: '14px',
                  color: LIGHT_GRAY,
                  maxWidth: '560px',
                  lineHeight: 2,
                  marginBottom: '40px',
                }}
              >
                {intro.bio}
              </p>
            </div>

            {/* Links */}
            <div
              className="dr-reveal"
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                transitionDelay: '1.7s',
              }}
            >
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="dr-link"
                style={{
                  color: TEXT,
                  textDecoration: 'none',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '10px 24px',
                  border: `1px solid ${MID_GRAY}`,
                  transition: 'color 0.4s ease, border-color 0.4s ease',
                }}
              >
                github
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="dr-link"
                style={{
                  color: TEXT,
                  textDecoration: 'none',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '10px 24px',
                  border: `1px solid ${MID_GRAY}`,
                  transition: 'color 0.4s ease, border-color 0.4s ease',
                }}
              >
                linkedin
              </a>
              <Link
                to={intro.links.uses}
                className="dr-link"
                style={{
                  color: RED,
                  textDecoration: 'none',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '10px 24px',
                  border: `1px solid ${RED}33`,
                  transition: 'color 0.4s ease, border-color 0.4s ease',
                }}
              >
                /uses
              </Link>
            </div>
          </section>

          {/* ===== CONTACT SHEET DIVIDER ===== */}
          <div
            style={{
              padding: '12px 32px',
              borderBottom: `1px solid ${MID_GRAY}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '9px',
                color: TEXT_DIM,
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}
            >
              contact sheet &mdash; {projects.length} frames
            </span>
            <span
              style={{
                fontSize: '9px',
                color: TEXT_DIM,
                letterSpacing: '1px',
              }}
            >
              {CHEMICAL_FORMULAS[6]} &bull; {CHEMICAL_FORMULAS[7]}
            </span>
          </div>

          {/* ===== PROJECTS — CONTACT SHEET GRID ===== */}
          <section
            style={{
              padding: '48px 32px',
              position: 'relative',
              borderBottom: `1px solid ${MID_GRAY}`,
            }}
          >
            {/* Floating formula */}
            <span
              className="dr-formula"
              style={{
                top: '20px',
                right: '40px',
                animationDelay: '1s',
              }}
            >
              {CHEMICAL_FORMULAS[2]}
            </span>

            <div
              className="dr-reveal"
              style={{ transitionDelay: '0.2s', marginBottom: '12px' }}
            >
              <h2
                className="dr-heading"
                style={{
                  fontSize: 'clamp(24px, 4vw, 40px)',
                  color: TEXT,
                  marginBottom: '4px',
                }}
              >
                Projects
              </h2>
              <div
                style={{
                  width: '60px',
                  height: '2px',
                  backgroundColor: RED,
                  marginBottom: '8px',
                }}
              />
              <p
                style={{
                  fontSize: '10px',
                  color: TEXT_DIM,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '40px',
                }}
              >
                // developing prints...
              </p>
            </div>

            {/* Contact sheet grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '24px',
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.name}
                  className="dr-card dr-reveal"
                  style={{
                    transitionDelay: `${0.4 + i * 0.5}s`,
                  }}
                >
                  {/* Contact sheet frame number */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-1px',
                      left: '-1px',
                      backgroundColor: MID_GRAY,
                      padding: '4px 12px',
                      borderRight: `1px solid ${MID_GRAY}`,
                      borderBottom: `1px solid ${MID_GRAY}`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '9px',
                        color: TEXT_DIM,
                        letterSpacing: '2px',
                      }}
                    >
                      FRAME {String(i + 1).padStart(2, '0')} / {CHEMICAL_FORMULAS[4 + i]}
                    </span>
                  </div>

                  {/* Frame crop marks — top-right */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      width: '12px',
                      height: '12px',
                      borderTop: `1px solid ${RED}33`,
                      borderRight: `1px solid ${RED}33`,
                    }}
                  />
                  {/* Frame crop marks — bottom-left */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '8px',
                      width: '12px',
                      height: '12px',
                      borderBottom: `1px solid ${RED}33`,
                      borderLeft: `1px solid ${RED}33`,
                    }}
                  />

                  <div style={{ marginTop: '24px' }}>
                    <h3
                      className="dr-heading"
                      style={{
                        fontSize: 'clamp(18px, 2.5vw, 24px)',
                        color: RED,
                        marginBottom: '14px',
                      }}
                    >
                      {project.name}
                    </h3>

                    <p
                      style={{
                        fontSize: '13px',
                        color: LIGHT_GRAY,
                        lineHeight: 1.9,
                        marginBottom: '20px',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '24px',
                      }}
                    >
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="dr-tag"
                          style={{
                            fontSize: '10px',
                            fontFamily: "'Azeret Mono', monospace",
                            fontWeight: 500,
                            color: TEXT_DIM,
                            backgroundColor: 'transparent',
                            border: `1px solid ${MID_GRAY}`,
                            padding: '4px 10px',
                            letterSpacing: '1px',
                            cursor: 'default',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Project links */}
                    <div
                      style={{
                        display: 'flex',
                        gap: '12px',
                        borderTop: `1px solid ${MID_GRAY}`,
                        paddingTop: '16px',
                      }}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dr-link"
                        style={{
                          color: RED,
                          textDecoration: 'none',
                          fontSize: '10px',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          padding: '6px 16px',
                          border: `1px solid ${RED}44`,
                          transition: 'all 0.4s ease',
                        }}
                      >
                        visit &rarr;
                      </a>
                      <Link
                        to={project.cvAnchor}
                        className="dr-link"
                        style={{
                          color: TEXT_DIM,
                          textDecoration: 'none',
                          fontSize: '10px',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          padding: '6px 16px',
                          border: `1px solid ${MID_GRAY}`,
                          transition: 'all 0.4s ease',
                        }}
                      >
                        cv entry
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact sheet edge markings */}
            <div
              style={{
                marginTop: '32px',
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
              }}
            >
              {['▸ KODAK TRI-X 400', '36 EXP', 'PUSH +1'].map((label) => (
                <span
                  key={label}
                  style={{
                    fontSize: '8px',
                    color: TEXT_DIM,
                    letterSpacing: '3px',
                    opacity: 0.6,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </section>

          {/* ===== CHEMICAL PROCESS DIVIDER ===== */}
          <div
            style={{
              padding: '20px 32px',
              borderBottom: `1px solid ${MID_GRAY}`,
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              flexWrap: 'wrap',
            }}
          >
            {['DEVELOP', 'STOP', 'FIX', 'WASH', 'DRY'].map(
              (step, i) => (
                <div
                  key={step}
                  className="dr-reveal"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transitionDelay: `${i * 0.15}s`,
                  }}
                >
                  <span
                    style={{
                      fontSize: '9px',
                      color: i === 0 ? RED : TEXT_DIM,
                      letterSpacing: '3px',
                      fontWeight: i === 0 ? 700 : 400,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      fontSize: '10px',
                      color: i === 0 ? RED : LIGHT_GRAY,
                      letterSpacing: '2px',
                    }}
                  >
                    {step}
                  </span>
                  {i < 4 && (
                    <span
                      style={{
                        fontSize: '10px',
                        color: MID_GRAY,
                        marginLeft: '16px',
                      }}
                    >
                      &rarr;
                    </span>
                  )}
                </div>
              ),
            )}
          </div>

          {/* ===== INTERESTS ===== */}
          <section
            style={{
              padding: '48px 32px',
              position: 'relative',
              borderBottom: `1px solid ${MID_GRAY}`,
            }}
          >
            {/* Floating formulas */}
            <span
              className="dr-formula"
              style={{
                top: '16px',
                left: '40px',
                animationDelay: '3s',
              }}
            >
              {CHEMICAL_FORMULAS[8]}
            </span>
            <span
              className="dr-formula"
              style={{
                bottom: '20px',
                right: '60px',
                animationDelay: '4.5s',
              }}
            >
              {CHEMICAL_FORMULAS[9]}
            </span>

            <div
              className="dr-reveal"
              style={{ transitionDelay: '0.2s', marginBottom: '12px' }}
            >
              <h2
                className="dr-heading"
                style={{
                  fontSize: 'clamp(24px, 4vw, 40px)',
                  color: TEXT,
                  marginBottom: '4px',
                }}
              >
                Interests
              </h2>
              <div
                style={{
                  width: '60px',
                  height: '2px',
                  backgroundColor: RED,
                  marginBottom: '8px',
                }}
              />
              <p
                style={{
                  fontSize: '10px',
                  color: TEXT_DIM,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '36px',
                }}
              >
                // personal exposure log
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
              }}
            >
              {personal.interests.map((interest, i) => (
                <div
                  key={interest.label}
                  className="dr-interest dr-reveal"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 24px',
                    border: `1px solid ${MID_GRAY}`,
                    backgroundColor: DARK_GRAY,
                    boxShadow: '0 0 12px rgba(204, 34, 0, 0.06)',
                    cursor: 'default',
                    transitionDelay: `${0.3 + i * 0.2}s`,
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: RED,
                      fontWeight: 600,
                      fontFamily: "'Azeret Mono', monospace",
                    }}
                  >
                    {interestIcons[interest.icon] || '***'}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: LIGHT_GRAY,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {interest.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ===== DARKROOM MANIFESTO ===== */}
          <section
            style={{
              padding: '56px 32px',
              borderBottom: `1px solid ${MID_GRAY}`,
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <div className="dr-reveal" style={{ transitionDelay: '0.3s' }}>
              <p
                style={{
                  fontSize: '10px',
                  color: RED,
                  letterSpacing: '6px',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                // developer notes
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '4px',
                  flexWrap: 'wrap',
                  marginBottom: '32px',
                }}
              >
                {['BUILD', 'SHIP', 'BREAK', 'LEARN'].map((word, i) => (
                  <span
                    key={word}
                    className="dr-reveal"
                    style={{
                      fontSize: 'clamp(20px, 3.5vw, 32px)',
                      fontWeight: 700,
                      letterSpacing: '4px',
                      color: i === 0 ? RED : TEXT_DIM,
                      padding: '8px 20px',
                      border: `1px solid ${i === 0 ? RED + '44' : MID_GRAY}`,
                      transitionDelay: `${0.5 + i * 0.3}s`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: '11px',
                  color: TEXT_DIM,
                  letterSpacing: '2px',
                  maxWidth: '480px',
                  margin: '0 auto',
                  lineHeight: 2,
                }}
              >
                like silver halide crystals reacting to light,
                <br />
                every project starts invisible and slowly reveals itself.
              </p>
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer
            style={{
              padding: '32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  color: TEXT_DIM,
                  letterSpacing: '3px',
                }}
              >
                {CHEMICAL_FORMULAS[3]}
              </span>
              <span
                style={{
                  fontSize: '10px',
                  color: MID_GRAY,
                }}
              >
                &bull;
              </span>
              <span
                style={{
                  fontSize: '10px',
                  color: TEXT_DIM,
                  letterSpacing: '2px',
                }}
              >
                {new Date().getFullYear()}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              {/* Tiny film strip decoration */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '6px',
                    height: '4px',
                    border: `1px solid ${MID_GRAY}`,
                    borderRadius: '1px',
                  }}
                />
              ))}
              <span
                style={{
                  fontSize: '9px',
                  color: RED,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginLeft: '4px',
                }}
              >
                darkroom
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
