import { useEffect, useState, useRef } from 'react'
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

  const [activeSection, setActiveSection] = useState<string>('projects')
  const heroRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const interestsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const refs = [
        { id: 'projects', ref: projectsRef },
        { id: 'interests', ref: interestsRef },
      ]
      let closest = 'projects'
      let minDist = Infinity
      for (const s of refs) {
        const el = s.ref.current
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const centerY = rect.top + rect.height / 2
        const dist = Math.abs(e.clientY - centerY)
        if (dist < minDist) {
          minDist = dist
          closest = s.id
        }
      }
      setActiveSection(closest)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
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
          padding: 36px 0 18px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .d47-nav-brand {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: 1.15rem;
          letter-spacing: 1px;
          color: #111111;
          text-decoration: none;
          padding: 0px 10px;
          border: 3px solid #111111;
          background: #C8FF00;
          box-shadow: 4px 4px 0 #111111;
          transition: none;
        }

        .d47-nav-brand:hover {
          background: #111111;
          color: #C8FF00;
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px);
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
          padding: 4px 14px;
          border: 3px solid #111111;
          background: #fff;
          box-shadow: 4px 4px 0 #111111;
          transition: none;
        }

        .d47-nav-link:hover {
          box-shadow: 6px 6px 0 #111111;
          transform: translate(-2px, -2px);
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

        /* ===== BLINKING CURSOR ===== */
        @keyframes d47-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .d47-cursor {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: #FF6B00;
          margin-left: 3px;
          vertical-align: middle;
          animation: d47-blink 1s step-end infinite;
        }

        /* ===== SECTION HEADERS ===== */
        .d47-section-title {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: clamp(1.4rem, 3.5vw, 1.8rem);
          color: #111111;
          text-transform: uppercase;
          margin: 56px 0 28px;
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
          margin-bottom: 56px;
          position: relative;
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 4px 4px 0 #111111;
          padding: 36px 32px 32px;
        }

        .d47-name {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: clamp(2.8rem, 7.5vw, 4.5rem);
          color: #111111;
          line-height: 1.05;
          margin: 0 0 24px;
          letter-spacing: -1px;
          text-transform: none;
          position: relative;
          z-index: 1;
          text-decoration: underline dashed #C8FF00;
          text-underline-offset: 8px;
          text-decoration-thickness: 6px;
        }

        /* Tagline postmark box */
        .d47-tagline-text {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          font-weight: 700;
          font-size: 1.15rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #FF6B00;
          line-height: 1.4;
          display: block;
          margin-top: 20px;
          margin-bottom: 28px;
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
          transition: none;
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
          transition: none;
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
          transition: none;
        }

        .d47-card-link:hover {
          background: #111111;
          color: #fff;
        }

        .d47-card-link--accent {
          background: #FF6B00;
          font-weight: 700;
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
          transition: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
          height: 4px;
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
          padding: 36px 0;
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
          transition: none;
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

          .d47-hero {
            padding: 28px 18px 24px;
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
              dulev.dev
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
          <header className="d47-hero" ref={heroRef}>
<h1 className="d47-name">{intro.name}</h1>

            <span className="d47-tagline-text">{intro.tagline}</span>

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
          <section ref={projectsRef}>
          <h2 className="d47-section-title">
            <span className="d47-section-number">SEC.01</span>
            Projects
            {activeSection === 'projects' && <span className="d47-cursor" />}
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

          </section>

          {/* ===== INTERESTS ===== */}
          <section ref={interestsRef}>
          <h2 className="d47-section-title">
            <span className="d47-section-number">SEC.02</span>
            Interests
            {activeSection === 'interests' && <span className="d47-cursor" />}
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
          </section>

        </div>

        {/* ===== FOOTER ===== */}
        <footer className="d47-footer">
          <div className="d47-footer-inner">
            <div className="d47-footer-text">
              dulev.dev &middot; Sofia, Bulgaria
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
