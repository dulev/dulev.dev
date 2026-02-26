import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '///~',
  running: '>>!',
  bike: '/\\/',
  mountains: '^^^',
  terminal: '>_$',
}

// Hot Dog Stand palette
const RED = '#FF0000'
const YELLOW = '#FFD700'
const LIME = '#00FF00'
const CYAN = '#00FFFF'
const MAGENTA = '#FF00FF'
const BLACK = '#000000'
const WHITE = '#FFFFFF'

// Cycling neon colors for variety
const NEON_CYCLE = [RED, YELLOW, LIME, CYAN, MAGENTA]

// Per-card color schemes: [bg, border, shadow, text]
const CARD_SCHEMES = [
  { bg: RED, border: YELLOW, shadow: LIME, text: WHITE, accent: CYAN },
  { bg: YELLOW, border: MAGENTA, shadow: RED, text: BLACK, accent: LIME },
  { bg: LIME, border: RED, shadow: MAGENTA, text: BLACK, accent: YELLOW },
  { bg: CYAN, border: MAGENTA, shadow: YELLOW, text: BLACK, accent: RED },
  { bg: MAGENTA, border: LIME, shadow: CYAN, text: WHITE, accent: YELLOW },
]

// Section backgrounds alternate through garish colors
const SECTION_BG = [RED, YELLOW, LIME, MAGENTA, CYAN]

