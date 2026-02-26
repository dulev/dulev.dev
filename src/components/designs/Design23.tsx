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

const NEWSPRINT = '#e8e4d8'
const BLACK = '#111111'
const RED = '#d42020'
const INK = '#1a1a1a'

// Jagged clip-path polygon for rough/torn edges
const JAGGED_CLIP =
  'polygon(2% 0%, 5% 2%, 8% 0%, 12% 1%, 15% 0%, 20% 2%, 24% 0%, 28% 1%, 32% 0%, 36% 2%, 40% 0%, 44% 1%, 48% 0%, 52% 2%, 56% 0%, 60% 1%, 64% 0%, 68% 2%, 72% 0%, 76% 1%, 80% 0%, 84% 2%, 88% 0%, 92% 1%, 96% 0%, 100% 2%, 100% 6%, 98% 10%, 100% 14%, 99% 18%, 100% 22%, 98% 26%, 100% 30%, 99% 34%, 100% 38%, 98% 42%, 100% 46%, 99% 50%, 100% 54%, 98% 58%, 100% 62%, 99% 66%, 100% 70%, 98% 74%, 100% 78%, 99% 82%, 100% 86%, 98% 90%, 100% 94%, 99% 98%, 100% 100%, 96% 100%, 92% 98%, 88% 100%, 84% 99%, 80% 100%, 76% 98%, 72% 100%, 68% 99%, 64% 100%, 60% 98%, 56% 100%, 52% 99%, 48% 100%, 44% 98%, 40% 100%, 36% 99%, 32% 100%, 28% 98%, 24% 100%, 20% 99%, 16% 100%, 12% 98%, 8% 100%, 4% 99%, 0% 100%, 0% 96%, 2% 92%, 0% 88%, 1% 84%, 0% 80%, 2% 76%, 0% 72%, 1% 68%, 0% 64%, 2% 60%, 0% 56%, 1% 52%, 0% 48%, 2% 44%, 0% 40%, 1% 36%, 0% 32%, 2% 28%, 0% 24%, 1% 20%, 0% 16%, 2% 12%, 0% 8%, 1% 4%)'

// Rotations for collage overlap effect
const ROTATIONS = [-2.5, 1.8, -1.2, 2.4, -3, 1.5]

/** Ransom-note style: alternate bold/light/italic per word */
function RansomText({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ')
  const styles: React.CSSProperties[] = [
    {
      fontWeight: 900,
      fontStyle: 'normal',
      fontFamily: "'Saira Stencil One', sans-serif",
      textTransform: 'uppercase',
    },
    {
      fontWeight: 400,
      fontStyle: 'italic',
      fontFamily: "'Anonymous Pro', monospace",
      textTransform: 'lowercase',
    },
    {
      fontWeight: 700,
      fontStyle: 'normal',
      fontFamily: "'Anonymous Pro', monospace",
      textTransform: 'uppercase',
      textDecoration: 'underline',
      textDecorationStyle: 'wavy',
      textDecorationColor: RED,
    },
    {
      fontWeight: 900,
      fontStyle: 'normal',
      fontFamily: "'Saira Stencil One', sans-serif",
      textTransform: 'uppercase',
      backgroundColor: RED,
      color: NEWSPRINT,
      padding: '0 4px',
    },
    {
      fontWeight: 400,
      fontStyle: 'normal',
      fontFamily: "'Anonymous Pro', monospace",
      textTransform: 'uppercase',
      border: `2px solid ${INK}`,
      padding: '0 3px',
    },
  ]
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ ...styles[i % styles.length], marginRight: '6px' }}>
          {word}
        </span>
      ))}
    </span>
  )
}

