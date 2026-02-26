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

const cardColors = ['#C8FF00', '#FF00FF', '#FF6B00', '#FFFFFF', '#000000']

export function Design12() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        /* ---- PIXEL PUNCH GLOBALS ---- */
        .pp-root {
          font-family: 'DM Mono', 'Courier New', monospace;
          background-color: #ffffff;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
          background-size: 16px 16px;
          min-height: 100vh;
          color: #000000;
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: unset;
        }

        .pp-pixel-font {
          font-family: 'Silkscreen', cursive;
        }

        .pp-mono {
          font-family: 'DM Mono', 'Courier New', monospace;
        }

        /* ---- CHUNKY CARD ---- */
        .pp-card {
          border: 5px solid #000000;
          box-shadow: 5px 5px 0px #000000;
          border-radius: 0;
          position: relative;
          transition: none;
        }

        .pp-card:hover {
          box-shadow: 2px 2px 0px #000000;
          transform: translate(3px, 3px);
        }

        /* Pixel corner decorations via pseudo-elements */
        .pp-card::before,
        .pp-card::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background: var(--corner-color, #FF00FF);
          border-radius: 0;
          pointer-events: none;
          z-index: 2;
        }

        .pp-card::before {
          top: -2px;
          left: -2px;
        }

        .pp-card::after {
          bottom: -2px;
          right: -2px;
        }

        /* Additional corners via inner element */
        .pp-card-inner::before,
        .pp-card-inner::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background: var(--corner-color-alt, #C8FF00);
          border-radius: 0;
          pointer-events: none;
          z-index: 2;
        }

        .pp-card-inner::before {
          top: -2px;
          right: -2px;
        }

        .pp-card-inner::after {
          bottom: -2px;
          left: -2px;
        }

        /* ---- PROJECT MENU ITEM ---- */
        .pp-menu-item {
          border: 5px solid #000000;
          box-shadow: 5px 5px 0px #000000;
          border-radius: 0;
          cursor: pointer;
          transition: none;
          position: relative;
        }

        .pp-menu-item:hover {
          box-shadow: 2px 2px 0px #000000;
          transform: translate(3px, 3px);
          background-color: #C8FF00 !important;
          color: #000000;
        }

        .pp-menu-item:hover .pp-menu-arrow {
          animation: pp-blink 0.3s steps(1) infinite;
        }

        @keyframes pp-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        /* ---- PIXEL LINK BUTTONS ---- */
        .pp-btn {
          border: 4px solid #000000;
          box-shadow: 4px 4px 0px #000000;
          border-radius: 0;
          font-family: 'Silkscreen', cursive;
          text-decoration: none;
          display: inline-block;
          transition: none;
        }

        .pp-btn:hover {
          box-shadow: 1px 1px 0px #000000;
          transform: translate(3px, 3px);
        }

        /* ---- INTEREST BLOCKS ---- */
        .pp-interest-block {
          border: 4px solid #000000;
          box-shadow: 4px 4px 0px #000000;
          border-radius: 0;
          transition: none;
          cursor: default;
        }

        .pp-interest-block:hover {
          box-shadow: 1px 1px 0px #000000;
          transform: translate(3px, 3px);
          background-color: #FF00FF !important;
          color: #FFFFFF;
        }

        /* ---- PIXELATED UNDERLINE ---- */
        .pp-pixel-underline {
          position: relative;
          display: inline-block;
        }

        .pp-pixel-underline::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 6px;
          background: repeating-linear-gradient(
            90deg,
            #FF00FF 0px,
            #FF00FF 8px,
            transparent 8px,
            transparent 12px
          );
        }

        /* ---- TAG PILL (pixel style) ---- */
        .pp-tag {
          border: 3px solid #000000;
          border-radius: 0;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          padding: 2px 8px;
          background: #ffffff;
          display: inline-block;
          transition: none;
        }

        .pp-tag:hover {
          background: #C8FF00;
        }

        /* ---- SECTION DIVIDER ---- */
        .pp-divider {
          border: none;
          height: 5px;
          background: repeating-linear-gradient(
            90deg,
            #000000 0px,
            #000000 16px,
            transparent 16px,
            transparent 24px
          );
        }

        /* ---- SCANLINE OVERLAY ---- */
        .pp-scanlines {
          position: relative;
        }

        .pp-scanlines::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0, 0, 0, 0.015) 3px,
            rgba(0, 0, 0, 0.015) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        /* ---- NAV BAR ---- */
        .pp-nav {
          border-bottom: 5px solid #000000;
          background: #C8FF00;
        }

        /* ---- FOOTER ---- */
        .pp-footer {
          border-top: 5px solid #000000;
          background: #000000;
          color: #C8FF00;
        }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 768px) {
          .pp-hero-name {
            font-size: 2.5rem !important;
          }

          .pp-projects-grid {
            grid-template-columns: 1fr !important;
          }

          .pp-interests-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          .pp-hero-name {
            font-size: 1.8rem !important;
          }

          .pp-interests-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

      <div className="pp-root pp-scanlines">
        {/* ========== NAVIGATION BAR ========== */}
        <nav className="pp-nav sticky top-0 z-50 flex items-center justify-between px-6 py-3 sm:px-10">
          <span className="pp-pixel-font text-lg font-bold tracking-tight text-black sm:text-xl">
            {'>'} PIXEL_PUNCH
          </span>
          <div className="flex items-center gap-3">
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pp-pixel-font text-xs font-bold text-black hover:bg-black hover:text-[#C8FF00] px-2 py-1 border-3 border-black"
              style={{ border: '3px solid #000' }}
            >
              GH
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pp-pixel-font text-xs font-bold text-black hover:bg-black hover:text-[#C8FF00] px-2 py-1"
              style={{ border: '3px solid #000' }}
            >
              LI
            </a>
            <Link
              to="/"
              className="pp-pixel-font text-xs font-bold bg-black text-[#C8FF00] px-3 py-1 hover:bg-[#FF00FF] hover:text-white"
              style={{ border: '3px solid #000' }}
            >
              {'<'} HOME
            </Link>
          </div>
        </nav>

        {/* ========== MAIN CONTENT ========== */}
        <main className="relative z-10 mx-auto max-w-5xl px-6 py-10 sm:px-10">
          {/* ---- HERO SECTION ---- */}
          <section className="mb-12">
            <div
              className="pp-card p-8 sm:p-12"
              style={{
                backgroundColor: '#FFFFFF',
                '--corner-color': '#FF00FF',
                '--corner-color-alt': '#C8FF00',
              } as React.CSSProperties}
            >
              <div className="pp-card-inner relative">
                {/* Status pixel */}
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3"
                    style={{ background: '#C8FF00', border: '2px solid #000' }}
                  />
                  <span className="pp-mono text-xs font-medium tracking-widest uppercase text-black/60">
                    ONLINE // READY
                  </span>
                </div>

                {/* Name */}
                <h1
                  className="pp-pixel-font pp-pixel-underline pp-hero-name mb-6 font-bold leading-none text-black"
                  style={{ fontSize: '4rem' }}
                >
                  {intro.name}
                </h1>

                {/* Tagline */}
                <p
                  className="pp-pixel-font mb-5 text-lg font-bold sm:text-xl"
                  style={{ color: '#FF6B00' }}
                >
                  {intro.tagline}
                </p>

                {/* Bio */}
                <p className="pp-mono max-w-2xl text-sm leading-relaxed text-black/70">
                  {'> '}{intro.bio}
                </p>

                {/* Link buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={intro.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-btn bg-black px-5 py-2 text-xs text-[#C8FF00]"
                  >
                    [ GITHUB ]
                  </a>
                  <a
                    href={intro.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-btn px-5 py-2 text-xs text-black"
                    style={{ backgroundColor: '#FF00FF', color: '#FFFFFF' }}
                  >
                    [ LINKEDIN ]
                  </a>
                  <Link
                    to={intro.links.uses}
                    className="pp-btn px-5 py-2 text-xs text-black"
                    style={{ backgroundColor: '#C8FF00' }}
                  >
                    [ /USES ]
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ---- DIVIDER ---- */}
          <div className="pp-divider mb-12" />

          {/* ---- PROJECTS SECTION ---- */}
          <section className="mb-12">
            <div className="mb-8 flex items-center gap-4">
              <h2
                className="pp-pixel-font text-2xl font-bold sm:text-3xl"
                style={{ color: '#000000' }}
              >
                {'>'} SELECT PROJECT_
              </h2>
              <span
                className="pp-pixel-font text-sm animate-pulse"
                style={{
                  color: '#FF00FF',
                  animation: 'pp-blink 1s steps(1) infinite',
                }}
              >
                |
              </span>
            </div>

            <div
              className="pp-projects-grid grid gap-6"
              style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
            >
              {projects.map((project, i) => {
                const bgColors = ['#FF6B00', '#FF00FF']
                const textColors = ['#000000', '#FFFFFF']
                const cornerMain = i === 0 ? '#C8FF00' : '#FF6B00'
                const cornerAlt = i === 0 ? '#FF00FF' : '#C8FF00'

                return (
                  <div
                    key={project.name}
                    className="pp-card p-6"
                    style={{
                      backgroundColor: bgColors[i % bgColors.length],
                      color: textColors[i % textColors.length],
                      '--corner-color': cornerMain,
                      '--corner-color-alt': cornerAlt,
                    } as React.CSSProperties}
                  >
                    <div className="pp-card-inner relative">
                      {/* Project index */}
                      <span className="pp-pixel-font mb-3 block text-xs opacity-60">
                        [{String(i + 1).padStart(2, '0')}]
                      </span>

                      {/* Project name */}
                      <h3 className="pp-pixel-font mb-3 text-xl font-bold sm:text-2xl">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="pp-mono mb-4 text-xs leading-relaxed opacity-80">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="pp-tag"
                            style={{
                              backgroundColor:
                                i === 0 ? '#FFFFFF' : '#000000',
                              color: i === 0 ? '#000000' : '#FFFFFF',
                              borderColor:
                                i === 0 ? '#000000' : '#FFFFFF',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Links row */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pp-pixel-font text-xs font-bold underline decoration-2 underline-offset-4 hover:no-underline"
                        >
                          VISIT {'>>'}
                        </a>
                        <Link
                          to={project.cvAnchor}
                          className="pp-pixel-font text-xs font-bold opacity-60 hover:opacity-100"
                        >
                          CV ENTRY {'>>'}
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Menu-style project list below the cards */}
            <div className="mt-8 space-y-3">
              {projects.map((project, i) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pp-menu-item flex items-center justify-between bg-white px-5 py-3"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="pp-pixel-font text-sm font-bold"
                      style={{ color: '#FF6B00' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="pp-pixel-font text-sm font-bold text-black">
                      {project.name.toUpperCase()}
                    </span>
                    <span className="pp-mono hidden text-xs text-black/40 sm:inline">
                      // {project.tech.slice(0, 2).join(', ')}
                    </span>
                  </div>
                  <span className="pp-menu-arrow pp-pixel-font text-sm font-bold text-black">
                    {'>'}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* ---- DIVIDER ---- */}
          <div className="pp-divider mb-12" />

          {/* ---- INTERESTS SECTION ---- */}
          <section className="mb-12">
            <h2 className="pp-pixel-font mb-8 text-2xl font-bold sm:text-3xl">
              {'>'} WHEN_OFFLINE_
            </h2>

            <div
              className="pp-interests-grid grid gap-4"
              style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
            >
              {personal.interests.map((interest, i) => {
                const bgCycle = ['#C8FF00', '#FF00FF', '#FF6B00', '#FFFFFF', '#000000']
                const textCycle = ['#000000', '#FFFFFF', '#000000', '#000000', '#C8FF00']

                return (
                  <div
                    key={interest.label}
                    className="pp-interest-block flex flex-col items-center justify-center gap-2 p-4"
                    style={{
                      backgroundColor: bgCycle[i % bgCycle.length],
                      color: textCycle[i % textCycle.length],
                    }}
                  >
                    {/* Emoji rendered large, pixel-grid style */}
                    <span
                      className="text-3xl leading-none"
                      style={{ imageRendering: 'pixelated' }}
                    >
                      {interestEmojis[interest.icon] || '✨'}
                    </span>
                    <span className="pp-pixel-font text-center text-xs font-bold">
                      {interest.label.toUpperCase()}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ---- STATS / DECORATIVE ROW ---- */}
          <section className="mb-12">
            <div className="grid grid-cols-3 gap-4">
              <div
                className="pp-card flex flex-col items-center justify-center p-5"
                style={{
                  backgroundColor: '#C8FF00',
                  '--corner-color': '#000000',
                  '--corner-color-alt': '#FF00FF',
                } as React.CSSProperties}
              >
                <div className="pp-card-inner relative w-full text-center">
                  <span className="pp-pixel-font text-3xl font-bold text-black">
                    7+
                  </span>
                  <span className="pp-pixel-font mt-1 block text-xs text-black/70">
                    YRS EXP
                  </span>
                </div>
              </div>
              <div
                className="pp-card flex flex-col items-center justify-center p-5"
                style={{
                  backgroundColor: '#FF00FF',
                  '--corner-color': '#C8FF00',
                  '--corner-color-alt': '#FF6B00',
                } as React.CSSProperties}
              >
                <div className="pp-card-inner relative w-full text-center">
                  <span className="pp-pixel-font text-3xl font-bold text-white">
                    {projects.length}
                  </span>
                  <span className="pp-pixel-font mt-1 block text-xs text-white/70">
                    PROJECTS
                  </span>
                </div>
              </div>
              <div
                className="pp-card flex flex-col items-center justify-center p-5"
                style={{
                  backgroundColor: '#FF6B00',
                  '--corner-color': '#FF00FF',
                  '--corner-color-alt': '#C8FF00',
                } as React.CSSProperties}
              >
                <div className="pp-card-inner relative w-full text-center">
                  <span className="pp-pixel-font text-3xl font-bold text-black">
                    FS
                  </span>
                  <span className="pp-pixel-font mt-1 block text-xs text-black/70">
                    FULLSTACK
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ---- DIVIDER ---- */}
          <div className="pp-divider mb-12" />

          {/* ---- CONNECT CTA ---- */}
          <section className="mb-12">
            <div
              className="pp-card p-8 text-center"
              style={{
                backgroundColor: '#000000',
                '--corner-color': '#C8FF00',
                '--corner-color-alt': '#FF00FF',
              } as React.CSSProperties}
            >
              <div className="pp-card-inner relative">
                <h2
                  className="pp-pixel-font mb-4 text-xl font-bold sm:text-2xl"
                  style={{ color: '#C8FF00' }}
                >
                  {'>'} CONNECT_WITH_ME
                </h2>
                <p className="pp-mono mx-auto mb-6 max-w-md text-sm text-white/60">
                  Open to collaboration, side projects, and interesting conversations.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={intro.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-btn px-6 py-3 text-xs text-black"
                    style={{
                      backgroundColor: '#C8FF00',
                      borderColor: '#C8FF00',
                    }}
                  >
                    [ GITHUB ]
                  </a>
                  <a
                    href={intro.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-btn px-6 py-3 text-xs"
                    style={{
                      backgroundColor: '#FF00FF',
                      borderColor: '#FF00FF',
                      color: '#FFFFFF',
                    }}
                  >
                    [ LINKEDIN ]
                  </a>
                  <Link
                    to={intro.links.uses}
                    className="pp-btn px-6 py-3 text-xs"
                    style={{
                      backgroundColor: '#FF6B00',
                      borderColor: '#FF6B00',
                      color: '#000000',
                    }}
                  >
                    [ /USES ]
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ========== FOOTER ========== */}
        <footer className="pp-footer px-6 py-6 text-center sm:px-10">
          <p className="pp-pixel-font text-sm font-bold" style={{ color: '#C8FF00' }}>
            {'// '}{intro.name.toUpperCase()} {'//'} {new Date().getFullYear()}
          </p>
          <p className="pp-mono mt-2 text-xs" style={{ color: '#FF00FF' }}>
            {'>'} BUILT WITH PIXELS AND DETERMINATION
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            {['#C8FF00', '#FF00FF', '#FF6B00', '#FFFFFF'].map((color) => (
              <span
                key={color}
                className="inline-block h-3 w-3"
                style={{
                  backgroundColor: color,
                  border: '2px solid #C8FF00',
                }}
              />
            ))}
          </div>
        </footer>
      </div>
    </>
  )
}
