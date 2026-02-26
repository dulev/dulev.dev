import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '\u266B',
  running: '\u2192',
  bike: '\u2699',
  mountains: '\u25B2',
  terminal: '>_',
}

// Palette
const CREAM = '#F7F3ED'
const INDIGO = '#2B3A67'
const GOLD = '#D4A843'
const INK = '#1A1A2E'
const TEXT_BODY = '#3D3D3D'
const TEXT_DIM = '#6B6B6B'

export function Design29() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Source+Sans+3:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        /* ===== ROOT ===== */
        .ip-root {
          font-family: 'Source Sans 3', 'Source Sans Pro', -apple-system, sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${CREAM};
          color: ${TEXT_BODY};
          line-height: 1.7;
          position: relative;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .ip-root *,
        .ip-root *::before,
        .ip-root *::after {
          box-sizing: border-box;
        }

        /* Subtle noise texture overlay */
        .ip-noise {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 256px 256px;
        }

        /* ===== CONTAINER ===== */
        .ip-container {
          max-width: 820px;
          margin: 0 auto;
          padding: 48px 32px 0;
          position: relative;
          z-index: 1;
        }

        /* ===== BACK LINK ===== */
        .ip-back-link {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          color: ${INDIGO};
          text-decoration: none;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 6px 14px;
          border: 2px solid ${INDIGO};
          transition: all 0.2s;
          background: transparent;
        }

        .ip-back-link:hover {
          background: ${INDIGO};
          color: ${CREAM};
        }

        /* ===== HEADER ===== */
        .ip-header {
          margin-top: 48px;
          margin-bottom: 0;
        }

        .ip-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 900;
          font-size: clamp(3rem, 8vw, 5rem);
          color: ${INDIGO};
          margin: 0;
          line-height: 1.05;
          letter-spacing: -1px;
        }

        .ip-gold-bar {
          display: block;
          width: 120px;
          height: 6px;
          background: ${GOLD};
          margin-top: 16px;
          margin-bottom: 20px;
        }

        .ip-tagline {
          font-family: 'Space Mono', monospace;
          font-size: 0.82rem;
          color: ${INDIGO};
          text-transform: uppercase;
          letter-spacing: 3px;
          margin: 0;
          opacity: 0.8;
        }

        .ip-bio {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 1.05rem;
          color: ${TEXT_BODY};
          line-height: 1.8;
          margin-top: 24px;
          max-width: 540px;
        }

        /* ===== HEADER LINKS ===== */
        .ip-header-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .ip-header-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          color: ${INDIGO};
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 8px 20px;
          border: 3px solid ${INDIGO};
          background: transparent;
          transition: all 0.2s;
          box-shadow: 4px 4px 0 ${INDIGO};
        }

        .ip-header-link:hover {
          background: ${INDIGO};
          color: ${CREAM};
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 ${INDIGO};
        }

        /* ===== SECTION DIVIDER ===== */
        .ip-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 56px 0 48px;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: ${GOLD};
          letter-spacing: 4px;
          user-select: none;
        }

        .ip-divider::before,
        .ip-divider::after {
          content: '';
          flex: 1;
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            ${INDIGO} 0px,
            ${INDIGO} 4px,
            transparent 4px,
            transparent 8px,
            ${GOLD} 8px,
            ${GOLD} 10px,
            transparent 10px,
            transparent 14px
          );
          opacity: 0.35;
        }

        /* ===== SECTION HEADER ===== */
        .ip-section-header {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 800;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          color: ${INDIGO};
          margin: 0 0 8px;
          line-height: 1.2;
        }

        .ip-section-number {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: ${GOLD};
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: block;
        }

        /* ===== PROJECT CARDS ===== */
        .ip-projects {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 32px;
        }

        .ip-card {
          padding: 32px;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .ip-card:hover {
          transform: translate(-2px, -2px);
        }

        /* Cream card variant */
        .ip-card-cream {
          background: ${CREAM};
          border: 3px solid ${INDIGO};
          box-shadow: 4px 4px 0 ${INDIGO};
          color: ${TEXT_BODY};
        }

        .ip-card-cream:hover {
          box-shadow: 6px 6px 0 ${INDIGO};
        }

        .ip-card-cream .ip-card-title {
          color: ${INDIGO};
        }

        .ip-card-cream .ip-card-desc {
          color: ${TEXT_BODY};
        }

        /* Indigo card variant */
        .ip-card-indigo {
          background: ${INDIGO};
          border: 3px solid ${INK};
          box-shadow: 4px 4px 0 ${GOLD};
          color: ${CREAM};
        }

        .ip-card-indigo:hover {
          box-shadow: 6px 6px 0 ${GOLD};
        }

        .ip-card-indigo .ip-card-title {
          color: ${CREAM};
        }

        .ip-card-indigo .ip-card-desc {
          color: rgba(247, 243, 237, 0.85);
        }

        .ip-card-indigo .ip-card-number {
          color: ${GOLD};
        }

        .ip-card-indigo .ip-card-link {
          color: ${CREAM};
          border-color: rgba(247, 243, 237, 0.4);
        }

        .ip-card-indigo .ip-card-link:hover {
          background: ${CREAM};
          color: ${INDIGO};
          border-color: ${CREAM};
        }

        .ip-card-indigo .ip-tech-tag {
          background: ${GOLD};
          color: ${INK};
          border-color: ${GOLD};
        }

        /* Card inner elements */
        .ip-card-number {
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          color: ${GOLD};
          letter-spacing: 2px;
          margin-bottom: 12px;
          display: block;
        }

        .ip-card-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 800;
          font-size: 1.5rem;
          margin: 0 0 12px;
          line-height: 1.2;
        }

        .ip-card-desc {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        /* ===== TECH TAGS ===== */
        .ip-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0 0 24px;
          padding: 0;
          list-style: none;
        }

        .ip-tech-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border: 2px solid ${INDIGO};
          background: ${GOLD};
          color: ${INK};
          text-transform: uppercase;
        }

        /* ===== CARD LINKS ===== */
        .ip-card-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ip-card-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          color: ${INDIGO};
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 6px 16px;
          border: 2px solid ${INDIGO};
          background: transparent;
          transition: all 0.2s;
        }

        .ip-card-link:hover {
          background: ${INDIGO};
          color: ${CREAM};
        }

        /* ===== INTERESTS ===== */
        .ip-interests {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 32px;
        }

        .ip-interest-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border: 3px solid ${INDIGO};
          background: ${CREAM};
          box-shadow: 3px 3px 0 ${INDIGO};
          transition: transform 0.2s, box-shadow 0.2s;
          flex: 0 1 auto;
        }

        .ip-interest-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0 ${INDIGO};
        }

        .ip-interest-icon {
          font-size: 1.1rem;
          color: ${GOLD};
          min-width: 24px;
          text-align: center;
          font-family: 'Space Mono', monospace;
          font-weight: 700;
        }

        .ip-interest-label {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: ${INDIGO};
          letter-spacing: 0.5px;
        }

        /* ===== FOOTER ===== */
        .ip-footer-rule {
          display: block;
          width: 100%;
          height: 4px;
          background: ${GOLD};
          margin-top: 64px;
          border: none;
        }

        .ip-footer {
          background: ${INDIGO};
          color: ${CREAM};
          padding: 40px 32px;
          text-align: center;
        }

        .ip-footer-inner {
          max-width: 820px;
          margin: 0 auto;
        }

        .ip-footer-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 800;
          font-size: 1.3rem;
          margin: 0 0 8px;
          color: ${CREAM};
        }

        .ip-footer-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: rgba(247, 243, 237, 0.5);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0;
        }

        .ip-footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .ip-footer-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          color: ${GOLD};
          text-decoration: none;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .ip-footer-link:hover {
          color: ${CREAM};
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .ip-container {
            padding: 32px 20px 0;
          }
          .ip-name {
            font-size: clamp(2.2rem, 10vw, 3.4rem);
          }
          .ip-card {
            padding: 24px 20px;
          }
          .ip-interests {
            gap: 10px;
          }
          .ip-interest-card {
            padding: 10px 14px;
          }
          .ip-footer {
            padding: 32px 20px;
          }
        }
      `}</style>

      <div className="ip-root">
        {/* Noise texture overlay */}
        <div className="ip-noise" />

        <div className="ip-container">
          {/* Navigation */}
          <Link to="/" className="ip-back-link">
            &larr; Back
          </Link>

          {/* ===== HEADER / INTRO ===== */}
          <header className="ip-header">
            <h1 className="ip-name">{intro.name}</h1>
            <span className="ip-gold-bar" />
            <p className="ip-tagline">{intro.tagline}</p>
            <p className="ip-bio">{intro.bio}</p>

            <div className="ip-header-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ip-header-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ip-header-link"
              >
                LinkedIn
              </a>
              <a href="/uses" className="ip-header-link">
                /uses
              </a>
            </div>
          </header>

          {/* ===== DIVIDER ===== */}
          <div className="ip-divider">
            <span>&loz; &bull; &loz;</span>
          </div>

          {/* ===== PROJECTS ===== */}
          <section>
            <span className="ip-section-number">No. 01</span>
            <h2 className="ip-section-header">Projects</h2>

            <div className="ip-projects">
              {projects.map((project, idx) => (
                <div
                  key={project.name}
                  className={`ip-card ${idx % 2 === 0 ? 'ip-card-cream' : 'ip-card-indigo'}`}
                >
                  <span className="ip-card-number">
                    No. {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="ip-card-title">{project.name}</h3>
                  <p className="ip-card-desc">{project.description}</p>

                  <ul className="ip-tech-list">
                    {project.tech.map((t) => (
                      <li key={t} className="ip-tech-tag">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="ip-card-links">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ip-card-link"
                    >
                      Visit
                    </a>
                    <a href={project.cvAnchor} className="ip-card-link">
                      CV Entry
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== DIVIDER ===== */}
          <div className="ip-divider">
            <span>&bull; &loz; &bull;</span>
          </div>

          {/* ===== INTERESTS ===== */}
          <section>
            <span className="ip-section-number">No. 02</span>
            <h2 className="ip-section-header">Interests</h2>

            <div className="ip-interests">
              {personal.interests.map((interest) => (
                <div key={interest.label} className="ip-interest-card">
                  <span className="ip-interest-icon">
                    {interestIcons[interest.icon] || '*'}
                  </span>
                  <span className="ip-interest-label">{interest.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ===== FOOTER ===== */}
        <hr className="ip-footer-rule" />
        <footer className="ip-footer">
          <div className="ip-footer-inner">
            <p className="ip-footer-name">{intro.name}</p>
            <p className="ip-footer-text">
              Crafted with care &bull; {new Date().getFullYear()}
            </p>
            <div className="ip-footer-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ip-footer-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ip-footer-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
