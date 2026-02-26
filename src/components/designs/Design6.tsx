import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const { intro, projects, personal } = siteContent

const interestIcons: Record<string, string> = {
  guitar: '\u{1F3B8}',
  running: '\u{1F3C3}',
  bike: '\u{1F6B5}',
  mountains: '\u{26F0}\uFE0F',
  terminal: '\u{1F4BB}',
}

function useRevealOnScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return containerRef
}

export function Design6() {
  const containerRef = useRevealOnScroll()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,300;1,8..60,400;1,8..60,500&display=swap');

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes ruleExpand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .editorial-root {
          --cream: #f8f5f0;
          --cream-dark: #ede8df;
          --charcoal: #1a1a1a;
          --charcoal-light: #2d2d2d;
          --charcoal-muted: #555;
          --accent: #8b0000;
          --rule-color: #c4b9a8;
          --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
          --font-body: 'Source Serif 4', Georgia, serif;

          min-height: 100vh;
          background-color: var(--cream);
          color: var(--charcoal);
          font-family: var(--font-body);
          font-size: 17px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        .editorial-root *,
        .editorial-root *::before,
        .editorial-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .editorial-root .reveal {
          opacity: 0;
          transform: translateY(28px);
        }

        .editorial-root .reveal.revealed {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .editorial-root .reveal-text {
          opacity: 0;
        }

        .editorial-root .reveal-text.revealed {
          animation: textReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .editorial-root .reveal-rule {
          transform: scaleX(0);
          transform-origin: left;
        }

        .editorial-root .reveal-rule.revealed {
          animation: ruleExpand 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .editorial-root .reveal-fade {
          opacity: 0;
        }

        .editorial-root .reveal-fade.revealed {
          animation: fadeIn 1.2s ease forwards;
        }

        /* Stagger children */
        .editorial-root .reveal.revealed:nth-child(2) { animation-delay: 0.1s; }
        .editorial-root .reveal.revealed:nth-child(3) { animation-delay: 0.2s; }
        .editorial-root .reveal.revealed:nth-child(4) { animation-delay: 0.3s; }
        .editorial-root .reveal.revealed:nth-child(5) { animation-delay: 0.4s; }

        .editorial-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* === NAV === */
        .editorial-nav {
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .editorial-nav a {
          font-family: var(--font-body);
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--charcoal-muted);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .editorial-nav a:hover {
          color: var(--charcoal);
        }

        .editorial-nav-links {
          display: flex;
          gap: 1.75rem;
          list-style: none;
        }

        /* === MASTHEAD === */
        .editorial-masthead {
          text-align: center;
          padding: 2.5rem 0 2rem;
        }

        .editorial-masthead-rule {
          height: 1px;
          background: var(--charcoal);
          border: none;
          margin: 0 auto 1.25rem;
          max-width: 1100px;
        }

        .editorial-masthead-issue {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--charcoal-muted);
          margin-bottom: 1.25rem;
        }

        .editorial-masthead-rule-bottom {
          height: 1px;
          background: var(--charcoal);
          border: none;
          margin: 0 auto;
          max-width: 1100px;
        }

        /* === HEADLINE === */
        .editorial-headline-section {
          text-align: center;
          padding: 4rem 0 3rem;
        }

        .editorial-headline {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--charcoal);
          margin-bottom: 1.25rem;
        }

        .editorial-tagline {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-weight: 400;
          color: var(--charcoal-muted);
          letter-spacing: 0.02em;
        }

        /* === BIO MULTI-COLUMN === */
        .editorial-bio-section {
          padding: 3rem 0 4rem;
        }

        .editorial-bio-grid {
          display: grid;
          grid-template-columns: 1fr 2px 1fr;
          gap: 3rem;
          align-items: start;
        }

        .editorial-bio-divider {
          width: 1px;
          background: var(--rule-color);
          align-self: stretch;
        }

        .editorial-bio-col {
          font-size: 1.05rem;
          color: var(--charcoal-light);
          line-height: 1.8;
        }

        .editorial-bio-col p {
          margin-bottom: 1rem;
        }

        .editorial-bio-dropcap::first-letter {
          font-family: var(--font-display);
          font-size: 4rem;
          float: left;
          line-height: 0.8;
          padding-right: 0.5rem;
          padding-top: 0.15rem;
          color: var(--charcoal);
          font-weight: 700;
        }

        /* === PULL QUOTE === */
        .editorial-pullquote {
          text-align: center;
          padding: 3.5rem 2rem;
          position: relative;
          max-width: 750px;
          margin: 0 auto;
        }

        .editorial-pullquote-mark {
          font-family: var(--font-display);
          font-size: 8rem;
          line-height: 0.5;
          color: var(--rule-color);
          display: block;
          margin-bottom: 0.5rem;
          user-select: none;
        }

        .editorial-pullquote-text {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 400;
          line-height: 1.5;
          color: var(--charcoal);
        }

        .editorial-pullquote-attr {
          margin-top: 1.25rem;
          font-family: var(--font-body);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--charcoal-muted);
        }

        /* === SECTION RULE === */
        .editorial-section-rule {
          height: 1px;
          background: var(--rule-color);
          border: none;
          margin: 0 auto;
        }

        .editorial-section-rule--dark {
          background: var(--charcoal);
        }

        /* === SECTION HEADING === */
        .editorial-section-heading {
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--charcoal-muted);
          text-align: center;
          padding: 2rem 0;
        }

        /* === PROJECTS / ARTICLES === */
        .editorial-articles {
          padding: 0 0 4rem;
        }

        .editorial-article {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2.5rem;
          padding: 3rem 0;
          border-bottom: 1px solid var(--rule-color);
          align-items: start;
        }

        .editorial-article:last-child {
          border-bottom: none;
        }

        .editorial-article-number {
          font-family: var(--font-display);
          font-size: 4.5rem;
          font-weight: 300;
          line-height: 1;
          color: var(--rule-color);
          min-width: 4rem;
          text-align: right;
          padding-top: 0.15rem;
        }

        .editorial-article-content {
          max-width: 680px;
        }

        .editorial-article-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 0.75rem;
          color: var(--charcoal);
        }

        .editorial-article-title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .editorial-article-title a:hover {
          color: var(--accent);
        }

        .editorial-article-description {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--charcoal-light);
          margin-bottom: 1.25rem;
        }

        .editorial-article-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          list-style: none;
        }

        .editorial-article-tech li {
          font-family: var(--font-body);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--charcoal-muted);
        }

        .editorial-article-tech li::before {
          content: '\u2022';
          margin-right: 0.4rem;
          color: var(--rule-color);
        }

        .editorial-article-links {
          margin-top: 1rem;
          display: flex;
          gap: 1.5rem;
        }

        .editorial-article-links a {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--charcoal);
          text-decoration: none;
          border-bottom: 1px solid var(--rule-color);
          padding-bottom: 2px;
          transition: border-color 0.3s ease, color 0.3s ease;
        }

        .editorial-article-links a:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        /* === INTERESTS SIDEBAR === */
        .editorial-interests-section {
          padding: 3rem 0 4rem;
        }

        .editorial-interests-grid {
          display: grid;
          grid-template-columns: 1fr 2px 1fr 2px 1fr;
          gap: 0;
          text-align: center;
        }

        .editorial-interest-divider {
          width: 1px;
          background: var(--rule-color);
          align-self: stretch;
          justify-self: center;
        }

        .editorial-interest-item {
          padding: 1.5rem 1rem;
        }

        .editorial-interest-icon {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .editorial-interest-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--charcoal-muted);
        }

        /* === COLOPHON / FOOTER === */
        .editorial-colophon {
          border-top: 2px solid var(--charcoal);
          padding: 3rem 0;
          text-align: center;
        }

        .editorial-colophon-title {
          font-family: var(--font-display);
          font-size: 0.85rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--charcoal-muted);
          margin-bottom: 1.25rem;
        }

        .editorial-colophon-links {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          list-style: none;
          margin-bottom: 2rem;
        }

        .editorial-colophon-links a {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--charcoal);
          text-decoration: none;
          border-bottom: 1px solid var(--rule-color);
          padding-bottom: 2px;
          transition: border-color 0.3s ease, color 0.3s ease;
        }

        .editorial-colophon-links a:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .editorial-colophon-note {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 0.85rem;
          color: var(--charcoal-muted);
        }

        /* === RESPONSIVE === */
        @media (max-width: 768px) {
          .editorial-bio-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .editorial-bio-divider {
            display: none;
          }

          .editorial-article {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .editorial-article-number {
            font-size: 2.5rem;
            text-align: left;
            min-width: unset;
          }

          .editorial-interests-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .editorial-interest-divider {
            display: none;
          }

          .editorial-interest-item {
            padding: 1rem;
            border-bottom: 1px solid var(--rule-color);
          }

          .editorial-interest-item:last-of-type {
            border-bottom: none;
          }

          .editorial-container {
            padding: 0 1.25rem;
          }
        }
      `}</style>

      <div className="editorial-root" ref={containerRef}>
        {/* Navigation */}
        <nav className="editorial-nav">
          <Link to="/" className="reveal" style={{ animationDelay: '0.1s' }}>
            &larr; Back to Home
          </Link>
          <ul className="editorial-nav-links">
            <li>
              <a href={intro.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={intro.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <Link to={intro.links.uses}>Uses</Link>
            </li>
          </ul>
        </nav>

        {/* Masthead */}
        <header className="editorial-masthead">
          <hr className="editorial-masthead-rule reveal-rule reveal" />
          <p className="editorial-masthead-issue reveal reveal-fade">
            Issue No. 1 &mdash; 2026
          </p>
          <hr className="editorial-masthead-rule-bottom reveal-rule reveal" />
        </header>

        {/* Display Headline */}
        <section className="editorial-headline-section editorial-container">
          <h1 className="editorial-headline reveal reveal-text">{intro.name}</h1>
          <p className="editorial-tagline reveal" style={{ animationDelay: '0.2s' }}>
            {intro.tagline}
          </p>
        </section>

        <div className="editorial-container">
          <hr className="editorial-section-rule reveal-rule reveal" />
        </div>

        {/* Bio — Multi-column */}
        <section className="editorial-bio-section editorial-container">
          <div className="editorial-section-heading reveal">Profile</div>
          <div className="editorial-bio-grid">
            <div className="editorial-bio-col reveal" style={{ animationDelay: '0.1s' }}>
              <p className="editorial-bio-dropcap">{intro.bio}</p>
              <p>
                With a focus on modern web technologies and a passion for building tools
                that solve real problems, every project is an exercise in craft &mdash;
                from architecture decisions down to the last pixel.
              </p>
            </div>
            <div className="editorial-bio-divider" aria-hidden="true" />
            <div className="editorial-bio-col reveal" style={{ animationDelay: '0.25s' }}>
              <p>
                The work spans full-stack applications, browser extensions, real-time
                audio tools, and AI-powered platforms. Each project below represents a
                distinct editorial chapter &mdash; a story of shipping, iterating, and
                refining.
              </p>
              <p>
                Currently exploring the edges of what the modern web can do, one side
                project at a time.
              </p>
            </div>
          </div>
        </section>

        <div className="editorial-container">
          <hr className="editorial-section-rule reveal-rule reveal" />
        </div>

        {/* Pull Quote */}
        <div className="editorial-pullquote reveal">
          <span className="editorial-pullquote-mark" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="editorial-pullquote-text">
            I like shipping side projects, breaking things, and learning by doing.
          </blockquote>
          <p className="editorial-pullquote-attr">&mdash; {intro.name}</p>
        </div>

        <div className="editorial-container">
          <hr className="editorial-section-rule reveal-rule reveal" />
        </div>

        {/* Projects as Articles */}
        <section className="editorial-articles editorial-container">
          <div className="editorial-section-heading reveal">Featured Work</div>

          {projects.map((project, i) => (
            <article
              key={project.name}
              className="editorial-article reveal"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="editorial-article-number" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="editorial-article-content">
                <h2 className="editorial-article-title">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </h2>
                <p className="editorial-article-description">{project.description}</p>
                <ul className="editorial-article-tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="editorial-article-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Project
                  </a>
                  <Link to={project.cvAnchor}>Read More</Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="editorial-container">
          <hr className="editorial-section-rule editorial-section-rule--dark reveal-rule reveal" />
        </div>

        {/* Interests */}
        <section className="editorial-interests-section editorial-container">
          <div className="editorial-section-heading reveal">Beyond the Screen</div>
          <div className="editorial-interests-grid">
            {personal.interests.map((interest, i) => {
              const items: React.ReactNode[] = []
              if (i > 0) {
                items.push(
                  <div
                    key={`div-${interest.label}`}
                    className="editorial-interest-divider"
                    aria-hidden="true"
                  />,
                )
              }
              items.push(
                <div
                  key={interest.label}
                  className="editorial-interest-item reveal"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="editorial-interest-icon" role="img" aria-label={interest.label}>
                    {interestIcons[interest.icon] ?? '\u{2728}'}
                  </span>
                  <span className="editorial-interest-label">{interest.label}</span>
                </div>,
              )
              return items
            })}
          </div>
        </section>

        {/* Colophon / Footer */}
        <footer className="editorial-colophon editorial-container">
          <p className="editorial-colophon-title reveal">Colophon</p>
          <ul className="editorial-colophon-links reveal" style={{ animationDelay: '0.1s' }}>
            <li>
              <a href={intro.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={intro.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <Link to={intro.links.uses}>Uses</Link>
            </li>
          </ul>
          <p className="editorial-colophon-note reveal" style={{ animationDelay: '0.2s' }}>
            Set in Playfair Display &amp; Source Serif 4.
            <br />
            Designed &amp; built by {intro.name}.
          </p>
        </footer>
      </div>
    </>
  )
}
