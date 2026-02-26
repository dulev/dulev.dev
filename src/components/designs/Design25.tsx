import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '~||~',
  running: '>>/>',
  bike: 'o-o',
  mountains: '/\\/\\',
  terminal: '>_',
}

// Palette
const BG = '#0c0c0c'
const SURFACE = '#1a1a1a'
const TEXT = '#e0e0e0'
const TEXT_DIM = '#888888'
const RED = '#ff0000'
const GREEN = '#00ff00'
const BLUE = '#0000ff'

// Decorative hex strings scattered throughout
const HEX_FRAGMENTS = [
  '0xDEAD BEEF',
  'ff a3 00 b7',
  'ERR_CORRUPT',
  '0x0F 4A C2',
  'SEGFAULT',
  'c0 ff ee 00',
  '0xBADC0DE',
  'NULL_PTR',
  '4e 75 6c 6c',
  '0xCAFEBABE',
  'HEAP_OVERFLOW',
  'ff ff ff 00',
]

// Fragmented clip-path polygons for broken card edges
const CARD_CLIPS = [
  'polygon(0% 0%, 97% 0%, 100% 3%, 100% 96%, 98% 100%, 2% 100%, 0% 97%, 0% 4%)',
  'polygon(2% 0%, 100% 0%, 100% 4%, 98% 100%, 0% 100%, 0% 98%, 3% 96%, 0% 2%)',
]

