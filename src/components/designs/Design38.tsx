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

export function Design38() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'
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
        .d38-root {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: #FAFAF8;
          color: #111111;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .d38-root *,
        .d38-root *::before,
        .d38-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .d38-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 32px 0;
        }

        /* ===== NAVIGATION ===== */
        .d38-nav {
          border-bottom: 3px solid #111111;
          padding: 18px 0;
          margin-bottom: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .d38-nav-brand {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 0.85rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #111111;
          text-decoration: none;
          padding: 6px 16px;
          border: 3px solid #111111;
          background: #C8FF00;
          transition: all 0.15s ease;
        }

        .d38-nav-brand:hover {
          background: #111111;
          color: #C8FF00;
        }

        .d38-nav-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .d38-nav-link {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.8rem;
          font-weight: 600;
          color: #111111;
          text-decoration: none;
          padding: 6px 14px;
          border: 2px solid #111111;
          background: #fff;
          box-shadow: 2px 2px 0 #111111;
          transition: all 0.15s ease;
        }

        .d38-nav-link:hover {
          box-shadow: 3px 3px 0 #111111;
          transform: translate(-1px, -1px);
        }

        /* ===== SECTION HEADERS ===== */
        .d38-section-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: clamp(1.3rem, 3vw, 1.6rem);
          color: #111111;
          text-transform: uppercase;
          margin: 60px 0 28px;
          padding-bottom: 10px;
          border-bottom: 3px solid #111111;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .d38-section-number {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 0.75rem;
          color: #FF6B00;
          border: 2px solid #FF6B00;
          padding: 2px 8px;
          line-height: 1;
        }

        /* ===== HERO ===== */
        .d38-hero {
          margin-bottom: 16px;
          position: relative;
        }

        /* Postmark circle decoration */
        .d38-postmark-circle {
          position: absolute;
          top: -8px;
          right: 20px;
          width: 100px;
          height: 100px;
          pointer-events: none;
          z-index: 0;
        }

        .d38-postmark-circle-ring {
          width: 100px;
          height: 100px;
          border: 1.5px solid #111111;
          border-radius: 50%;
          opacity: 0.08;
          position: absolute;
          top: 0;
          left: 0;
          transform: rotate(15deg);
        }

        .d38-postmark-circle-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(15deg);
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #111111;
          opacity: 0.08;
          white-space: nowrap;
        }

        .d38-postmark-circle-lines {
          position: absolute;
          top: 50%;
          left: -12px;
          right: -12px;
          transform: translateY(-50%) rotate(15deg);
          display: flex;
          flex-direction: column;
          gap: 4px;
          pointer-events: none;
          opacity: 0.06;
        }

        .d38-postmark-circle-lines span {
          display: block;
          height: 1px;
          background: #111111;
        }

        .d38-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: clamp(2.6rem, 7vw, 4.4rem);
          color: #111111;
          line-height: 1.05;
          margin: 0 0 6px;
          letter-spacing: -1px;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .d38-name-bar {
          display: block;
          width: 120px;
          height: 6px;
          background: #C8FF00;
          margin-bottom: 24px;
        }

        /* Tagline postmark box */
        .d38-tagline-box {
          display: inline-block;
          border: 2px solid #111111;
          padding: 10px 20px;
          margin-bottom: 28px;
          background: #FAFAF8;
        }

        .d38-tagline-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #111111;
          line-height: 1.4;
        }

        .d38-bio {
          font-size: 1rem;
          color: #444;
          max-width: 520px;
          line-height: 1.7;
          margin: 0 0 28px;
          font-weight: 400;
        }

        .d38-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .d38-hero-link {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.82rem;
          font-weight: 600;
          color: #111111;
          text-decoration: none;
          padding: 8px 20px;
          border: 3px solid #111111;
          background: #C8FF00;
          box-shadow: 4px 4px 0 #111111;
          transition: all 0.15s ease;
        }

        .d38-hero-link:hover {
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .d38-hero-link--outline {
          background: #fff;
        }

        .d38-hero-link--orange {
          background: #FF6B00;
          color: #111111;
        }

        /* ===== STAMP CARDS (Projects) ===== */
        .d38-card {
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 4px 4px 0 #111111;
          padding: 28px 28px 24px;
          margin-bottom: 24px;
          position: relative;
          transition: all 0.15s ease;
        }

        .d38-card:hover {
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .d38-denom {
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 0.7rem;
          color: #FF6B00;
          line-height: 1;
          pointer-events: none;
          letter-spacing: 0.5px;
        }

        .d38-card h3 {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 1.3rem;
          color: #111111;
          text-transform: uppercase;
          margin: 0 0 8px;
        }

        .d38-card p {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
          margin: 0 0 16px;
          font-weight: 400;
        }

        /* Tech tags */
        .d38-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 0 0 18px;
          padding: 0;
          list-style: none;
        }

        .d38-tech-item {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 3px 10px;
          border: 2px solid #111111;
          background: #C8FF00;
          color: #111111;
          text-transform: uppercase;
        }

        .d38-card-links {
          display: flex;
          gap: 10px;
        }

        .d38-card-link {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.78rem;
          font-weight: 600;
          color: #111111;
          text-decoration: none;
          padding: 5px 14px;
          border: 2px solid #111111;
          background: #fff;
          transition: all 0.15s ease;
        }

        .d38-card-link:hover {
          background: #111111;
          color: #fff;
        }

        .d38-card-link--accent {
          background: #FF6B00;
        }

        .d38-card-link--accent:hover {
          background: #111111;
          border-color: #111111;
          color: #FF6B00;
        }

        /* ===== INTEREST STAMPS ===== */
        .d38-interests-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .d38-interest {
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 3px 3px 0 #111111;
          padding: 18px 22px 14px;
          min-width: 120px;
          text-align: center;
          position: relative;
          transition: all 0.15s ease;
        }

        .d38-interest:nth-child(odd) .d38-interest-accent {
          background: #C8FF00;
        }

        .d38-interest:nth-child(even) .d38-interest-accent {
          background: #FF6B00;
        }

        .d38-interest:hover {
          box-shadow: 5px 5px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .d38-interest-accent {
          display: block;
          width: 100%;
          height: 3px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
        }

        .d38-interest-denom {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 0.55rem;
          color: #FF6B00;
          position: absolute;
          top: 8px;
          right: 10px;
          letter-spacing: 0.5px;
        }

        .d38-interest:nth-child(odd) .d38-interest-denom {
          color: #C8FF00;
        }

        .d38-interest:nth-child(even) .d38-interest-denom {
          color: #FF6B00;
        }

        .d38-interest-icon {
          font-size: 1.2rem;
          display: block;
          margin-bottom: 6px;
          color: #111111;
        }

        .d38-interest-label {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.78rem;
          font-weight: 600;
          color: #111111;
        }

        /* ===== FOOTER ===== */
        .d38-footer {
          margin-top: 72px;
          background: #111111;
          padding: 36px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .d38-footer-text {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.82rem;
          color: #C8FF00;
          font-weight: 500;
        }

        .d38-footer-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .d38-footer-link {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.78rem;
          font-weight: 600;
          color: #C8FF00;
          text-decoration: none;
          padding: 6px 16px;
          border: 2px solid #C8FF00;
          background: transparent;
          transition: all 0.15s ease;
        }

        .d38-footer-link:hover {
          background: #C8FF00;
          color: #111111;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .d38-container {
            padding: 0 18px 0;
          }

          .d38-nav {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .d38-card {
            padding: 22px 18px 20px;
          }

          .d38-card:hover {
            transform: translate(-2px, -2px);
          }

          .d38-interests-grid {
            gap: 10px;
          }

          .d38-interest {
            min-width: 100px;
            padding: 16px 16px 12px;
          }

          .d38-interest:hover {
            transform: translate(-2px, -2px);
          }

          .d38-postmark-circle {
            display: none;
          }

          .d38-footer {
            flex-direction: column;
            align-items: flex-start;
            padding: 28px 18px;
          }

          .d38-hero-links {
            gap: 8px;
          }
        }
      `}</style>

      <div className="d38-root">
        <div className="d38-container">
          {/* ===== NAVIGATION ===== */}
          <nav className="d38-nav">
            <Link to="/" className="d38-nav-brand">
              DD
            </Link>
            <div className="d38-nav-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="d38-nav-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="d38-nav-link"
              >
                LinkedIn
              </a>
              <a href="/uses" className="d38-nav-link">
                /uses
              </a>
            </div>
          </nav>

          {/* ===== HERO ===== */}
          <header className="d38-hero">
            {/* Postmark circle decoration */}
            <div className="d38-postmark-circle">
              <div className="d38-postmark-circle-ring" />
              <div className="d38-postmark-circle-text">
                EST. 2018 &middot; BG
              </div>
              <div className="d38-postmark-circle-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <h1 className="d38-name">{intro.name}</h1>
            <span className="d38-name-bar" />

            {/* Tagline in postmark-style box */}
            <div className="d38-tagline-box">
              <span className="d38-tagline-text">{intro.tagline}</span>
            </div>

            <p className="d38-bio">{intro.bio}</p>

            <div className="d38-hero-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="d38-hero-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="d38-hero-link d38-hero-link--orange"
              >
                LinkedIn
              </a>
              <a href="/uses" className="d38-hero-link d38-hero-link--outline">
                /uses
              </a>
            </div>
          </header>

          {/* ===== PROJECTS ===== */}
          <h2 className="d38-section-title">
            <span className="d38-section-number">SEC.01</span>
            Projects
          </h2>

          {projects.map((project, idx) => (
            <div key={project.name} className="d38-card">
              <span className="d38-denom">
                No.{String(idx + 1).padStart(2, '0')}
              </span>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <ul className="d38-tech-list">
                {project.tech.map((t) => (
                  <li key={t} className="d38-tech-item">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="d38-card-links">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d38-card-link d38-card-link--accent"
                >
                  Visit
                </a>
                <a
                  href={project.cvAnchor}
                  className="d38-card-link"
                >
                  CV Entry
                </a>
              </div>
            </div>
          ))}

          {/* ===== INTERESTS ===== */}
          <h2 className="d38-section-title">
            <span className="d38-section-number">SEC.02</span>
            Interests
          </h2>

          <div className="d38-interests-grid">
            {personal.interests.map((interest, idx) => (
              <div key={interest.label} className="d38-interest">
                <span className="d38-interest-accent" />
                <span className="d38-interest-denom">
                  No.{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="d38-interest-icon">
                  {interestIcons[interest.icon] || '?'}
                </span>
                <span className="d38-interest-label">
                  {interest.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="d38-footer">
          <div className="d38-footer-text">
            Dimitar Dulev &middot; Design 38 &middot; Stamp Refined
          </div>
          <div className="d38-footer-links">
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="d38-footer-link"
            >
              GitHub
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="d38-footer-link"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
