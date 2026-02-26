import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const ICON_MAP: Record<string, string> = {
  guitar: '\uD83C\uDFB8',
  running: '\uD83C\uDFC3',
  bike: '\uD83D\uDEB5',
  mountains: '\u26F0\uFE0F',
  terminal: '\uD83D\uDDA5\uFE0F',
}

function useStaggeredEntrance() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll<HTMLElement>('[data-bento-card]')
    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(24px)'
      setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      }, 80 * i + 100)
    })
  }, [])

  return containerRef
}

export function Design4() {
  const gridRef = useStaggeredEntrance()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

        .bento-root {
          font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
          background: #f5f5f7;
          min-height: 100vh;
          padding: 2rem;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          max-width: 1120px;
          margin: 0 auto;
        }

        .bento-card {
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 1.5rem;
          padding: 1.75rem;
          transition: transform 300ms ease, box-shadow 300ms ease;
          will-change: transform;
          position: relative;
          overflow: hidden;
        }

        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.08),
            0 4px 12px rgba(0, 0, 0, 0.04);
        }

        /* Grid placement */
        .bento-card--hero {
          grid-column: span 2;
          grid-row: span 2;
          padding: 2.5rem;
        }

        .bento-card--project {
          grid-column: span 1;
        }

        .bento-card--interests {
          grid-column: span 2;
        }

        .bento-card--links {
          grid-column: span 1;
        }

        .bento-card--nav {
          grid-column: span 1;
        }

        /* Gradient accents */
        .bento-card--hero::before {
          content: '';
          position: absolute;
          top: -60%;
          right: -30%;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .bento-card--links::before {
          content: '';
          position: absolute;
          bottom: -40%;
          left: -20%;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .bento-card--interests::before {
          content: '';
          position: absolute;
          top: -30%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .bento-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8e8e93;
          margin-bottom: 1rem;
        }

        .bento-name {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1d1d1f;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .bento-tagline {
          font-size: 1.1rem;
          color: #6e6e73;
          margin-top: 0.75rem;
          font-weight: 500;
          line-height: 1.5;
        }

        .bento-bio {
          font-size: 0.95rem;
          color: #86868b;
          margin-top: 1.25rem;
          line-height: 1.7;
          max-width: 380px;
        }

        .bento-status {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: #34c759;
          background: rgba(52, 199, 89, 0.08);
          padding: 0.4rem 0.85rem;
          border-radius: 100px;
        }

        .bento-status-dot {
          width: 6px;
          height: 6px;
          background: #34c759;
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .bento-project-name {
          font-size: 1.15rem;
          font-weight: 650;
          color: #1d1d1f;
          margin-bottom: 0.5rem;
        }

        .bento-project-desc {
          font-size: 0.85rem;
          color: #86868b;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .bento-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .bento-tag {
          font-size: 0.7rem;
          font-weight: 500;
          color: #6e6e73;
          background: rgba(0, 0, 0, 0.04);
          padding: 0.3rem 0.65rem;
          border-radius: 100px;
          white-space: nowrap;
        }

        .bento-project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #007aff;
          text-decoration: none;
          margin-top: 1rem;
          transition: gap 200ms ease;
        }

        .bento-project-link:hover {
          gap: 0.55rem;
        }

        .bento-interests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          gap: 0.75rem;
        }

        .bento-interest-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 0.5rem;
          background: rgba(0, 0, 0, 0.02);
          border-radius: 1rem;
          transition: background 200ms ease;
        }

        .bento-interest-item:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .bento-interest-icon {
          font-size: 1.5rem;
          line-height: 1;
        }

        .bento-interest-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6e6e73;
          text-align: center;
        }

        .bento-link-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }

        .bento-link-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.02);
          border-radius: 0.85rem;
          text-decoration: none;
          color: #1d1d1f;
          font-size: 0.85rem;
          font-weight: 500;
          transition: background 200ms ease;
        }

        .bento-link-item:hover {
          background: rgba(0, 0, 0, 0.06);
        }

        .bento-link-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          color: white;
          flex-shrink: 0;
        }

        .bento-link-icon--gh {
          background: linear-gradient(135deg, #333, #1a1a1a);
        }

        .bento-link-icon--li {
          background: linear-gradient(135deg, #0a66c2, #004182);
        }

        .bento-link-icon--uses {
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
        }

        .bento-nav-card {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 80px;
        }

        .bento-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #007aff;
          text-decoration: none;
          transition: gap 200ms ease;
        }

        .bento-back-link:hover {
          gap: 0.75rem;
        }

        @media (max-width: 768px) {
          .bento-root {
            padding: 1rem;
          }

          .bento-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
          }

          .bento-card--hero {
            grid-column: span 2;
            grid-row: span 1;
            padding: 1.75rem;
          }

          .bento-card--interests {
            grid-column: span 2;
          }

          .bento-name {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }

          .bento-card--hero,
          .bento-card--interests {
            grid-column: span 1;
          }
        }
      `}</style>

      <div className="bento-root">
        <div className="bento-grid" ref={gridRef}>
          {/* Hero / Profile Card */}
          <div className="bento-card bento-card--hero" data-bento-card>
            <div className="bento-label">About</div>
            <h1 className="bento-name">{siteContent.intro.name}</h1>
            <p className="bento-tagline">{siteContent.intro.tagline}</p>
            <p className="bento-bio">{siteContent.intro.bio}</p>
            <div className="bento-status">
              <span className="bento-status-dot" />
              Open to opportunities
            </div>
          </div>

          {/* Project Cards */}
          {siteContent.projects.map((project) => (
            <div
              className="bento-card bento-card--project"
              data-bento-card
              key={project.name}
            >
              <div className="bento-label">Project</div>
              <h2 className="bento-project-name">{project.name}</h2>
              <p className="bento-project-desc">{project.description}</p>
              <div className="bento-tags">
                {project.tech.map((t) => (
                  <span className="bento-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-project-link"
              >
                Visit <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}

          {/* Interests Card */}
          <div className="bento-card bento-card--interests" data-bento-card>
            <div className="bento-label">Interests</div>
            <div className="bento-interests-grid">
              {siteContent.personal.interests.map((interest) => (
                <div className="bento-interest-item" key={interest.label}>
                  <span className="bento-interest-icon">
                    {ICON_MAP[interest.icon] ?? '\u2728'}
                  </span>
                  <span className="bento-interest-label">
                    {interest.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Card */}
          <div className="bento-card bento-card--links" data-bento-card>
            <div className="bento-label">Connect</div>
            <div className="bento-link-list">
              <a
                href={siteContent.intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-link-item"
              >
                <span className="bento-link-icon bento-link-icon--gh">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
                GitHub
              </a>
              <a
                href={siteContent.intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-link-item"
              >
                <span className="bento-link-icon bento-link-icon--li">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                LinkedIn
              </a>
              <Link to="/uses" className="bento-link-item">
                <span className="bento-link-icon bento-link-icon--uses">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                </span>
                /uses
              </Link>
            </div>
          </div>

          {/* Navigation Card */}
          <div className="bento-card bento-card--nav" data-bento-card>
            <div className="bento-nav-card">
              <Link to="/" className="bento-back-link">
                <span aria-hidden="true">&larr;</span> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
