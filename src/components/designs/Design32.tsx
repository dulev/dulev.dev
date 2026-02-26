import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestEmojis: Record<string, string> = {
  guitar: '🎸',
  running: '🏃',
  bike: '🚵',
  mountains: '⛰️',
  terminal: '💻',
}

export function Design32() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;1,9..40,400&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        /* ---- CLEAN PUNCH GLOBALS ---- */
        .cp-root {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
          background-color: #FAFAF8;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          min-height: 100vh;
          color: #111111;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .cp-syne {
          font-family: 'Syne', sans-serif;
        }

        .cp-dm {
          font-family: 'DM Sans', sans-serif;
        }

        /* ---- CARD ---- */
        .cp-card {
          border: 3px solid #111111;
          box-shadow: 4px 4px 0px #111111;
          border-radius: 0;
          position: relative;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          background: #FFFFFF;
        }

        .cp-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #111111;
        }

        /* ---- BUTTONS ---- */
        .cp-btn {
          border: 3px solid #111111;
          box-shadow: 4px 4px 0px #111111;
          border-radius: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          cursor: pointer;
        }

        .cp-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #111111;
        }

        /* ---- TAG PILLS ---- */
        .cp-tag {
          border: 2px solid #111111;
          border-radius: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 3px 10px;
          background: #FFFFFF;
          display: inline-block;
          transition: background-color 0.15s ease;
        }

        .cp-tag:hover {
          background: #C8FF00;
        }

        /* ---- INTEREST BLOCKS ---- */
        .cp-interest {
          border: 3px solid #111111;
          box-shadow: 3px 3px 0px #111111;
          border-radius: 0;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          cursor: default;
          background: #FFFFFF;
        }

        .cp-interest:hover {
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0px #111111;
        }

        /* ---- DASHED UNDERLINE ---- */
        .cp-dash-underline {
          position: relative;
          display: inline-block;
        }

        .cp-dash-underline::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            #C8FF00 0px,
            #C8FF00 12px,
            transparent 12px,
            transparent 18px
          );
        }

        /* ---- STAT BLOCK ---- */
        .cp-stat {
          border: 3px solid #111111;
          box-shadow: 4px 4px 0px #111111;
          border-radius: 0;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .cp-stat:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #111111;
        }

        /* ---- NAV ---- */
        .cp-nav {
          border-bottom: 3px solid #111111;
          background: #C8FF00;
        }

        /* ---- FOOTER ---- */
        .cp-footer {
          border-top: 3px solid #111111;
          background: #111111;
          color: #C8FF00;
        }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 768px) {
          .cp-hero-name {
            font-size: 2.8rem !important;
          }

          .cp-projects-grid {
            grid-template-columns: 1fr !important;
          }

          .cp-interests-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .cp-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .cp-hero-name {
            font-size: 2rem !important;
          }

          .cp-interests-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

      <div className="cp-root">
        {/* ========== NAVIGATION ========== */}
        <nav className="cp-nav sticky top-0 z-50 flex items-center justify-between px-6 py-3 sm:px-10">
          <span className="cp-syne text-base font-bold tracking-tight text-[#111111] sm:text-lg">
            Dimitar Dulev
          </span>
          <div className="flex items-center gap-3">
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-syne text-xs font-bold text-[#111111] px-3 py-1"
              style={{ border: '2px solid #111' }}
            >
              GitHub
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-syne text-xs font-bold text-[#111111] px-3 py-1"
              style={{ border: '2px solid #111' }}
            >
              LinkedIn
            </a>
            <Link
              to="/"
              className="cp-syne text-xs font-bold bg-[#111111] text-[#C8FF00] px-3 py-1"
              style={{ border: '2px solid #111' }}
            >
              Home
            </Link>
          </div>
        </nav>

        {/* ========== MAIN CONTENT ========== */}
        <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-10">
          {/* ---- HERO SECTION ---- */}
          <section className="mb-20">
            <h1
              className="cp-syne cp-dash-underline cp-hero-name mb-8 font-extrabold leading-[1.05] text-[#111111] uppercase tracking-tight"
              style={{ fontSize: '4.5rem' }}
            >
              {intro.name}
            </h1>

            <p
              className="cp-syne mb-6 text-xl font-bold sm:text-2xl"
              style={{ color: '#FF6B00', marginTop: '20px' }}
            >
              {intro.tagline}
            </p>

            <p className="cp-dm max-w-xl text-base leading-relaxed text-[#111111]/70">
              {intro.bio}
            </p>

            {/* Link buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-btn px-6 py-3 text-sm text-[#111111]"
                style={{ backgroundColor: '#C8FF00' }}
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-btn px-6 py-3 text-sm text-[#111111]"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                LinkedIn
              </a>
              <a
                href={intro.links.uses}
                className="cp-btn px-6 py-3 text-sm text-[#111111]"
                style={{ backgroundColor: '#FF6B00', color: '#FFFFFF' }}
              >
                /uses
              </a>
            </div>
          </section>

          {/* ---- PROJECTS SECTION ---- */}
          <section className="mb-20">
            <h2
              className="cp-syne mb-10 text-2xl font-bold uppercase tracking-tight sm:text-3xl"
              style={{ color: '#111111' }}
            >
              Projects
            </h2>

            <div
              className="cp-projects-grid grid gap-8"
              style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
            >
              {projects.map((project, i) => {
                const isLime = i === 0
                const cardBg = isLime ? '#C8FF00' : '#FFFFFF'

                return (
                  <div
                    key={project.name}
                    className="cp-card p-7"
                    style={{
                      backgroundColor: cardBg,
                      transform: i === 0 ? 'rotate(-0.5deg)' : 'rotate(0.3deg)',
                    }}
                  >
                    {/* Project name */}
                    <h3 className="cp-syne mb-3 text-xl font-bold sm:text-2xl text-[#111111]">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="cp-dm mb-5 text-sm leading-relaxed text-[#111111]/70">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="cp-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cp-syne text-sm font-bold text-[#111111] underline decoration-2 underline-offset-4 hover:no-underline"
                      >
                        Visit
                      </a>
                      <a
                        href={project.cvAnchor}
                        className="cp-syne text-sm font-bold text-[#111111]/50 hover:text-[#111111]"
                      >
                        CV Entry
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ---- INTERESTS SECTION ---- */}
          <section className="mb-20">
            <h2
              className="cp-syne mb-10 text-2xl font-bold uppercase tracking-tight sm:text-3xl"
              style={{ color: '#111111' }}
            >
              When Offline
            </h2>

            <div
              className="cp-interests-grid grid gap-4"
              style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
            >
              {personal.interests.map((interest, i) => {
                const accentColor = i % 2 === 0 ? '#C8FF00' : '#FF6B00'

                return (
                  <div
                    key={interest.label}
                    className="cp-interest flex flex-col items-center justify-center gap-3 p-5"
                  >
                    {/* Accent dot */}
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                    {/* Emoji */}
                    <span className="text-2xl leading-none">
                      {interestEmojis[interest.icon] || '✨'}
                    </span>
                    <span className="cp-syne text-center text-xs font-bold text-[#111111] uppercase">
                      {interest.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ---- STATS ROW ---- */}
          <section className="mb-20">
            <div
              className="cp-stats-grid grid gap-5"
              style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
            >
              {/* 7+ YRS - lime bg */}
              <div
                className="cp-stat flex flex-col items-center justify-center p-6"
                style={{ backgroundColor: '#C8FF00' }}
              >
                <span className="cp-syne text-3xl font-extrabold text-[#111111]">
                  7+
                </span>
                <span className="cp-syne mt-1 text-xs font-bold text-[#111111]/70 uppercase tracking-wider">
                  YRS
                </span>
              </div>

              {/* 2 PROJECTS - white bg */}
              <div
                className="cp-stat flex flex-col items-center justify-center p-6"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <span className="cp-syne text-3xl font-extrabold text-[#111111]">
                  {projects.length}
                </span>
                <span className="cp-syne mt-1 text-xs font-bold text-[#111111]/70 uppercase tracking-wider">
                  Projects
                </span>
              </div>

              {/* FULLSTACK - orange bg */}
              <div
                className="cp-stat flex flex-col items-center justify-center p-6"
                style={{ backgroundColor: '#FF6B00' }}
              >
                <span className="cp-syne text-2xl font-extrabold text-white">
                  FS
                </span>
                <span className="cp-syne mt-1 text-xs font-bold text-white/80 uppercase tracking-wider">
                  Fullstack
                </span>
              </div>
            </div>
          </section>
        </main>

        {/* ========== FOOTER ========== */}
        <footer className="cp-footer px-6 py-8 text-center sm:px-10">
          <p className="cp-syne text-sm font-bold" style={{ color: '#C8FF00' }}>
            {intro.name} / {new Date().getFullYear()}
          </p>
          <p className="cp-dm mt-2 text-xs" style={{ color: '#FFFFFF', opacity: 0.4 }}>
            Built with energy and restraint.
          </p>
        </footer>
      </div>
    </>
  )
}
