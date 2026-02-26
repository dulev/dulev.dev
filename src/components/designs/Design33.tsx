import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '\u266A',
  running: '\u2192',
  bike: '\u25CB',
  mountains: '\u25B2',
  terminal: '>_',
}

const LIME = '#C8FF00'
const ORANGE = '#FF6B00'

export function Design33() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        /* ===== RESET & ROOT ===== */
        .mb-root {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 400;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: #FAFAF8;
          color: #111111;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .mb-root *,
        .mb-root *::before,
        .mb-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .mb-container {
          max-width: 880px;
          margin: 0 auto;
          padding: 48px 32px 80px;
        }

        /* ===== BACK LINK ===== */
        .mb-back {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          border: 3px solid #111;
          padding: 8px 20px;
          margin-bottom: 56px;
          transition: all 0.2s ease;
          background: transparent;
          box-shadow: 3px 3px 0 #111;
        }

        .mb-back:hover {
          background: ${LIME};
          box-shadow: 5px 5px 0 #111;
          transform: translate(-2px, -2px);
        }

        /* ===== MARKER HIGHLIGHT EFFECT ===== */
        .mb-highlight {
          position: relative;
          display: inline;
          z-index: 1;
        }

        .mb-highlight::after {
          content: '';
          position: absolute;
          left: -6px;
          right: -6px;
          bottom: 0;
          height: 40%;
          z-index: -1;
          transform: skewX(-2deg);
        }

        .mb-highlight-lime::after {
          background: ${LIME};
        }

        .mb-highlight-orange::after {
          background: ${ORANGE};
        }

        /* ===== HEADER ===== */
        .mb-header {
          margin-bottom: 0;
          padding-bottom: 56px;
        }

        .mb-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3.5rem, 10vw, 7rem);
          line-height: 1.05;
          color: #111;
          margin: 0;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .mb-name-highlight {
          position: relative;
          display: inline;
          z-index: 1;
        }

        .mb-name-highlight::after {
          content: '';
          position: absolute;
          left: -8px;
          right: -8px;
          bottom: 4px;
          height: 40%;
          background: ${LIME};
          z-index: -1;
          transform: skewX(-2deg) rotate(-0.5deg);
        }

        .mb-tagline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.05rem, 2.5vw, 1.4rem);
          font-weight: 500;
          color: #111;
          margin: 20px 0 0;
          position: relative;
          display: inline-block;
          z-index: 1;
        }

        .mb-tagline::after {
          content: '';
          position: absolute;
          left: -5px;
          right: -5px;
          bottom: 0;
          height: 40%;
          background: ${ORANGE};
          z-index: -1;
          transform: skewX(-2deg);
        }

        .mb-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #444;
          max-width: 540px;
          line-height: 1.75;
          margin: 28px 0 0;
        }

        /* ===== LINK ROW ===== */
        .mb-links-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 36px;
        }

        .mb-link-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          border: 3px solid #111;
          padding: 10px 24px;
          background: transparent;
          transition: all 0.2s ease;
          display: inline-block;
          box-shadow: 5px 5px 0 #111;
        }

        .mb-link-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0 #111;
        }

        .mb-link-btn-lime {
          background: ${LIME};
        }

        .mb-link-btn-orange {
          background: ${ORANGE};
        }

        /* ===== DIVIDER ===== */
        .mb-divider {
          border: none;
          height: 4px;
          background: #111;
          margin: 0;
        }

        /* ===== SECTION HEADERS ===== */
        .mb-section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #111;
          margin: 56px 0 36px;
          letter-spacing: -0.01em;
        }

        .mb-section-title-word {
          position: relative;
          display: inline;
          z-index: 1;
        }

        .mb-section-title-word::after {
          content: '';
          position: absolute;
          left: -5px;
          right: -5px;
          bottom: 2px;
          height: 40%;
          z-index: -1;
          transform: skewX(-2deg);
        }

        .mb-section-title-word-lime::after {
          background: ${LIME};
        }

        .mb-section-title-word-orange::after {
          background: ${ORANGE};
        }

        /* ===== PROJECT CARDS ===== */
        .mb-projects-grid {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .mb-card {
          background: #FFFFFF;
          border: 3px solid #111;
          box-shadow: 5px 5px 0 #111;
          padding: 32px;
          transition: all 0.2s ease;
        }

        .mb-card-0 {
          transform: rotate(-0.3deg);
        }

        .mb-card-1 {
          transform: rotate(0.3deg);
        }

        .mb-card:hover {
          box-shadow: 7px 7px 0 #111;
          transform: translate(-2px, -2px) rotate(0deg);
        }

        .mb-card-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #111;
          margin: 0 0 10px;
        }

        .mb-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: #444;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .mb-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0 0 24px;
          padding: 0;
          list-style: none;
        }

        .mb-tech-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          padding: 5px 14px;
          border: 2px solid #111;
          color: #111;
          background: transparent;
          text-transform: uppercase;
        }

        .mb-tech-pill-lime {
          background: ${LIME};
        }

        .mb-tech-pill-orange {
          background: ${ORANGE};
        }

        .mb-card-links {
          display: flex;
          gap: 12px;
        }

        .mb-card-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          border: 3px solid #111;
          padding: 8px 20px;
          background: transparent;
          transition: all 0.2s ease;
          box-shadow: 3px 3px 0 #111;
        }

        .mb-card-link:hover {
          background: ${LIME};
          box-shadow: 5px 5px 0 #111;
          transform: translate(-2px, -2px);
        }

        .mb-card-link-secondary:hover {
          background: ${ORANGE};
        }

        /* ===== INTERESTS ===== */
        .mb-interests-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 8px;
        }

        .mb-interest-item {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #111;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          z-index: 1;
          cursor: default;
          transition: all 0.2s ease;
        }

        .mb-interest-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .mb-interest-dot-lime {
          background: ${LIME};
          border: 2px solid #111;
        }

        .mb-interest-dot-orange {
          background: ${ORANGE};
          border: 2px solid #111;
        }

        .mb-interest-item::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          width: 0;
          height: 100%;
          z-index: -1;
          transform: skewX(-2deg);
          transition: width 0.2s ease;
        }

        .mb-interest-item:hover::after {
          width: 100%;
        }

        .mb-interest-lime::after {
          background: ${LIME};
        }

        .mb-interest-orange::after {
          background: ${ORANGE};
        }

        /* ===== CONNECT SECTION ===== */
        .mb-connect {
          margin-top: 56px;
          padding-top: 48px;
        }

        .mb-connect-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ===== FOOTER ===== */
        .mb-footer {
          margin-top: 64px;
          padding-top: 32px;
          border-top: 4px solid #111;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: #888;
          font-weight: 400;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .mb-container {
            padding: 32px 20px 60px;
          }

          .mb-card {
            padding: 24px 20px;
          }

          .mb-links-row {
            gap: 10px;
          }

          .mb-link-btn {
            padding: 8px 18px;
            font-size: 0.8rem;
          }

          .mb-card-links {
            flex-direction: column;
            gap: 8px;
          }

          .mb-card-link {
            text-align: center;
          }

          .mb-interests-row {
            gap: 10px;
          }

          .mb-interest-item {
            padding: 8px 16px;
            font-size: 0.88rem;
          }
        }
      `}</style>

      <div className="mb-root">
        <div className="mb-container">
          {/* Navigation */}
          <Link to="/" className="mb-back">
            &larr; Back
          </Link>

          {/* ===== HEADER ===== */}
          <header className="mb-header">
            <h1 className="mb-name">
              <span className="mb-name-highlight">{intro.name}</span>
            </h1>

            <p className="mb-tagline">{intro.tagline}</p>

            <p className="mb-bio">{intro.bio}</p>

            <div className="mb-links-row">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-link-btn mb-link-btn-lime"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-link-btn mb-link-btn-orange"
              >
                LinkedIn
              </a>
              <a href={intro.links.uses} className="mb-link-btn">
                /uses
              </a>
            </div>
          </header>

          {/* ===== DIVIDER ===== */}
          <hr className="mb-divider" />

          {/* ===== PROJECTS ===== */}
          <h2 className="mb-section-title">
            <span className="mb-section-title-word mb-section-title-word-lime">
              Projects
            </span>
          </h2>

          <div className="mb-projects-grid">
            {projects.map((project, idx) => (
              <div
                key={project.name}
                className={`mb-card mb-card-${idx % 2}`}
              >
                <h3 className="mb-card-name">{project.name}</h3>
                <p className="mb-card-desc">{project.description}</p>

                <ul className="mb-tech-list">
                  {project.tech.map((t, tIdx) => (
                    <li
                      key={t}
                      className={`mb-tech-pill ${
                        tIdx % 2 === 0
                          ? 'mb-tech-pill-lime'
                          : 'mb-tech-pill-orange'
                      }`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mb-card-links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-card-link"
                  >
                    Visit &rarr;
                  </a>
                  <a
                    href={project.cvAnchor}
                    className="mb-card-link mb-card-link-secondary"
                  >
                    CV Entry
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ===== DIVIDER ===== */}
          <hr className="mb-divider" style={{ marginTop: 56 }} />

          {/* ===== INTERESTS ===== */}
          <h2 className="mb-section-title">
            <span className="mb-section-title-word mb-section-title-word-orange">
              Interests
            </span>
          </h2>

          <div className="mb-interests-row">
            {personal.interests.map((interest, idx) => (
              <span
                key={interest.label}
                className={`mb-interest-item ${
                  idx % 2 === 0 ? 'mb-interest-lime' : 'mb-interest-orange'
                }`}
              >
                <span
                  className={`mb-interest-dot ${
                    idx % 2 === 0
                      ? 'mb-interest-dot-lime'
                      : 'mb-interest-dot-orange'
                  }`}
                />
                {interest.label}
              </span>
            ))}
          </div>

          {/* ===== CONNECT / DIVIDER ===== */}
          <hr className="mb-divider" style={{ marginTop: 56 }} />

          <div className="mb-connect">
            <h2 className="mb-section-title" style={{ marginTop: 0 }}>
              <span className="mb-section-title-word mb-section-title-word-lime">
                Connect
              </span>
            </h2>

            <div className="mb-connect-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-link-btn mb-link-btn-lime"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-link-btn mb-link-btn-orange"
              >
                LinkedIn
              </a>
              <a href={intro.links.uses} className="mb-link-btn">
                /uses
              </a>
            </div>
          </div>

          {/* ===== FOOTER ===== */}
          <footer className="mb-footer">
            {intro.name} &middot; {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </>
  )
}
