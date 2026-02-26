import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '[~]',
  running: '[>>]',
  bike: '[/\\]',
  mountains: '[^^^]',
  terminal: '[>_]',
}

// Strictly 4 colors
const CREAM = '#f0e6d3'
const OLIVE = '#5c6b4f'
const RUST = '#b5533e'
const CHARCOAL = '#2d2d2d'

export function Design7() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        /* ---- GRAIN / NOISE OVERLAY ---- */
        .lofi-grain::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 50;
          opacity: 0.12;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 150px 150px;
        }

        /* ---- HALFTONE DOT PATTERN ---- */
        .halftone-bg {
          background-image: radial-gradient(
            circle,
            ${OLIVE}22 1px,
            transparent 1px
          );
          background-size: 6px 6px;
        }

        .halftone-dense {
          background-image: radial-gradient(
            circle,
            ${CHARCOAL}18 0.8px,
            transparent 0.8px
          );
          background-size: 4px 4px;
        }

        .halftone-rust {
          background-image: radial-gradient(
            circle,
            ${RUST}20 1px,
            transparent 1px
          );
          background-size: 8px 8px;
        }

        /* ---- BASE STYLES ---- */
        .lofi-root {
          font-family: 'JetBrains Mono', monospace;
          background-color: ${CREAM};
          color: ${CHARCOAL};
          min-height: 100vh;
        }

        .lofi-root * {
          font-family: 'JetBrains Mono', monospace;
        }

        /* ---- LINK HOVER STYLES ---- */
        .lofi-link {
          color: ${RUST};
          text-decoration: none;
          border-bottom: 1px dashed ${RUST};
          transition: background-color 0.2s, color 0.2s;
        }
        .lofi-link:hover {
          background-color: ${RUST};
          color: ${CREAM};
        }

        /* ---- PROJECT CARD HOVER ---- */
        .lofi-card {
          border: 3px solid ${CHARCOAL};
          background-color: ${CREAM};
          transition: background-color 0.2s, border-color 0.2s, transform 0.2s;
        }
        .lofi-card:hover {
          background-color: ${OLIVE};
          border-color: ${RUST};
          color: ${CREAM};
          transform: translate(-2px, -2px);
        }
        .lofi-card:hover .lofi-card-title {
          color: ${CREAM};
        }
        .lofi-card:hover .lofi-card-desc {
          color: ${CREAM};
          opacity: 0.85;
        }
        .lofi-card:hover .lofi-card-tag {
          border-color: ${CREAM};
          color: ${CREAM};
        }
        .lofi-card:hover .lofi-card-link {
          color: ${CREAM};
          border-bottom-color: ${CREAM};
        }

        /* ---- INTEREST CHIP HOVER ---- */
        .lofi-chip {
          border: 2px solid ${OLIVE};
          color: ${OLIVE};
          background: transparent;
          transition: background-color 0.2s, color 0.2s;
        }
        .lofi-chip:hover {
          background-color: ${OLIVE};
          color: ${CREAM};
        }

        /* ---- NAV LINK ---- */
        .lofi-nav {
          color: ${OLIVE};
          border: 2px solid ${OLIVE};
          padding: 4px 12px;
          text-decoration: none;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: background-color 0.2s, color 0.2s;
        }
        .lofi-nav:hover {
          background-color: ${OLIVE};
          color: ${CREAM};
        }

        /* ---- ROTATED ACCENT TEXT ---- */
        .lofi-rotated {
          transform: rotate(-90deg);
          transform-origin: left top;
          white-space: nowrap;
        }

        /* ---- DITHER BORDER PATTERN ---- */
        .dither-border-top {
          background-image: repeating-linear-gradient(
            90deg,
            ${CHARCOAL} 0px,
            ${CHARCOAL} 4px,
            transparent 4px,
            transparent 8px
          );
          height: 2px;
        }

        .dither-border-bottom {
          background-image: repeating-linear-gradient(
            90deg,
            ${OLIVE} 0px,
            ${OLIVE} 3px,
            transparent 3px,
            transparent 6px
          );
          height: 2px;
        }

        /* ---- PIXELATED DIVIDER ---- */
        .pixel-divider {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .pixel-divider span {
          display: inline-block;
          width: 4px;
          height: 4px;
          background-color: ${RUST};
        }

        @keyframes lofiFlicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.8; }
          94% { opacity: 1; }
          97% { opacity: 0.85; }
          98% { opacity: 1; }
        }

        .lofi-flicker {
          animation: lofiFlicker 6s ease-in-out infinite;
        }
      `}</style>

      <div className="lofi-root lofi-grain">
        {/* ======= HALFTONE DECORATION - TOP STRIP ======= */}
        <div
          className="halftone-dense"
          style={{ height: '24px', width: '100%' }}
        />
        <div className="dither-border-top" />

        {/* ======= MAIN CONTAINER ======= */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px 24px',
            position: 'relative',
          }}
        >
          {/* ---- ROTATED SIDE LABEL ---- */}
          <div
            className="lofi-rotated"
            style={{
              position: 'absolute',
              left: '-12px',
              top: '160px',
              fontSize: '9px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: OLIVE,
              opacity: 0.5,
            }}
          >
            lo-fi analog // issue no. 07
          </div>

          {/* ---- NAVIGATION ---- */}
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '48px',
            }}
          >
            <div
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: OLIVE,
              }}
            >
              dulev.dev
            </div>
            <Link to="/" className="lofi-nav">
              &larr; index
            </Link>
          </nav>

          {/* ======= HERO / INTRO ======= */}
          <header style={{ marginBottom: '64px' }}>
            {/* Halftone decoration block */}
            <div
              className="halftone-rust"
              style={{
                width: '80px',
                height: '80px',
                position: 'absolute',
                right: '24px',
                top: '80px',
                opacity: 0.4,
              }}
            />

            <p
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '4px',
                color: RUST,
                marginBottom: '12px',
              }}
            >
              profile //
            </p>

            <h1
              className="lofi-flicker"
              style={{
                fontSize: 'clamp(36px, 6vw, 56px)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: CHARCOAL,
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '-1px',
              }}
            >
              {intro.name}
            </h1>

            {/* Pixel divider under name */}
            <div className="pixel-divider" style={{ marginBottom: '20px' }}>
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    opacity: i % 3 === 0 ? 1 : 0.4,
                    backgroundColor: i % 5 === 0 ? OLIVE : RUST,
                  }}
                />
              ))}
            </div>

            <p
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: OLIVE,
                marginBottom: '16px',
                lineHeight: 1.6,
              }}
            >
              {intro.tagline}
            </p>

            <p
              style={{
                fontSize: '13px',
                fontWeight: 300,
                color: CHARCOAL,
                maxWidth: '560px',
                lineHeight: 1.8,
                opacity: 0.75,
              }}
            >
              {intro.bio}
            </p>

            {/* Links row */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '24px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="lofi-link"
                style={{ fontSize: '12px', fontWeight: 500 }}
              >
                github
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="lofi-link"
                style={{ fontSize: '12px', fontWeight: 500 }}
              >
                linkedin
              </a>
              <Link
                to={intro.links.uses}
                className="lofi-link"
                style={{ fontSize: '12px', fontWeight: 500 }}
              >
                /uses
              </Link>
            </div>
          </header>

          {/* ======= SECTION DIVIDER ======= */}
          <div style={{ marginBottom: '48px' }}>
            <div className="dither-border-bottom" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '12px',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                  color: RUST,
                }}
              >
                projects //
              </span>
              <div
                style={{ flex: 1, height: '1px', backgroundColor: OLIVE, opacity: 0.2 }}
              />
            </div>
          </div>

          {/* ======= PROJECTS GRID ======= */}
          <section style={{ marginBottom: '64px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '24px',
              }}
            >
              {projects.map((project, i) => (
                <div key={project.name} className="lofi-card" style={{ padding: '24px', position: 'relative' }}>
                  {/* Corner halftone decoration */}
                  <div
                    className="halftone-bg"
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '48px',
                      height: '48px',
                      opacity: 0.5,
                    }}
                  />

                  {/* Project number */}
                  <span
                    style={{
                      fontSize: '10px',
                      color: RUST,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                    }}
                  >
                    no.0{i + 1}
                  </span>

                  <h3
                    className="lofi-card-title"
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: CHARCOAL,
                      marginTop: '8px',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    className="lofi-card-desc"
                    style={{
                      fontSize: '12px',
                      lineHeight: 1.7,
                      color: CHARCOAL,
                      opacity: 0.7,
                      marginBottom: '16px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '16px',
                    }}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="lofi-card-tag"
                        style={{
                          fontSize: '10px',
                          border: `1px solid ${OLIVE}`,
                          padding: '2px 8px',
                          color: OLIVE,
                          textTransform: 'lowercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lofi-card-link"
                      style={{
                        fontSize: '11px',
                        color: RUST,
                        borderBottom: `1px dashed ${RUST}`,
                        textDecoration: 'none',
                        transition: 'color 0.2s, border-color 0.2s',
                      }}
                    >
                      visit &rarr;
                    </a>
                    <Link
                      to={project.cvAnchor}
                      className="lofi-card-link"
                      style={{
                        fontSize: '11px',
                        color: OLIVE,
                        borderBottom: `1px dashed ${OLIVE}`,
                        textDecoration: 'none',
                        transition: 'color 0.2s, border-color 0.2s',
                      }}
                    >
                      cv entry
                    </Link>
                  </div>

                  {/* Bottom dashed line decoration */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '24px',
                      right: '24px',
                      height: '1px',
                      backgroundImage: `repeating-linear-gradient(90deg, ${OLIVE}40 0px, ${OLIVE}40 3px, transparent 3px, transparent 6px)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ======= SECTION DIVIDER ======= */}
          <div style={{ marginBottom: '48px' }}>
            <div className="dither-border-top" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '12px',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                  color: RUST,
                }}
              >
                interests //
              </span>
              <div
                style={{ flex: 1, height: '1px', backgroundColor: OLIVE, opacity: 0.2 }}
              />
            </div>
          </div>

          {/* ======= INTERESTS ======= */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: CHARCOAL,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '24px',
              }}
            >
              off-screen
            </h2>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              {personal.interests.map((interest) => (
                <div
                  key={interest.label}
                  className="lofi-chip"
                  style={{
                    padding: '10px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'default',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                    }}
                  >
                    {interestIcons[interest.icon] || '[*]'}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      textTransform: 'lowercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {interest.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative halftone strip */}
            <div
              className="halftone-dense"
              style={{
                width: '100%',
                height: '12px',
                marginTop: '32px',
                opacity: 0.3,
              }}
            />
          </section>

          {/* ======= COLLAGE / ZINE ACCENT BLOCK ======= */}
          <section
            style={{
              marginBottom: '64px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
              border: `3px solid ${CHARCOAL}`,
            }}
          >
            {/* Top-left: rotated text block */}
            <div
              style={{
                padding: '32px 20px',
                borderRight: `2px solid ${CHARCOAL}`,
                borderBottom: `2px solid ${CHARCOAL}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: OLIVE,
              }}
            >
              <span
                style={{
                  color: CREAM,
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '6px',
                  transform: 'rotate(-5deg)',
                  display: 'inline-block',
                }}
              >
                build
              </span>
            </div>

            {/* Top-right: halftone block */}
            <div
              className="halftone-rust"
              style={{
                padding: '32px 20px',
                borderBottom: `2px solid ${CHARCOAL}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: RUST,
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '6px',
                  transform: 'rotate(3deg)',
                  display: 'inline-block',
                }}
              >
                break
              </span>
            </div>

            {/* Bottom-left: dense dots */}
            <div
              className="halftone-dense"
              style={{
                padding: '32px 20px',
                borderRight: `2px solid ${CHARCOAL}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: CHARCOAL,
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '6px',
                  transform: 'rotate(2deg)',
                  display: 'inline-block',
                }}
              >
                learn
              </span>
            </div>

            {/* Bottom-right: solid rust */}
            <div
              style={{
                padding: '32px 20px',
                backgroundColor: RUST,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: CREAM,
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '6px',
                  transform: 'rotate(-3deg)',
                  display: 'inline-block',
                }}
              >
                repeat
              </span>
            </div>
          </section>

          {/* ======= FOOTER ======= */}
          <footer style={{ paddingBottom: '40px' }}>
            <div className="dither-border-bottom" />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginTop: '20px',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <p
                style={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: OLIVE,
                  opacity: 0.6,
                }}
              >
                printed in pixels &middot; {new Date().getFullYear()}
              </p>
              <p
                style={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: OLIVE,
                  opacity: 0.4,
                }}
              >
                design 07 / lo-fi analog
              </p>
            </div>

            {/* Final halftone strip */}
            <div
              className="halftone-bg"
              style={{
                width: '100%',
                height: '8px',
                marginTop: '16px',
                opacity: 0.3,
              }}
            />
          </footer>
        </div>

        {/* ======= BOTTOM HALFTONE STRIP ======= */}
        <div className="dither-border-top" />
        <div
          className="halftone-dense"
          style={{ height: '24px', width: '100%' }}
        />
      </div>
    </>
  )
}
