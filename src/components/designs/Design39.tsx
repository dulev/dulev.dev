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

export function Design39() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'
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
        .d39-root {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: #FAFAF8;
          color: #111111;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .d39-root *,
        .d39-root *::before,
        .d39-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .d39-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 32px 0;
        }

        /* ===== NAVIGATION ===== */
        .d39-nav {
          border-bottom: 3px solid #111111;
          padding: 18px 0;
          margin-bottom: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .d39-nav-brand {
          font-family: 'Silkscreen', cursive;
          font-weight: 700;
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

        .d39-nav-brand:hover {
          background: #111111;
          color: #C8FF00;
        }

        .d39-nav-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .d39-nav-link {
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

        .d39-nav-link:hover {
          box-shadow: 3px 3px 0 #111111;
          transform: translate(-1px, -1px);
        }

        /* ===== SECTION HEADERS ===== */
        .d39-section-title {
          font-family: 'Silkscreen', cursive;
          font-weight: 700;
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

        .d39-section-number {
          font-family: 'Silkscreen', cursive;
          font-weight: 400;
          font-size: 0.75rem;
          color: #FF6B00;
          border: 2px solid #FF6B00;
          padding: 2px 8px;
          line-height: 1;
        }

        /* ===== HERO ===== */
        .d39-hero {
          margin-bottom: 16px;
          position: relative;
        }

        /* Postmark circle decoration */
        .d39-postmark-circle {
          position: absolute;
          top: -8px;
          right: 20px;
          width: 100px;
          height: 100px;
          pointer-events: none;
          z-index: 0;
        }

        .d39-postmark-circle-ring {
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

        .d39-postmark-circle-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(15deg);
          font-family: 'Silkscreen', cursive;
          font-weight: 400;
          font-size: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #111111;
          opacity: 0.08;
          white-space: nowrap;
        }

        .d39-postmark-circle-lines {
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

        .d39-postmark-circle-lines span {
          display: block;
          height: 1px;
          background: #111111;
        }

        .d39-name {
          font-family: 'Silkscreen', cursive;
          font-weight: 700;
          font-size: clamp(2.6rem, 7vw, 4.4rem);
          color: #111111;
          line-height: 1.05;
          margin: 0 0 6px;
          letter-spacing: -1px;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .d39-name-bar {
          display: block;
          width: 120px;
          height: 6px;
          background: #C8FF00;
          margin-bottom: 24px;
        }

        /* Tagline postmark box */
        .d39-tagline-box {
          display: inline-block;
          border: 2px solid #111111;
          padding: 10px 20px;
          margin-bottom: 28px;
          background: #FAFAF8;
        }

        .d39-tagline-text {
          font-family: 'Silkscreen', cursive;
          font-weight: 400;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #111111;
          line-height: 1.4;
        }

        .d39-bio {
          font-size: 1rem;
          color: #444;
          max-width: 520px;
          line-height: 1.7;
          margin: 0 0 28px;
          font-weight: 400;
        }

        .d39-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .d39-hero-link {
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

        .d39-hero-link:hover {
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .d39-hero-link--outline {
          background: #fff;
        }

        .d39-hero-link--orange {
          background: #FF6B00;
          color: #111111;
        }

        /* ===== STAMP CARDS (Projects) ===== */
        .d39-card {
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 4px 4px 0 #111111;
          padding: 28px 28px 24px;
          margin-bottom: 24px;
          position: relative;
          transition: all 0.15s ease;
        }

        .d39-card:hover {
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .d39-denom {
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: 'Silkscreen', cursive;
          font-weight: 700;
          font-size: 0.7rem;
          color: #FF6B00;
          line-height: 1;
          pointer-events: none;
          letter-spacing: 0.5px;
        }

        .d39-card h3 {
          font-family: 'Silkscreen', cursive;
          font-weight: 700;
          font-size: 1.3rem;
          color: #111111;
          text-transform: uppercase;
          margin: 0 0 8px;
        }

        .d39-card p {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
          margin: 0 0 16px;
          font-weight: 400;
        }

        /* Tech tags */
        .d39-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 0 0 18px;
          padding: 0;
          list-style: none;
        }

        .d39-tech-item {
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

        .d39-card-links {
          display: flex;
          gap: 10px;
        }

        .d39-card-link {
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

        .d39-card-link:hover {
          background: #111111;
          color: #fff;
        }

        .d39-card-link--accent {
          background: #FF6B00;
        }

        .d39-card-link--accent:hover {
          background: #111111;
          border-color: #111111;
          color: #FF6B00;
        }

        /* ===== INTEREST STAMPS ===== */
        .d39-interests-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .d39-interest {
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 3px 3px 0 #111111;
          padding: 18px 22px 14px;
          min-width: 120px;
          text-align: center;
          position: relative;
          transition: all 0.15s ease;
        }

        .d39-interest:nth-child(odd) .d39-interest-accent {
          background: #C8FF00;
        }

        .d39-interest:nth-child(even) .d39-interest-accent {
          background: #FF6B00;
        }

        .d39-interest:hover {
          box-shadow: 5px 5px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .d39-interest-accent {
          display: block;
          width: 100%;
          height: 3px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
        }

        .d39-interest-denom {
          font-family: 'Silkscreen', cursive;
          font-weight: 400;
          font-size: 0.55rem;
          color: #FF6B00;
          position: absolute;
          top: 8px;
          right: 10px;
          letter-spacing: 0.5px;
        }

        .d39-interest:nth-child(odd) .d39-interest-denom {
          color: #C8FF00;
        }

        .d39-interest:nth-child(even) .d39-interest-denom {
          color: #FF6B00;
        }

        .d39-interest-icon {
          font-size: 1.2rem;
          display: block;
          margin-bottom: 6px;
          color: #111111;
        }

        .d39-interest-label {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.78rem;
          font-weight: 600;
          color: #111111;
        }

        /* ===== FOOTER ===== */
        .d39-footer {
          margin-top: 72px;
          background: #111111;
          padding: 36px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .d39-footer-text {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.82rem;
          color: #C8FF00;
          font-weight: 500;
        }

        .d39-footer-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .d39-footer-link {
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

        .d39-footer-link:hover {
          background: #C8FF00;
          color: #111111;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .d39-container {
            padding: 0 18px 0;
          }

          .d39-nav {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .d39-card {
            padding: 22px 18px 20px;
          }

          .d39-card:hover {
            transform: translate(-2px, -2px);
          }

          .d39-interests-grid {
            gap: 10px;
          }

          .d39-interest {
            min-width: 100px;
            padding: 16px 16px 12px;
          }

          .d39-interest:hover {
            transform: translate(-2px, -2px);
          }

          .d39-postmark-circle {
            display: none;
          }

          .d39-footer {
            flex-direction: column;
            align-items: flex-start;
            padding: 28px 18px;
          }

          .d39-hero-links {
            gap: 8px;
          }
        }
      `}</style>

      <div className="d39-root">
        <div className="d39-container">
          {/* ===== NAVIGATION ===== */}
          <nav className="d39-nav">
            <Link to="/" className="d39-nav-brand">
              DD
            </Link>
            <div className="d39-nav-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="d39-nav-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="d39-nav-link"
              >
                LinkedIn
              </a>
              <a href="/uses" className="d39-nav-link">
                /uses
              </a>
            </div>
          </nav>

          {/* ===== HERO ===== */}
          <header className="d39-hero">
            {/* Postmark circle decoration */}
            <div className="d39-postmark-circle">
              <div className="d39-postmark-circle-ring" />
              <div className="d39-postmark-circle-text">
                EST. 2018 &middot; BG
              </div>
              <div className="d39-postmark-circle-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <h1 className="d39-name">{intro.name}</h1>
            <span className="d39-name-bar" />

            {/* Tagline in postmark-style box */}
            <div className="d39-tagline-box">
              <span className="d39-tagline-text">{intro.tagline}</span>
            </div>

            <p className="d39-bio">{intro.bio}</p>

            <div className="d39-hero-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="d39-hero-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="d39-hero-link d39-hero-link--orange"
              >
                LinkedIn
              </a>
              <a href="/uses" className="d39-hero-link d39-hero-link--outline">
                /uses
              </a>
            </div>
          </header>

          {/* ===== PROJECTS ===== */}
          <h2 className="d39-section-title">
            <span className="d39-section-number">SEC.01</span>
            Projects
          </h2>

          {projects.map((project, idx) => (
            <div key={project.name} className="d39-card">
              <span className="d39-denom">
                No.{String(idx + 1).padStart(2, '0')}
              </span>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <ul className="d39-tech-list">
                {project.tech.map((t) => (
                  <li key={t} className="d39-tech-item">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="d39-card-links">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d39-card-link d39-card-link--accent"
                >
                  Visit
                </a>
                <a
                  href={project.cvAnchor}
                  className="d39-card-link"
                >
                  CV Entry
                </a>
              </div>
            </div>
          ))}

          {/* ===== INTERESTS ===== */}
          <h2 className="d39-section-title">
            <span className="d39-section-number">SEC.02</span>
            Interests
          </h2>

          <div className="d39-interests-grid">
            {personal.interests.map((interest, idx) => (
              <div key={interest.label} className="d39-interest">
                <span className="d39-interest-accent" />
                <span className="d39-interest-denom">
                  No.{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="d39-interest-icon">
                  {interestIcons[interest.icon] || '?'}
                </span>
                <span className="d39-interest-label">
                  {interest.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="d39-footer">
          <div className="d39-footer-text">
            Dimitar Dulev &middot; Design 39 &middot; Stamp Refined
          </div>
          <div className="d39-footer-links">
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="d39-footer-link"
            >
              GitHub
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="d39-footer-link"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
