import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

export function Design14() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@400;500;600;700;800;900&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .stark-mono {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          background-color: #FFFFFF;
          color: #000000;
        }

        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }

        .font-mono-stark {
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
        }

        .brutal-border {
          border: 4px solid #000000;
        }

        .brutal-border-thick {
          border: 6px solid #000000;
        }

        .brutal-shadow {
          box-shadow: 6px 6px 0px #000000;
        }

        .brutal-shadow-sm {
          box-shadow: 4px 4px 0px #000000;
        }

        .brutal-card {
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          background-color: #FFFFFF;
        }

        .inverted-block {
          background-color: #000000;
          color: #FFFFFF;
        }

        .hover-invert:hover {
          background-color: #000000 !important;
          color: #FFFFFF !important;
        }

        .hover-invert-reverse:hover {
          background-color: #FFFFFF !important;
          color: #000000 !important;
        }

        .brutal-link {
          text-decoration: none;
          border-bottom: 3px solid #000000;
          padding-bottom: 1px;
        }

        .brutal-link:hover {
          background-color: #000000;
          color: #FFFFFF;
        }

        .brutal-link-inverted {
          text-decoration: none;
          border-bottom: 3px solid #FFFFFF;
          padding-bottom: 1px;
        }

        .brutal-link-inverted:hover {
          background-color: #FFFFFF;
          color: #000000;
        }
      `}</style>

      <div className="stark-mono min-h-screen">
        {/* === NAV BAR === */}
        <nav
          className="brutal-border-thick flex items-center justify-between px-6 py-4 sm:px-10"
          style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
        >
          <span
            className="font-outfit text-lg font-900 uppercase tracking-widest"
            style={{ fontWeight: 900 }}
          >
            DULEV.DEV
          </span>
          <Link
            to="/"
            className="brutal-link font-mono-stark text-sm font-bold uppercase tracking-wider"
          >
            &larr; BACK
          </Link>
        </nav>

        {/* === HERO / NAME SECTION === */}
        <header className="brutal-border-thick inverted-block px-6 py-16 sm:px-10 sm:py-24"
          style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}
        >
          <div className="mx-auto max-w-5xl">
            <h1
              className="font-outfit mb-6 uppercase leading-[0.9]"
              style={{
                fontWeight: 900,
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                letterSpacing: '-0.02em',
              }}
            >
              {intro.name}
            </h1>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p
                className="font-mono-stark max-w-lg text-base leading-relaxed sm:text-lg"
                style={{ color: '#FFFFFF' }}
              >
                {intro.tagline}
              </p>
              <p
                className="font-mono-stark text-xs uppercase tracking-widest"
                style={{ color: '#FFFFFF', opacity: 0.6 }}
              >
                FULLSTACK / TINKERER / BUILDER
              </p>
            </div>
          </div>
        </header>

        {/* === BIO SECTION === */}
        <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-12">
            <div className="sm:col-span-4">
              <h2
                className="font-outfit text-4xl uppercase sm:text-5xl"
                style={{ fontWeight: 900, lineHeight: 1 }}
              >
                ABOUT
              </h2>
            </div>
            <div className="sm:col-span-8">
              <p className="font-mono-stark text-base leading-relaxed sm:text-lg">
                {intro.bio}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={intro.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-card hover-invert px-5 py-3 font-mono-stark text-sm font-bold uppercase tracking-wider"
                  style={{ borderRadius: 0 }}
                >
                  GITHUB
                </a>
                <a
                  href={intro.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-card hover-invert px-5 py-3 font-mono-stark text-sm font-bold uppercase tracking-wider"
                  style={{ borderRadius: 0 }}
                >
                  LINKEDIN
                </a>
                <Link
                  to={intro.links.uses}
                  className="brutal-card hover-invert px-5 py-3 font-mono-stark text-sm font-bold uppercase tracking-wider"
                  style={{ borderRadius: 0 }}
                >
                  /USES
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === DIVIDER === */}
        <div
          className="mx-6 sm:mx-10"
          style={{ borderTop: '4px solid #000000' }}
        />

        {/* === PROJECTS HEADER (INVERTED) === */}
        <section
          className="inverted-block brutal-border-thick mx-6 mt-14 px-6 py-10 sm:mx-10 sm:px-10 sm:py-14"
          style={{ borderRadius: 0 }}
        >
          <div className="mx-auto max-w-5xl">
            <span className="font-mono-stark mb-2 block text-xs uppercase tracking-[0.3em]">
              SELECTED WORK
            </span>
            <h2
              className="font-outfit text-5xl uppercase sm:text-7xl"
              style={{ fontWeight: 900, lineHeight: 0.95 }}
            >
              PROJECTS
            </h2>
          </div>
        </section>

        {/* === PROJECT CARDS === */}
        <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
          <div className="flex flex-col gap-12">
            {projects.map((project, i) => (
              <article
                key={project.name}
                className={`brutal-card p-0 ${i % 2 === 1 ? 'inverted-block' : ''}`}
                style={{ borderRadius: 0 }}
              >
                {/* Project number bar */}
                <div
                  className={`flex items-center justify-between px-6 py-3 ${
                    i % 2 === 1
                      ? ''
                      : 'inverted-block'
                  }`}
                  style={{
                    borderBottom: i % 2 === 1 ? '4px solid #FFFFFF' : '4px solid #000000',
                  }}
                >
                  <span
                    className="font-outfit text-sm uppercase tracking-[0.3em]"
                    style={{ fontWeight: 900 }}
                  >
                    PROJECT {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono-stark text-xs uppercase tracking-widest">
                    {project.tech.length} TECHNOLOGIES
                  </span>
                </div>

                <div className="px-6 py-8 sm:px-8 sm:py-10">
                  {/* Project name */}
                  <h3
                    className="font-outfit mb-4 text-4xl uppercase sm:text-6xl"
                    style={{ fontWeight: 900, lineHeight: 1, letterSpacing: '-0.01em' }}
                  >
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="font-mono-stark mb-8 max-w-2xl text-sm leading-relaxed sm:text-base">
                    {project.description}
                  </p>

                  {/* Tech stack as slash-separated monospace */}
                  <div
                    className={`mb-8 inline-block px-4 py-2 ${
                      i % 2 === 1
                        ? 'bg-white text-black'
                        : 'inverted-block'
                    }`}
                    style={{
                      borderRadius: 0,
                      border: i % 2 === 1 ? '3px solid #FFFFFF' : '3px solid #000000',
                    }}
                  >
                    <span className="font-mono-stark text-xs font-bold uppercase tracking-wider sm:text-sm">
                      {project.tech.join(' / ')}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-6">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-mono-stark text-sm font-bold uppercase tracking-wider ${
                        i % 2 === 1 ? 'brutal-link-inverted' : 'brutal-link'
                      }`}
                    >
                      VISIT SITE &rarr;
                    </a>
                    <Link
                      to={project.cvAnchor}
                      className={`font-mono-stark text-sm font-bold uppercase tracking-wider ${
                        i % 2 === 1 ? 'brutal-link-inverted' : 'brutal-link'
                      }`}
                    >
                      CV ENTRY &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* === INTERESTS SECTION (INVERTED) === */}
        <section
          className="inverted-block"
          style={{ borderTop: '6px solid #000000', borderBottom: '6px solid #000000' }}
        >
          <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2
                className="font-outfit text-4xl uppercase sm:text-6xl"
                style={{ fontWeight: 900, lineHeight: 1 }}
              >
                BEYOND CODE
              </h2>
              <span className="font-mono-stark text-xs uppercase tracking-[0.3em]">
                INTERESTS & HOBBIES
              </span>
            </div>

            {/* Interests as horizontal uppercase labels */}
            <div className="flex flex-wrap gap-4">
              {personal.interests.map((interest) => (
                <div
                  key={interest.label}
                  className="hover-invert-reverse cursor-default bg-white px-6 py-4 text-black"
                  style={{
                    border: '4px solid #FFFFFF',
                    borderRadius: 0,
                    boxShadow: '4px 4px 0px rgba(255,255,255,0.3)',
                  }}
                >
                  <span
                    className="font-outfit text-lg uppercase tracking-wider sm:text-xl"
                    style={{ fontWeight: 900 }}
                  >
                    {interest.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === MANIFESTO STRIP === */}
        <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {['SHIP FAST', 'BREAK THINGS', 'LEARN BY DOING'].map((motto, i) => (
              <div
                key={motto}
                className={`brutal-card px-6 py-8 text-center ${
                  i === 1 ? 'inverted-block hover-invert-reverse' : 'hover-invert'
                }`}
                style={{ borderRadius: 0 }}
              >
                <span
                  className="font-outfit text-2xl uppercase sm:text-3xl"
                  style={{ fontWeight: 900, letterSpacing: '-0.01em' }}
                >
                  {motto}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* === CONTACT STRIP === */}
        <div
          className="mx-6 sm:mx-10"
          style={{ borderTop: '4px solid #000000' }}
        />
        <section className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2
                className="font-outfit text-3xl uppercase sm:text-4xl"
                style={{ fontWeight: 900 }}
              >
                LET&apos;S CONNECT
              </h2>
              <p className="font-mono-stark mt-2 text-sm">
                Find me on the internet.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inverted-block hover-invert-reverse brutal-border px-6 py-3 font-mono-stark text-sm font-bold uppercase tracking-wider"
                style={{ borderRadius: 0, boxShadow: '4px 4px 0px #000000' }}
              >
                GITHUB
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inverted-block hover-invert-reverse brutal-border px-6 py-3 font-mono-stark text-sm font-bold uppercase tracking-wider"
                style={{ borderRadius: 0, boxShadow: '4px 4px 0px #000000' }}
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </section>

        {/* === FOOTER === */}
        <footer
          className="inverted-block px-6 py-8 sm:px-10"
          style={{ borderTop: '6px solid #000000' }}
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
            <span
              className="font-outfit text-sm uppercase tracking-[0.3em]"
              style={{ fontWeight: 900 }}
            >
              {intro.name} &copy; {new Date().getFullYear()}
            </span>
            <span className="font-mono-stark text-xs uppercase tracking-widest" style={{ opacity: 0.6 }}>
              ZERO COLOR. PURE TYPOGRAPHY.
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}
