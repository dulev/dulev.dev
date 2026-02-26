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

const LIME = '#D4F056'
const ROSE = '#FFB4C2'

export function Design28() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&display=swap'
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
        .hl-root {
          font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: #FFFFFF;
          color: #111111;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .hl-root *,
        .hl-root *::before,
        .hl-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .hl-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 48px 32px 80px;
        }

        /* ===== BACK LINK ===== */
        .hl-back {
          display: inline-block;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          border: 3px solid #111;
          padding: 8px 20px;
          margin-bottom: 48px;
          transition: all 0.15s ease;
          background: transparent;
        }

        .hl-back:hover {
          background: ${LIME};
          box-shadow: 4px 4px 0 #111;
          transform: translate(-2px, -2px);
        }

        /* ===== HIGHLIGHT EFFECT ===== */
        .hl-highlight {
          position: relative;
          display: inline;
          z-index: 1;
        }

        .hl-highlight::before {
          content: '';
          position: absolute;
          left: -4px;
          right: -4px;
          bottom: 0;
          height: 40%;
          z-index: -1;
          transform: skewX(-2deg);
        }

        .hl-highlight-lime::before {
          background: ${LIME};
        }

        .hl-highlight-rose::before {
          background: ${ROSE};
        }

        /* ===== HEADER ===== */
        .hl-header {
          margin-bottom: 0;
          padding-bottom: 48px;
        }

        .hl-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: clamp(4rem, 10vw, 7rem);
          line-height: 1.05;
          color: #111;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .hl-name-first {
          position: relative;
          display: inline;
          z-index: 1;
        }

        .hl-name-first::before {
          content: '';
          position: absolute;
          left: -6px;
          right: -6px;
          bottom: 4px;
          height: 35%;
          background: ${LIME};
          z-index: -1;
          transform: skewX(-2deg) rotate(-0.5deg);
        }

        .hl-tagline {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.35rem);
          font-weight: 500;
          color: #333;
          margin: 20px 0 0;
          position: relative;
          display: inline-block;
          z-index: 1;
        }

        .hl-tagline::before {
          content: '';
          position: absolute;
          left: -4px;
          right: -4px;
          bottom: 0;
          height: 40%;
          background: ${ROSE};
          z-index: -1;
          transform: skewX(-2deg);
        }

        .hl-bio {
          font-size: 1rem;
          color: #444;
          max-width: 540px;
          line-height: 1.75;
          margin: 24px 0 0;
        }

        /* ===== LINK ROW ===== */
        .hl-links-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .hl-link-btn {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #111;
          text-decoration: none;
          border: 3px solid #111;
          padding: 10px 24px;
          background: transparent;
          transition: all 0.15s ease;
          display: inline-block;
        }

        .hl-link-btn:hover {
          background: ${LIME};
          box-shadow: 5px 5px 0 #111;
          transform: translate(-2px, -2px);
        }

        .hl-link-btn-rose:hover {
          background: ${ROSE};
        }

        /* ===== DIVIDER ===== */
        .hl-divider {
          border: none;
          height: 4px;
          background: #111;
          margin: 0;
        }

        /* ===== SECTION HEADERS ===== */
        .hl-section-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: #111;
          margin: 48px 0 32px;
          letter-spacing: -0.01em;
        }

        .hl-section-title-word {
          position: relative;
          display: inline;
          z-index: 1;
        }

        .hl-section-title-word::before {
          content: '';
          position: absolute;
          left: -4px;
          right: -4px;
          bottom: 2px;
          height: 38%;
          z-index: -1;
          transform: skewX(-2deg);
        }

        .hl-section-title-word-lime::before {
          background: ${LIME};
        }

        .hl-section-title-word-rose::before {
          background: ${ROSE};
        }

        /* ===== PROJECT CARDS ===== */
        .hl-projects-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .hl-card {
          background: #FFFFFF;
          border: 3px solid #111;
          box-shadow: 5px 5px 0 #111;
          padding: 32px;
          transition: all 0.18s ease;
        }

        .hl-card:hover {
          box-shadow: 7px 7px 0 #111;
          transform: translate(-2px, -2px);
        }

        .hl-card-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: #111;
          margin: 0 0 8px;
        }

        .hl-card-desc {
          font-size: 0.95rem;
          color: #444;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .hl-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0 0 24px;
          padding: 0;
          list-style: none;
        }

        .hl-tech-pill {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          padding: 5px 14px;
          border: 2px solid #111;
          color: #111;
          background: transparent;
          text-transform: uppercase;
        }

        .hl-tech-pill-lime {
          background: ${LIME};
        }

        .hl-tech-pill-rose {
          background: ${ROSE};
        }

        .hl-card-links {
          display: flex;
          gap: 12px;
        }

        .hl-card-link {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: #111;
          text-decoration: none;
          border: 2px solid #111;
          padding: 8px 20px;
          background: transparent;
          transition: all 0.15s ease;
        }

        .hl-card-link:hover {
          background: ${LIME};
          box-shadow: 3px 3px 0 #111;
          transform: translate(-1px, -1px);
        }

        .hl-card-link-secondary:hover {
          background: ${ROSE};
        }

        /* ===== INTERESTS ===== */
        .hl-interests-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }

        .hl-interest-item {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #111;
          position: relative;
          display: inline-block;
          padding: 8px 18px;
          z-index: 1;
          border: 2px solid #111;
          transition: all 0.15s ease;
        }

        .hl-interest-item::before {
          content: '';
          position: absolute;
          left: -2px;
          right: -2px;
          bottom: 0;
          height: 0;
          z-index: -1;
          transform: skewX(-2deg);
          transition: height 0.15s ease;
        }

        .hl-interest-item:hover::before {
          height: 100%;
        }

        .hl-interest-lime::before {
          background: ${LIME};
        }

        .hl-interest-rose::before {
          background: ${ROSE};
        }

        .hl-interest-icon {
          margin-right: 8px;
          font-size: 0.85rem;
        }

        /* ===== FOOTER ===== */
        .hl-footer {
          margin-top: 64px;
          padding-top: 32px;
          border-top: 4px solid #111;
          text-align: center;
          font-size: 0.8rem;
          color: #888;
          font-weight: 500;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .hl-container {
            padding: 32px 20px 60px;
          }

          .hl-card {
            padding: 24px 20px;
          }

          .hl-links-row {
            gap: 10px;
          }

          .hl-link-btn {
            padding: 8px 18px;
            font-size: 0.8rem;
          }

          .hl-card-links {
            flex-direction: column;
            gap: 8px;
          }

          .hl-card-link {
            text-align: center;
          }

          .hl-interests-row {
            gap: 10px;
          }
        }
      `}</style>

      <div className="hl-root">
        <div className="hl-container">
          {/* Navigation */}
          <Link to="/" className="hl-back">
            &larr; Back
          </Link>

          {/* ===== HEADER ===== */}
          <header className="hl-header">
            <h1 className="hl-name">
              <span className="hl-name-first">{intro.name.split(' ')[0]}</span>{' '}
              {intro.name.split(' ').slice(1).join(' ')}
            </h1>

            <p className="hl-tagline">{intro.tagline}</p>

            <p className="hl-bio">{intro.bio}</p>

            <div className="hl-links-row">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hl-link-btn"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hl-link-btn hl-link-btn-rose"
              >
                LinkedIn
              </a>
              <a href="/uses" className="hl-link-btn">
                /uses
              </a>
            </div>
          </header>

          {/* ===== DIVIDER ===== */}
          <hr className="hl-divider" />

          {/* ===== PROJECTS ===== */}
          <h2 className="hl-section-title">
            <span className="hl-section-title-word hl-section-title-word-lime">
              Projects
            </span>
          </h2>

          <div className="hl-projects-grid">
            {projects.map((project, idx) => (
              <div key={project.name} className="hl-card">
                <h3 className="hl-card-name">{project.name}</h3>
                <p className="hl-card-desc">{project.description}</p>

                <ul className="hl-tech-list">
                  {project.tech.map((t, tIdx) => (
                    <li
                      key={t}
                      className={`hl-tech-pill ${
                        tIdx % 2 === 0 ? 'hl-tech-pill-lime' : 'hl-tech-pill-rose'
                      }`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="hl-card-links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hl-card-link"
                  >
                    Visit &rarr;
                  </a>
                  <a
                    href={project.cvAnchor}
                    className="hl-card-link hl-card-link-secondary"
                  >
                    CV Entry
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ===== DIVIDER ===== */}
          <hr className="hl-divider" style={{ marginTop: 48 }} />

          {/* ===== INTERESTS ===== */}
          <h2 className="hl-section-title">
            <span className="hl-section-title-word hl-section-title-word-rose">
              Interests
            </span>
          </h2>

          <div className="hl-interests-row">
            {personal.interests.map((interest, idx) => (
              <span
                key={interest.label}
                className={`hl-interest-item ${
                  idx % 2 === 0 ? 'hl-interest-lime' : 'hl-interest-rose'
                }`}
              >
                <span className="hl-interest-icon">
                  {interestIcons[interest.icon] || '?'}
                </span>
                {interest.label}
              </span>
            ))}
          </div>

          {/* ===== FOOTER ===== */}
          <footer className="hl-footer">
            Dimitar Dulev &middot; {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </>
  )
}
