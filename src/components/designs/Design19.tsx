import { useEffect, useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '~|~',
  running: '>>-',
  bike: 'o-o',
  mountains: '/\\/\\',
  terminal: '>_',
}

const NOIR_BG = '#0d0d0d'
const CREAM = '#e8dcc8'
const DARK_CREAM = '#d4c5a9'
const RED = '#c23616'
const GRAY_DARK = '#1a1a1a'
const GRAY_MID = '#2a2a2a'

// Deterministic pseudo-random from a seed string
function seededRandom(seed: string): number {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i)
    h = h | 0
  }
  h = ((h >>> 16) ^ h) * 0x45d9f3b
  h = ((h >>> 16) ^ h) * 0x45d9f3b
  h = (h >>> 16) ^ h
  return (h & 0x7fffffff) / 0x7fffffff
}

// Render text with ink inconsistency: each character gets slightly varying opacity
function InkText({
  children,
  seed = 'ink',
  className = '',
  style = {},
}: {
  children: string
  seed?: string
  className?: string
  style?: React.CSSProperties
}) {
  const chars = useMemo(() => {
    return children.split('').map((char, i) => {
      const r = seededRandom(`${seed}-${i}`)
      const opacity = 0.7 + r * 0.3
      const yShift = (seededRandom(`${seed}-y-${i}`) - 0.5) * 1.2
      const rotate = (seededRandom(`${seed}-r-${i}`) - 0.5) * 1.5
      return { char, opacity, yShift, rotate }
    })
  }, [children, seed])

  return (
    <span className={className} style={style}>
      {chars.map((c, i) => (
        <span
          key={i}
          style={{
            opacity: c.char === ' ' ? 1 : c.opacity,
            display: 'inline-block',
            transform:
              c.char === ' '
                ? undefined
                : `translateY(${c.yShift}px) rotate(${c.rotate}deg)`,
          }}
        >
          {c.char}
        </span>
      ))}
    </span>
  )
}

// Typewriter correction: shows struck-through text in red then replacement
function Correction({
  deleted,
  replacement,
}: {
  deleted: string
  replacement: string
}) {
  return (
    <span className="tw-correction">
      <span className="tw-deleted">{deleted}</span>{' '}
      <InkText seed={`corr-${replacement}`}>{replacement}</InkText>
    </span>
  )
}

