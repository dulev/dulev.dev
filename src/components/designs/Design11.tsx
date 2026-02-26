import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const ICON_MAP: Record<string, string> = {
  guitar: '\uD83C\uDFB8',
  running: '\uD83C\uDFC3',
  bike: '\uD83D\uDEB5',
  mountains: '\u26F0\uFE0F',
  terminal: '\uD83D\uDDA5\uFE0F',
}

const ACCENT_COLORS = ['#FFE500', '#0055FF', '#FF3366'] as const

export function Design11() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .neo-graffiti {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          min-height: 100vh;
          background-color: #e5e5e5;
          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          padding: 2.5rem;
          -webkit-font-smoothing: antialiased;
          position: relative;
          overflow-x: hidden;
        }

        /* ---- Paint Drip Decorations ---- */
        .neo-graffiti::before,
        .neo-graffiti::after {
          content: '';
          position: fixed;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .neo-graffiti::before {
          background: #FF3366;
          top: 120px;
          left: 40px;
          box-shadow:
            0 28px 0 0 #FF3366,
            0 48px 0 0 #FF3366,
            0 62px 0 -3px #FF3366,
            0 74px 0 -5px #FF3366,
            0 82px 0 -7px #FF3366;
        }

        .neo-graffiti::after {
          background: #0055FF;
          top: 200px;
          right: 60px;
          width: 14px;
          height: 14px;
          box-shadow:
            0 22px 0 0 #0055FF,
            0 38px 0 -1px #0055FF,
            0 50px 0 -3px #0055FF,
            0 58px 0 -5px #0055FF;
        }

        .neo-graffiti-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ---- Header / Name Block ---- */
        .neo-header {
          margin-bottom: 2.5rem;
          position: relative;
        }

        .neo-name {
          font-family: 'Syne', sans-serif;
          font-size: 5rem;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1;
          color: #000;
          letter-spacing: -0.02em;
          transform: rotate(-2deg);
          display: inline-block;
          position: relative;
          padding: 0.25rem 0.5rem;
        }

        .neo-name::before {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 0;
          right: 0;
          height: 24px;
          background: #FFE500;
          z-index: -1;
          transform: skewX(-3deg);
        }

        .neo-tagline {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #000;
          margin-top: 1rem;
          padding: 0.4rem 0.8rem;
          background: #FF3366;
          color: #fff;
          display: inline-block;
          border: 3px solid #000;
          box-shadow: 3px 3px 0px #000;
        }

        .neo-bio {
          font-size: 1.05rem;
          color: #333;
          margin-top: 1.25rem;
          max-width: 600px;
          line-height: 1.7;
          font-weight: 500;
        }

        /* ---- Drip decoration element ---- */
        .neo-drip {
          position: absolute;
          width: 12px;
          border-radius: 50%;
          pointer-events: none;
        }

        .neo-drip::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          border-radius: 0 0 4px 4px;
        }

        .neo-drip--yellow {
          height: 12px;
          background: #FFE500;
          top: 10px;
          right: 180px;
        }

        .neo-drip--yellow::after {
          background: #FFE500;
          height: 45px;
        }

        .neo-drip--pink {
          height: 10px;
          background: #FF3366;
          top: 50px;
          right: 120px;
        }

        .neo-drip--pink::after {
          background: #FF3366;
          height: 30px;
        }

        .neo-drip--blue {
          height: 14px;
          background: #0055FF;
          top: 0;
          right: 240px;
        }

        .neo-drip--blue::after {
          background: #0055FF;
          height: 55px;
        }

        /* ---- Section Labels ---- */
        .neo-section-label {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #000;
          margin-bottom: 1.5rem;
          margin-top: 3rem;
          display: inline-block;
          position: relative;
        }

        .neo-section-label::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 10px;
          z-index: -1;
        }

        .neo-section-label--yellow::after {
          background: #FFE500;
        }

        .neo-section-label--blue::after {
          background: #0055FF;
          opacity: 0.3;
        }

        .neo-section-label--pink::after {
          background: #FF3366;
          opacity: 0.3;
        }

        /* ---- Card Base ---- */
        .neo-card {
          border: 3px solid #000;
          padding: 1.75rem;
          position: relative;
          background: #fff;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }

        .neo-card:hover {
          transform: translate(-2px, -2px);
        }

        .neo-card--yellow {
          box-shadow: 5px 5px 0px #000;
          background: #FFE500;
        }

        .neo-card--yellow:hover {
          box-shadow: 8px 8px 0px #000;
        }

        .neo-card--blue {
          box-shadow: 5px 5px 0px #000;
          background: #0055FF;
          color: #fff;
        }

        .neo-card--blue:hover {
          box-shadow: 8px 8px 0px #000;
        }

        .neo-card--pink {
          box-shadow: 5px 5px 0px #000;
          background: #FF3366;
          color: #fff;
        }

        .neo-card--pink:hover {
          box-shadow: 8px 8px 0px #000;
        }

        .neo-card--white {
          box-shadow: 5px 5px 0px #000;
          background: #fff;
        }

        .neo-card--white:hover {
          box-shadow: 8px 8px 0px #000;
        }

        /* ---- Drip on cards ---- */
        .neo-card--yellow::before {
          content: '';
          position: absolute;
          top: -3px;
          right: 30px;
          width: 10px;
          height: 28px;
          background: #FFE500;
          border-radius: 0 0 5px 5px;
          border: 3px solid #000;
          border-top: none;
        }

        .neo-card--blue::before {
          content: '';
          position: absolute;
          top: -3px;
          left: 40px;
          width: 10px;
          height: 22px;
          background: #0055FF;
          border-radius: 0 0 5px 5px;
          border: 3px solid #000;
          border-top: none;
        }

        .neo-card--pink::before {
          content: '';
          position: absolute;
          top: -3px;
          right: 50px;
          width: 12px;
          height: 32px;
          background: #FF3366;
          border-radius: 0 0 6px 6px;
          border: 3px solid #000;
          border-top: none;
        }

        /* ---- Projects Grid ---- */
        .neo-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .neo-project-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .neo-project-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          font-weight: 500;
          opacity: 0.9;
        }

        .neo-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .neo-tech-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          padding: 0.35rem 0.7rem;
          border: 3px solid #000;
          background: #fff;
          color: #000;
          white-space: nowrap;
        }

        .neo-card--blue .neo-tech-tag {
          background: #FFE500;
          color: #000;
        }

        .neo-card--pink .neo-tech-tag {
          background: #FFE500;
          color: #000;
        }

        .neo-card--yellow .neo-tech-tag {
          background: #fff;
          color: #000;
        }

        .neo-project-link {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          color: #000;
          padding: 0.5rem 1rem;
          border: 3px solid #000;
          background: #fff;
          box-shadow: 3px 3px 0px #000;
          transition: box-shadow 0.15s ease, transform 0.15s ease;
        }

        .neo-project-link:hover {
          transform: translate(-1px, -1px);
          box-shadow: 5px 5px 0px #000;
        }

        .neo-card--yellow .neo-project-link {
          background: #000;
          color: #FFE500;
        }

        .neo-card--blue .neo-project-link,
        .neo-card--pink .neo-project-link {
          background: #fff;
          color: #000;
        }

        /* ---- Interests Grid ---- */
        .neo-interests-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }

        .neo-interest-block {
          border: 3px solid #000;
          padding: 1.25rem 0.75rem;
          text-align: center;
          box-shadow: 4px 4px 0px #000;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
          cursor: default;
        }

        .neo-interest-block:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0px #000;
        }

        .neo-interest-block:nth-child(1) {
          background: #FFE500;
        }

        .neo-interest-block:nth-child(2) {
          background: #0055FF;
          color: #fff;
        }

        .neo-interest-block:nth-child(3) {
          background: #FF3366;
          color: #fff;
        }

        .neo-interest-block:nth-child(4) {
          background: #fff;
        }

        .neo-interest-block:nth-child(5) {
          background: #FFE500;
        }

        .neo-interest-icon {
          font-size: 2rem;
          line-height: 1;
          margin-bottom: 0.5rem;
          display: block;
        }

        .neo-interest-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        /* ---- Links Section ---- */
        .neo-links-row {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .neo-link-btn {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          color: #000;
          padding: 0.75rem 1.5rem;
          border: 3px solid #000;
          background: #fff;
          box-shadow: 4px 4px 0px #000;
          transition: box-shadow 0.15s ease, transform 0.15s ease, background 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .neo-link-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0px #000;
        }

        .neo-link-btn--gh {
          background: #FFE500;
        }

        .neo-link-btn--gh:hover {
          background: #ffd900;
        }

        .neo-link-btn--li {
          background: #0055FF;
          color: #fff;
        }

        .neo-link-btn--li:hover {
          background: #0044dd;
        }

        .neo-link-btn--uses {
          background: #FF3366;
          color: #fff;
        }

        .neo-link-btn--uses:hover {
          background: #e6204f;
        }

        /* ---- Back Nav ---- */
        .neo-back-section {
          margin-top: 3rem;
          display: flex;
          align-items: center;
        }

        .neo-back-link {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          text-transform: uppercase;
          text-decoration: none;
          color: #000;
          padding: 0.75rem 1.75rem;
          border: 3px solid #000;
          background: #fff;
          box-shadow: 4px 4px 0px #000;
          transition: box-shadow 0.15s ease, transform 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }

        .neo-back-link:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0px #000;
        }

        /* ---- Spray splatter decoration ---- */
        .neo-splatter {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          pointer-events: none;
        }

        /* ---- Footer stripe ---- */
        .neo-footer-stripe {
          margin-top: 3rem;
          height: 12px;
          background: repeating-linear-gradient(
            90deg,
            #FFE500 0px,
            #FFE500 40px,
            #0055FF 40px,
            #0055FF 80px,
            #FF3366 80px,
            #FF3366 120px,
            #000 120px,
            #000 160px
          );
          border: 3px solid #000;
        }

        /* ---- Responsive ---- */
        @media (max-width: 768px) {
          .neo-graffiti {
            padding: 1.25rem;
          }

          .neo-name {
            font-size: 3rem;
          }

          .neo-projects-grid {
            grid-template-columns: 1fr;
          }

          .neo-interests-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .neo-links-row {
            flex-direction: column;
          }

          .neo-link-btn {
            width: 100%;
            justify-content: center;
          }

          .neo-drip--yellow,
          .neo-drip--pink,
          .neo-drip--blue {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .neo-name {
            font-size: 2.25rem;
          }

          .neo-tagline {
            font-size: 1.1rem;
          }

          .neo-interests-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="neo-graffiti">
        <div className="neo-graffiti-inner">
          {/* Header Section */}
          <header className="neo-header">
            <div className="neo-drip neo-drip--yellow" />
            <div className="neo-drip neo-drip--pink" />
            <div className="neo-drip neo-drip--blue" />

            <h1 className="neo-name">{siteContent.intro.name}</h1>
            <div>
              <span className="neo-tagline">{siteContent.intro.tagline}</span>
            </div>
            <p className="neo-bio">{siteContent.intro.bio}</p>
          </header>

          {/* Projects Section */}
          <div>
            <h2 className="neo-section-label neo-section-label--yellow">
              Projects
            </h2>
          </div>
          <div className="neo-projects-grid">
            {siteContent.projects.map((project, idx) => {
              const variant = (['yellow', 'blue', 'pink'] as const)[
                idx % 3
              ]
              return (
                <div
                  className={`neo-card neo-card--${variant}`}
                  key={project.name}
                >
                  <h3 className="neo-project-name">{project.name}</h3>
                  <p className="neo-project-desc">{project.description}</p>
                  <div className="neo-tech-tags">
                    {project.tech.map((t) => (
                      <span className="neo-tech-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-project-link"
                  >
                    Visit Site &rarr;
                  </a>
                </div>
              )
            })}
          </div>

          {/* Interests Section */}
          <div>
            <h2 className="neo-section-label neo-section-label--blue">
              Interests
            </h2>
          </div>
          <div className="neo-interests-grid">
            {siteContent.personal.interests.map((interest) => (
              <div className="neo-interest-block" key={interest.label}>
                <span className="neo-interest-icon">
                  {ICON_MAP[interest.icon] ?? '\u2728'}
                </span>
                <span className="neo-interest-label">{interest.label}</span>
              </div>
            ))}
          </div>

          {/* Links Section */}
          <div>
            <h2 className="neo-section-label neo-section-label--pink">
              Connect
            </h2>
          </div>
          <div className="neo-links-row">
            <a
              href={siteContent.intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-link-btn neo-link-btn--gh"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={siteContent.intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-link-btn neo-link-btn--li"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <Link to="/uses" className="neo-link-btn neo-link-btn--uses">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              /uses
            </Link>
          </div>

          {/* Back Navigation */}
          <div className="neo-back-section">
            <Link to="/" className="neo-back-link">
              &larr; Back to Home
            </Link>
          </div>

          {/* Footer Stripe */}
          <div className="neo-footer-stripe" />
        </div>
      </div>
    </>
  )
}
