import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

// Brutalist interest icons — raw, geometric glyphs
const interestIcons: Record<string, string> = {
  guitar: '|||||',
  running: '////',
  bike: 'o--o',
  mountains: '/\\/\\',
  terminal: '>_',
}

// Concrete Brutalism palette
const CONCRETE_LIGHT = '#b8b0a8'
const CONCRETE_MID = '#9c9488'
const CONCRETE_DARK = '#706860'
const CONCRETE_DEEP = '#3a3430'
const STEEL_ACCENT = '#5a6a7a'

// Noise SVG as a data URI for concrete texture
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`

// Structural grid via repeating gradients
const GRID_PATTERN = `
  repeating-linear-gradient(
    0deg,
    transparent,
    transparent 119px,
    rgba(58, 52, 48, 0.07) 119px,
    rgba(58, 52, 48, 0.07) 120px
  ),
  repeating-linear-gradient(
    90deg,
    transparent,
    transparent 119px,
    rgba(58, 52, 48, 0.07) 119px,
    rgba(58, 52, 48, 0.07) 120px
  )
`

// Full concrete background: layered noise + grid + base color
const CONCRETE_BG = `
  ${NOISE_SVG},
  ${GRID_PATTERN},
  linear-gradient(
    180deg,
    ${CONCRETE_LIGHT} 0%,
    ${CONCRETE_MID} 40%,
    ${CONCRETE_LIGHT} 70%,
    ${CONCRETE_MID} 100%
  )
`

// Deep inset shadow for carved-into-concrete cards
const INSET_SHADOW = `
  inset 4px 4px 12px rgba(0, 0, 0, 0.45),
  inset -2px -2px 8px rgba(255, 255, 255, 0.08),
  inset 1px 1px 3px rgba(0, 0, 0, 0.3)
`

// Debossed text shadow — stamped into concrete
const DEBOSS_SHADOW = `
  1px 1px 1px rgba(255, 255, 255, 0.12),
  -1px -1px 1px rgba(0, 0, 0, 0.5)
`

// Lighter deboss for smaller text
const DEBOSS_LIGHT = `
  0.5px 0.5px 0.5px rgba(255, 255, 255, 0.1),
  -0.5px -0.5px 0.5px rgba(0, 0, 0, 0.35)