// Noise SVG for paper grain texture
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`

export function Design19() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .tw-noir-root {
          font-family: 'Special Elite', 'Courier New', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${NOIR_BG};
          color: ${CREAM};
          line-height: 2;
          position: relative;
          overflow-x: hidden;
        }

        .tw-noir-root *,
        .tw-noir-root *::before,
        .tw-noir-root *::after {
          box-sizing: border-box;
        }

        /* Ink smudge decorations */
        .tw-smudge {
          position: absolute;
          border-radius: 50%;
          background: ${CREAM};
          opacity: 0.03;
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }

        .tw-smudge-1 {
          width: 300px;
          height: 200px;
          top: 5%;
          left: -50px;
        }

        .tw-smudge-2 {
          width: 250px;
          height: 350px;
          top: 30%;
          right: -80px;
        }

        .tw-smudge-3 {
          width: 400px;
          height: 180px;
          bottom: 15%;
          left: 20%;
        }

        .tw-smudge-4 {
          width: 180px;
          height: 280px;
          top: 60%;
          left: -30px;
        }

        /* Ink splatter dots */
        .tw-splatter {
          position: absolute;
          border-radius: 50%;
          background: ${CREAM};
          pointer-events: none;
          z-index: 0;
        }

        .tw-splatter-1 { width: 4px; height: 4px; top: 12%; left: 15%; opacity: 0.15; }
        .tw-splatter-2 { width: 3px; height: 3px; top: 25%; right: 20%; opacity: 0.12; }
        .tw-splatter-3 { width: 5px; height: 6px; top: 45%; left: 8%; opacity: 0.1; border-radius: 40% 60% 50% 50%; }
        .tw-splatter-4 { width: 3px; height: 3px; top: 55%; right: 12%; opacity: 0.14; }
        .tw-splatter-5 { width: 6px; height: 5px; bottom: 25%; left: 25%; opacity: 0.08; border-radius: 50% 40% 60% 50%; }
        .tw-splatter-6 { width: 4px; height: 4px; bottom: 35%; right: 30%; opacity: 0.11; }
        .tw-splatter-7 { width: 3px; height: 2px; top: 70%; left: 40%; opacity: 0.13; }

        .tw-container {
          max-width: 740px;
          margin: 0 auto;
          padding: 60px 32px 80px;
          position: relative;
          z-index: 1;
        }

        /* Margin line — like typewriter left margin */
        .tw-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: calc(50% - 390px);
          width: 2px;
          height: 100%;
          background: ${RED};
          opacity: 0.15;
          z-index: 0;
          pointer-events: none;
        }

        /* Tab stops */
        .tw-tab-stops {
          display: flex;
          gap: 92px;
          padding: 0 0 8px 0;
          margin-bottom: 32px;
          border-bottom: 1px solid ${GRAY_MID};
          opacity: 0.3;
        }

        .tw-tab-stop {
          font-size: 10px;
          color: ${DARK_CREAM};
          letter-spacing: 0;
        }

        /* Case file header */
        .tw-case-header {
          text-align: center;
          margin-bottom: 48px;
          position: relative;
          padding: 32px 0;
        }

        .tw-case-header::before,
        .tw-case-header::after {
          content: '════════════════════════════════════════';
          display: block;
          color: ${DARK_CREAM};
          opacity: 0.4;
          font-size: 14px;
          letter-spacing: 4px;
          overflow: hidden;
          white-space: nowrap;
        }

        .tw-case-label {
          font-size: 12px;
          letter-spacing: 8px;
          text-transform: uppercase;
          color: ${DARK_CREAM};
          opacity: 0.6;
          margin: 16px 0 4px;
        }

        .tw-case-title {
          font-size: clamp(28px, 5vw, 42px);
          color: ${CREAM};
          margin: 8px 0;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .tw-case-number {
          font-size: 11px;
          letter-spacing: 6px;
          color: ${DARK_CREAM};
          opacity: 0.5;
          margin-top: 8px;
        }

        /* Bell indicator */
        .tw-bell {
          display: inline-block;
          font-size: 10px;
          color: ${RED};
          opacity: 0.6;
          margin-left: 8px;
          vertical-align: super;
        }

        /* Section headings */
        .tw-section-heading {
          font-size: 16px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: ${CREAM};
          margin: 48px 0 20px;
          padding-bottom: 8px;
          border-bottom: 1px dashed ${GRAY_MID};
          opacity: 0.9;
        }

        /* Indented typewriter paragraph */
        .tw-paragraph {
          text-indent: 40px;
          margin-bottom: 16px;
          font-size: 16px;
          line-height: 2.1;
        }

        /* Paper card */
        .tw-paper-card {
          background-color: ${DARK_CREAM};
          background-image: ${NOISE_SVG};
          color: ${NOIR_BG};
          padding: 24px 28px;
          margin: 16px 0;
          position: relative;
          border: none;
          box-shadow:
            2px 3px 12px rgba(0,0,0,0.5),
            inset 0 0 60px rgba(0,0,0,0.04);
        }

        /* Slight page curl effect */
        .tw-paper-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40px;
          height: 40px;
          background: linear-gradient(
            315deg,
            ${GRAY_MID} 0%,
            transparent 50%
          );
          opacity: 0.3;
        }

        .tw-paper-card h3 {
          font-size: 18px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0 0 12px;
          color: ${NOIR_BG};
        }

        .tw-paper-card p {
          font-size: 14px;
          line-height: 1.9;
          color: ${GRAY_DARK};
          margin: 0 0 12px;
        }

        .tw-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 12px 0;
          padding: 0;
          list-style: none;
        }

        .tw-tech-item {
          font-size: 11px;
          letter-spacing: 1px;
          padding: 3px 10px;
          border: 1px solid ${GRAY_MID};
          color: ${NOIR_BG};
          opacity: 0.8;
          text-transform: uppercase;
        }

        .tw-card-links {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }

        .tw-card-links a {
          font-size: 13px;
          color: ${NOIR_BG};
          text-decoration: underline;
          text-underline-offset: 3px;
          opacity: 0.7;
          transition: opacity 0.2s;
          letter-spacing: 1px;
        }

        .tw-card-links a:hover {
          opacity: 1;
        }

        /* Red correction strikethrough */
        .tw-correction {
          display: inline;
        }

        .tw-deleted {
          color: ${RED};
          text-decoration: line-through;
          text-decoration-color: ${RED};
          text-decoration-thickness: 2px;
          opacity: 0.8;
          margin-right: 4px;
        }

        /* Interest list */
        .tw-interest-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 6px 0;
          font-size: 15px;
          border-bottom: 1px dotted ${GRAY_MID};
          opacity: 0.85;
        }

        .tw-interest-icon {
          font-size: 13px;
          color: ${DARK_CREAM};
          min-width: 40px;
          text-align: right;
          opacity: 0.6;
        }

        /* Links section */
        .tw-links-section {
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .tw-link {
          font-size: 14px;
          color: ${CREAM};
          text-decoration: underline;
          text-decoration-style: dashed;
          text-underline-offset: 4px;
          opacity: 0.75;
          letter-spacing: 1px;
          transition: opacity 0.2s;
        }

        .tw-link:hover {
          opacity: 1;
        }

        /* Footer */
        .tw-footer {
          margin-top: 64px;
          padding-top: 24px;
          border-top: 1px solid ${GRAY_MID};
          text-align: center;
          font-size: 12px;
          color: ${DARK_CREAM};
          opacity: 0.4;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* Back nav */
        .tw-back-link {
          display: inline-block;
          font-size: 13px;
          color: ${CREAM};
          text-decoration: none;
          opacity: 0.5;
          letter-spacing: 2px;
          margin-bottom: 24px;
          transition: opacity 0.2s;
        }

        .tw-back-link:hover {
          opacity: 0.9;
        }

        /* Carriage return indicator */
        .tw-carriage-return {
          display: block;
          text-align: right;
          font-size: 10px;
          color: ${RED};
          opacity: 0.3;
          margin: 4px 0;
          letter-spacing: 2px;
        }

        @media (max-width: 800px) {
          .tw-container::before {
            display: none;
          }
          .tw-container {
            padding: 40px 20px 60px;
          }
          .tw-tab-stops {
            display: none;
          }
        }
      `}</style>

      <div className="tw-noir-root">
        {/* Ink smudge decorations */}
        <div className="tw-smudge tw-smudge-1" />
        <div className="tw-smudge tw-smudge-2" />
        <div className="tw-smudge tw-smudge-3" />
        <div className="tw-smudge tw-smudge-4" />

        {/* Ink splatter dots */}
        <div className="tw-splatter tw-splatter-1" />
        <div className="tw-splatter tw-splatter-2" />
        <div className="tw-splatter tw-splatter-3" />
        <div className="tw-splatter tw-splatter-4" />
        <div className="tw-splatter tw-splatter-5" />
        <div className="tw-splatter tw-splatter-6" />
        <div className="tw-splatter tw-splatter-7" />

        <div className="tw-container">
          <Link to="/" className="tw-back-link">
            &lt;-- RETURN TO INDEX
          </Link>

          {/* Tab stops */}
          <div className="tw-tab-stops">
            {[10, 20, 30, 40, 50, 60, 70].map((n) => (
              <span key={n} className="tw-tab-stop">
                |{n}
              </span>
            ))}
          </div>

          {/* Case File Header */}
          <header className="tw-case-header">
            <div className="tw-case-label">
              <InkText seed="label">CLASSIFIED DOSSIER</InkText>
            </div>
            <h1 className="tw-case-title">
              <InkText seed="name">{intro.name.toUpperCase()}</InkText>
            </h1>
            <div className="tw-case-number">
              <InkText seed="casenum">
                CASE FILE NO. 1987-D &bull; PRIORITY: HIGH
              </InkText>
            </div>
          </header>

          {/* Subject profile */}
          <div className="tw-section-heading">
            <InkText seed="sec-subj">I. SUBJECT PROFILE</InkText>
            <span className="tw-bell">&#9066;</span>
          </div>

          <div className="tw-paragraph">
            <InkText seed="tagline-label" style={{ opacity: 0.5 }}>
              {'KNOWN ALIAS: '}
            </InkText>
            <Correction deleted="unknown operative" replacement={intro.tagline} />
          </div>

          <div className="tw-paragraph">
            <InkText seed="bio">{intro.bio}</InkText>
          </div>

          <span className="tw-carriage-return">--- CR ---</span>

          {/* Projects as case evidence */}
          <div className="tw-section-heading">
            <InkText seed="sec-ev">II. EVIDENCE &mdash; KNOWN OPERATIONS</InkText>
            <span className="tw-bell">&#9066;</span>
          </div>

          {projects.map((project, idx) => (
            <div key={project.name} className="tw-paper-card">
              <h3>
                <InkText seed={`proj-${idx}`}>
                  {`EXHIBIT ${String.fromCharCode(65 + idx)}: ${project.name.toUpperCase()}`}
                </InkText>
              </h3>
              <p>
                <InkText seed={`pdesc-${idx}`}>{project.description}</InkText>
              </p>
              <ul className="tw-tech-list">
                {project.tech.map((t) => (
                  <li key={t} className="tw-tech-item">
                    <InkText seed={`tech-${t}`}>{t}</InkText>
                  </li>
                ))}
              </ul>
              <div className="tw-card-links">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  [ FIELD REPORT ]
                </a>
                <Link to={project.cvAnchor as string}>[ CASE NOTES ]</Link>
              </div>
            </div>
          ))}

          <span className="tw-carriage-return">--- CR ---</span>

          {/* Personal interests as surveillance notes */}
          <div className="tw-section-heading">
            <InkText seed="sec-surv">
              III. SURVEILLANCE NOTES &mdash; PERSONAL INTERESTS
            </InkText>
          </div>

          <div className="tw-paragraph" style={{ textIndent: 0 }}>
            <InkText seed="surv-intro" style={{ opacity: 0.6 }}>
              {'Subject observed engaging in the following activities:'}
            </InkText>
          </div>

          {personal.interests.map((interest, idx) => (
            <div key={interest.label} className="tw-interest-row">
              <span className="tw-interest-icon">
                {interestIcons[interest.icon] || '?'}
              </span>
              <InkText seed={`int-${idx}`}>{interest.label}</InkText>
            </div>
          ))}

          <span className="tw-carriage-return">--- CR ---</span>

          {/* Contact / Links */}
          <div className="tw-section-heading">
            <InkText seed="sec-con">IV. KNOWN CONTACTS &amp; DEAD DROPS</InkText>
            <span className="tw-bell">&#9066;</span>
          </div>

          <div className="tw-paragraph" style={{ textIndent: 0 }}>
            <Correction deleted="whereabouts unknown" replacement="links on file" />
          </div>

          <div className="tw-links-section">
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-link"
            >
              GITHUB
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-link"
            >
              LINKEDIN
            </a>
            <Link to={intro.links.uses} className="tw-link">
              USES / EQUIPMENT
            </Link>
          </div>

          {/* Footer */}
          <footer className="tw-footer">
            <InkText seed="footer">
              {'END OF DOSSIER --- FILED UNDER LOCK AND KEY'}
            </InkText>
          </footer>
        </div>
      </div>
    </>
  )
}
