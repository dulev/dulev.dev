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

export function Design31() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap'
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
        .sr-root {
          font-family: 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: #FAFAF8;
          color: #111111;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .sr-root *,
        .sr-root *::before,
        .sr-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .sr-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 32px 0;
        }

        /* ===== NAVIGATION ===== */
        .sr-nav {
          border-bottom: 3px solid #111111;
          padding: 18px 0;
          margin-bottom: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sr-nav-brand {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
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

        .sr-nav-brand:hover {
          background: #111111;
          color: #C8FF00;
        }

        .sr-nav-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .sr-nav-link {
          font-family: 'DM Sans', sans-serif;
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

        .sr-nav-link:hover {
          box-shadow: 3px 3px 0 #111111;
          transform: translate(-1px, -1px);
        }

        /* ===== SECTION HEADERS ===== */
        .sr-section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
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

        .sr-section-number {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          color: #FF6B00;
          border: 2px solid #FF6B00;
          padding: 2px 8px;
          line-height: 1;
        }

        /* ===== HERO ===== */
        .sr-hero {
          margin-bottom: 16px;
          position: relative;
        }

        /* Postmark circle decoration */
        .sr-postmark-circle {
          position: absolute;
          top: -8px;
          right: 20px;
          width: 100px;
          height: 100px;
          pointer-events: none;
          z-index: 0;
        }

        .sr-postmark-circle-ring {
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

        .sr-postmark-circle-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(15deg);
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #111111;
          opacity: 0.08;
          white-space: nowrap;
        }

        .sr-postmark-circle-lines {
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

        .sr-postmark-circle-lines span {
          display: block;
          height: 1px;
          background: #111111;
        }

        .sr-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.6rem, 7vw, 4.4rem);
          color: #111111;
          line-height: 1.05;
          margin: 0 0 6px;
          letter-spacing: -1px;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .sr-name-bar {
          display: block;
          width: 120px;
          height: 6px;
          background: #C8FF00;
          margin-bottom: 24px;
        }

        /* Tagline postmark box */
        .sr-tagline-box {
          display: inline-block;
          border: 2px solid #111111;
          padding: 10px 20px;
          transform: rotate(-3deg);
          margin-bottom: 28px;
          background: #FAFAF8;
        }

        .sr-tagline-text {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #111111;
          line-height: 1.4;
        }

        .sr-bio {
          font-size: 1rem;
          color: #444;
          max-width: 520px;
          line-height: 1.7;
          margin: 0 0 28px;
          font-weight: 400;
        }

        .sr-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .sr-hero-link {
          font-family: 'DM Sans', sans-serif;
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

        .sr-hero-link:hover {
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .sr-hero-link--outline {
          background: #fff;
        }

        .sr-hero-link--orange {
          background: #FF6B00;
          color: #111111;
        }

        /* ===== STAMP CARDS (Projects) ===== */
        .sr-card {
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 4px 4px 0 #111111;
          padding: 28px 28px 24px;
          margin-bottom: 24px;
          position: relative;
          transition: all 0.15s ease;
        }

        .sr-card:nth-child(odd) {
          transform: rotate(-0.5deg);
        }

        .sr-card:nth-child(even) {
          transform: rotate(0.4deg);
        }

        .sr-card:hover {
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px) rotate(0deg);
        }

        .sr-denom {
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 0.7rem;
          color: #FF6B00;
          line-height: 1;
          pointer-events: none;
          letter-spacing: 0.5px;
        }

        .sr-card h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          color: #111111;
          text-transform: uppercase;
          margin: 0 0 8px;
        }

        .sr-card p {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
          margin: 0 0 16px;
          font-weight: 400;
        }

        /* Tech tags */
        .sr-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 0 0 18px;
          padding: 0;
          list-style: none;
        }

        .sr-tech-item {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 3px 10px;
          border: 2px solid #111111;
          background: #C8FF00;
          color: #111111;
          text-transform: uppercase;
        }

        .sr-card-links {
          display: flex;
          gap: 10px;
        }

        .sr-card-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #111111;
          text-decoration: none;
          padding: 5px 14px;
          border: 2px solid #111111;
          background: #fff;
          transition: all 0.15s ease;
        }

        .sr-card-link:hover {
          background: #111111;
          color: #fff;
        }

        .sr-card-link--accent {
          background: #FF6B00;
        }

        .sr-card-link--accent:hover {
          background: #111111;
          border-color: #111111;
          color: #FF6B00;
        }

        /* ===== INTEREST STAMPS ===== */
        .sr-interests-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .sr-interest {
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 3px 3px 0 #111111;
          padding: 18px 22px 14px;
          min-width: 120px;
          text-align: center;
          position: relative;
          transition: all 0.15s ease;
        }

        .sr-interest:nth-child(odd) .sr-interest-accent {
          background: #C8FF00;
        }

        .sr-interest:nth-child(even) .sr-interest-accent {
          background: #FF6B00;
        }

        .sr-interest:nth-child(1) { transform: rotate(-0.5deg); }
        .sr-interest:nth-child(2) { transform: rotate(0.4deg); }
        .sr-interest:nth-child(3) { transform: rotate(-0.3deg); }
        .sr-interest:nth-child(4) { transform: rotate(0.5deg); }
        .sr-interest:nth-child(5) { transform: rotate(-0.4deg); }

        .sr-interest:hover {
          box-shadow: 5px 5px 0 #111111;
          transform: translate(-2px, -2px) rotate(0deg);
        }

        .sr-interest-accent {
          display: block;
          width: 100%;
          height: 3px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
        }

        .sr-interest-denom {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.55rem;
          color: #FF6B00;
          position: absolute;
          top: 8px;
          right: 10px;
          letter-spacing: 0.5px;
        }

        .sr-interest:nth-child(odd) .sr-interest-denom {
          color: #C8FF00;
        }

        .sr-interest:nth-child(even) .sr-interest-denom {
          color: #FF6B00;
        }

        .sr-interest-icon {
          font-size: 1.2rem;
          display: block;
          margin-bottom: 6px;
          color: #111111;
        }

        .sr-interest-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #111111;
        }

        /* ===== FOOTER ===== */
        .sr-footer {
          margin-top: 72px;
          background: #111111;
          padding: 36px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sr-footer-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: #C8FF00;
          font-weight: 500;
        }

        .sr-footer-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .sr-footer-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #C8FF00;
          text-decoration: none;
          padding: 6px 16px;
          border: 2px solid #C8FF00;
          background: transparent;
          transition: all 0.15s ease;
        }

        .sr-footer-link:hover {
          background: #C8FF00;
          color: #111111;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .sr-container {
            padding: 0 18px 0;
          }

          .sr-nav {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .sr-card {
            padding: 22px 18px 20px;
          }

          .sr-card:nth-child(odd),
          .sr-card:nth-child(even) {
            transform: rotate(0deg);
          }

          .sr-card:hover {
            transform: translate(-2px, -2px);
          }

          .sr-interests-grid {
            gap: 10px;
          }

          .sr-interest {
            min-width: 100px;
            padding: 16px 16px 12px;
          }

          .sr-interest:nth-child(n) {
            transform: rotate(0deg);
          }

          .sr-interest:hover {
            transform: translate(-2px, -2px);
          }

          .sr-tagline-box {
            transform: rotate(-2deg);
          }

          .sr-postmark-circle {
            display: none;
          }

          .sr-footer {
            flex-direction: column;
            align-items: flex-start;
            padding: 28px 18px;
          }

          .sr-hero-links {
            gap: 8px;
          }
        }
      `}</style>

      <div className="sr-root">
        <div className="sr-container">
          {/* ===== NAVIGATION ===== */}
          <nav className="sr-nav">
            <Link to="/" className="sr-nav-brand">
              DD
            </Link>
            <div className="sr-nav-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-nav-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-nav-link"
              >
                LinkedIn
              </a>
              <a href="/uses" className="sr-nav-link">
                /uses
              </a>
            </div>
          </nav>

          {/* ===== HERO ===== */}
          <header className="sr-hero">
            {/* Postmark circle decoration */}
            <div className="sr-postmark-circle">
              <div className="sr-postmark-circle-ring" />
              <div className="sr-postmark-circle-text">
                EST. 2018 &middot; BG
              </div>
              <div className="sr-postmark-circle-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <h1 className="sr-name">{intro.name}</h1>
            <span className="sr-name-bar" />

            {/* Tagline in postmark-style box */}
            <div className="sr-tagline-box">
              <span className="sr-tagline-text">{intro.tagline}</span>
            </div>

            <p className="sr-bio">{intro.bio}</p>

            <div className="sr-hero-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-hero-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-hero-link sr-hero-link--orange"
              >
                LinkedIn
              </a>
              <a href="/uses" className="sr-hero-link sr-hero-link--outline">
                /uses
              </a>
            </div>
          </header>

          {/* ===== PROJECTS ===== */}
          <h2 className="sr-section-title">
            <span className="sr-section-number">SEC.01</span>
            Projects
          </h2>

          {projects.map((project, idx) => (
            <div key={project.name} className="sr-card">
              <span className="sr-denom">
                No.{String(idx + 1).padStart(2, '0')}
              </span>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <ul className="sr-tech-list">
                {project.tech.map((t) => (
                  <li key={t} className="sr-tech-item">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="sr-card-links">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sr-card-link sr-card-link--accent"
                >
                  Visit
                </a>
                <a
                  href={project.cvAnchor}
                  className="sr-card-link"
                >
                  CV Entry
                </a>
              </div>
            </div>
          ))}

          {/* ===== INTERESTS ===== */}
          <h2 className="sr-section-title">
            <span className="sr-section-number">SEC.02</span>
            Interests
          </h2>

          <div className="sr-interests-grid">
            {personal.interests.map((interest, idx) => (
              <div key={interest.label} className="sr-interest">
                <span className="sr-interest-accent" />
                <span className="sr-interest-denom">
                  No.{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="sr-interest-icon">
                  {interestIcons[interest.icon] || '?'}
                </span>
                <span className="sr-interest-label">
                  {interest.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="sr-footer">
          <div className="sr-footer-text">
            Dimitar Dulev &middot; Design 31 &middot; Stamp Refined
          </div>
          <div className="sr-footer-links">
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="sr-footer-link"
            >
              GitHub
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="sr-footer-link"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