`

export function Design18() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Martian+Mono:wght@300;400;500;600;700&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .brut-root {
          font-family: 'Martian Mono', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background: ${CONCRETE_BG};
          background-attachment: fixed;
          color: ${CONCRETE_DEEP};
          -webkit-font-smoothing: antialiased;
        }

        .brut-root * {
          border-radius: 0 !important;
          box-sizing: border-box;
        }

        .brut-heading {
          font-family: 'Bebas Neue', sans-serif;
          text-transform: uppercase;
          line-height: 0.9;
          letter-spacing: 0.04em;
        }

        .brut-card:hover {
          box-shadow:
            inset 6px 6px 16px rgba(0, 0, 0, 0.55),
            inset -3px -3px 10px rgba(255, 255, 255, 0.1),
            inset 2px 2px 4px rgba(0, 0, 0, 0.35);
        }

        .brut-link:hover {
          background-color: ${STEEL_ACCENT} !important;
          color: ${CONCRETE_LIGHT} !important;
        }

        .brut-nav-link:hover {
          background-color: ${CONCRETE_DEEP} !important;
          color: ${CONCRETE_LIGHT} !important;
        }

        .brut-tag:hover {
          background-color: ${STEEL_ACCENT} !important;
          color: ${CONCRETE_LIGHT} !important;
        }

        .brut-interest:hover {
          box-shadow:
            inset 3px 3px 8px rgba(0, 0, 0, 0.5),
            inset -2px -2px 6px rgba(255, 255, 255, 0.08);
          background-color: ${CONCRETE_DARK} !important;
          color: ${CONCRETE_LIGHT} !important;
        }

        @media (max-width: 640px) {
          .brut-hero-name {
            font-size: clamp(3.5rem, 14vw, 8rem) !important;
          }
          .brut-section-heading {
            font-size: clamp(2.5rem, 10vw, 5rem) !important;
          }
        }
      `}</style>

      <div className="brut-root">
        {/* ===== NAVIGATION BAR ===== */}
        <nav
          style={{
            backgroundColor: CONCRETE_DEEP,
            borderBottom: `6px solid ${STEEL_ACCENT}`,
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            className="brut-heading"
            style={{
              fontSize: '1.4rem',
              color: CONCRETE_LIGHT,
              letterSpacing: '0.15em',
              textShadow: DEBOSS_LIGHT,
            }}
          >
            DULEV.DEV
          </span>
          <Link
            to="/"
            className="brut-nav-link"
            style={{
              color: CONCRETE_LIGHT,
              textDecoration: 'none',
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.1rem',
              letterSpacing: '0.12em',
              border: `3px solid ${STEEL_ACCENT}`,
              padding: '10px 28px',
              backgroundColor: CONCRETE_DARK,
              textTransform: 'uppercase',
            }}
          >
            &larr; HOME
          </Link>
        </nav>

        {/* ===== HEAVY STEEL DIVIDER ===== */}
        <div
          style={{
            height: '12px',
            background: `linear-gradient(90deg, ${STEEL_ACCENT} 0%, ${CONCRETE_DARK} 50%, ${STEEL_ACCENT} 100%)`,
          }}
        />

        {/* ===== HERO SECTION ===== */}
        <section
          style={{
            padding: '100px 48px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Structural column accent — left */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '40px',
              width: '8px',
              height: '100%',
              backgroundColor: STEEL_ACCENT,
              opacity: 0.25,
            }}
          />

          {/* Structural column accent — right */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: '80px',
              width: '16px',
              height: '100%',
              backgroundColor: CONCRETE_DARK,
              opacity: 0.12,
            }}
          />

          {/* Geometric block — top decorative mass */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '48px',
              width: '180px',
              height: '180px',
              backgroundColor: STEEL_ACCENT,
              opacity: 0.1,
            }}
          />

          <h1
            className="brut-heading brut-hero-name"
            style={{
              fontSize: 'clamp(5rem, 12vw, 10rem)',
              color: CONCRETE_DEEP,
              marginBottom: '16px',
              textShadow: DEBOSS_SHADOW,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {intro.name}
          </h1>

          {/* Heavy horizontal rule — structural beam */}
          <div
            style={{
              width: '280px',
              height: '8px',
              backgroundColor: STEEL_ACCENT,
              marginBottom: '32px',
            }}
          />

          <p
            className="brut-heading"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: CONCRETE_DARK,
              marginBottom: '40px',
              textShadow: DEBOSS_LIGHT,
              maxWidth: '700px',
              lineHeight: 1.1,
            }}
          >
            {intro.tagline}
          </p>

          <p
            style={{
              fontSize: '0.85rem',
              fontWeight: 400,
              color: CONCRETE_DARK,
              maxWidth: '560px',
              lineHeight: 2,
              marginBottom: '48px',
              textShadow: DEBOSS_LIGHT,
              letterSpacing: '0.01em',
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
              className="brut-link"
              style={{
                color: CONCRETE_LIGHT,
                textDecoration: 'none',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                backgroundColor: CONCRETE_DEEP,
                border: `3px solid ${STEEL_ACCENT}`,
                padding: '12px 32px',
                textTransform: 'uppercase',
              }}
            >
              GITHUB
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="brut-link"
              style={{
                color: CONCRETE_LIGHT,
                textDecoration: 'none',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                backgroundColor: STEEL_ACCENT,
                border: `3px solid ${CONCRETE_DEEP}`,
                padding: '12px 32px',
                textTransform: 'uppercase',
              }}
            >
              LINKEDIN
            </a>
            <Link
              to={intro.links.uses}
              className="brut-link"
              style={{
                color: CONCRETE_DEEP,
                textDecoration: 'none',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                backgroundColor: CONCRETE_MID,
                border: `3px solid ${CONCRETE_DARK}`,
                padding: '12px 32px',
                textTransform: 'uppercase',
              }}
            >
              /USES
            </Link>
          </div>
        </section>

        {/* ===== MONUMENTAL BLOCK DIVIDER ===== */}
        <div
          style={{
            display: 'flex',
            height: '48px',
          }}
        >
          <div style={{ flex: 3, backgroundColor: CONCRETE_DEEP }} />
          <div style={{ flex: 1, backgroundColor: STEEL_ACCENT }} />
          <div style={{ flex: 2, backgroundColor: CONCRETE_DARK }} />
          <div style={{ flex: 1, backgroundColor: CONCRETE_MID }} />
        </div>

        {/* ===== PROJECTS SECTION ===== */}
        <section
          style={{
            padding: '80px 48px',
            position: 'relative',
          }}
        >
          {/* Section label block — heavy geometric marker */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '24px',
              marginBottom: '64px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: STEEL_ACCENT,
                flexShrink: 0,
              }}
            />
            <div>
              <h2
                className="brut-heading brut-section-heading"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  color: CONCRETE_DEEP,
                  textShadow: DEBOSS_SHADOW,
                  margin: 0,
                }}
              >
                PROJECTS
              </h2>
              <div
                style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: CONCRETE_DARK,
                  marginTop: '8px',
                }}
              />
            </div>
          </div>

          {/* Project cards — heavy concrete blocks */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '40px',
            }}
          >
            {projects.map((project, i) => (
              <div
                key={project.name}
                className="brut-card"
                style={{
                  backgroundColor: CONCRETE_MID,
                  border: `4px solid ${CONCRETE_DARK}`,
                  boxShadow: INSET_SHADOW,
                  padding: '40px',
                  position: 'relative',
                  transition: 'box-shadow 0.2s ease',
                }}
              >
                {/* Steel accent bar on left edge */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '100%',
                    backgroundColor: STEEL_ACCENT,
                  }}
                />

                {/* Project number — stamped */}
                <span
                  className="brut-heading"
                  style={{
                    fontSize: '4rem',
                    color: CONCRETE_DARK,
                    opacity: 0.25,
                    position: 'absolute',
                    top: '12px',
                    right: '20px',
                    textShadow: DEBOSS_SHADOW,
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3
                  className="brut-heading"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: CONCRETE_DEEP,
                    marginBottom: '16px',
                    textShadow: DEBOSS_SHADOW,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {project.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 400,
                    color: CONCRETE_DEEP,
                    lineHeight: 1.9,
                    marginBottom: '24px',
                    textShadow: DEBOSS_LIGHT,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags — raw, heavy */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '32px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="brut-tag"
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        fontFamily: "'Martian Mono', monospace",
                        backgroundColor: CONCRETE_DARK,
                        color: CONCRETE_LIGHT,
                        border: `2px solid ${STEEL_ACCENT}`,
                        padding: '5px 14px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        textShadow: DEBOSS_LIGHT,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Horizontal structural beam divider */}
                <div
                  style={{
                    height: '3px',
                    backgroundColor: STEEL_ACCENT,
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />

                {/* Project links */}
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brut-link"
                    style={{
                      color: CONCRETE_LIGHT,
                      textDecoration: 'none',
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1rem',
                      letterSpacing: '0.1em',
                      backgroundColor: STEEL_ACCENT,
                      border: `2px solid ${CONCRETE_DEEP}`,
                      padding: '8px 24px',
                      textTransform: 'uppercase',
                    }}
                  >
                    VISIT &rarr;
                  </a>
                  <Link
                    to={project.cvAnchor}
                    className="brut-link"
                    style={{
                      color: CONCRETE_LIGHT,
                      textDecoration: 'none',
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1rem',
                      letterSpacing: '0.1em',
                      backgroundColor: CONCRETE_DEEP,
                      border: `2px solid ${CONCRETE_DARK}`,
                      padding: '8px 24px',
                      textTransform: 'uppercase',
                    }}
                  >
                    CV ENTRY
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ASYMMETRIC BLOCK DIVIDER ===== */}
        <div style={{ display: 'flex', height: '32px' }}>
          <div style={{ flex: 1, backgroundColor: CONCRETE_DARK }} />
          <div style={{ flex: 4, backgroundColor: STEEL_ACCENT }} />
          <div style={{ flex: 2, backgroundColor: CONCRETE_DEEP }} />
        </div>

        {/* ===== INTERESTS SECTION ===== */}
        <section
          style={{
            padding: '80px 48px',
            position: 'relative',
          }}
        >
          {/* Section heading with geometric block */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '24px',
              marginBottom: '64px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: CONCRETE_DEEP,
                flexShrink: 0,
              }}
            />
            <div>
              <h2
                className="brut-heading brut-section-heading"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  color: CONCRETE_DEEP,
                  textShadow: DEBOSS_SHADOW,
                  margin: 0,
                }}
              >
                INTERESTS
              </h2>
              <div
                style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: STEEL_ACCENT,
                  marginTop: '8px',
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            {personal.interests.map((interest) => (
              <div
                key={interest.label}
                className="brut-interest"
                style={{
                  backgroundColor: CONCRETE_MID,
                  border: `3px solid ${CONCRETE_DARK}`,
                  boxShadow: INSET_SHADOW,
                  padding: '20px 36px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: 'default',
                  transition: 'box-shadow 0.2s ease, background-color 0.2s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Martian Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: STEEL_ACCENT,
                    textShadow: DEBOSS_LIGHT,
                  }}
                >
                  {interestIcons[interest.icon] || '***'}
                </span>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.4rem',
                    color: CONCRETE_DEEP,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    textShadow: DEBOSS_SHADOW,
                  }}
                >
                  {interest.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== MONUMENTAL STATEMENT BLOCKS ===== */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >
          {['BUILD', 'SHIP', 'BREAK', 'LEARN'].map((word, i) => {
            const bgColors = [CONCRETE_DEEP, STEEL_ACCENT, CONCRETE_DARK, CONCRETE_MID]
            const textColors = [CONCRETE_LIGHT, CONCRETE_LIGHT, CONCRETE_LIGHT, CONCRETE_DEEP]
            return (
              <div
                key={word}
                style={{
                  backgroundColor: bgColors[i],
                  padding: '64px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight:
                    i < 3 ? `3px solid ${CONCRETE_DARK}` : 'none',
                }}
              >
                <span
                  className="brut-heading"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: textColors[i],
                    textShadow: DEBOSS_SHADOW,
                    letterSpacing: '0.15em',
                  }}
                >
                  {word}
                </span>
              </div>
            )
          })}
        </section>

        {/* ===== HEAVY BLOCK DIVIDER ===== */}
        <div
          style={{
            height: '24px',
            background: `linear-gradient(90deg, ${CONCRETE_DEEP} 0%, ${STEEL_ACCENT} 30%, ${CONCRETE_DARK} 60%, ${CONCRETE_DEEP} 100%)`,
          }}
        />

        {/* ===== FOOTER ===== */}
        <footer
          style={{
            backgroundColor: CONCRETE_DEEP,
            borderTop: `6px solid ${STEEL_ACCENT}`,
            padding: '40px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <p
            className="brut-heading"
            style={{
              fontSize: '1rem',
              color: CONCRETE_MID,
              letterSpacing: '0.15em',
              textShadow: DEBOSS_LIGHT,
              margin: 0,
            }}
          >
            CONCRETE BRUTALISM &middot; {new Date().getFullYear()}
          </p>
          <p
            style={{
              fontSize: '0.65rem',
              fontWeight: 400,
              color: CONCRETE_DARK,
              letterSpacing: '0.05em',
              margin: 0,
              fontFamily: "'Martian Mono', monospace",
            }}
          >
            DESIGN 18 / ARCHITECTURAL BRUTALIST
          </p>
        </footer>
      </div>
    </>
  )
}