export function Design25() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Source+Code+Pro:wght@300;400;500;600;700&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        /* ===== GLITCH KEYFRAMES ===== */
        @keyframes glitch-name {
          0%, 92%, 100% {
            clip-path: none;
            transform: translate(0, 0);
            filter: none;
            opacity: 1;
          }
          93% {
            clip-path: inset(20% 0 40% 0);
            transform: translate(-8px, 0);
            filter: hue-rotate(90deg);
            opacity: 0.9;
          }
          93.5% {
            clip-path: inset(60% 0 10% 0);
            transform: translate(6px, 0);
            filter: hue-rotate(180deg) saturate(2);
          }
          94% {
            clip-path: inset(10% 0 70% 0);
            transform: translate(-4px, -2px);
            filter: hue-rotate(270deg);
          }
          94.5% {
            clip-path: inset(40% 0 30% 0);
            transform: translate(10px, 1px);
            filter: none;
          }
          95% {
            clip-path: inset(80% 0 5% 0);
            transform: translate(-6px, 0);
            filter: saturate(3) brightness(1.5);
          }
          95.5% {
            clip-path: none;
            transform: translate(2px, 0);
            filter: none;
          }
        }

        @keyframes glitch-noise-1 {
          0%, 91%, 96%, 100% {
            clip-path: inset(100% 0 0% 0);
            opacity: 0;
          }
          92% {
            clip-path: inset(15% 0 80% 0);
            opacity: 1;
          }
          93% {
            clip-path: inset(55% 0 35% 0);
            opacity: 0.8;
          }
          94% {
            clip-path: inset(75% 0 15% 0);
            opacity: 1;
          }
          95% {
            clip-path: inset(5% 0 90% 0);
            opacity: 0.6;
          }
        }

        @keyframes glitch-noise-2 {
          0%, 90%, 97%, 100% {
            clip-path: inset(100% 0 0% 0);
            opacity: 0;
          }
          91% {
            clip-path: inset(40% 0 50% 0);
            opacity: 0.7;
          }
          92.5% {
            clip-path: inset(70% 0 20% 0);
            opacity: 1;
          }
          94% {
            clip-path: inset(10% 0 85% 0);
            opacity: 0.9;
          }
          95.5% {
            clip-path: inset(30% 0 60% 0);
            opacity: 0.5;
          }
        }

        @keyframes scanline-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }

        @keyframes card-glitch {
          0%, 100% {
            filter: none;
            transform: translate(0, 0);
          }
          25% {
            filter: none;
            transform: translate(-2px, 0);
          }
          50% {
            filter: brightness(1.3) saturate(1.5);
            transform: translate(2px, -1px);
          }
          75% {
            filter: none;
            transform: translate(-1px, 1px);
          }
        }

        @keyframes rgb-flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.15; }
        }

        /* ===== ROOT ===== */
        .gl-root {
          font-family: 'Source Code Pro', 'Courier New', monospace;
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

        .gl-root *,
        .gl-root *::before,
        .gl-root *::after {
          box-sizing: border-box;
        }

        /* ===== SCANLINE OVERLAY ===== */
        .gl-scanlines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 100;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.08) 2px,
            rgba(0, 0, 0, 0.08) 4px
          );
          animation: scanline-scroll 0.4s linear infinite;
        }

        /* ===== CONTAINER ===== */
        .gl-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 48px 32px 80px;
          position: relative;
          z-index: 1;
        }

        /* ===== HEX MARGIN DECORATIONS ===== */
        .gl-hex-margin {
          position: fixed;
          top: 0;
          left: 12px;
          width: 80px;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          display: flex;
          flex-direction: column;
          gap: 120px;
          padding-top: 60px;
          font-size: 9px;
          font-family: 'Source Code Pro', monospace;
          color: ${TEXT_DIM};
          opacity: 0.12;
          letter-spacing: 1px;
          overflow: hidden;
        }

        .gl-hex-margin-right {
          left: auto;
          right: 12px;
          text-align: right;
        }

        /* ===== RGB SEPARATION HEADER ===== */
        .gl-rgb-text {
          position: relative;
          display: inline-block;
          font-family: 'Major Mono Display', monospace;
        }

        .gl-rgb-text::before,
        .gl-rgb-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .gl-rgb-text::before {
          color: ${RED};
          transform: translate(-2px, -1px);
          opacity: 0.7;
          mix-blend-mode: screen;
          z-index: -1;
        }

        .gl-rgb-text::after {
          color: ${BLUE};
          transform: translate(2px, 1px);
          opacity: 0.7;
          mix-blend-mode: screen;
          z-index: -1;
        }

        /* ===== GLITCH NAME ===== */
        .gl-name-wrapper {
          position: relative;
          display: inline-block;
        }

        .gl-name {
          font-family: 'Major Mono Display', monospace;
          font-size: clamp(2.4rem, 7vw, 4.8rem);
          color: ${TEXT};
          position: relative;
          z-index: 2;
          animation: glitch-name 4s infinite linear;
        }

        /* Static noise bands */
        .gl-noise-band-1,
        .gl-noise-band-2 {
          position: absolute;
          top: 0;
          left: -4px;
          right: -4px;
          bottom: 0;
          z-index: 3;
          pointer-events: none;
        }

        .gl-noise-band-1 {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(255, 255, 255, 0.08) 3px,
            rgba(255, 255, 255, 0.08) 4px,
            transparent 4px,
            transparent 8px
          );
          animation: glitch-noise-1 4s infinite linear;
        }

        .gl-noise-band-2 {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 5px,
            rgba(255, 0, 0, 0.06) 5px,
            rgba(0, 255, 0, 0.06) 6px,
            transparent 6px,
            transparent 12px
          );
          animation: glitch-noise-2 4s infinite linear;
        }

        /* Red/blue ghost layers for name */
        .gl-name-red {
          position: absolute;
          top: 0;
          left: -3px;
          color: ${RED};
          opacity: 0.5;
          mix-blend-mode: screen;
          z-index: 1;
          font-family: 'Major Mono Display', monospace;
          font-size: clamp(2.4rem, 7vw, 4.8rem);
          animation: glitch-name 4s infinite linear;
          animation-delay: -0.05s;
        }

        .gl-name-blue {
          position: absolute;
          top: 0;
          left: 3px;
          color: ${BLUE};
          opacity: 0.5;
          mix-blend-mode: screen;
          z-index: 1;
          font-family: 'Major Mono Display', monospace;
          font-size: clamp(2.4rem, 7vw, 4.8rem);
          animation: glitch-name 4s infinite linear;
          animation-delay: -0.1s;
        }

        /* ===== SECTION HEADERS ===== */
        .gl-section-header {
          font-family: 'Major Mono Display', monospace;
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: ${TEXT};
          margin: 56px 0 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid ${SURFACE};
          position: relative;
        }

        /* ===== GLITCH CARDS ===== */
        .gl-card {
          background-color: ${SURFACE};
          padding: 32px;
          margin-bottom: 24px;
          position: relative;
          border: 1px solid #2a2a2a;
          transition: all 0.1s ease;
        }

        .gl-card:nth-child(odd) {
          clip-path: ${CARD_CLIPS[0]};
        }

        .gl-card:nth-child(even) {
          clip-path: ${CARD_CLIPS[1]};
        }

        .gl-card:hover {
          animation: card-glitch 0.15s ease 1;
          border-color: ${RED};
          box-shadow:
            -2px 0 0 ${RED},
            2px 0 0 ${BLUE},
            0 -1px 0 ${GREEN};
        }

        .gl-card:hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            transparent 40%,
            rgba(255, 0, 0, 0.03) 40%,
            rgba(255, 0, 0, 0.03) 41%,
            transparent 41%,
            transparent 60%,
            rgba(0, 0, 255, 0.03) 60%,
            rgba(0, 0, 255, 0.03) 61%,
            transparent 61%
          );
          pointer-events: none;
          z-index: 10;
        }

        .gl-card h3 {
          font-family: 'Major Mono Display', monospace;
          font-size: 1.1rem;
          color: ${TEXT};
          margin: 0 0 12px;
          letter-spacing: 1px;
        }

        .gl-card p {
          font-size: 0.82rem;
          color: ${TEXT_DIM};
          line-height: 1.8;
          margin: 0 0 16px;
        }

        /* ===== TECH TAGS ===== */
        .gl-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 16px 0;
          padding: 0;
          list-style: none;
        }

        .gl-tech-item {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 4px 12px;
          border: 1px solid #333;
          color: ${GREEN};
          text-transform: uppercase;
          background: transparent;
          transition: all 0.15s;
        }

        .gl-tech-item:hover {
          border-color: ${GREEN};
          box-shadow: 0 0 6px rgba(0, 255, 0, 0.15);
        }

        /* ===== LINKS ===== */
        .gl-card-links {
          display: flex;
          gap: 16px;
          margin-top: 20px;
        }

        .gl-card-links a {
          font-family: 'Source Code Pro', monospace;
          font-size: 0.75rem;
          color: ${TEXT};
          text-decoration: none;
          border: 1px solid #444;
          padding: 6px 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          transition: all 0.15s;
        }

        .gl-card-links a:hover {
          border-color: ${RED};
          color: ${RED};
          box-shadow:
            -1px 0 0 ${RED},
            1px 0 0 ${BLUE};
        }

        /* ===== CORRUPT DATA DECORATOR ===== */
        .gl-corrupt {
          font-family: 'Source Code Pro', monospace;
          font-size: 0.65rem;
          color: ${TEXT_DIM};
          opacity: 0.2;
          letter-spacing: 2px;
          user-select: none;
        }

        /* ===== INTEREST ITEMS ===== */
        .gl-interest-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 10px 16px;
          border-bottom: 1px solid #1a1a1a;
          font-size: 0.85rem;
          transition: all 0.15s;
        }

        .gl-interest-row:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: ${GREEN};
          box-shadow:
            -1px 0 0 ${RED},
            1px 0 0 ${BLUE};
        }

        .gl-interest-icon {
          font-family: 'Source Code Pro', monospace;
          font-size: 0.75rem;
          color: ${GREEN};
          min-width: 48px;
          text-align: center;
          opacity: 0.7;
        }

        .gl-interest-label {
          color: ${TEXT};
        }

        /* ===== NAV / LINKS ===== */
        .gl-back-link {
          display: inline-block;
          font-family: 'Source Code Pro', monospace;
          font-size: 0.75rem;
          color: ${TEXT_DIM};
          text-decoration: none;
          letter-spacing: 2px;
          margin-bottom: 32px;
          padding: 6px 12px;
          border: 1px solid #2a2a2a;
          transition: all 0.15s;
        }

        .gl-back-link:hover {
          color: ${RED};
          border-color: ${RED};
          box-shadow:
            -1px 0 0 ${RED},
            1px 0 0 ${BLUE};
        }

        .gl-ext-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 24px;
        }

        .gl-ext-link {
          font-family: 'Source Code Pro', monospace;
          font-size: 0.78rem;
          color: ${TEXT};
          text-decoration: none;
          border: 1px solid #333;
          padding: 8px 20px;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.15s;
          position: relative;
        }

        .gl-ext-link:hover {
          border-color: ${GREEN};
          color: ${GREEN};
          box-shadow: 0 0 8px rgba(0, 255, 0, 0.1);
        }

        /* ===== FOOTER ===== */
        .gl-footer {
          margin-top: 80px;
          padding-top: 24px;
          border-top: 1px solid #1a1a1a;
          text-align: center;
          font-size: 0.65rem;
          color: ${TEXT_DIM};
          opacity: 0.3;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* ===== RGB FLASH OVERLAY ON PAGE ===== */
        .gl-rgb-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 99;
        }

        .gl-rgb-overlay-r {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 33.33%;
          background: ${RED};
          opacity: 0;
          mix-blend-mode: overlay;
          animation: rgb-flash 8s infinite ease-in-out;
          animation-delay: 0s;
        }

        .gl-rgb-overlay-g {
          position: absolute;
          top: 33.33%;
          left: 0;
          width: 100%;
          height: 33.34%;
          background: ${GREEN};
          opacity: 0;
          mix-blend-mode: overlay;
          animation: rgb-flash 8s infinite ease-in-out;
          animation-delay: 2.6s;
        }

        .gl-rgb-overlay-b {
          position: absolute;
          top: 66.67%;
          left: 0;
          width: 100%;
          height: 33.33%;
          background: ${BLUE};
          opacity: 0;
          mix-blend-mode: overlay;
          animation: rgb-flash 8s infinite ease-in-out;
          animation-delay: 5.3s;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .gl-hex-margin,
          .gl-hex-margin-right {
            display: none;
          }
          .gl-container {
            padding: 32px 20px 60px;
          }
          .gl-card {
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="gl-root">
        {/* Scanline overlay */}
        <div className="gl-scanlines" />

        {/* RGB flash overlay */}
        <div className="gl-rgb-overlay">
          <div className="gl-rgb-overlay-r" />
          <div className="gl-rgb-overlay-g" />
          <div className="gl-rgb-overlay-b" />
        </div>

        {/* Left hex margin */}
        <div className="gl-hex-margin">
          {HEX_FRAGMENTS.slice(0, 6).map((hex, i) => (
            <span key={i}>{hex}</span>
          ))}
        </div>

        {/* Right hex margin */}
        <div className="gl-hex-margin gl-hex-margin-right">
          {HEX_FRAGMENTS.slice(6).map((hex, i) => (
            <span key={i}>{hex}</span>
          ))}
        </div>

        <div className="gl-container">
          {/* Navigation */}
          <Link to="/" className="gl-back-link">
            &lt;-- cd /home
          </Link>

          {/* Corrupt data decoration */}
          <div className="gl-corrupt" style={{ marginBottom: 16 }}>
            0x00 0x01 0x02 :: SYSTEM_BOOT :: {'{'}LOADING_PROFILE{'}'} :: ff ff
            00 a7
          </div>

          {/* ===== HERO / NAME ===== */}
          <header style={{ marginBottom: 48 }}>
            <div
              className="gl-corrupt"
              style={{ marginBottom: 8, fontSize: '0.6rem' }}
            >
              // HEADER_RENDER :: PID 4829 :: MEM 0xDEAD
            </div>

            <div className="gl-name-wrapper">
              <span className="gl-name-red" aria-hidden="true">
                {intro.name}
              </span>
              <span className="gl-name-blue" aria-hidden="true">
                {intro.name}
              </span>
              <h1 className="gl-name">{intro.name}</h1>
              <div className="gl-noise-band-1" aria-hidden="true" />
              <div className="gl-noise-band-2" aria-hidden="true" />
            </div>

            {/* Tagline with RGB separation */}
            <p
              className="gl-rgb-text"
              data-text={intro.tagline}
              style={{
                fontFamily: "'Major Mono Display', monospace",
                fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                color: TEXT,
                marginTop: 16,
                letterSpacing: 2,
              }}
            >
              {intro.tagline}
            </p>

            <div
              className="gl-corrupt"
              style={{ margin: '20px 0 4px', fontSize: '0.55rem' }}
            >
              -------- BUFFER_OVERFLOW :: ERR_STACK_TRACE --------
            </div>

            {/* Bio */}
            <p
              style={{
                fontSize: '0.85rem',
                color: TEXT_DIM,
                maxWidth: 560,
                lineHeight: 1.9,
                marginTop: 16,
              }}
            >
              {intro.bio}
            </p>

            {/* Links */}
            <div className="gl-ext-links" style={{ marginTop: 28 }}>
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="gl-ext-link"
              >
                github
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="gl-ext-link"
              >
                linkedin
              </a>
              <Link to={intro.links.uses} className="gl-ext-link">
                /uses
              </Link>
            </div>
          </header>

          {/* Decorative divider */}
          <div
            style={{
              display: 'flex',
              gap: 4,
              marginBottom: 8,
              opacity: 0.15,
            }}
          >
            <div style={{ flex: 3, height: 1, background: RED }} />
            <div style={{ flex: 5, height: 1, background: GREEN }} />
            <div style={{ flex: 2, height: 1, background: BLUE }} />
          </div>

          <div className="gl-corrupt" style={{ marginBottom: 4 }}>
            0xCAFE :: SECTOR_READ :: PROJECTS.DAT
          </div>

          {/* ===== PROJECTS ===== */}
          <h2
            className="gl-section-header gl-rgb-text"
            data-text="// projects"
          >
            {'// projects'}
          </h2>

          {projects.map((project, idx) => (
            <div key={project.name} className="gl-card">
              {/* Index marker */}
              <span
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 16,
                  fontFamily: "'Source Code Pro', monospace",
                  fontSize: '0.6rem',
                  color: TEXT_DIM,
                  opacity: 0.25,
                  letterSpacing: 2,
                }}
              >
                [{String(idx).padStart(2, '0')}]
              </span>

              {/* Decorative corrupt line */}
              <div
                className="gl-corrupt"
                style={{ marginBottom: 8, fontSize: '0.55rem' }}
              >
                {HEX_FRAGMENTS[idx * 3]} :: ADDR_{String(idx).padStart(4, '0')}
              </div>

              <h3 className="gl-rgb-text" data-text={project.name}>
                {project.name}
              </h3>
              <p>{project.description}</p>

              <ul className="gl-tech-list">
                {project.tech.map((t) => (
                  <li key={t} className="gl-tech-item">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="gl-card-links">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [ visit ]
                </a>
                <Link to={project.cvAnchor as string}>[ cv entry ]</Link>
              </div>
            </div>
          ))}

          {/* Decorative divider */}
          <div
            className="gl-corrupt"
            style={{ margin: '32px 0 4px', textAlign: 'center' }}
          >
            {'>>>'}
            {'>>>'}
            {'>>>'} ERR_CORRUPT :: 0xBADC0DE :: MEMORY_DUMP {'<<<'}
            {'<<<'}
            {'<<<'}
          </div>

          <div
            style={{
              display: 'flex',
              gap: 4,
              margin: '8px 0',
              opacity: 0.15,
            }}
          >
            <div style={{ flex: 2, height: 1, background: BLUE }} />
            <div style={{ flex: 4, height: 1, background: RED }} />
            <div style={{ flex: 3, height: 1, background: GREEN }} />
          </div>

          {/* ===== INTERESTS ===== */}
          <div className="gl-corrupt" style={{ marginTop: 24, marginBottom: 4 }}>
            ff a3 00 b7 :: READING SECTOR :: INTERESTS.BIN
          </div>

          <h2
            className="gl-section-header gl-rgb-text"
            data-text="// interests"
          >
            {'// interests'}
          </h2>

          <div
            style={{
              border: '1px solid #1a1a1a',
              clipPath:
                'polygon(0% 0%, 98% 0%, 100% 2%, 100% 98%, 97% 100%, 0% 100%, 0% 97%, 2% 95%)',
            }}
          >
            {personal.interests.map((interest, idx) => (
              <div key={interest.label} className="gl-interest-row">
                <span
                  style={{
                    fontFamily: "'Source Code Pro', monospace",
                    fontSize: '0.6rem',
                    color: TEXT_DIM,
                    opacity: 0.3,
                    minWidth: 28,
                  }}
                >
                  {String(idx).padStart(2, '0')}
                </span>
                <span className="gl-interest-icon">
                  {interestIcons[interest.icon] || '???'}
                </span>
                <span className="gl-interest-label">{interest.label}</span>
                <span
                  className="gl-corrupt"
                  style={{
                    marginLeft: 'auto',
                    fontSize: '0.55rem',
                  }}
                >
                  {HEX_FRAGMENTS[(idx * 2 + 3) % HEX_FRAGMENTS.length]}
                </span>
              </div>
            ))}
          </div>

          {/* ===== HEX DUMP DECORATION ===== */}
          <div
            style={{
              marginTop: 48,
              padding: '16px 0',
              borderTop: '1px solid #1a1a1a',
              borderBottom: '1px solid #1a1a1a',
              fontFamily: "'Source Code Pro', monospace",
              fontSize: '0.58rem',
              color: TEXT_DIM,
              opacity: 0.12,
              lineHeight: 2.2,
              letterSpacing: 1,
              userSelect: 'none',
            }}
          >
            <div>
              0000: 44 69 6d 69 74 61 72 20 44 75 6c 65 76 0a 73 65
              |Dimitar.Dulev.se|
            </div>
            <div>
              0010: 6e 69 6f 72 20 66 75 6c 6c 73 74 61 63 6b 20 64
              |nior.fullstack.d|
            </div>
            <div>
              0020: 65 76 2e 20 74 69 6e 6b 65 72 65 72 2e 20 62 75
              |ev..tinkerer..bu|
            </div>
            <div>
              0030: 69 6c 64 65 72 2e 00 ff ff ff 00 de ad be ef 00
              |ilder...........|
            </div>
            <div>
              0040: 00 00 ca fe ba be 00 00 00 ba dc 0d e0 00 00 00
              |................|
            </div>
          </div>

          {/* ===== FOOTER ===== */}
          <footer className="gl-footer">
            <div className="gl-corrupt" style={{ marginBottom: 8, opacity: 1 }}>
              -- END_OF_TRANSMISSION --
            </div>
            <span>
              SYSTEM_HALT :: DESIGN_25 :: GLITCH :: {new Date().getFullYear()}
            </span>
          </footer>
        </div>
      </div>
    </>
  )
}
