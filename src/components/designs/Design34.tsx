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

// Palette — Press Sans
const BG = '#FAFAF8'
const TEXT = '#111111'
const LIME = '#C8FF00'
const ORANGE = '#FF6B00'
const WHITE = '#FFFFFF'

export function Design34() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&family=Space+Mono:wght@400;700&display=swap'
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
        .ps-root {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-weight: 400;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${BG};
          color: ${TEXT};
          line-height: 1.7;
          position: relative;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .ps-root *,
        .ps-root *::before,
        .ps-root *::after {
          box-sizing: border-box;
        }

        /* ===== CONTAINER ===== */
        .ps-container {
          max-width: 860px;
          margin: 0 auto;
          padding: 48px 32px 0;
          position: relative;
        }

        /* ===== BACK LINK ===== */
        .ps-back-link {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          color: ${TEXT};
          text-decoration: none;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 6px 14px;
          border: 2px solid ${TEXT};
          transition: all 0.2s;
          background: transparent;
        }

        .ps-back-link:hover {
          background: ${TEXT};
          color: ${BG};
        }

        /* ===== HEADER ===== */
        .ps-header {
          margin-top: 56px;
          margin-bottom: 0;
        }

        .ps-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3.2rem, 9vw, 5.5rem);
          color: ${TEXT};
          margin: 0;
          line-height: 1.0;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .ps-lime-bar {
          display: block;
          width: 100%;
          max-width: 420px;
          height: 12px;
          background: ${LIME};
          margin-top: 12px;
          margin-bottom: 20px;
        }

        .ps-tagline {
          font-family: 'Space Mono', monospace;
          font-size: 0.82rem;
          font-weight: 400;
          color: ${TEXT};
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin: 0;
          opacity: 0.7;
        }

        /* ===== BIO SECTION — Two-column ===== */
        .ps-bio-section {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 32px;
          margin-top: 56px;
          align-items: start;
        }

        .ps-bio-label {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.8rem;
          color: ${TEXT};
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 1.2;
        }

        .ps-bio-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.08rem;
          font-weight: 400;
          color: ${TEXT};
          line-height: 1.85;
          margin: 0;
          max-width: 520px;
        }

        /* ===== HEADER LINKS ===== */
        .ps-header-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .ps-link-lime {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          color: ${TEXT};
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 10px 22px;
          border: 3px solid ${TEXT};
          background: ${LIME};
          box-shadow: 4px 4px 0 ${TEXT};
          transition: all 0.2s;
        }

        .ps-link-lime:hover {
          background: ${TEXT};
          color: ${LIME};
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 ${TEXT};
        }

        .ps-link-orange {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          color: ${WHITE};
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 10px 22px;
          border: 3px solid ${TEXT};
          background: ${ORANGE};
          box-shadow: 4px 4px 0 ${TEXT};
          transition: all 0.2s;
        }

        .ps-link-orange:hover {
          background: ${TEXT};
          color: ${ORANGE};
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 ${TEXT};
        }

        .ps-link-outline {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          color: ${TEXT};
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 10px 22px;
          border: 3px solid ${TEXT};
          background: transparent;
          box-shadow: 4px 4px 0 ${TEXT};
          transition: all 0.2s;
        }

        .ps-link-outline:hover {
          background: ${TEXT};
          color: ${BG};
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 ${TEXT};
        }

        /* ===== DIVIDER ===== */
        .ps-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 64px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: ${TEXT};
          letter-spacing: 8px;
          user-select: none;
          opacity: 0.25;
        }

        /* ===== PROJECTS — Full-width inverted header ===== */
        .ps-projects-header {
          background: ${TEXT};
          color: ${WHITE};
          padding: 48px 32px 40px;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }

        .ps-projects-header-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .ps-projects-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: ${LIME};
          text-transform: uppercase;
          letter-spacing: 3px;
          margin: 0 0 8px;
          display: block;
        }

        .ps-projects-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.4rem, 6vw, 4rem);
          color: ${WHITE};
          text-transform: uppercase;
          margin: 0;
          line-height: 1.05;
          letter-spacing: -1px;
        }

        /* ===== PROJECT CARDS ===== */
        .ps-projects-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-top: 40px;
        }

        .ps-card {
          padding: 36px;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .ps-card:hover {
          transform: translate(-2px, -2px);
        }

        /* Light card */
        .ps-card-light {
          background: ${WHITE};
          border: 3px solid ${TEXT};
          box-shadow: 4px 4px 0 ${TEXT};
          color: ${TEXT};
        }

        .ps-card-light:hover {
          box-shadow: 6px 6px 0 ${TEXT};
        }

        /* Dark card */
        .ps-card-dark {
          background: ${TEXT};
          border: 3px solid ${TEXT};
          box-shadow: 4px 4px 0 ${LIME};
          color: ${WHITE};
        }

        .ps-card-dark:hover {
          box-shadow: 6px 6px 0 ${LIME};
        }

        .ps-card-number {
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 14px;
          display: block;
        }

        .ps-card-light .ps-card-number {
          color: ${ORANGE};
        }

        .ps-card-dark .ps-card-number {
          color: ${LIME};
        }

        .ps-card-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.6rem;
          text-transform: uppercase;
          margin: 0 0 12px;
          line-height: 1.2;
        }

        .ps-card-light .ps-card-name {
          color: ${TEXT};
        }

        .ps-card-dark .ps-card-name {
          color: ${LIME};
        }

        .ps-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.96rem;
          font-weight: 400;
          line-height: 1.75;
          margin: 0 0 22px;
        }

        .ps-card-light .ps-card-desc {
          color: ${TEXT};
          opacity: 0.8;
        }

        .ps-card-dark .ps-card-desc {
          color: rgba(255, 255, 255, 0.8);
        }

        /* Tech box */
        .ps-tech-box {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 8px 16px;
          margin-bottom: 24px;
        }

        .ps-card-light .ps-tech-box {
          border: 2px solid ${TEXT};
          color: ${TEXT};
        }

        .ps-card-dark .ps-tech-box {
          border: 2px solid rgba(200, 255, 0, 0.4);
          color: ${LIME};
        }

        /* Card links */
        .ps-card-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ps-card-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 8px 18px;
          border: 2px solid;
          transition: all 0.2s;
        }

        .ps-card-light .ps-card-link {
          color: ${TEXT};
          border-color: ${TEXT};
          background: transparent;
        }

        .ps-card-light .ps-card-link:hover {
          background: ${TEXT};
          color: ${WHITE};
        }

        .ps-card-dark .ps-card-link {
          color: ${WHITE};
          border-color: rgba(255, 255, 255, 0.4);
          background: transparent;
        }

        .ps-card-dark .ps-card-link:hover {
          background: ${WHITE};
          color: ${TEXT};
          border-color: ${WHITE};
        }

        /* ===== INTERESTS — Full-width inverted ===== */
        .ps-interests-section {
          background: ${TEXT};
          color: ${WHITE};
          padding: 56px 32px;
          width: 100vw;
          position: relative;
          left: 50%;
          margin-left: -50vw;
          margin-top: 64px;
        }

        .ps-interests-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .ps-interests-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: ${ORANGE};
          text-transform: uppercase;
          letter-spacing: 3px;
          margin: 0 0 8px;
          display: block;
        }

        .ps-interests-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          color: ${WHITE};
          text-transform: uppercase;
          margin: 0 0 32px;
          line-height: 1.2;
        }

        .ps-interests-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .ps-interest-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          background: transparent;
          transition: transform 0.2s, box-shadow 0.2s;
          flex: 0 1 auto;
        }

        .ps-interest-pill:nth-child(odd) {
          border: 2px solid ${LIME};
        }

        .ps-interest-pill:nth-child(even) {
          border: 2px solid ${ORANGE};
        }

        .ps-interest-pill:hover {
          transform: translate(-2px, -2px);
        }

        .ps-interest-pill:nth-child(odd):hover {
          box-shadow: 4px 4px 0 ${LIME};
        }

        .ps-interest-pill:nth-child(even):hover {
          box-shadow: 4px 4px 0 ${ORANGE};
        }

        .ps-interest-icon {
          font-size: 1rem;
          min-width: 22px;
          text-align: center;
          font-family: 'Space Mono', monospace;
          font-weight: 700;
        }

        .ps-interest-pill:nth-child(odd) .ps-interest-icon {
          color: ${LIME};
        }

        .ps-interest-pill:nth-child(even) .ps-interest-icon {
          color: ${ORANGE};
        }

        .ps-interest-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: ${WHITE};
          letter-spacing: 0.5px;
        }

        /* ===== MANIFESTO STRIP ===== */
        .ps-manifesto {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          width: 100vw;
          position: relative;
          left: 50%;
          margin-left: -50vw;
        }

        .ps-manifesto-block {
          padding: 28px 24px;
          text-align: center;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 1.3;
        }

        .ps-manifesto-lime {
          background: ${LIME};
          color: ${TEXT};
        }

        .ps-manifesto-dark {
          background: ${TEXT};
          color: ${WHITE};
        }

        .ps-manifesto-orange {
          background: ${ORANGE};
          color: ${WHITE};
        }

        /* ===== FOOTER ===== */
        .ps-footer {
          background: ${TEXT};
          color: ${LIME};
          padding: 44px 32px;
          text-align: center;
          width: 100vw;
          position: relative;
          left: 50%;
          margin-left: -50vw;
        }

        .ps-footer-inner {
          max-width: 860px;
          margin: 0 auto;
        }

        .ps-footer-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          text-transform: uppercase;
          margin: 0 0 8px;
          color: ${LIME};
        }

        .ps-footer-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0;
        }

        .ps-footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .ps-footer-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: ${LIME};
          text-decoration: none;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .ps-footer-link:hover {
          color: ${ORANGE};
        }

        /* ===== SLIGHT WONK ===== */
        .ps-wonk {
          transform: rotate(0.3deg);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 640px) {
          .ps-container {
            padding: 32px 20px 0;
          }

          .ps-name {
            font-size: clamp(2.4rem, 11vw, 3.6rem);
          }

          .ps-bio-section {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 40px;
          }

          .ps-card {
            padding: 24px 20px;
          }

          .ps-projects-header {
            padding: 36px 20px 32px;
          }

          .ps-projects-header-inner {
            padding: 0;
          }

          .ps-interests-section {
            padding: 40px 20px;
          }

          .ps-interests-inner {
            padding: 0;
          }

          .ps-interests-grid {
            gap: 10px;
          }

          .ps-interest-pill {
            padding: 10px 16px;
          }

          .ps-manifesto-block {
            padding: 20px 12px;
            font-size: clamp(0.7rem, 2.5vw, 0.9rem);
            letter-spacing: 1px;
          }

          .ps-footer {
            padding: 32px 20px;
          }
        }
      `}</style>

      <div className="ps-root">
        <div className="ps-container">
          {/* Navigation */}
          <Link to="/" className="ps-back-link">
            &larr; Back
          </Link>

          {/* ===== HEADER / INTRO ===== */}
          <header className="ps-header">
            <h1 className="ps-name">{intro.name}</h1>
            <span className="ps-lime-bar" />
            <p className="ps-tagline">{intro.tagline}</p>
          </header>

          {/* ===== BIO SECTION — Two column ===== */}
          <div className="ps-bio-section">
            <div className="ps-bio-label">About</div>
            <div>
              <p className="ps-bio-text">{intro.bio}</p>

              <div className="ps-header-links">
                <a
                  href={intro.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-link-lime"
                >
                  GitHub
                </a>
                <a
                  href={intro.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-link-orange"
                >
                  LinkedIn
                </a>
                <a href={intro.links.uses} className="ps-link-outline">
                  /uses
                </a>
              </div>
            </div>
          </div>

          {/* ===== DIVIDER ===== */}
          <div className="ps-divider">&bull; &bull; &bull;</div>
        </div>

        {/* ===== PROJECTS HEADER — Full-width inverted ===== */}
        <div className="ps-projects-header">
          <div className="ps-projects-header-inner">
            <span className="ps-projects-label">Selected Work</span>
            <h2 className="ps-projects-title">Projects</h2>
          </div>
        </div>

        {/* ===== PROJECT CARDS ===== */}
        <div className="ps-container">
          <div className="ps-projects-list">
            {projects.map((project, idx) => (
              <div
                key={project.name}
                className={`ps-card ${idx % 2 === 0 ? 'ps-card-light' : 'ps-card-dark'}${idx === 1 ? ' ps-wonk' : ''}`}
              >
                <span className="ps-card-number">
                  No. {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="ps-card-name">{project.name}</h3>
                <p className="ps-card-desc">{project.description}</p>

                <div className="ps-tech-box">
                  {project.tech.join(' / ')}
                </div>

                <div className="ps-card-links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-card-link"
                  >
                    Visit
                  </a>
                  <a href={project.cvAnchor} className="ps-card-link">
                    CV Entry
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== INTERESTS — Full-width inverted ===== */}
        <div className="ps-interests-section">
          <div className="ps-interests-inner">
            <span className="ps-interests-label">Beyond Code</span>
            <h2 className="ps-interests-title ps-wonk">Interests</h2>

            <div className="ps-interests-grid">
              {personal.interests.map((interest) => (
                <div key={interest.label} className="ps-interest-pill">
                  <span className="ps-interest-icon">
                    {interestIcons[interest.icon] || '*'}
                  </span>
                  <span className="ps-interest-text">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== MANIFESTO STRIP ===== */}
        <div className="ps-manifesto">
          <div className="ps-manifesto-block ps-manifesto-lime">Ship Fast</div>
          <div className="ps-manifesto-block ps-manifesto-dark">
            Break Things
          </div>
          <div className="ps-manifesto-block ps-manifesto-orange">
            Learn by Doing
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="ps-footer">
          <div className="ps-footer-inner">
            <p className="ps-footer-name">{intro.name}</p>
            <p className="ps-footer-text">
              Built with intent &bull; {new Date().getFullYear()}
            </p>
            <div className="ps-footer-links">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ps-footer-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ps-footer-link"
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
