import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '~♪~',
  running: '»»»',
  bike: '⊙─⊙',
  mountains: '▲▲▲',
  terminal: '>_',
}

// Risograph spot colors
const PINK = '#ff4785'
const TEAL = '#0078a0'
const PAPER = '#f2ede4'

// SVG noise filter for grain texture
const GRAIN_FILTER_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <filter id="riso-grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise"/>
    <feColorMatrix type="saturate" values="0" in="noise" result="mono"/>
    <feBlend in="SourceGraphic" in2="mono" mode="multiply"/>
  </filter>
</svg>
`

export function Design21() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Chivo:wght@300;400;700;900&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .riso-root {
          font-family: 'Space Mono', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${PAPER};
          color: ${TEAL};
          position: relative;
          overflow-x: hidden;
        }

        .riso-root * {
          box-sizing: border-box;
        }

        .riso-heading {
          font-family: 'Chivo', sans-serif;
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.5px;
        }

        /* Grain overlay covering the entire page */
        .riso-grain-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.08;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 256px 256px;
        }

        /* Misregistration effect for key text */
        .riso-misreg-pink {
          position: relative;
          color: ${PINK};
        }
        .riso-misreg-pink::before {
          content: attr(data-text);
          position: absolute;
          top: 2px;
          left: -3px;
          color: ${TEAL};
          mix-blend-mode: multiply;
          z-index: -1;
          pointer-events: none;
        }

        .riso-misreg-teal {
          position: relative;
          color: ${TEAL};
        }
        .riso-misreg-teal::before {
          content: attr(data-text);
          position: absolute;
          top: -2px;
          left: 3px;
          color: ${PINK};
          mix-blend-mode: multiply;
          z-index: -1;
          pointer-events: none;
        }

        /* Halftone dot pattern backgrounds */
        .riso-halftone-pink {
          background-image: radial-gradient(circle, ${PINK} 1px, transparent 1px);
          background-size: 6px 6px;
        }
        .riso-halftone-teal {
          background-image: radial-gradient(circle, ${TEAL} 1px, transparent 1px);
          background-size: 6px 6px;
        }

        /* Card hover */
        .riso-card:hover {
          transform: translate(-2px, -2px);
        }
        .riso-card {
          transition: transform 0.15s ease;
        }

        .riso-link:hover {
          opacity: 0.7;
        }

        .riso-nav-link:hover {
          background-color: ${PINK};
          color: ${PAPER} !important;
        }

        .riso-interest:hover {
          transform: rotate(-2deg) scale(1.05);
        }
        .riso-interest {
          transition: transform 0.15s ease;
        }

        @keyframes risoFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }

        .riso-float {
          animation: risoFloat 6s ease-in-out infinite;
        }
      `}</style>

      {/* Hidden SVG filter definitions */}
      <div
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        dangerouslySetInnerHTML={{ __html: GRAIN_FILTER_SVG }}
      />

      <div className="riso-root">
        {/* Grain overlay */}
        <div className="riso-grain-overlay" />

        {/* ===== DECORATIVE GEOMETRIC SHAPES ===== */}
        {/* Large pink circle top-right */}
        <div
          style={{
            position: 'fixed',
            top: '-80px',
            right: '-60px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            backgroundColor: PINK,
            opacity: 0.12,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        {/* Teal triangle bottom-left */}
        <div
          style={{
            position: 'fixed',
            bottom: '-40px',
            left: '-30px',
            width: 0,
            height: 0,
            borderLeft: '180px solid transparent',
            borderRight: '180px solid transparent',
            borderBottom: `320px solid ${TEAL}`,
            opacity: 0.08,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        {/* Small pink circle mid-left */}
        <div
          className="riso-float"
          style={{
            position: 'fixed',
            top: '40%',
            left: '3%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: PINK,
            opacity: 0.15,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        {/* Teal rectangle mid-right */}
        <div
          style={{
            position: 'fixed',
            top: '55%',
            right: '5%',
            width: '120px',
            height: '60px',
            backgroundColor: TEAL,
            opacity: 0.1,
            pointerEvents: 'none',
            zIndex: 0,
            transform: 'rotate(12deg)',
          }}
        />

        {/* ===== NAVIGATION ===== */}
        <nav
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '24px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: `2px solid ${TEAL}`,
            opacity: 0.9,
          }}
        >
          <span
            className="riso-heading"
            style={{
              fontSize: '13px',
              color: TEAL,
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            dulev.dev
          </span>
          <Link
            to="/"
            className="riso-nav-link"
            style={{
              color: TEAL,
              textDecoration: 'none',
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              border: `2px solid ${TEAL}`,
              padding: '8px 20px',
              backgroundColor: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              transition: 'background-color 0.15s ease, color 0.15s ease',
            }}
          >
            &larr; Home
          </Link>
        </nav>

        {/* ===== HERO SECTION ===== */}
        <section
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '80px 40px 60px',
          }}
        >
          {/* Decorative halftone block */}
          <div
            className="riso-halftone-pink"
            style={{
              position: 'absolute',
              top: '20px',
              right: '40px',
              width: '200px',
              height: '200px',
              opacity: 0.25,
              pointerEvents: 'none',
            }}
          />

          {/* Large geometric circle behind name */}
          <div
            style={{
              position: 'absolute',
              top: '30px',
              left: '20px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              border: `3px solid ${PINK}`,
              opacity: 0.3,
              pointerEvents: 'none',
            }}
          />

          {/* Name with misregistration */}
          <h1
            className="riso-heading riso-misreg-pink"
            data-text={intro.name}
            style={{
              fontSize: 'clamp(48px, 10vw, 110px)',
              color: PINK,
              marginBottom: '12px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {intro.name}
          </h1>

          {/* Tagline with teal misregistration */}
          <p
            className="riso-misreg-teal"
            data-text={intro.tagline}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(14px, 2.5vw, 20px)',
              color: TEAL,
              marginBottom: '32px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {intro.tagline}
          </p>

          {/* Ink-density separator line */}
          <div
            style={{
              width: '120px',
              height: '4px',
              background: `linear-gradient(90deg, ${PINK}, ${TEAL})`,
              marginBottom: '28px',
              opacity: 0.7,
              mixBlendMode: 'multiply',
            }}
          />

          {/* Bio text */}
          <p
            style={{
              fontSize: '15px',
              color: TEAL,
              maxWidth: '560px',
              lineHeight: 1.8,
              marginBottom: '40px',
              opacity: 0.85,
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
              className="riso-link"
              style={{
                color: PAPER,
                textDecoration: 'none',
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px',
                backgroundColor: PINK,
                padding: '10px 24px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                border: 'none',
                transition: 'opacity 0.15s ease',
              }}
            >
              GitHub
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="riso-link"
              style={{
                color: PAPER,
                textDecoration: 'none',
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px',
                backgroundColor: TEAL,
                padding: '10px 24px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                border: 'none',
                transition: 'opacity 0.15s ease',
              }}
            >
              LinkedIn
            </a>
            <Link
              to={intro.links.uses}
              className="riso-link"
              style={{
                color: PINK,
                textDecoration: 'none',
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px',
                backgroundColor: 'transparent',
                border: `2px solid ${PINK}`,
                padding: '8px 22px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: 'opacity 0.15s ease',
              }}
            >
              /uses
            </Link>
          </div>
        </section>

        {/* ===== INK STRIP DIVIDER ===== */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '6px',
            margin: '0 40px',
            display: 'flex',
            gap: '4px',
          }}
        >
          <div style={{ flex: 3, backgroundColor: PINK, opacity: 0.8 }} />
          <div style={{ flex: 2, backgroundColor: TEAL, opacity: 0.6 }} />
          <div style={{ flex: 1, backgroundColor: PINK, opacity: 0.4 }} />
          <div style={{ flex: 4, backgroundColor: TEAL, opacity: 0.9 }} />
          <div style={{ flex: 1, backgroundColor: PINK, opacity: 0.5 }} />
        </div>

        {/* ===== PROJECTS SECTION ===== */}
        <section
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '60px 40px',
          }}
        >
          {/* Halftone teal accent behind heading */}
          <div
            className="riso-halftone-teal"
            style={{
              position: 'absolute',
              top: '40px',
              left: '20px',
              width: '300px',
              height: '100px',
              opacity: 0.12,
              pointerEvents: 'none',
            }}
          />

          <h2
            className="riso-heading riso-misreg-teal"
            data-text="Projects"
            style={{
              fontSize: 'clamp(36px, 7vw, 72px)',
              color: TEAL,
              marginBottom: '48px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Projects
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
            }}
          >
            {projects.map((project, i) => {
              const isPink = i % 2 === 0
              const accent = isPink ? PINK : TEAL
              const secondaryAccent = isPink ? TEAL : PINK
              const cardOpacity = isPink ? 1.0 : 0.9

              return (
                <div
                  key={project.name}
                  className="riso-card"
                  style={{
                    position: 'relative',
                    backgroundColor: PAPER,
                    border: `3px solid ${accent}`,
                    padding: '36px 32px',
                    opacity: cardOpacity,
                  }}
                >
                  {/* Offset shadow block (misregistration feel) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '4px',
                      left: '4px',
                      right: '-4px',
                      bottom: '-4px',
                      border: `2px solid ${secondaryAccent}`,
                      opacity: 0.4,
                      pointerEvents: 'none',
                      zIndex: -1,
                      mixBlendMode: 'multiply',
                    }}
                  />

                  {/* Number marker */}
                  <span
                    className="riso-heading"
                    style={{
                      fontSize: '64px',
                      color: accent,
                      opacity: 0.15,
                      position: 'absolute',
                      top: '-10px',
                      right: '16px',
                      lineHeight: 1,
                      pointerEvents: 'none',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Decorative halftone corner */}
                  <div
                    className={isPink ? 'riso-halftone-pink' : 'riso-halftone-teal'}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: '80px',
                      height: '80px',
                      opacity: 0.15,
                      pointerEvents: 'none',
                    }}
                  />

                  <h3
                    className="riso-heading"
                    style={{
                      fontSize: 'clamp(24px, 3.5vw, 36px)',
                      color: accent,
                      marginBottom: '14px',
                      position: 'relative',
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      color: TEAL,
                      lineHeight: 1.7,
                      marginBottom: '20px',
                      opacity: 0.8,
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
                      marginBottom: '28px',
                    }}
                  >
                    {project.tech.map((t, ti) => {
                      const tagIsPink = ti % 2 === 0
                      return (
                        <span
                          key={t}
                          style={{
                            fontSize: '10px',
                            fontFamily: "'Space Mono', monospace",
                            fontWeight: 700,
                            color: tagIsPink ? PINK : TEAL,
                            border: `1.5px solid ${tagIsPink ? PINK : TEAL}`,
                            padding: '4px 10px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            opacity: 0.7 + ti * 0.06,
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
                      borderTop: `2px solid ${accent}`,
                      paddingTop: '20px',
                      opacity: 0.85,
                    }}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="riso-link"
                      style={{
                        color: PAPER,
                        textDecoration: 'none',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '11px',
                        backgroundColor: accent,
                        padding: '8px 18px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'opacity 0.15s ease',
                      }}
                    >
                      Visit &rarr;
                    </a>
                    <Link
                      to={project.cvAnchor}
                      className="riso-link"
                      style={{
                        color: secondaryAccent,
                        textDecoration: 'none',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '11px',
                        backgroundColor: 'transparent',
                        border: `1.5px solid ${secondaryAccent}`,
                        padding: '7px 16px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'opacity 0.15s ease',
                      }}
                    >
                      CV Entry
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ===== GEOMETRIC DIVIDER ===== */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '0 40px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            margin: '12px 0',
          }}
        >
          {/* Pink circle */}
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: PINK,
              opacity: 0.6,
              flexShrink: 0,
            }}
          />
          {/* Teal line */}
          <div style={{ flex: 1, height: '2px', backgroundColor: TEAL, opacity: 0.3 }} />
          {/* Teal triangle */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderBottom: `20px solid ${TEAL}`,
              opacity: 0.5,
              flexShrink: 0,
            }}
          />
          {/* Pink line */}
          <div style={{ flex: 1, height: '2px', backgroundColor: PINK, opacity: 0.3 }} />
          {/* Teal circle */}
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: TEAL,
              opacity: 0.6,
              flexShrink: 0,
            }}
          />
        </div>

        {/* ===== INTERESTS SECTION ===== */}
        <section
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '60px 40px',
          }}
        >
          {/* Large decorative triangle */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '60px',
              width: 0,
              height: 0,
              borderLeft: '100px solid transparent',
              borderRight: '100px solid transparent',
              borderBottom: `170px solid ${PINK}`,
              opacity: 0.08,
              pointerEvents: 'none',
            }}
          />

          <h2
            className="riso-heading riso-misreg-pink"
            data-text="Interests"
            style={{
              fontSize: 'clamp(36px, 7vw, 72px)',
              color: PINK,
              marginBottom: '40px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Interests
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            {personal.interests.map((interest, i) => {
              const isPink = i % 2 === 0
              const color = isPink ? PINK : TEAL
              const inkOpacity = 0.5 + i * 0.1

              return (
                <div
                  key={interest.label}
                  className="riso-interest"
                  style={{
                    position: 'relative',
                    border: `2px solid ${color}`,
                    padding: '14px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'default',
                    backgroundColor: PAPER,
                  }}
                >
                  {/* Misregistration offset border */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: '3px',
                      right: '-3px',
                      bottom: '-2px',
                      border: `1.5px solid ${isPink ? TEAL : PINK}`,
                      opacity: 0.3,
                      pointerEvents: 'none',
                      mixBlendMode: 'multiply',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '16px',
                      color: color,
                      opacity: inkOpacity,
                    }}
                  >
                    {interestIcons[interest.icon] || '***'}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Chivo', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      color: color,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      opacity: inkOpacity,
                    }}
                  >
                    {interest.label}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* ===== COLOPHON / PRINT INFO BLOCK ===== */}
        <section
          style={{
            position: 'relative',
            zIndex: 1,
            margin: '0 40px',
            padding: '40px 36px',
            border: `2px solid ${TEAL}`,
            backgroundColor: PAPER,
            marginBottom: '40px',
          }}
        >
          {/* Halftone fill */}
          <div
            className="riso-halftone-teal"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.04,
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '32px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {['Build', 'Ship', 'Break', 'Learn'].map((word, i) => {
              const isPink = i % 2 === 0
              const color = isPink ? PINK : TEAL
              const opacity = 0.4 + i * 0.2

              return (
                <div
                  key={word}
                  style={{
                    textAlign: 'center',
                    padding: '20px 0',
                  }}
                >
                  <span
                    className="riso-heading riso-misreg-teal"
                    data-text={word}
                    style={{
                      fontSize: 'clamp(28px, 4vw, 48px)',
                      color: color,
                      opacity: opacity,
                      display: 'inline-block',
                      transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
                    }}
                  >
                    {word}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '28px 40px',
            borderTop: `2px solid ${TEAL}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              color: TEAL,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              margin: 0,
              opacity: 0.6,
            }}
          >
            Risograph Edition &middot; {new Date().getFullYear()}
          </p>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              color: PINK,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              margin: 0,
              opacity: 0.6,
            }}
          >
            2-color spot print &middot; Pink + Teal
          </p>
        </footer>
      </div>
    </>
  )
}