export function Design15() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Inconsolata:wght@400;600;700;800;900&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .hds-root {
          font-family: 'Inconsolata', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${RED};
          color: ${WHITE};
        }

        .hds-root * {
          border-radius: 0 !important;
          box-sizing: border-box;
        }

        .hds-heading {
          font-family: 'Rubik Mono One', monospace;
          text-transform: uppercase;
          line-height: 1.1;
          letter-spacing: 2px;
        }

        /* Hover: instant color swap, no transition */
        .hds-card:hover {
          filter: invert(1);
        }

        .hds-link-ext:hover {
          background-color: ${MAGENTA};
          color: ${YELLOW} !important;
        }

        .hds-link-int:hover {
          background-color: ${LIME};
          color: ${BLACK} !important;
        }

        .hds-nav-link:hover {
          background-color: ${YELLOW};
          color: ${RED} !important;
        }

        .hds-tag:hover {
          background-color: ${BLACK} !important;
          color: ${LIME} !important;
        }

        .hds-interest:hover {
          background-color: ${BLACK} !important;
          color: ${MAGENTA} !important;
          border-color: ${MAGENTA} !important;
        }

        @keyframes hdsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .hds-marquee {
          animation: hdsMarquee 12s linear infinite;
          white-space: nowrap;
        }

        @keyframes hdsBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hds-blink {
          animation: hdsBlink 1s step-end infinite;
        }
      `}</style>

      <div className="hds-root">
        {/* ===== MARQUEE BANNER ===== */}
        <div
          style={{
            backgroundColor: YELLOW,
            borderBottom: `4px solid ${MAGENTA}`,
            overflow: 'hidden',
            padding: '8px 0',
          }}
        >
          <div className="hds-marquee" style={{ display: 'inline-block' }}>
            {Array.from({ length: 4 })
              .map(
                () =>
                  `HOT DOG STAND /// NEOBRUTALIST HOMEPAGE /// MAXIMUM NEON /// `,
              )
              .join('')
              .split('')
              .map((char, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Rubik Mono One', monospace",
                    fontSize: '12px',
                    fontWeight: 900,
                    letterSpacing: '3px',
                    color: NEON_CYCLE[i % NEON_CYCLE.length],
                  }}
                >
                  {char}
                </span>
              ))}
          </div>
        </div>

        {/* ===== NAVIGATION ===== */}
        <nav
          style={{
            backgroundColor: MAGENTA,
            borderBottom: `4px solid ${LIME}`,
            padding: '16px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            className="hds-heading"
            style={{
              fontSize: '14px',
              color: YELLOW,
              letterSpacing: '4px',
            }}
          >
            DULEV.DEV
          </span>
          <Link
            to="/"
            className="hds-nav-link"
            style={{
              color: WHITE,
              textDecoration: 'none',
              fontFamily: "'Rubik Mono One', monospace",
              fontSize: '12px',
              border: `4px solid ${YELLOW}`,
              padding: '8px 20px',
              backgroundColor: RED,
              boxShadow: `4px 4px 0px ${CYAN}`,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            &larr; HOME
          </Link>
        </nav>

        {/* ===== HERO SECTION ===== */}
        <section
          style={{
            backgroundColor: RED,
            borderBottom: `4px solid ${YELLOW}`,
            padding: '64px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative corner blocks */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '120px',
              height: '120px',
              backgroundColor: LIME,
              border: `4px solid ${MAGENTA}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="hds-blink"
              style={{
                fontFamily: "'Rubik Mono One', monospace",
                fontSize: '32px',
                color: RED,
              }}
            >
              !!!
            </span>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '80px',
              height: '80px',
              backgroundColor: CYAN,
              border: `4px solid ${RED}`,
            }}
          />

          <h1
            className="hds-heading"
            style={{
              fontSize: 'clamp(48px, 10vw, 96px)',
              color: YELLOW,
              marginBottom: '8px',
              textShadow: `6px 6px 0px ${LIME}, -3px -3px 0px ${CYAN}`,
            }}
          >
            {intro.name}
          </h1>

          <div
            style={{
              backgroundColor: YELLOW,
              border: `4px solid ${MAGENTA}`,
              boxShadow: `4px 4px 0px ${LIME}`,
              display: 'inline-block',
              padding: '12px 24px',
              marginBottom: '24px',
            }}
          >
            <p
              className="hds-heading"
              style={{
                fontSize: 'clamp(14px, 2.5vw, 22px)',
                color: RED,
                margin: 0,
              }}
            >
              {intro.tagline}
            </p>
          </div>

          <p
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: WHITE,
              maxWidth: '640px',
              lineHeight: 1.8,
              marginBottom: '32px',
              textShadow: `1px 1px 0px ${BLACK}`,
            }}
          >
            {intro.bio}
          </p>

          {/* Links row */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hds-link-ext"
              style={{
                color: BLACK,
                textDecoration: 'none',
                fontFamily: "'Rubik Mono One', monospace",
                fontSize: '13px',
                backgroundColor: LIME,
                border: `4px solid ${CYAN}`,
                boxShadow: `4px 4px 0px ${YELLOW}`,
                padding: '10px 24px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              GITHUB
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hds-link-ext"
              style={{
                color: BLACK,
                textDecoration: 'none',
                fontFamily: "'Rubik Mono One', monospace",
                fontSize: '13px',
                backgroundColor: CYAN,
                border: `4px solid ${MAGENTA}`,
                boxShadow: `4px 4px 0px ${RED}`,
                padding: '10px 24px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              LINKEDIN
            </a>
            <Link
              to={intro.links.uses}
              className="hds-link-int"
              style={{
                color: RED,
                textDecoration: 'none',
                fontFamily: "'Rubik Mono One', monospace",
                fontSize: '13px',
                backgroundColor: YELLOW,
                border: `4px solid ${RED}`,
                boxShadow: `4px 4px 0px ${MAGENTA}`,
                padding: '10px 24px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              /USES
            </Link>
          </div>
        </section>

        {/* ===== ZIGZAG DIVIDER ===== */}
        <div
          style={{
            height: '24px',
            backgroundColor: YELLOW,
            backgroundImage: `repeating-linear-gradient(
              90deg,
              ${RED} 0px, ${RED} 24px,
              ${LIME} 24px, ${LIME} 48px,
              ${MAGENTA} 48px, ${MAGENTA} 72px,
              ${CYAN} 72px, ${CYAN} 96px,
              ${YELLOW} 96px, ${YELLOW} 120px
            )`,
            borderTop: `4px solid ${BLACK}`,
            borderBottom: `4px solid ${BLACK}`,
          }}
        />

        {/* ===== PROJECTS SECTION ===== */}
        <section
          style={{
            backgroundColor: YELLOW,
            borderBottom: `4px solid ${RED}`,
            padding: '48px 32px',
          }}
        >
          <h2
            className="hds-heading"
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              color: RED,
              marginBottom: '8px',
              textShadow: `4px 4px 0px ${MAGENTA}`,
            }}
          >
            PROJECTS
          </h2>
          <div
            style={{
              width: '200px',
              height: '8px',
              backgroundColor: MAGENTA,
              border: `2px solid ${RED}`,
              marginBottom: '40px',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '32px',
            }}
          >
            {projects.map((project, i) => {
              const scheme = CARD_SCHEMES[i % CARD_SCHEMES.length]
              return (
                <div
                  key={project.name}
                  className="hds-card"
                  style={{
                    backgroundColor: scheme.bg,
                    border: `4px solid ${scheme.border}`,
                    boxShadow: `8px 8px 0px ${scheme.shadow}`,
                    padding: '32px',
                    position: 'relative',
                  }}
                >
                  {/* Card number badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-2px',
                      right: '-2px',
                      backgroundColor: scheme.shadow,
                      border: `4px solid ${scheme.border}`,
                      padding: '4px 12px',
                    }}
                  >
                    <span
                      className="hds-heading"
                      style={{
                        fontSize: '14px',
                        color: scheme.bg,
                      }}
                    >
                      #{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3
                    className="hds-heading"
                    style={{
                      fontSize: 'clamp(22px, 3vw, 32px)',
                      color: scheme.text,
                      marginBottom: '16px',
                      textShadow:
                        scheme.text === WHITE
                          ? `2px 2px 0px ${BLACK}`
                          : `2px 2px 0px ${scheme.accent}`,
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: scheme.text,
                      lineHeight: 1.7,
                      marginBottom: '20px',
                      textShadow:
                        scheme.text === WHITE
                          ? `1px 1px 0px ${BLACK}`
                          : 'none',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags - multicolored pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '24px',
                    }}
                  >
                    {project.tech.map((t, ti) => {
                      const tagColor = NEON_CYCLE[(ti + i) % NEON_CYCLE.length]
                      const tagText =
                        tagColor === YELLOW || tagColor === LIME || tagColor === CYAN
                          ? BLACK
                          : WHITE
                      return (
                        <span
                          key={t}
                          className="hds-tag"
                          style={{
                            fontSize: '11px',
                            fontWeight: 900,
                            fontFamily: "'Inconsolata', monospace",
                            backgroundColor: tagColor,
                            color: tagText,
                            border: `3px solid ${scheme.text}`,
                            padding: '4px 12px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            boxShadow: `2px 2px 0px ${scheme.accent}`,
                          }}
                        >
                          {t}
                        </span>
                      )
                    })}
                  </div>

                  {/* Project links */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      borderTop: `4px solid ${scheme.border}`,
                      paddingTop: '16px',
                    }}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hds-link-ext"
                      style={{
                        color: scheme.text === WHITE ? YELLOW : RED,
                        textDecoration: 'none',
                        fontFamily: "'Rubik Mono One', monospace",
                        fontSize: '12px',
                        backgroundColor: scheme.text === WHITE ? RED : YELLOW,
                        border: `3px solid ${scheme.accent}`,
                        padding: '6px 16px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}
                    >
                      VISIT &rarr;
                    </a>
                    <Link
                      to={project.cvAnchor}
                      className="hds-link-int"
                      style={{
                        color: BLACK,
                        textDecoration: 'none',
                        fontFamily: "'Rubik Mono One', monospace",
                        fontSize: '12px',
                        backgroundColor: scheme.accent,
                        border: `3px solid ${scheme.border}`,
                        padding: '6px 16px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}
                    >
                      CV ENTRY
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ===== COLOR BAR DIVIDER ===== */}
        <div style={{ display: 'flex', height: '16px' }}>
          {NEON_CYCLE.map((color) => (
            <div
              key={color}
              style={{ flex: 1, backgroundColor: color }}
            />
          ))}
        </div>

        {/* ===== INTERESTS SECTION ===== */}
        <section
          style={{
            backgroundColor: LIME,
            borderBottom: `4px solid ${MAGENTA}`,
            padding: '48px 32px',
          }}
        >
          <h2
            className="hds-heading"
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              color: MAGENTA,
              marginBottom: '8px',
              textShadow: `4px 4px 0px ${YELLOW}`,
            }}
          >
            INTERESTS
          </h2>
          <div
            style={{
              width: '200px',
              height: '8px',
              backgroundColor: RED,
              border: `2px solid ${MAGENTA}`,
              marginBottom: '40px',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            {personal.interests.map((interest, i) => {
              const bg = SECTION_BG[i % SECTION_BG.length]
              const textColor =
                bg === RED || bg === MAGENTA ? WHITE : BLACK
              const borderColor = NEON_CYCLE[(i + 2) % NEON_CYCLE.length]
              const shadowColor = NEON_CYCLE[(i + 3) % NEON_CYCLE.length]
              return (
                <div
                  key={interest.label}
                  className="hds-interest"
                  style={{
                    backgroundColor: bg,
                    border: `4px solid ${borderColor}`,
                    boxShadow: `4px 4px 0px ${shadowColor}`,
                    padding: '16px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'default',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Rubik Mono One', monospace",
                      fontSize: '14px',
                      color: textColor,
                      textShadow:
                        textColor === WHITE
                          ? `1px 1px 0px ${BLACK}`
                          : 'none',
                    }}
                  >
                    {interestIcons[interest.icon] || '***'}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inconsolata', monospace",
                      fontSize: '15px',
                      fontWeight: 900,
                      color: textColor,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      textShadow:
                        textColor === WHITE
                          ? `1px 1px 0px ${BLACK}`
                          : 'none',
                    }}
                  >
                    {interest.label}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* ===== MANIFESTO BLOCK ===== */}
        <section
          style={{
            backgroundColor: CYAN,
            borderBottom: `4px solid ${RED}`,
            padding: '48px 32px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0px',
            }}
          >
            {['BUILD', 'SHIP', 'BREAK', 'LEARN'].map((word, i) => {
              const cellBg = NEON_CYCLE[i % NEON_CYCLE.length]
              const cellText =
                cellBg === YELLOW || cellBg === LIME || cellBg === CYAN
                  ? BLACK
                  : WHITE
              const cellBorder = NEON_CYCLE[(i + 2) % NEON_CYCLE.length]
              return (
                <div
                  key={word}
                  style={{
                    backgroundColor: cellBg,
                    border: `4px solid ${cellBorder}`,
                    padding: '40px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    className="hds-heading"
                    style={{
                      fontSize: 'clamp(24px, 4vw, 40px)',
                      color: cellText,
                      textShadow: `3px 3px 0px ${NEON_CYCLE[(i + 3) % NEON_CYCLE.length]}`,
                      transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
                      display: 'inline-block',
                    }}
                  >
                    {word}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* ===== BOTTOM COLOR STRIPE ===== */}
        <div style={{ display: 'flex', height: '16px' }}>
          {[...NEON_CYCLE].reverse().map((color) => (
            <div
              key={color}
              style={{ flex: 1, backgroundColor: color }}
            />
          ))}
        </div>

        {/* ===== FOOTER ===== */}
        <footer
          style={{
            backgroundColor: MAGENTA,
            borderTop: `4px solid ${YELLOW}`,
            padding: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p
            className="hds-heading"
            style={{
              fontSize: '11px',
              color: YELLOW,
              letterSpacing: '3px',
              textShadow: `1px 1px 0px ${BLACK}`,
              margin: 0,
            }}
          >
            HOT DOG STAND &middot; {new Date().getFullYear()}
          </p>
          <p
            className="hds-heading"
            style={{
              fontSize: '11px',
              color: LIME,
              letterSpacing: '3px',
              textShadow: `1px 1px 0px ${BLACK}`,
              margin: 0,
            }}
          >
            DESIGN 15 / NEOBRUTALIST NEON CLASH
          </p>
        </footer>
      </div>
    </>
  )
}