/** Crop marks around a section */
function CropMarks({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const markStyle: React.CSSProperties = {
    position: 'absolute',
    width: '24px',
    height: '24px',
    pointerEvents: 'none',
  }
  const lineColor = `2px solid ${INK}`
  return (
    <div style={{ position: 'relative', ...style }}>
      {/* Top-left */}
      <div style={{ ...markStyle, top: -8, left: -8, borderTop: lineColor, borderLeft: lineColor }} />
      {/* Top-right */}
      <div style={{ ...markStyle, top: -8, right: -8, borderTop: lineColor, borderRight: lineColor }} />
      {/* Bottom-left */}
      <div style={{ ...markStyle, bottom: -8, left: -8, borderBottom: lineColor, borderLeft: lineColor }} />
      {/* Bottom-right */}
      <div style={{ ...markStyle, bottom: -8, right: -8, borderBottom: lineColor, borderRight: lineColor }} />
      {children}
    </div>
  )
}

/** Tape strip decoration */
function TapeStrip({ top, left, rotation }: { top: string; left: string; rotation: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        width: '80px',
        height: '22px',
        background: `repeating-linear-gradient(
          45deg,
          rgba(200, 190, 160, 0.5),
          rgba(200, 190, 160, 0.5) 4px,
          rgba(180, 170, 140, 0.35) 4px,
          rgba(180, 170, 140, 0.35) 8px
        )`,
        border: `1px solid rgba(160, 150, 120, 0.4)`,
        transform: `rotate(${rotation}deg)`,
        pointerEvents: 'none',
        zIndex: 10,
      }}
    />
  )
}

/** X mark decoration */
function XMark({ top, right, size = 28 }: { top: string; right: string; size?: number }) {
  return (
    <span
      style={{
        position: 'absolute',
        top,
        right,
        fontFamily: "'Saira Stencil One', sans-serif",
        fontSize: `${size}px`,
        color: RED,
        lineHeight: 1,
        pointerEvents: 'none',
        transform: 'rotate(12deg)',
        zIndex: 5,
        userSelect: 'none',
      }}
    >
      X
    </span>
  )
}

