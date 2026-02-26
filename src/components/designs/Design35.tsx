import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestEmojis: Record<string, string> = {
  guitar: '\uD83C\uDFB8',
  running: '\uD83C\uDFC3',
  bike: '\uD83D\uDEB2',
  mountains: '\u26F0\uFE0F',
  terminal: '\uD83D\uDDA5\uFE0F',
}

const INTEREST_COLORS = [
  { bg: '#C8FF00', text: '#111111', shadow: '#9bc400' },
  { bg: '#FF6B00', text: '#FFFFFF', shadow: '#c45200' },
  { bg: '#111111', text: '#FFFFFF', shadow: '#000000' },
] as const

export function Design35() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        /* ===== KEYFRAMES ===== */
        @keyframes sb-wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-0.5deg); }
          100% { transform: rotate(0deg); }
        }

        /* ===== ROOT ===== */
        .sb-root {
          font-family: 'DM Sans', 'Segoe UI', sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: #FAFAF8;
          color: #111111;
          line-height: 1.7;
          position: relative;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .sb-root *,
        .sb-root *::before,
        .sb-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .sb-container {
          max-width: 880px;
          margin: 0 auto;
          padding: 48px 32px 80px;
          position: relative;
          z-index: 1;
        }

        /* ===== DECORATIVE BLOCK STACK ===== */
        .sb-deco-stack {
          position: fixed;
          top: 36px;
          right: 32px;
          z-index: 0;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: flex-end;
          transform: rotate(6deg);
        }

        .sb-deco-sq {
          border: 2px solid #111;
        }

        .sb-deco-sq-1 {
          width: 24px;
          height: 24px;
          background: #C8FF00;
          box-shadow: 3px 3px 0 #111;
        }

        .sb-deco-sq-2 {
          width: 20px;
          height: 20px;
          background: #FF6B00;
          box-shadow: 3px 3px 0 #111;
          margin-right: 10px;
        }

        .sb-deco-sq-3 {
          width: 16px;
          height: 16px;
          background: #111111;
          box-shadow: 2px 2px 0 #FF6B00;
          margin-right: 3px;
        }

        /* ===== BACK LINK (NAV) ===== */
        .sb-back-link {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          color: #111;
          text-decoration: none;
          padding: 8px 20px;
          border: 3px solid #111;
          border-radius: 0;
          background: #fff;
          box-shadow: 4px 4px 0 #111;
          transition: all 0.15s ease;
          margin-bottom: 40px;
        }

        .sb-back-link:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #111;
        }

        .sb-back-link:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #111;
        }

        /* ===== HEADER / HERO ===== */
        .sb-header {
          margin-bottom: 56px;
        }

        .sb-name-row {
          display: flex;
          align-items: baseline;
          gap: 0;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .sb-first-letter-block {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 68px;
          height: 68px;
          background: #C8FF00;
          border: 3px solid #111;
          border-radius: 0;
          box-shadow: 4px 4px 0 #111;
          margin-right: 10px;
          flex-shrink: 0;
          /* faux 3D right+bottom */
          border-right-width: 5px;
          border-bottom-width: 5px;
        }

        .sb-first-letter-block span {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 2.6rem;
          color: #111;
          line-height: 1;
        }

        .sb-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(2.2rem, 6vw, 3.6rem);
          color: #111;
          line-height: 1.1;
          margin: 0;
        }

        .sb-tagline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          color: #444;
          margin: 10px 0 0;
          line-height: 1.5;
        }

        .sb-bio {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 0.95rem;
          color: #555;
          max-width: 540px;
          line-height: 1.8;
          margin-top: 20px;
        }

        /* ===== HEADER LINKS (BUTTONS) ===== */
        .sb-header-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .sb-header-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: #111;
          text-decoration: none;
          padding: 9px 22px;
          border: 3px solid #111;
          border-radius: 0;
          transition: all 0.15s ease;
        }

        .sb-header-link--github {
          background: #C8FF00;
          box-shadow: 4px 4px 0 #111;
        }
        .sb-header-link--github:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #111;
        }

        .sb-header-link--linkedin {
          background: #fff;
          border-color: #FF6B00;
          color: #111;
          box-shadow: 4px 4px 0 #FF6B00;
        }
        .sb-header-link--linkedin:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #FF6B00;
        }

        .sb-header-link--uses {
          background: #FF6B00;
          color: #fff;
          box-shadow: 4px 4px 0 #111;
        }
        .sb-header-link--uses:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #111;
        }

        .sb-header-link:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #111;
        }

        /* ===== SECTION HEADERS ===== */
        .sb-section-header {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          color: #111;
          margin: 0 0 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sb-section-header-block {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 3px solid #111;
          border-radius: 0;
          flex-shrink: 0;
        }

        /* ===== PROJECTS GRID ===== */
        .sb-projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 56px;
        }

        .sb-project-card {
          background: #FFFFFF;
          border: 3px solid #111;
          border-radius: 0;
          padding: 0;
          position: relative;
          transition: all 0.15s ease;
          overflow: hidden;
        }

        .sb-project-card:nth-child(1) {
          transform: rotate(-0.4deg);
        }
        .sb-project-card:nth-child(2) {
          transform: rotate(0.3deg);
        }

        /* Lime accent for first card */
        .sb-project-card:nth-child(odd) {
          border-left: 4px solid #C8FF00;
          box-shadow: 4px 4px 0 #111;
        }
        .sb-project-card:nth-child(odd):hover {
          transform: translate(-2px, -2px) rotate(-0.4deg);
          box-shadow: 6px 6px 0 #111;
        }
        .sb-project-card:nth-child(odd) .sb-tech-pill {
          border-color: #C8FF00;
          color: #555;
        }

        /* Orange accent for second card */
        .sb-project-card:nth-child(even) {
          border-left: 4px solid #FF6B00;
          box-shadow: 4px 4px 0 #FF6B00;
        }
        .sb-project-card:nth-child(even):hover {
          transform: translate(-2px, -2px) rotate(0.3deg);
          box-shadow: 6px 6px 0 #FF6B00;
        }
        .sb-project-card:nth-child(even) .sb-tech-pill {
          border-color: #FF6B00;
          color: #555;
        }

        .sb-project-body {
          padding: 24px 24px 28px;
        }

        .sb-project-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.3rem;
          color: #111;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .sb-project-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 0.88rem;
          color: #555;
          line-height: 1.7;
          margin: 0 0 16px;
        }

        /* ===== TECH PILLS ===== */
        .sb-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0 0 20px;
          padding: 0;
          list-style: none;
        }

        .sb-tech-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 12px;
          border: 2px solid;
          border-radius: 2px;
          background: transparent;
          transition: all 0.15s ease;
        }

        .sb-tech-pill:hover {
          background: #FAFAF8;
        }

        /* ===== CARD LINKS ===== */
        .sb-card-links {
          display: flex;
          gap: 10px;
        }

        .sb-card-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          color: #111;
          text-decoration: none;
          padding: 6px 16px;
          border: 2px solid #111;
          border-radius: 0;
          background: #fff;
          box-shadow: 3px 3px 0 #111;
          transition: all 0.15s ease;
        }

        .sb-card-link:hover {
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0 #111;
          background: #111;
          color: #fff;
        }

        .sb-card-link:active {
          transform: translate(1px, 1px);
          box-shadow: 2px 2px 0 #111;
        }

        /* ===== INTERESTS SECTION ===== */
        .sb-interests-section {
          margin-bottom: 56px;
        }

        .sb-interests-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .sb-interest-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 110px;
          height: 100px;
          border: 3px solid #111;
          border-radius: 0;
          transition: all 0.15s ease;
          cursor: default;
          /* faux 3D: thicker right + bottom */
          border-right-width: 5px;
          border-bottom-width: 5px;
        }

        .sb-interest-block:hover {
          animation: sb-wiggle 0.3s ease;
        }

        .sb-interest-icon {
          font-size: 1.6rem;
          line-height: 1;
        }

        .sb-interest-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          text-align: center;
          line-height: 1.2;
        }

        /* ===== FOOTER ===== */
        .sb-footer {
          margin-top: 64px;
          padding-top: 24px;
          border-top: 3px solid #111;
          text-align: center;
        }

        .sb-footer-text {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.8rem;
          color: #999;
        }

        .sb-footer-blocks {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 16px;
        }

        .sb-footer-mini-block {
          width: 10px;
          height: 10px;
          border: 2px solid #111;
          border-radius: 0;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 700px) {
          .sb-container {
            padding: 28px 18px 60px;
          }

          .sb-projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sb-project-card:nth-child(1),
          .sb-project-card:nth-child(2) {
            transform: rotate(0deg);
          }
          .sb-project-card:nth-child(odd):hover,
          .sb-project-card:nth-child(even):hover {
            transform: translate(-2px, -2px) rotate(0deg);
          }

          .sb-deco-stack {
            display: none;
          }

          .sb-first-letter-block {
            width: 52px;
            height: 52px;
          }

          .sb-first-letter-block span {
            font-size: 2rem;
          }

          .sb-interests-row {
            gap: 12px;
          }

          .sb-interest-block {
            width: 95px;
            height: 88px;
          }

          .sb-header-links {
            gap: 10px;
          }
        }
      `}</style>

      <div className="sb-root">
        {/* Decorative block stack - top right */}
        <div className="sb-deco-stack">
          <div className="sb-deco-sq sb-deco-sq-1" />
          <div className="sb-deco-sq sb-deco-sq-2" />
          <div className="sb-deco-sq sb-deco-sq-3" />
        </div>

        <div className="sb-container">
          {/* Nav - back link */}
          <Link to="/" className="sb-back-link">
            &larr; Home
          </Link>

          {/* ===== HERO ===== */}
          <header className="sb-header">
            <div className="sb-name-row">
              <div className="sb-first-letter-block">
                <span>{intro.name.charAt(0)}</span>
              </div>
              <h1 className="sb-name">{intro.name.slice(1)}</h1>
            </div>

            <p className="sb-tagline">{intro.tagline}</p>
            <p className="sb-bio">{intro.bio}</p>

            <div className="sb-header-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sb-header-link sb-header-link--github"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sb-header-link sb-header-link--linkedin"
              >
                LinkedIn
              </a>
              <a href="/uses" className="sb-header-link sb-header-link--uses">
                /uses
              </a>
            </div>
          </header>

          {/* ===== PROJECTS ===== */}
          <section>
            <h2 className="sb-section-header">
              <span
                className="sb-section-header-block"
                style={{ background: '#C8FF00', boxShadow: '2px 2px 0 #111' }}
              />
              Projects
            </h2>

            <div className="sb-projects-grid">
              {projects.map((project) => (
                <div key={project.name} className="sb-project-card">
                  <div className="sb-project-body">
                    <h3 className="sb-project-name">{project.name}</h3>
                    <p className="sb-project-desc">{project.description}</p>

                    <ul className="sb-tech-list">
                      {project.tech.map((t) => (
                        <li key={t} className="sb-tech-pill">
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="sb-card-links">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sb-card-link"
                      >
                        Visit
                      </a>
                      <a href={project.cvAnchor} className="sb-card-link">
                        CV Entry
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== INTERESTS ===== */}
          <section className="sb-interests-section">
            <h2 className="sb-section-header">
              <span
                className="sb-section-header-block"
                style={{ background: '#FF6B00', boxShadow: '2px 2px 0 #111' }}
              />
              Interests
            </h2>

            <div className="sb-interests-row">
              {personal.interests.map((interest, idx) => {
                const color = INTEREST_COLORS[idx % INTEREST_COLORS.length]
                return (
                  <div
                    key={interest.label}
                    className="sb-interest-block"
                    style={{
                      background: color.bg,
                      borderColor: '#111',
                      boxShadow: `4px 4px 0 ${color.shadow}`,
                    }}
                  >
                    <span className="sb-interest-icon">
                      {interestEmojis[interest.icon] || '?'}
                    </span>
                    <span
                      className="sb-interest-label"
                      style={{ color: color.text }}
                    >
                      {interest.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer className="sb-footer">
            <span className="sb-footer-text">
              Sharp blocks &middot; {new Date().getFullYear()}
            </span>
            <div className="sb-footer-blocks">
              <div
                className="sb-footer-mini-block"
                style={{ background: '#C8FF00' }}
              />
              <div
                className="sb-footer-mini-block"
                style={{ background: '#FF6B00' }}
              />
              <div
                className="sb-footer-mini-block"
                style={{ background: '#111111' }}
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
