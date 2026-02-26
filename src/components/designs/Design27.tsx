import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '\u266A',
  running: '\u2192',
  bike: '\u26B2',
  mountains: '\u25B2',
  terminal: '>_',
}

// Palette
const BG = '#F5F0EB'
const TERRACOTTA = '#C65D3E'
const BLUE = '#5B8BA0'
const BLACK = '#1A1A1A'
const OFF_WHITE = '#FDFBF8'
const TEXT = '#2A2A2A'
const TEXT_DIM = '#6B6560'

// Card rotations for that "pinned to board" feel
const CARD_ROTATIONS = [-1.2, 0.8, -0.6, 1.5, -1.0, 0.4, -1.4, 1.1]

// Slightly irregular clip paths to mimic torn paper edges
const TORN_CLIPS = [
  'polygon(0% 1%, 2% 0%, 98% 0.5%, 100% 2%, 99.5% 98%, 97% 100%, 1.5% 99%, 0% 97%)',
  'polygon(1% 0%, 99% 0%, 100% 1.5%, 99% 97%, 100% 100%, 2% 99.5%, 0% 98%, 0.5% 2%)',
  'polygon(0% 0.5%, 1.5% 0%, 97% 1%, 100% 0%, 99.5% 99%, 98% 100%, 0.5% 99%, 0% 97.5%)',
  'polygon(0.5% 0%, 99% 0.5%, 100% 1%, 100% 98.5%, 98.5% 100%, 1% 100%, 0% 99%, 0% 1.5%)',
]

// Washi tape colors
const TAPE_COLORS = [
  'rgba(198, 93, 62, 0.35)',
  'rgba(91, 139, 160, 0.35)',
  'rgba(198, 93, 62, 0.25)',
  'rgba(91, 139, 160, 0.25)',
]

