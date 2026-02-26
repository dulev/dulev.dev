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

const ACCENT_COLORS = ['#F08C5A', '#5B9BD5', '#7BC67E'] as const
const ACCENT_SHADOWS = ['#c06a3a', '#3d7ab5', '#5aa65e'] as const

export function Design30() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700&display=swap'
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
        @keyframes tb-wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }

        @keyframes tb-float {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-6px) rotate(-8deg); }
        }

        @keyframes tb-float-2 {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-4px) rotate(12deg); }
        }

        @keyframes tb-float-3 {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-8px) rotate(-3deg); }
        }

        /* ===== ROOT ===== */
        .tb-root {
          font-family: 'Nunito', 'Segoe UI', sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: #FAF7F2;
          color: #222;
          line-height: 1.7;
          position: relative;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .tb-root *,
        .tb-root *::before,
        .tb-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .tb-container {
          max-width: 880px;
          margin: 0 auto;
          padding: 48px 32px 80px;
          position: relative;
          z-index: 1;
        }

        /* ===== DECORATIVE BLOCKS ===== */
        .tb-deco-blocks {
          position: fixed;
          top: 32px;
          right: 24px;
          z-index: 0;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-end;
        }

        .tb-deco-block {
          border-radius: 6px;
          border: 3px solid #222;
        }

        .tb-deco-block-1 {
          width: 28px;
          height: 28px;
          background: #F08C5A;
          box-shadow: 3px 3px 0 #c06a3a;
          animation: tb-float 4s ease-in-out infinite;
        }

        .tb-deco-block-2 {
          width: 22px;
          height: 22px;
          background: #5B9BD5;
          box-shadow: 3px 3px 0 #3d7ab5;
          margin-right: 14px;
          animation: tb-float-2 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .tb-deco-block-3 {
          width: 18px;
          height: 18px;
          background: #7BC67E;
          box-shadow: 3px 3px 0 #5aa65e;
          margin-right: 4px;
          animation: tb-float-3 3.5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .tb-deco-block-4 {
          width: 14px;
          height: 14px;
          background: #F08C5A;
          box-shadow: 2px 2px 0 #c06a3a;
          margin-right: 20px;
          animation: tb-float 4.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        /* ===== BACK LINK ===== */
        .tb-back-link {
          display: inline-block;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: #222;
          text-decoration: none;
          padding: 8px 20px;
          border: 3px solid #222;
          border-radius: 12px;
          background: #fff;
          box-shadow: 4px 4px 0 #222;
          transition: all 0.2s ease;
          margin-bottom: 40px;
        }

        .tb-back-link:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #222;
        }

        .tb-back-link:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #222;
        }

        /* ===== HEADER ===== */
        .tb-header {
          margin-bottom: 56px;
        }

        .tb-name-row {
          display: flex;
          align-items: baseline;
          gap: 0;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .tb-first-letter-block {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: #F08C5A;
          border: 3px solid #222;
          border-radius: 14px;
          box-shadow: 4px 4px 0 #c06a3a;
          margin-right: 8px;
          flex-shrink: 0;
        }

        .tb-first-letter-block span {
          font-family: 'Baloo 2', cursive;
          font-weight: 700;
          font-size: 2.4rem;
          color: #fff;
          line-height: 1;
          margin-top: 2px;
        }

        .tb-name {
          font-family: 'Baloo 2', cursive;
          font-weight: 700;
          font-size: clamp(2.2rem, 6vw, 3.6rem);
          color: #222;
          line-height: 1.1;
          margin: 0;
        }

        .tb-tagline {
          font-family: 'Nunito', sans-serif;
          font-weight: 500;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: #555;
          margin: 8px 0 0;
          line-height: 1.5;
        }

        .tb-bio {
          font-family: 'Nunito', sans-serif;
          font-weight: 400;
          font-size: 0.95rem;
          color: #666;
          max-width: 540px;
          line-height: 1.8;
          margin-top: 20px;
        }

        /* ===== HEADER LINKS ===== */
        .tb-header-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .tb-header-link {
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: #222;
          text-decoration: none;
          padding: 8px 22px;
          border: 3px solid #222;
          border-radius: 50px;
          background: #fff;
          box-shadow: 4px 4px 0 #222;
          transition: all 0.2s ease;
        }

        .tb-header-link:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #222;
          background: #5B9BD5;
          color: #fff;
        }

        .tb-header-link:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 #222;
        }

        /* ===== SECTION HEADERS ===== */
        .tb-section-header {
          font-family: 'Baloo 2', cursive;
          font-weight: 600;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          color: #222;
          margin: 0 0 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tb-section-header-dot {
          display: inline-block;
          width: 14px;
          height: 14px;
          border-radius: 4px;
          border: 3px solid #222;
          flex-shrink: 0;
        }

        /* ===== PROJECT CARDS ===== */
        .tb-projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 56px;
        }

        .tb-project-card {
          background: #fff;
          border: 3px solid #222;
          padding: 0;
          position: relative;
          transition: all 0.2s ease;
          overflow: hidden;
        }

        .tb-project-card:nth-child(1) {
          border-radius: 16px 4px 16px 4px;
        }

        .tb-project-card:nth-child(2) {
          border-radius: 4px 16px 4px 16px;
        }

        .tb-project-card:nth-child(odd) .tb-project-accent-bar {
          background: #F08C5A;
        }
        .tb-project-card:nth-child(odd) {
          box-shadow: 5px 5px 0 #F08C5A;
        }
        .tb-project-card:nth-child(odd):hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0 #F08C5A;
        }
        .tb-project-card:nth-child(odd) .tb-tech-pill {
          border-color: #F08C5A;
          color: #c06a3a;
        }

        .tb-project-card:nth-child(even) .tb-project-accent-bar {
          background: #5B9BD5;
        }
        .tb-project-card:nth-child(even) {
          box-shadow: 5px 5px 0 #5B9BD5;
        }
        .tb-project-card:nth-child(even):hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0 #5B9BD5;
        }
        .tb-project-card:nth-child(even) .tb-tech-pill {
          border-color: #5B9BD5;
          color: #3d7ab5;
        }

        .tb-project-accent-bar {
          height: 5px;
          width: 100%;
        }

        .tb-project-body {
          padding: 24px 24px 28px;
        }

        .tb-project-name {
          font-family: 'Baloo 2', cursive;
          font-weight: 700;
          font-size: 1.3rem;
          color: #222;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .tb-project-desc {
          font-family: 'Nunito', sans-serif;
          font-weight: 400;
          font-size: 0.88rem;
          color: #555;
          line-height: 1.7;
          margin: 0 0 16px;
        }

        /* ===== TECH PILLS ===== */
        .tb-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0 0 20px;
          padding: 0;
          list-style: none;
        }

        .tb-tech-pill {
          font-family: 'Nunito', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 12px;
          border: 2px solid;
          border-radius: 50px;
          background: transparent;
          transition: all 0.2s ease;
        }

        .tb-tech-pill:hover {
          background: #FAF7F2;
        }

        /* ===== CARD LINKS ===== */
        .tb-card-links {
          display: flex;
          gap: 10px;
        }

        .tb-card-link {
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          color: #222;
          text-decoration: none;
          padding: 6px 16px;
          border: 2px solid #222;
          border-radius: 8px;
          background: #fff;
          box-shadow: 3px 3px 0 #222;
          transition: all 0.2s ease;
        }

        .tb-card-link:hover {
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0 #222;
          background: #222;
          color: #fff;
        }

        .tb-card-link:active {
          transform: translate(1px, 1px);
          box-shadow: 2px 2px 0 #222;
        }

        /* ===== INTERESTS SECTION ===== */
        .tb-interests-section {
          margin-bottom: 56px;
        }

        .tb-interests-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .tb-interest-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 110px;
          height: 100px;
          border: 3px solid #222;
          border-radius: 14px;
          background: #fff;
          transition: all 0.2s ease;
          cursor: default;
        }

        .tb-interest-block:hover {
          animation: tb-wiggle 0.3s ease;
          transform: translate(-2px, -2px);
        }

        .tb-interest-block:nth-child(3n+1) {
          background: #F08C5A;
          box-shadow: 4px 4px 0 #c06a3a;
        }
        .tb-interest-block:nth-child(3n+1):hover {
          box-shadow: 6px 6px 0 #c06a3a;
        }
        .tb-interest-block:nth-child(3n+1) .tb-interest-label {
          color: #fff;
        }

        .tb-interest-block:nth-child(3n+2) {
          background: #5B9BD5;
          box-shadow: 4px 4px 0 #3d7ab5;
        }
        .tb-interest-block:nth-child(3n+2):hover {
          box-shadow: 6px 6px 0 #3d7ab5;
        }
        .tb-interest-block:nth-child(3n+2) .tb-interest-label {
          color: #fff;
        }

        .tb-interest-block:nth-child(3n) {
          background: #7BC67E;
          box-shadow: 4px 4px 0 #5aa65e;
        }
        .tb-interest-block:nth-child(3n):hover {
          box-shadow: 6px 6px 0 #5aa65e;
        }
        .tb-interest-block:nth-child(3n) .tb-interest-label {
          color: #fff;
        }

        .tb-interest-icon {
          font-size: 1.6rem;
          line-height: 1;
        }

        .tb-interest-label {
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          text-align: center;
          line-height: 1.2;
        }

        /* ===== FOOTER ===== */
        .tb-footer {
          margin-top: 64px;
          padding-top: 24px;
          border-top: 3px solid #222;
          text-align: center;
        }

        .tb-footer-text {
          font-family: 'Nunito', sans-serif;
          font-weight: 500;
          font-size: 0.8rem;
          color: #999;
        }

        .tb-footer-blocks {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .tb-footer-mini-block {
          width: 12px;
          height: 12px;
          border: 2px solid #222;
          border-radius: 3px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 700px) {
          .tb-container {
            padding: 28px 18px 60px;
          }

          .tb-projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .tb-project-card:nth-child(1),
          .tb-project-card:nth-child(2) {
            border-radius: 14px;
          }

          .tb-deco-blocks {
            display: none;
          }

          .tb-first-letter-block {
            width: 48px;
            height: 48px;
          }

          .tb-first-letter-block span {
            font-size: 1.8rem;
          }

          .tb-interests-row {
            gap: 12px;
          }

          .tb-interest-block {
            width: 95px;
            height: 88px;
          }

          .tb-header-links {
            gap: 10px;
          }
        }
      `}</style>

      <div className="tb-root">
        {/* Decorative floating blocks */}
        <div className="tb-deco-blocks">
          <div className="tb-deco-block tb-deco-block-1" />
          <div className="tb-deco-block tb-deco-block-2" />
          <div className="tb-deco-block tb-deco-block-3" />
          <div className="tb-deco-block tb-deco-block-4" />
        </div>

        <div className="tb-container">
          {/* Back link */}
          <Link to="/" className="tb-back-link">
            &larr; Home
          </Link>

          {/* ===== HEADER ===== */}
          <header className="tb-header">
            <div className="tb-name-row">
              <div className="tb-first-letter-block">
                <span>{intro.name.charAt(0)}</span>
              </div>
              <h1 className="tb-name">{intro.name.slice(1)}</h1>
            </div>

            <p className="tb-tagline">{intro.tagline}</p>
            <p className="tb-bio">{intro.bio}</p>

            <div className="tb-header-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tb-header-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tb-header-link"
              >
                LinkedIn
              </a>
              <a href="/uses" className="tb-header-link">
                /uses
              </a>
            </div>
          </header>

          {/* ===== PROJECTS ===== */}
          <section>
            <h2 className="tb-section-header">
              <span
                className="tb-section-header-dot"
                style={{ background: '#F08C5A', boxShadow: '2px 2px 0 #c06a3a' }}
              />
              Projects
            </h2>

            <div className="tb-projects-grid">
              {projects.map((project, idx) => (
                <div key={project.name} className="tb-project-card">
                  <div className="tb-project-accent-bar" />
                  <div className="tb-project-body">
                    <h3 className="tb-project-name">{project.name}</h3>
                    <p className="tb-project-desc">{project.description}</p>

                    <ul className="tb-tech-list">
                      {project.tech.map((t) => (
                        <li key={t} className="tb-tech-pill">
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="tb-card-links">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tb-card-link"
                      >
                        Visit
                      </a>
                      <a href={project.cvAnchor} className="tb-card-link">
                        CV Entry
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== INTERESTS ===== */}
          <section className="tb-interests-section">
            <h2 className="tb-section-header">
              <span
                className="tb-section-header-dot"
                style={{ background: '#7BC67E', boxShadow: '2px 2px 0 #5aa65e' }}
              />
              Interests
            </h2>

            <div className="tb-interests-row">
              {personal.interests.map((interest) => (
                <div key={interest.label} className="tb-interest-block">
                  <span className="tb-interest-icon">
                    {interestEmojis[interest.icon] || '?'}
                  </span>
                  <span className="tb-interest-label">{interest.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer className="tb-footer">
            <span className="tb-footer-text">
              Built with blocks &middot; {new Date().getFullYear()}
            </span>
            <div className="tb-footer-blocks">
              <div
                className="tb-footer-mini-block"
                style={{ background: '#F08C5A' }}
              />
              <div
                className="tb-footer-mini-block"
                style={{ background: '#5B9BD5' }}
              />
              <div
                className="tb-footer-mini-block"
                style={{ background: '#7BC67E' }}
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
