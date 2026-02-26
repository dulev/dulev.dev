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

export function Design26() {
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
        .stamp-root {
          font-family: 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: #FFF8F0;
          color: #1a1a1a;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .stamp-root *,
        .stamp-root *::before,
        .stamp-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .stamp-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 32px 80px;
        }

        /* ===== NAVIGATION BAR ===== */
        .stamp-nav {
          border-bottom: 3px solid #1a1a1a;
          padding: 16px 0;
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stamp-nav-brand {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
          padding: 6px 14px;
          border: 2px dashed #1a1a1a;
          transition: all 0.15s ease;
        }

        .stamp-nav-brand:hover {
          background: #1a1a1a;
          color: #FFF8F0;
        }

        .stamp-nav-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .stamp-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          padding: 6px 14px;
          border: 2px solid #1a1a1a;
          background: #fff;
          box-shadow: 2px 2px 0 #1a1a1a;
          transition: all 0.15s ease;
        }

        .stamp-nav-link:hover {
          box-shadow: 3px 3px 0 #1a1a1a;
          transform: translate(-1px, -1px);
        }

        /* ===== SECTION HEADERS ===== */
        .stamp-section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.3rem, 3vw, 1.6rem);
          color: #1a1a1a;
          margin: 56px 0 28px;
          padding-bottom: 10px;
          border-bottom: 3px solid #1a1a1a;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stamp-section-number {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          color: #E8503A;
          border: 2px solid #E8503A;
          padding: 2px 8px;
          line-height: 1;
        }

        /* ===== HERO ===== */
        .stamp-hero {
          margin-bottom: 16px;
          position: relative;
        }

        .stamp-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.6rem, 7vw, 4.4rem);
          color: #1a1a1a;
          line-height: 1.05;
          margin: 0 0 6px;
          letter-spacing: -1px;
        }

        .stamp-name-underline {
          display: block;
          width: 120px;
          height: 6px;
          background: #E8503A;
          margin-bottom: 24px;
        }

        /* Postmark style tagline */
        .stamp-postmark {
          display: inline-block;
          border: 2px solid #1a1a1a;
          border-radius: 50%;
          padding: 18px 22px;
          position: relative;
          transform: rotate(-6deg);
          margin-bottom: 24px;
        }

        .stamp-postmark-inner {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #1a1a1a;
          text-align: center;
          line-height: 1.5;
        }

        .stamp-postmark-line {
          position: absolute;
          top: 50%;
          left: -20px;
          right: -20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: -1;
        }

        .stamp-postmark-line span {
          display: block;
          height: 1.5px;
          background: #1a1a1a;
          opacity: 0.3;
        }

        .stamp-bio {
          font-size: 1rem;
          color: #444;
          max-width: 520px;
          line-height: 1.7;
          margin: 0 0 28px;
          font-weight: 400;
        }

        .stamp-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .stamp-hero-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          padding: 8px 20px;
          border: 3px solid #1a1a1a;
          background: #fff;
          box-shadow: 4px 4px 0 #1a1a1a;
          transition: all 0.15s ease;
        }

        .stamp-hero-link:hover {
          box-shadow: 6px 6px 0 #1a1a1a;
          transform: translate(-2px, -2px);
        }

        /* ===== STAMP CARD (Project) ===== */
        .stamp-card {
          background: #fff;
          border: 3px solid #1a1a1a;
          box-shadow: 4px 4px 0 #1a1a1a;
          padding: 28px 28px 24px;
          margin-bottom: 24px;
          position: relative;
          transition: all 0.15s ease;
        }

        .stamp-card:nth-child(odd) {
          transform: rotate(-0.5deg);
        }

        .stamp-card:nth-child(even) {
          transform: rotate(0.6deg);
        }

        .stamp-card:hover {
          box-shadow: 6px 6px 0 #1a1a1a;
          transform: translate(0, -2px) rotate(0deg);
        }

        /* Perforated edge effect using background image */
        .stamp-card::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border: 3px solid transparent;
          background:
            radial-gradient(circle, #FFF8F0 3px, transparent 3px) repeat,
            transparent;
          background-size: 14px 14px;
          background-position: -1px -1px;
          pointer-events: none;
          z-index: 1;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          padding: 6px;
        }

        /* Denomination corner */
        .stamp-denom {
          position: absolute;
          top: 10px;
          right: 14px;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: #E8503A;
          opacity: 0.2;
          line-height: 1;
          pointer-events: none;
          z-index: 2;
        }

        .stamp-card h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          color: #1a1a1a;
          margin: 0 0 8px;
        }

        .stamp-card p {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
          margin: 0 0 16px;
        }

        /* Tech tags */
        .stamp-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 0 0 18px;
          padding: 0;
          list-style: none;
        }

        .stamp-tech-item {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 3px 10px;
          border: 2px solid #1a1a1a;
          background: #FFF8F0;
          color: #1a1a1a;
          text-transform: uppercase;
        }

        .stamp-card-links {
          display: flex;
          gap: 10px;
        }

        .stamp-card-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          padding: 5px 14px;
          border: 2px solid #1a1a1a;
          background: #fff;
          transition: all 0.15s ease;
        }

        .stamp-card-link:hover {
          background: #1a1a1a;
          color: #fff;
        }

        .stamp-card-link--accent:hover {
          background: #E8503A;
          border-color: #E8503A;
          color: #fff;
        }

        /* ===== INTEREST STAMPS ===== */
        .stamp-interests-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .stamp-interest {
          background: #fff;
          border: 3px solid #1a1a1a;
          box-shadow: 3px 3px 0 #1a1a1a;
          padding: 16px 20px;
          min-width: 120px;
          text-align: center;
          position: relative;
          transition: all 0.15s ease;
        }

        .stamp-interest:nth-child(1) { transform: rotate(-1deg); }
        .stamp-interest:nth-child(2) { transform: rotate(0.7deg); }
        .stamp-interest:nth-child(3) { transform: rotate(-0.4deg); }
        .stamp-interest:nth-child(4) { transform: rotate(0.9deg); }
        .stamp-interest:nth-child(5) { transform: rotate(-0.6deg); }

        .stamp-interest:hover {
          box-shadow: 5px 5px 0 #1a1a1a;
          transform: translate(0, -2px) rotate(0deg);
        }

        /* Perforated edge on interest stamps */
        .stamp-interest::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          background:
            radial-gradient(circle, #FFF8F0 2.5px, transparent 2.5px) repeat;
          background-size: 11px 11px;
          background-position: -1px -1px;
          pointer-events: none;
          z-index: 1;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          padding: 4px;
        }

        .stamp-interest-denom {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 0.6rem;
          color: #E8503A;
          position: absolute;
          top: 6px;
          right: 8px;
          opacity: 0.4;
        }

        .stamp-interest-icon {
          font-size: 1.2rem;
          display: block;
          margin-bottom: 6px;
          color: #1a1a1a;
        }

        .stamp-interest-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #1a1a1a;
        }

        /* ===== POSTMARK DECORATIONS ===== */
        .stamp-postmark-deco {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 2px solid #1a1a1a;
          border-radius: 50%;
          opacity: 0.06;
          pointer-events: none;
        }

        .stamp-postmark-deco::before,
        .stamp-postmark-deco::after {
          content: '';
          position: absolute;
          top: 50%;
          left: -10px;
          right: -10px;
          height: 1.5px;
          background: #1a1a1a;
        }

        .stamp-postmark-deco::before {
          transform: translateY(-4px);
        }

        .stamp-postmark-deco::after {
          transform: translateY(4px);
        }

        /* Cancelled stamp mark */
        .stamp-cancelled {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 60px;
          border: 2px solid #E8503A;
          border-radius: 50%;
          opacity: 0.12;
        }

        .stamp-cancelled::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -8px;
          right: -8px;
          height: 0;
          border-top: 2px solid #E8503A;
          border-bottom: 2px solid #E8503A;
          padding: 3px 0;
          transform: translateY(-50%) rotate(-30deg);
        }

        /* ===== CONNECT / FOOTER ===== */
        .stamp-footer {
          margin-top: 64px;
          padding-top: 32px;
          border-top: 3px solid #1a1a1a;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .stamp-footer-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: #888;
        }

        .stamp-footer-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .stamp-footer-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          padding: 6px 16px;
          border: 2px solid #1a1a1a;
          background: #fff;
          box-shadow: 3px 3px 0 #1a1a1a;
          transition: all 0.15s ease;
        }

        .stamp-footer-link:hover {
          box-shadow: 5px 5px 0 #1a1a1a;
          transform: translate(-2px, -2px);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .stamp-container {
            padding: 0 18px 60px;
          }

          .stamp-nav {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .stamp-card {
            padding: 22px 18px 20px;
          }

          .stamp-card:nth-child(odd),
          .stamp-card:nth-child(even) {
            transform: rotate(0deg);
          }

          .stamp-card:hover {
            transform: translate(0, -2px);
          }

          .stamp-interests-grid {
            gap: 10px;
          }

          .stamp-interest {
            min-width: 100px;
            padding: 14px 16px;
          }

          .stamp-interest:nth-child(n) {
            transform: rotate(0deg);
          }

          .stamp-interest:hover {
            transform: translate(0, -2px);
          }

          .stamp-postmark {
            padding: 14px 16px;
          }

          .stamp-footer {
            flex-direction: column;
          }

          .stamp-hero-links {
            gap: 8px;
          }
        }
      `}</style>

      <div className="stamp-root">
        <div className="stamp-container">
          {/* ===== NAVIGATION ===== */}
          <nav className="stamp-nav">
            <Link to="/" className="stamp-nav-brand">
              DD
            </Link>
            <div className="stamp-nav-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="stamp-nav-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="stamp-nav-link"
              >
                LinkedIn
              </a>
              <a href="/uses" className="stamp-nav-link">
                /uses
              </a>
            </div>
          </nav>

          {/* ===== HERO ===== */}
          <header className="stamp-hero">
            {/* Decorative postmark - top right */}
            <div
              className="stamp-postmark-deco"
              style={{ top: -10, right: 0 }}
            />

            <h1 className="stamp-name">{intro.name}</h1>
            <span className="stamp-name-underline" />

            {/* Tagline in postmark style */}
            <div className="stamp-postmark">
              <div className="stamp-postmark-inner">
                {intro.tagline}
              </div>
              <div className="stamp-postmark-line">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <p className="stamp-bio">{intro.bio}</p>

            <div className="stamp-hero-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="stamp-hero-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="stamp-hero-link"
              >
                LinkedIn
              </a>
              <a href="/uses" className="stamp-hero-link">
                /uses
              </a>
            </div>
          </header>

          {/* ===== PROJECTS ===== */}
          <h2 className="stamp-section-title">
            <span className="stamp-section-number">SEC.01</span>
            Projects
          </h2>

          {projects.map((project, idx) => (
            <div key={project.name} className="stamp-card">
              <span className="stamp-denom">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <ul className="stamp-tech-list">
                {project.tech.map((t) => (
                  <li key={t} className="stamp-tech-item">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="stamp-card-links">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stamp-card-link stamp-card-link--accent"
                >
                  Visit
                </a>
                <a
                  href={project.cvAnchor}
                  className="stamp-card-link"
                >
                  CV Entry
                </a>
              </div>
            </div>
          ))}

          {/* ===== INTERESTS ===== */}
          <h2 className="stamp-section-title">
            <span className="stamp-section-number">SEC.02</span>
            Interests
          </h2>

          <div className="stamp-interests-grid">
            {personal.interests.map((interest, idx) => (
              <div key={interest.label} className="stamp-interest">
                <span className="stamp-interest-denom">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="stamp-interest-icon">
                  {interestIcons[interest.icon] || '?'}
                </span>
                <span className="stamp-interest-label">
                  {interest.label}
                </span>
              </div>
            ))}
          </div>

          {/* ===== CONNECT / FOOTER ===== */}
          <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="stamp-cancelled" aria-hidden="true" />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.72rem',
                color: '#bbb',
                fontWeight: 500,
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}
            >
              Collected &amp; Curated {new Date().getFullYear()}
            </span>
          </div>

          <footer className="stamp-footer">
            <div className="stamp-footer-text">
              Dimitar Dulev &middot; Design 26 &middot; Stamp Collection
            </div>
            <div className="stamp-footer-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="stamp-footer-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="stamp-footer-link"
              >
                LinkedIn
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