export function Design27() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito+Sans:wght@400;500;600&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        /* ===== SVG FILTER FOR PAPER GRAIN ===== */

        /* ===== ROOT ===== */
        .pc-root {
          font-family: 'Nunito Sans', 'Helvetica Neue', Arial, sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${BG};
          color: ${TEXT};
          line-height: 1.7;
          position: relative;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .pc-root *,
        .pc-root *::before,
        .pc-root *::after {
          box-sizing: border-box;
        }

        /* Paper grain overlay */
        .pc-grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* ===== CONTAINER ===== */
        .pc-container {
          max-width: 880px;
          margin: 0 auto;
          padding: 48px 32px 80px;
          position: relative;
          z-index: 1;
        }

        /* ===== BACK LINK ===== */
        .pc-back-link {
          display: inline-block;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: ${TEXT_DIM};
          text-decoration: none;
          margin-bottom: 40px;
          padding: 6px 16px;
          background: ${OFF_WHITE};
          border: 3px solid ${BLACK};
          box-shadow: 3px 3px 0 ${BLACK};
          transition: all 0.2s ease;
          transform: rotate(-0.5deg);
        }

        .pc-back-link:hover {
          transform: rotate(0deg);
          box-shadow: 5px 5px 0 ${BLACK};
          color: ${TERRACOTTA};
        }

        /* ===== HERO SECTION ===== */
        .pc-hero {
          margin-bottom: 56px;
          position: relative;
        }

        .pc-name-strip {
          display: inline-block;
          background: ${TERRACOTTA};
          padding: 12px 32px 14px;
          border: 3px solid ${BLACK};
          box-shadow: 5px 5px 0 ${BLACK};
          transform: rotate(-0.8deg);
          margin-bottom: 20px;
          clip-path: ${TORN_CLIPS[0]};
        }

        .pc-name {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 6vw, 3.6rem);
          font-weight: 900;
          color: ${OFF_WHITE};
          margin: 0;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .pc-tagline-wrap {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
        }

        .pc-tagline {
          font-family: 'Nunito Sans', sans-serif;
          font-size: clamp(0.95rem, 2.5vw, 1.2rem);
          font-weight: 500;
          color: ${TEXT};
          margin: 0;
          position: relative;
          display: inline-block;
        }

        /* Hand-drawn underline SVG */
        .pc-tagline-underline {
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 8px;
          overflow: visible;
        }

        .pc-bio {
          font-size: 0.95rem;
          color: ${TEXT_DIM};
          max-width: 520px;
          line-height: 1.85;
          margin: 16px 0 0;
          font-weight: 400;
        }

        /* ===== HERO LINKS ===== */
        .pc-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .pc-hero-link {
          font-family: 'Nunito Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: ${BLACK};
          text-decoration: none;
          padding: 8px 20px;
          background: ${OFF_WHITE};
          border: 3px solid ${BLACK};
          box-shadow: 3px 3px 0 ${BLACK};
          transition: all 0.2s ease;
          text-transform: lowercase;
        }

        .pc-hero-link:hover {
          transform: translateY(-1px);
          box-shadow: 5px 5px 0 ${BLACK};
          color: ${TERRACOTTA};
        }

        .pc-hero-link--blue:hover {
          color: ${BLUE};
        }

        /* ===== SECTION HEADERS ===== */
        .pc-section-header {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.5rem, 3.5vw, 2rem);
          font-weight: 800;
          color: ${BLACK};
          margin: 0 0 28px;
          display: inline-block;
          position: relative;
        }

        .pc-section-header::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: ${TERRACOTTA};
          transform: rotate(-0.3deg);
        }

        .pc-section-header--blue::after {
          background: ${BLUE};
        }

        /* ===== PIN MARKS ===== */
        .pc-pin {
          position: absolute;
          font-size: 1rem;
          color: ${TERRACOTTA};
          font-weight: 900;
          line-height: 1;
          user-select: none;
          z-index: 5;
        }

        .pc-pin--blue {
          color: ${BLUE};
        }

        /* ===== PROJECT CARDS ===== */
        .pc-projects {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-bottom: 64px;
        }

        .pc-card {
          background: ${OFF_WHITE};
          padding: 32px 28px 28px;
          border: 3px solid ${BLACK};
          box-shadow: 5px 5px 0 ${BLACK};
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .pc-card:hover {
          transform: rotate(0deg) !important;
          box-shadow: 8px 8px 0 ${BLACK};
        }

        /* Washi tape decorations */
        .pc-tape {
          position: absolute;
          top: -8px;
          width: 80px;
          height: 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          z-index: 5;
        }

        .pc-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: ${BLACK};
          margin: 0 0 8px;
          letter-spacing: -0.2px;
        }

        .pc-card p {
          font-size: 0.9rem;
          color: ${TEXT_DIM};
          line-height: 1.75;
          margin: 0 0 16px;
        }

        /* ===== TECH TAGS ===== */
        .pc-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 16px 0;
          padding: 0;
          list-style: none;
        }

        .pc-tech-item {
          font-family: 'Nunito Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          padding: 4px 12px;
          border: 2px solid ${BLACK};
          color: ${BLACK};
          background: transparent;
          transition: all 0.2s;
        }

        .pc-tech-item--terra {
          border-color: ${TERRACOTTA};
          color: ${TERRACOTTA};
        }

        .pc-tech-item--blue {
          border-color: ${BLUE};
          color: ${BLUE};
        }

        /* ===== CARD LINKS ===== */
        .pc-card-links {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .pc-card-links a {
          font-family: 'Nunito Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: ${BLACK};
          text-decoration: none;
          padding: 6px 16px;
          border: 2px solid ${BLACK};
          background: ${OFF_WHITE};
          box-shadow: 2px 2px 0 ${BLACK};
          transition: all 0.2s ease;
        }

        .pc-card-links a:hover {
          box-shadow: 4px 4px 0 ${BLACK};
          transform: translateY(-1px);
        }

        .pc-card-links a.pc-link--terra:hover {
          color: ${TERRACOTTA};
          border-color: ${TERRACOTTA};
          box-shadow: 4px 4px 0 ${TERRACOTTA};
        }

        .pc-card-links a.pc-link--blue:hover {
          color: ${BLUE};
          border-color: ${BLUE};
          box-shadow: 4px 4px 0 ${BLUE};
        }

        /* ===== INTERESTS ===== */
        .pc-interests {
          margin-bottom: 64px;
        }

        .pc-interest-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: flex-start;
        }

        .pc-interest-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 110px;
          height: 100px;
          background: ${OFF_WHITE};
          border: 3px solid ${BLACK};
          box-shadow: 3px 3px 0 ${BLACK};
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          gap: 6px;
        }

        .pc-interest-item:hover {
          transform: rotate(0deg) !important;
          box-shadow: 5px 5px 0 ${BLACK};
        }

        .pc-interest-icon {
          font-size: 1.4rem;
          line-height: 1;
        }

        .pc-interest-label {
          font-family: 'Nunito Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          color: ${TEXT};
          text-align: center;
        }

        /* ===== FOOTER ===== */
        .pc-footer {
          margin-top: 64px;
          padding-top: 24px;
          position: relative;
        }

        .pc-footer-strip {
          display: inline-block;
          background: ${OFF_WHITE};
          border: 3px solid ${BLACK};
          box-shadow: 3px 3px 0 ${BLACK};
          padding: 12px 28px;
          transform: rotate(0.4deg);
          clip-path: ${TORN_CLIPS[2]};
        }

        .pc-footer-text {
          font-family: 'Nunito Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          color: ${TEXT_DIM};
        }

        /* ===== SCATTERED DECORATIVE ELEMENTS ===== */
        .pc-deco-x {
          position: absolute;
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 1.1rem;
          color: ${TERRACOTTA};
          opacity: 0.25;
          user-select: none;
          z-index: 0;
        }

        .pc-deco-x--blue {
          color: ${BLUE};
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .pc-container {
            padding: 28px 18px 60px;
          }
          .pc-card {
            padding: 28px 20px 24px;
          }
          .pc-name-strip {
            padding: 10px 20px 12px;
          }
          .pc-interest-row {
            gap: 12px;
          }
          .pc-interest-item {
            width: 95px;
            height: 88px;
          }
          .pc-hero-links {
            gap: 8px;
          }
          .pc-deco-x {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .pc-interest-item {
            width: 85px;
            height: 80px;
          }
          .pc-tape {
            width: 60px;
            height: 20px;
          }
          .pc-card-links {
            flex-direction: column;
            gap: 8px;
          }
          .pc-card-links a {
            text-align: center;
          }
        }
      `}</style>

      <div className="pc-root">
        {/* Paper grain SVG filter overlay */}
        <svg className="pc-grain" aria-hidden="true">
          <filter id="paperGrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#paperGrain)"
            opacity="0.03"
          />
        </svg>

        <div className="pc-container">
          {/* Back navigation */}
          <Link to="/" className="pc-back-link">
            &larr; back
          </Link>

          {/* Scattered decorative X marks */}
          <span
            className="pc-deco-x"
            style={{ top: 120, right: 40 }}
            aria-hidden="true"
          >
            X
          </span>
          <span
            className="pc-deco-x pc-deco-x--blue"
            style={{ top: 320, left: 10 }}
            aria-hidden="true"
          >
            X
          </span>
          <span
            className="pc-deco-x"
            style={{ top: 580, right: 20 }}
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="pc-deco-x pc-deco-x--blue"
            style={{ top: 850, left: 20 }}
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="pc-deco-x"
            style={{ top: 1050, right: 60 }}
            aria-hidden="true"
          >
            X
          </span>

          {/* ===== HERO ===== */}
          <header className="pc-hero">
            <div className="pc-name-strip">
              <h1 className="pc-name">{intro.name}</h1>
            </div>

            <div className="pc-tagline-wrap">
              <p className="pc-tagline">{intro.tagline}</p>
              <svg
                className="pc-tagline-underline"
                viewBox="0 0 300 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 5 Q25 2 50 5 Q75 8 100 4 Q125 1 150 5 Q175 8 200 4 Q225 1 250 6 Q275 8 300 4"
                  stroke={TERRACOTTA}
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="pc-bio">{intro.bio}</p>

            <div className="pc-hero-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pc-hero-link"
              >
                github
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="pc-hero-link pc-hero-link--blue"
              >
                linkedin
              </a>
              <a href={intro.links.uses} className="pc-hero-link">
                /uses
              </a>
            </div>
          </header>

          {/* ===== PROJECTS ===== */}
          <section>
            <h2 className="pc-section-header">Projects</h2>

            <div className="pc-projects">
              {projects.map((project, idx) => {
                const rotation = CARD_ROTATIONS[idx % CARD_ROTATIONS.length]
                const clipIdx = idx % TORN_CLIPS.length
                const isEven = idx % 2 === 0
                const tapeColor = TAPE_COLORS[idx % TAPE_COLORS.length]
                const tapeRotation = isEven ? -3 : 4
                const tapeLeft = isEven ? '24px' : 'auto'
                const tapeRight = isEven ? 'auto' : '32px'

                return (
                  <div
                    key={project.name}
                    className="pc-card"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      clipPath: TORN_CLIPS[clipIdx],
                    }}
                  >
                    {/* Washi tape */}
                    <div
                      className="pc-tape"
                      style={{
                        background: tapeColor,
                        transform: `rotate(${tapeRotation}deg)`,
                        left: tapeLeft,
                        right: tapeRight,
                      }}
                      aria-hidden="true"
                    />

                    {/* Pin mark */}
                    <span
                      className={`pc-pin ${idx % 2 === 0 ? '' : 'pc-pin--blue'}`}
                      style={{
                        top: 8,
                        right: isEven ? 16 : 'auto',
                        left: isEven ? 'auto' : 16,
                      }}
                      aria-hidden="true"
                    >
                      {'\u00D7'}
                    </span>

                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <ul className="pc-tech-list">
                      {project.tech.map((t, tIdx) => (
                        <li
                          key={t}
                          className={`pc-tech-item ${tIdx % 2 === 0 ? (isEven ? 'pc-tech-item--terra' : 'pc-tech-item--blue') : ''}`}
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="pc-card-links">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isEven ? 'pc-link--terra' : 'pc-link--blue'}
                      >
                        visit &rarr;
                      </a>
                      <a
                        href={project.cvAnchor}
                        className={isEven ? 'pc-link--blue' : 'pc-link--terra'}
                      >
                        cv entry
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ===== INTERESTS ===== */}
          <section className="pc-interests">
            <h2 className="pc-section-header pc-section-header--blue">
              Interests
            </h2>

            <div className="pc-interest-row">
              {personal.interests.map((interest, idx) => {
                const rotation = CARD_ROTATIONS[(idx + 3) % CARD_ROTATIONS.length]
                const isEven = idx % 2 === 0
                const accentColor = isEven ? TERRACOTTA : BLUE

                return (
                  <div
                    key={interest.label}
                    className="pc-interest-item"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      borderColor: idx % 3 === 0 ? accentColor : BLACK,
                    }}
                  >
                    {/* Small tape on some items */}
                    {idx % 2 === 0 && (
                      <div
                        className="pc-tape"
                        style={{
                          background: TAPE_COLORS[(idx + 1) % TAPE_COLORS.length],
                          transform: `rotate(${idx % 2 === 0 ? 5 : -4}deg)`,
                          left: '15px',
                          width: '50px',
                          height: '16px',
                          top: '-6px',
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className="pc-interest-icon"
                      style={{ color: accentColor }}
                    >
                      {interestIcons[interest.icon] || '?'}
                    </span>
                    <span className="pc-interest-label">{interest.label}</span>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer className="pc-footer">
            <div className="pc-footer-strip">
              <span className="pc-footer-text">
                lovingly assembled by {intro.name.split(' ')[0].toLowerCase()}{' '}
                &middot; {new Date().getFullYear()}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
