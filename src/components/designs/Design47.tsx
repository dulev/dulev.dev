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

export function Design47() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Work+Sans:wght@400;500;600&display=swap'
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
        .d47-root {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: #FAFAF8;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
          background-size: 16px 16px;
          color: #111111;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .d47-root *,
        .d47-root *::before,
        .d47-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .d47-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 32px 0;
        }

        /* ===== NAVIGATION ===== */
        .d47-nav {
          border-bottom: 3px solid #111111;
          padding: 18px 0;
          margin-bottom: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .d47-nav-brand {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #111111;
          text-decoration: none;
          padding: 6px 16px;
          border: 3px solid #111111;
          background: #C8FF00;
          transition: all 0.15s ease;
        }

        .d47-nav-brand:hover {
          background: #111111;
          color: #C8FF00;
        }

        .d47-nav-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .d47-nav-link {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.8rem;
          font-weight: 500;
          color: #111111;
          text-decoration: none;
          padding: 6px 14px;
          border: 2px solid #111111;
          background: #fff;
          box-shadow: 2px 2px 0 #111111;
          transition: all 0.15s ease;
        }

        .d47-nav-link:hover {
          box-shadow: 3px 3px 0 #111111;
          transform: translate(-1px, -1px);
        }

        /* ===== DASHED DIVIDER ===== */
        .d47-divider {
          border: none;
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            #111111 0px,
            #111111 16px,
            transparent 16px,
            transparent 24px
          );
          margin: 60px 0 0;
        }

        /* ===== SECTION HEADERS ===== */
        .d47-section-title {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: clamp(1.4rem, 3.5vw, 1.8rem);
          color: #111111;
          text-transform: uppercase;
          margin: 20px 0 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .d47-section-number {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: 0.75rem;
          color: #FF6B00;
          border: 2px solid #FF6B00;
          padding: 2px 8px;
          line-height: 1;
        }

        /* ===== HERO ===== */
        .d47-hero {
          margin-bottom: 16px;
          position: relative;
        }

        /* Postmark circle decoration */
        .d47-postmark-circle {
          position: absolute;
          top: -8px;
          right: 20px;
          width: 100px;
          height: 100px;
          pointer-events: none;
          z-index: 0;
        }

        .d47-postmark-circle-ring {
          width: 100px;
          height: 100px;
          border: 1.5px solid #111111;
          border-radius: 50%;
          opacity: 0.08;
          position: absolute;
          top: 0;
          left: 0;
        }

        .d47-postmark-circle-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #111111;
          opacity: 0.08;
          white-space: nowrap;
        }

        .d47-postmark-circle-lines {
          position: absolute;
          top: 50%;
          left: -12px;
          right: -12px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 4px;
          pointer-events: none;
          opacity: 0.06;
        }

        .d47-postmark-circle-lines span {
          display: block;
          height: 1px;
          background: #111111;
        }

        .d47-name {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: clamp(3.2rem, 9vw, 5.5rem);
          color: #111111;
          line-height: 1.05;
          margin: 0 0 24px;
          letter-spacing: -1px;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
          display: inline;
          background-image: linear-gradient(#C8FF00, #C8FF00);
          background-repeat: no-repeat;
          background-position: 0 85%;
          background-size: 100% 0.5em;
          padding-bottom: 4px;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }

        /* Tagline postmark box */
        .d47-tagline-box {
          display: inline-block;
          border: 2px solid #111111;
          padding: 10px 20px;
          margin-top: 20px;
          margin-bottom: 28px;
          background: #FAFAF8;
        }

        .d47-tagline-text {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #111111;
          line-height: 1.4;
        }

        .d47-bio {
          font-family: 'Work Sans', sans-serif;
          font-size: 1rem;
          color: #444;
          max-width: 520px;
          line-height: 1.7;
          margin: 0 0 28px;
          font-weight: 400;
        }

        .d47-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .d47-hero-link {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.82rem;
          font-weight: 500;
          color: #111111;
          text-decoration: none;
          padding: 8px 20px;
          border: 3px solid #111111;
          background: #C8FF00;
          box-shadow: 4px 4px 0 #111111;
          transition: all 0.15s ease;
        }

        .d47-hero-link:hover {
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .d47-hero-link--outline {
          background: #fff;
        }

        .d47-hero-link--orange {
          background: #FF6B00;
          color: #111111;
        }

        /* ===== STAMP CARDS (Projects) ===== */
        .d47-card {
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 4px 4px 0 #111111;
          padding: 28px 28px 24px;
          margin-bottom: 24px;
          position: relative;
          transition: all 0.15s ease;
        }

        .d47-card:hover {
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .d47-denom {
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: 0.72rem;
          color: #FF6B00;
          line-height: 1;
          pointer-events: none;
          letter-spacing: 0.5px;
        }

        .d47-card h3 {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: 1.4rem;
          color: #111111;
          text-transform: uppercase;
          margin: 0 0 8px;
        }

        .d47-card p {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
          margin: 0 0 16px;
          font-weight: 400;
        }

        /* Tech tags */
        .d47-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 0 0 18px;
          padding: 0;
          list-style: none;
        }

        .d47-tech-item {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          padding: 3px 10px;
          border: 2px solid #111111;
          background: #C8FF00;
          color: #111111;
          text-transform: uppercase;
        }

        .d47-card-links {
          display: flex;
          gap: 10px;
        }

        .d47-card-link {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.78rem;
          font-weight: 500;
          color: #111111;
          text-decoration: none;
          padding: 5px 14px;
          border: 2px solid #111111;
          background: #fff;
          transition: all 0.15s ease;
        }

        .d47-card-link:hover {
          background: #111111;
          color: #fff;
        }

        .d47-card-link--accent {
          background: #FF6B00;
        }

        .d47-card-link--accent:hover {
          background: #111111;
          border-color: #111111;
          color: #FF6B00;
        }

        /* ===== INTEREST STAMPS ===== */
        .d47-interests-wrap {
          container-type: inline-size;
        }

        .d47-interests-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        @container (max-width: 500px) {
          .d47-interests-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @container (max-width: 300px) {
          .d47-interests-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .d47-interest {
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 3px 3px 0 #111111;
          padding: 18px 22px 14px;
          text-align: center;
          position: relative;
          transition: all 0.15s ease;
        }

        .d47-interest:nth-child(odd) .d47-interest-accent {
          background: #C8FF00;
        }

        .d47-interest:nth-child(even) .d47-interest-accent {
          background: #FF6B00;
        }

        .d47-interest:hover {
          box-shadow: 5px 5px 0 #111111;
          transform: translate(-2px, -2px);
        }

        .d47-interest-accent {
          display: block;
          width: 100%;
          height: 3px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
        }

        .d47-interest-denom {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: 0.58rem;
          color: #FF6B00;
          position: absolute;
          top: 8px;
          right: 10px;
          letter-spacing: 0.5px;
        }

        .d47-interest:nth-child(odd) .d47-interest-denom {
          color: #8AB300;
        }

        .d47-interest:nth-child(even) .d47-interest-denom {
          color: #FF6B00;
        }

        .d47-interest-icon {
          font-size: 1.2rem;
          display: block;
          margin-bottom: 6px;
          color: #111111;
        }

        .d47-interest-label {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.78rem;
          font-weight: 500;
          color: #111111;
        }

        /* ===== FOOTER ===== */
        .d47-footer {
          margin-top: 72px;
          background: #111111;
          padding: 36px 32px;
        }

        .d47-footer-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .d47-footer-link {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.78rem;
          font-weight: 500;
          color: #C8FF00;
          text-decoration: none;
          padding: 6px 16px;
          border: 2px solid #C8FF00;
          background: transparent;
          box-shadow: 3px 3px 0 #C8FF00;
          transition: all 0.15s ease;
        }

        .d47-footer-link:hover {
          box-shadow: 5px 5px 0 #C8FF00;
          transform: translate(-2px, -2px);
        }

        .d47-footer-text {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-size: 0.82rem;
          color: #C8FF00;
          font-weight: 500;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .d47-container {
            padding: 0 18px 0;
          }

          .d47-nav {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .d47-card {
            padding: 22px 18px 20px;
          }

          .d47-card:hover {
            transform: translate(-2px, -2px);
          }

          .d47-interest {
            padding: 16px 16px 12px;
          }

          .d47-interest:hover {
            transform: translate(-2px, -2px);
          }

          .d47-postmark-circle {
            display: none;
          }

          .d47-footer {
            flex-direction: column;
          }

          .d47-hero-links {
            gap: 8px;
          }
        }
      `}</style>

      <div className="d47-root">
        <div className="d47-container">
          {/* ===== NAVIGATION ===== */}
          <nav className="d47-nav">
            <Link to="/" className="d47-nav-brand">
              DD
            </Link>
            <div className="d47-nav-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="d47-nav-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="d47-nav-link"
              >
                LinkedIn
              </a>
              <a href="/uses" className="d47-nav-link">
                /uses
              </a>
            </div>
          </nav>

          {/* ===== HERO ===== */}
          <header className="d47-hero">
<h1 className="d47-name">{intro.name}</h1>

            {/* Tagline in postmark-style box */}
            <div className="d47-tagline-box">
              <span className="d47-tagline-text">{intro.tagline}</span>
            </div>

            <p className="d47-bio">{intro.bio}</p>

            <div className="d47-hero-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="d47-hero-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="d47-hero-link d47-hero-link--orange"
              >
                LinkedIn
              </a>
              <a href="/uses" className="d47-hero-link d47-hero-link--outline">
                /uses
              </a>
            </div>
          </header>

          {/* ===== PROJECTS ===== */}
          <h2 className="d47-section-title">
            <span className="d47-section-number">SEC.01</span>
            Projects
          </h2>

          {projects.map((project, idx) => (
            <div key={project.name} className="d47-card">
              <span className="d47-denom">
                No.{String(idx + 1).padStart(2, '0')}
              </span>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <ul className="d47-tech-list">
                {project.tech.map((t) => (
                  <li key={t} className="d47-tech-item">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="d47-card-links">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d47-card-link d47-card-link--accent"
                >
                  Visit
                </a>
                <a
                  href={project.cvAnchor}
                  className="d47-card-link"
                >
                  CV Entry
                </a>
              </div>
            </div>
          ))}

          {/* ===== INTERESTS ===== */}
          <h2 className="d47-section-title">
            <span className="d47-section-number">SEC.02</span>
            Interests
          </h2>

          <div className="d47-interests-wrap">
          <div className="d47-interests-grid">
            {personal.interests.map((interest, idx) => (
              <div key={interest.label} className="d47-interest">
                <span className="d47-interest-accent" />
                <span className="d47-interest-denom">
                  No.{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="d47-interest-icon">
                  {interestIcons[interest.icon] || '?'}
                </span>
                <span className="d47-interest-label">
                  {interest.label}
                </span>
              </div>
            ))}
          </div>
          </div>

        </div>

        {/* ===== FOOTER ===== */}
        <footer className="d47-footer">
          <div className="d47-footer-inner">
            <div className="d47-footer-text">
              Dimitar Dulev &middot; Design 47 &middot; Stamp Refined
            </div>
            <a href="mailto:dimitar@dulev.dev" className="d47-footer-link">
              Contact Me
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