export function Design23() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Saira+Stencil+One&family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .sp-root {
          font-family: 'Anonymous Pro', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${NEWSPRINT};
          color: ${INK};
          position: relative;
          overflow-x: hidden;
        }

        .sp-root * {
          box-sizing: border-box;
        }

        /* Xerox grain overlay */
        .sp-root::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: 0.06;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px 200px;
        }

        .sp-stencil {
          font-family: 'Saira Stencil One', sans-serif;
          text-transform: uppercase;
          line-height: 1.1;
          letter-spacing: 2px;
        }

        .sp-mono {
          font-family: 'Anonymous Pro', monospace;
        }

        .sp-card:hover {
          filter: contrast(1.2);
        }

        .sp-link:hover {
          background-color: ${RED} !important;
          color: ${NEWSPRINT} !important;
        }

        .sp-link-inv:hover {
          background-color: ${INK} !important;
          color: ${NEWSPRINT} !important;
        }

        .sp-tag:hover {
          background-color: ${RED} !important;
          color: ${NEWSPRINT} !important;
          border-color: ${RED} !important;
        }

        .sp-interest:hover {
          background-color: ${INK} !important;
          color: ${NEWSPRINT} !important;
        }

        @keyframes spFlicker {
          0%, 95%, 100% { opacity: 1; }
          96% { opacity: 0.7; }
          97% { opacity: 1; }
          98% { opacity: 0.6; }
        }

        .sp-flicker {
          animation: spFlicker 4s ease-in-out infinite;
        }
      `}</style>

      <div className="sp-root">
        {/* ===== CUT LINE TOP ===== */}
        <div
          style={{
            borderBottom: `2px dashed ${INK}`,
            padding: '6px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            opacity: 0.5,
          }}
        >
          <span className="sp-mono" style={{ fontSize: '10px', letterSpacing: '3px' }}>
            - - - CUT HERE - - -
          </span>
          <span className="sp-mono" style={{ fontSize: '10px', letterSpacing: '3px' }}>
            &#9986; &#9986; &#9986;
          </span>
        </div>

        {/* ===== NAVIGATION ===== */}
        <nav
          style={{
            padding: '20px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: `3px solid ${INK}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontFamily: "'Saira Stencil One', sans-serif",
                fontSize: '20px',
                color: RED,
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}
            >
              * DULEV.DEV *
            </span>
          </div>
          <Link
            to="/"
            className="sp-link"
            style={{
              color: INK,
              textDecoration: 'none',
              fontFamily: "'Saira Stencil One', sans-serif",
              fontSize: '12px',
              border: `3px solid ${INK}`,
              padding: '8px 20px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              backgroundColor: 'transparent',
              transform: 'rotate(-1deg)',
              display: 'inline-block',
            }}
          >
            &larr; BACK HOME
          </Link>
        </nav>

        {/* ===== HERO SECTION ===== */}
        <section
          style={{
            padding: '64px 32px 80px',
            position: 'relative',
            borderBottom: `2px dashed ${INK}`,
          }}
        >
          {/* Tape decorations */}
          <TapeStrip top="20px" left="60%" rotation={-8} />
          <TapeStrip top="40px" left="85%" rotation={15} />
          <XMark top="30px" right="40px" size={48} />

          {/* Crop marks wrapper */}
          <CropMarks style={{ maxWidth: '800px' }}>
            <h1
              className="sp-stencil"
              style={{
                fontSize: 'clamp(48px, 10vw, 100px)',
                color: INK,
                marginBottom: '4px',
                lineHeight: 0.95,
                transform: 'rotate(-1.5deg)',
              }}
            >
              {intro.name}
            </h1>

            <div
              style={{
                display: 'inline-block',
                backgroundColor: RED,
                padding: '8px 16px',
                marginBottom: '24px',
                transform: 'rotate(0.8deg)',
                clipPath: JAGGED_CLIP,
              }}
            >
              <p
                className="sp-stencil"
                style={{
                  fontSize: 'clamp(13px, 2.2vw, 20px)',
                  color: NEWSPRINT,
                  margin: 0,
                  letterSpacing: '3px',
                }}
              >
                {intro.tagline}
              </p>
            </div>

            <p
              className="sp-mono"
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: INK,
                maxWidth: '580px',
                lineHeight: 1.9,
                marginBottom: '32px',
                borderLeft: `4px solid ${RED}`,
                paddingLeft: '16px',
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
                className="sp-link"
                style={{
                  color: INK,
                  textDecoration: 'none',
                  fontFamily: "'Saira Stencil One', sans-serif",
                  fontSize: '12px',
                  border: `3px solid ${INK}`,
                  padding: '8px 20px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  backgroundColor: 'transparent',
                  transform: 'rotate(1.5deg)',
                  display: 'inline-block',
                }}
              >
                GITHUB *
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-link"
                style={{
                  color: NEWSPRINT,
                  textDecoration: 'none',
                  fontFamily: "'Saira Stencil One', sans-serif",
                  fontSize: '12px',
                  border: `3px solid ${RED}`,
                  padding: '8px 20px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  backgroundColor: RED,
                  transform: 'rotate(-1deg)',
                  display: 'inline-block',
                }}
              >
                LINKEDIN *
              </a>
              <Link
                to={intro.links.uses}
                className="sp-link-inv"
                style={{
                  color: NEWSPRINT,
                  textDecoration: 'none',
                  fontFamily: "'Saira Stencil One', sans-serif",
                  fontSize: '12px',
                  border: `3px solid ${INK}`,
                  padding: '8px 20px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  backgroundColor: INK,
                  transform: 'rotate(0.5deg)',
                  display: 'inline-block',
                }}
              >
                /USES
              </Link>
            </div>
          </CropMarks>

          {/* Decorative asterisks */}
          <span
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '60px',
              fontFamily: "'Saira Stencil One', sans-serif",
              fontSize: '72px',
              color: RED,
              opacity: 0.15,
              transform: 'rotate(15deg)',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            ***
          </span>
        </section>

        {/* ===== SAFETY PIN DIVIDER ===== */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 0',
            gap: '8px',
            borderBottom: `2px dashed ${INK}`,
          }}
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Saira Stencil One', sans-serif",
                fontSize: '18px',
                color: i % 2 === 0 ? RED : INK,
                transform: `rotate(${i % 2 === 0 ? 90 : 0}deg)`,
                display: 'inline-block',
              }}
            >
              {i % 3 === 0 ? 'X' : i % 3 === 1 ? '*' : '+'}
            </span>
          ))}
        </div>

        {/* ===== PROJECTS SECTION ===== */}
        <section style={{ padding: '48px 32px 64px', position: 'relative' }}>
          <TapeStrip top="20px" left="30%" rotation={5} />
          <XMark top="10px" right="120px" />

          <div style={{ marginBottom: '40px' }}>
            <h2
              className="sp-stencil"
              style={{
                fontSize: 'clamp(32px, 6vw, 56px)',
                color: INK,
                marginBottom: '4px',
                display: 'inline-block',
                borderBottom: `4px solid ${RED}`,
                paddingBottom: '4px',
              }}
            >
              PROJECTS
            </h2>
            <span
              className="sp-mono"
              style={{
                display: 'block',
                fontSize: '11px',
                color: RED,
                letterSpacing: '4px',
                marginTop: '6px',
              }}
            >
              {'// SELECTED WORKS //'}
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '48px',
            }}
          >
            {projects.map((project, i) => {
              const rotation = ROTATIONS[i % ROTATIONS.length]
              return (
                <CropMarks key={project.name}>
                  <div
                    className="sp-card"
                    style={{
                      backgroundColor: NEWSPRINT,
                      border: `3px solid ${INK}`,
                      padding: '32px',
                      position: 'relative',
                      transform: `rotate(${rotation}deg)`,
                      clipPath: JAGGED_CLIP,
                      boxShadow: `6px 6px 0px ${INK}`,
                    }}
                  >
                    {/* Card number stamp */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '16px',
                        fontFamily: "'Saira Stencil One', sans-serif",
                        fontSize: '40px',
                        color: RED,
                        opacity: 0.2,
                        lineHeight: 1,
                        userSelect: 'none',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Tape on card */}
                    <TapeStrip top="-8px" left="20px" rotation={-3} />

                    <h3 style={{ marginBottom: '12px', display: 'inline-block' }}>
                      <RansomText
                        text={project.name}
                        className="sp-stencil"
                      />
                    </h3>

                    <p
                      className="sp-mono"
                      style={{
                        fontSize: '14px',
                        color: INK,
                        lineHeight: 1.8,
                        marginBottom: '20px',
                        fontWeight: 700,
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
                      {project.tech.map((t, ti) => (
                        <span
                          key={t}
                          className="sp-tag"
                          style={{
                            fontSize: '10px',
                            fontWeight: 700,
                            fontFamily: "'Anonymous Pro', monospace",
                            color: ti % 2 === 0 ? INK : NEWSPRINT,
                            backgroundColor: ti % 2 === 0 ? 'transparent' : INK,
                            border: `2px solid ${INK}`,
                            padding: '3px 10px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            transform: `rotate(${ti % 2 === 0 ? -1 : 1}deg)`,
                            display: 'inline-block',
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
                        borderTop: `2px dashed ${INK}`,
                        paddingTop: '16px',
                      }}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sp-link"
                        style={{
                          color: NEWSPRINT,
                          textDecoration: 'none',
                          fontFamily: "'Saira Stencil One', sans-serif",
                          fontSize: '11px',
                          backgroundColor: RED,
                          border: `2px solid ${RED}`,
                          padding: '6px 14px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                        }}
                      >
                        VISIT &rarr;
                      </a>
                      <Link
                        to={project.cvAnchor}
                        className="sp-link-inv"
                        style={{
                          color: NEWSPRINT,
                          textDecoration: 'none',
                          fontFamily: "'Saira Stencil One', sans-serif",
                          fontSize: '11px',
                          backgroundColor: INK,
                          border: `2px solid ${INK}`,
                          padding: '6px 14px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                        }}
                      >
                        CV ENTRY
                      </Link>
                    </div>
                  </div>
                </CropMarks>
              )
            })}
          </div>
        </section>

        {/* ===== CUT LINE DIVIDER ===== */}
        <div
          style={{
            borderTop: `2px dashed ${INK}`,
            borderBottom: `2px dashed ${INK}`,
            padding: '8px 32px',
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            opacity: 0.4,
          }}
        >
          <span className="sp-mono" style={{ fontSize: '10px', letterSpacing: '6px' }}>
            &#9986; - - - - - - - - FOLD HERE - - - - - - - - &#9986;
          </span>
        </div>

        {/* ===== INTERESTS SECTION ===== */}
        <section style={{ padding: '48px 32px 64px', position: 'relative' }}>
          <XMark top="20px" right="80px" size={36} />

          <CropMarks style={{ marginBottom: '40px', display: 'inline-block' }}>
            <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
              <RansomText
                text="OFF THE Clock"
                className="sp-stencil"
              />
              <span
                style={{
                  fontFamily: "'Saira Stencil One', sans-serif",
                  fontSize: 'clamp(32px, 6vw, 56px)',
                  color: RED,
                }}
              >
                *
              </span>
            </h2>
          </CropMarks>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            {personal.interests.map((interest, i) => {
              const rotation = ROTATIONS[i % ROTATIONS.length]
              const isRed = i % 3 === 0
              return (
                <div
                  key={interest.label}
                  className="sp-interest"
                  style={{
                    backgroundColor: isRed ? RED : 'transparent',
                    color: isRed ? NEWSPRINT : INK,
                    border: `3px solid ${isRed ? RED : INK}`,
                    padding: '14px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'default',
                    transform: `rotate(${rotation}deg)`,
                    clipPath: JAGGED_CLIP,
                    boxShadow: isRed ? 'none' : `4px 4px 0px ${INK}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Saira Stencil One', sans-serif",
                      fontSize: '13px',
                    }}
                  >
                    {interestIcons[interest.icon] || '***'}
                  </span>
                  <span
                    className="sp-mono"
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                    }}
                  >
                    {interest.label}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* ===== MANIFESTO STRIP ===== */}
        <section
          style={{
            backgroundColor: INK,
            padding: '40px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <TapeStrip top="8px" left="10%" rotation={-4} />
          <TapeStrip top="8px" left="75%" rotation={7} />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {['BUILD', 'SHIP', 'BREAK', 'LEARN', 'REPEAT'].map((word, i) => {
              const isRed = i % 2 === 0
              return (
                <span
                  key={word}
                  className="sp-stencil sp-flicker"
                  style={{
                    fontSize: 'clamp(28px, 5vw, 52px)',
                    color: isRed ? RED : NEWSPRINT,
                    transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
                    display: 'inline-block',
                    animationDelay: `${i * 0.8}s`,
                    letterSpacing: '4px',
                  }}
                >
                  {word}
                </span>
              )
            })}
          </div>

          {/* Large background X */}
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-12deg)',
              fontFamily: "'Saira Stencil One', sans-serif",
              fontSize: '300px',
              color: RED,
              opacity: 0.05,
              pointerEvents: 'none',
              userSelect: 'none',
              lineHeight: 1,
            }}
          >
            X
          </span>
        </section>

        {/* ===== CUT LINE BOTTOM ===== */}
        <div
          style={{
            borderTop: `2px dashed ${INK}`,
            padding: '6px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            opacity: 0.5,
          }}
        >
          <span className="sp-mono" style={{ fontSize: '10px', letterSpacing: '3px' }}>
            &#9986; &#9986; &#9986;
          </span>
          <span className="sp-mono" style={{ fontSize: '10px', letterSpacing: '3px' }}>
            - - - CUT HERE - - -
          </span>
        </div>

        {/* ===== FOOTER ===== */}
        <footer
          style={{
            padding: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            borderTop: `3px solid ${INK}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              className="sp-stencil"
              style={{ fontSize: '11px', color: RED, letterSpacing: '3px' }}
            >
              STENCIL PUNK
            </span>
            <span className="sp-mono" style={{ fontSize: '11px', color: INK, opacity: 0.5 }}>
              &middot;
            </span>
            <span className="sp-mono" style={{ fontSize: '11px', color: INK, opacity: 0.6 }}>
              {new Date().getFullYear()}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              className="sp-stencil"
              style={{ fontSize: '11px', color: INK, opacity: 0.6, letterSpacing: '2px' }}
            >
              DESIGN 23
            </span>
            <span style={{ color: RED, fontSize: '16px' }}>*</span>
            <span
              className="sp-mono"
              style={{ fontSize: '10px', color: INK, opacity: 0.4, letterSpacing: '2px' }}
            >
              DIY OR DIE
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}
