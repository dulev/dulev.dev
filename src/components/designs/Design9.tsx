import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '🎸',
  running: '🏃',
  bike: '🚵',
  mountains: '⛰️',
  terminal: '💻',
}

const neonAccents = ['#ff2d95', '#00f0ff', '#b24bf3'] as const

export function Design9() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        /* ---- Base typography ---- */
        .neon-root {
          font-family: 'Space Mono', monospace;
          background: #0a0a0f;
          color: #c8c8d8;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }

        .font-space {
          font-family: 'Space Mono', monospace;
        }

        /* ---- Animated gradient mesh background ---- */
        .neon-mesh {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .neon-mesh::before,
        .neon-mesh::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          will-change: transform;
        }

        .neon-mesh::before {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #ff2d95 0%, transparent 70%);
          top: -10%;
          left: -5%;
          animation: meshDrift1 20s ease-in-out infinite alternate;
        }

        .neon-mesh::after {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #00f0ff 0%, transparent 70%);
          bottom: -10%;
          right: -5%;
          animation: meshDrift2 24s ease-in-out infinite alternate;
        }

        .neon-mesh-extra {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.12;
          background: radial-gradient(circle, #b24bf3 0%, transparent 70%);
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: meshDrift3 18s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes meshDrift1 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(80px, 60px) scale(1.1); }
          66%  { transform: translate(-40px, 100px) scale(0.95); }
          100% { transform: translate(50px, -30px) scale(1.05); }
        }

        @keyframes meshDrift2 {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(-70px, -50px) scale(1.08); }
          66%  { transform: translate(60px, -80px) scale(0.92); }
          100% { transform: translate(-30px, 40px) scale(1.03); }
        }

        @keyframes meshDrift3 {
          0%   { transform: translate(-50%, -50%) scale(1); }
          50%  { transform: translate(-40%, -60%) scale(1.15); }
          100% { transform: translate(-55%, -45%) scale(0.9); }
        }

        /* ---- Scanline overlay ---- */
        .scanline-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 2px,
            rgba(255, 255, 255, 0.008) 2px,
            rgba(255, 255, 255, 0.008) 4px
          );
        }

        /* ---- Noise texture overlay ---- */
        .noise-overlay {
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
        }

        /* ---- Neon text glow classes ---- */
        .glow-pink {
          text-shadow:
            0 0 7px rgba(255, 45, 149, 0.7),
            0 0 20px rgba(255, 45, 149, 0.4),
            0 0 40px rgba(255, 45, 149, 0.2);
        }

        .glow-cyan {
          text-shadow:
            0 0 7px rgba(0, 240, 255, 0.7),
            0 0 20px rgba(0, 240, 255, 0.4),
            0 0 40px rgba(0, 240, 255, 0.2);
        }

        .glow-purple {
          text-shadow:
            0 0 7px rgba(178, 75, 243, 0.7),
            0 0 20px rgba(178, 75, 243, 0.4),
            0 0 40px rgba(178, 75, 243, 0.2);
        }

        /* ---- Neon card ---- */
        .neon-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 6px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .neon-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 7px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(255, 45, 149, 0) 0%,
            rgba(0, 240, 255, 0) 50%,
            rgba(178, 75, 243, 0) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .neon-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: transparent;
          box-shadow:
            0 0 15px rgba(0, 240, 255, 0.15),
            0 0 30px rgba(255, 45, 149, 0.08),
            0 0 60px rgba(178, 75, 243, 0.05),
            inset 0 0 30px rgba(0, 240, 255, 0.02);
          transform: translateY(-2px);
        }

        .neon-card:hover::before {
          background: linear-gradient(
            135deg,
            rgba(255, 45, 149, 0.4) 0%,
            rgba(0, 240, 255, 0.3) 50%,
            rgba(178, 75, 243, 0.4) 100%
          );
          opacity: 1;
        }

        /* ---- Neon divider ---- */
        .neon-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 45, 149, 0.3) 15%,
            rgba(0, 240, 255, 0.5) 50%,
            rgba(178, 75, 243, 0.3) 85%,
            transparent 100%
          );
          box-shadow: 0 0 8px rgba(0, 240, 255, 0.15);
          border: none;
          margin: 0;
        }

        /* ---- Neon link underline ---- */
        .neon-link {
          color: #00f0ff;
          text-decoration: none;
          position: relative;
          transition: color 0.2s ease;
        }

        .neon-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #ff2d95, #00f0ff);
          box-shadow: 0 0 6px rgba(0, 240, 255, 0.4);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .neon-link:hover {
          color: #fff;
          text-shadow: 0 0 8px rgba(0, 240, 255, 0.5);
        }

        .neon-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* ---- Tech tag ---- */
        .tech-tag {
          font-size: 11px;
          letter-spacing: 0.5px;
          padding: 3px 10px;
          border-radius: 3px;
          border: 1px solid rgba(0, 240, 255, 0.15);
          color: rgba(0, 240, 255, 0.7);
          background: rgba(0, 240, 255, 0.04);
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .tech-tag:hover {
          border-color: rgba(0, 240, 255, 0.35);
          color: #00f0ff;
          box-shadow: 0 0 8px rgba(0, 240, 255, 0.15);
          background: rgba(0, 240, 255, 0.08);
        }

        /* ---- Interest glow icon ---- */
        .interest-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.015);
          transition: all 0.3s ease;
        }

        .interest-item:hover {
          border-color: rgba(178, 75, 243, 0.25);
          background: rgba(178, 75, 243, 0.04);
          box-shadow: 0 0 20px rgba(178, 75, 243, 0.08);
        }

        .interest-item:hover .interest-icon {
          filter: drop-shadow(0 0 6px rgba(178, 75, 243, 0.6));
          transform: scale(1.1);
        }

        .interest-icon {
          font-size: 22px;
          transition: all 0.3s ease;
        }

        /* ---- Fade-in animation ---- */
        @keyframes neonFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .neon-fade-1 { animation: neonFadeUp 0.6s 0.1s ease-out both; }
        .neon-fade-2 { animation: neonFadeUp 0.6s 0.25s ease-out both; }
        .neon-fade-3 { animation: neonFadeUp 0.6s 0.4s ease-out both; }
        .neon-fade-4 { animation: neonFadeUp 0.6s 0.55s ease-out both; }
        .neon-fade-5 { animation: neonFadeUp 0.6s 0.7s ease-out both; }

        /* ---- Section label ---- */
        .section-label {
          font-family: 'Orbitron', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.2);
        }

        /* ---- Scrollbar ---- */
        .neon-root::-webkit-scrollbar {
          width: 6px;
        }
        .neon-root::-webkit-scrollbar-track {
          background: #0a0a0f;
        }
        .neon-root::-webkit-scrollbar-thumb {
          background: rgba(0, 240, 255, 0.15);
          border-radius: 3px;
        }
        .neon-root::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 240, 255, 0.3);
        }

        /* ---- Nav back link ---- */
        .nav-back {
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.35);
          text-decoration: none;
          letter-spacing: 1px;
          padding: 6px 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .nav-back:hover {
          color: #00f0ff;
          border-color: rgba(0, 240, 255, 0.3);
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.1);
        }

        /* ---- Heading accents ---- */
        .heading-accent {
          display: inline-block;
          width: 32px;
          height: 2px;
          margin-right: 12px;
          vertical-align: middle;
          background: linear-gradient(90deg, #ff2d95, transparent);
          box-shadow: 0 0 6px rgba(255, 45, 149, 0.3);
          border-radius: 1px;
        }
      `}</style>

      <div className="neon-root">
        {/* Animated gradient mesh background */}
        <div className="neon-mesh">
          <div className="neon-mesh-extra" />
        </div>

        {/* Scanline overlay */}
        <div className="scanline-overlay" />

        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        {/* Main content */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '820px',
            margin: '0 auto',
            padding: '48px 24px 80px',
          }}
        >
          {/* ========== NAVIGATION ========== */}
          <nav
            className="neon-fade-1"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '64px',
            }}
          >
            <div
              className="font-orbitron"
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '3px',
                color: 'rgba(255, 255, 255, 0.15)',
                textTransform: 'uppercase',
              }}
            >
              Design / 09
            </div>
            <Link to="/" className="nav-back">
              &larr; Home
            </Link>
          </nav>

          {/* ========== HERO / INTRO ========== */}
          <header className="neon-fade-2" style={{ marginBottom: '80px' }}>
            <h1
              className="font-orbitron glow-cyan"
              style={{
                fontSize: 'clamp(32px, 6vw, 56px)',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              {intro.name}
            </h1>

            <p
              className="font-orbitron"
              style={{
                fontSize: 'clamp(13px, 2vw, 16px)',
                fontWeight: 500,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#ff2d95',
                marginBottom: '28px',
                lineHeight: 1.6,
              }}
            >
              {intro.tagline}
            </p>

            <p
              className="font-space"
              style={{
                fontSize: '14px',
                lineHeight: 1.8,
                color: 'rgba(200, 200, 216, 0.65)',
                maxWidth: '560px',
                marginBottom: '32px',
              }}
            >
              {intro.bio}
            </p>

            {/* Links */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub', href: intro.links.github, external: true },
                { label: 'LinkedIn', href: intro.links.linkedin, external: true },
                { label: '/uses', href: intro.links.uses, external: false },
              ].map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-link font-space"
                    style={{ fontSize: '13px', letterSpacing: '0.5px' }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="neon-link font-space"
                    style={{ fontSize: '13px', letterSpacing: '0.5px' }}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </header>

          {/* ========== DIVIDER ========== */}
          <div className="neon-fade-3" style={{ marginBottom: '64px' }}>
            <div className="neon-divider" />
          </div>

          {/* ========== PROJECTS SECTION ========== */}
          <section className="neon-fade-3" style={{ marginBottom: '80px' }}>
            <div style={{ marginBottom: '40px' }}>
              <span className="section-label">Projects</span>
              <h2
                className="font-orbitron glow-pink"
                style={{
                  fontSize: 'clamp(20px, 3.5vw, 30px)',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginTop: '12px',
                }}
              >
                <span className="heading-accent" />
                Things I Built
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                gap: '24px',
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.name}
                  className="neon-card"
                  style={{ padding: '28px 24px' }}
                >
                  {/* Accent line at top of card */}
                  <div
                    style={{
                      height: '2px',
                      width: '40px',
                      marginBottom: '20px',
                      background: neonAccents[i % neonAccents.length],
                      boxShadow: `0 0 8px ${neonAccents[i % neonAccents.length]}60`,
                      borderRadius: '1px',
                    }}
                  />

                  <h3
                    className="font-orbitron"
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#fff',
                      marginBottom: '10px',
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    className="font-space"
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.7,
                      color: 'rgba(200, 200, 216, 0.55)',
                      marginBottom: '18px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '20px',
                    }}
                  >
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag font-space">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-link font-space"
                      style={{ fontSize: '12px' }}
                    >
                      Visit &rarr;
                    </a>
                    <Link
                      to={project.cvAnchor}
                      className="neon-link font-space"
                      style={{
                        fontSize: '12px',
                        color: 'rgba(178, 75, 243, 0.7)',
                      }}
                    >
                      CV entry
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========== DIVIDER ========== */}
          <div className="neon-fade-4" style={{ marginBottom: '64px' }}>
            <div className="neon-divider" />
          </div>

          {/* ========== INTERESTS SECTION ========== */}
          <section className="neon-fade-4" style={{ marginBottom: '80px' }}>
            <div style={{ marginBottom: '40px' }}>
              <span className="section-label">Off the Clock</span>
              <h2
                className="font-orbitron glow-purple"
                style={{
                  fontSize: 'clamp(20px, 3.5vw, 30px)',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginTop: '12px',
                }}
              >
                <span
                  className="heading-accent"
                  style={{
                    background: 'linear-gradient(90deg, #b24bf3, transparent)',
                    boxShadow: '0 0 6px rgba(178, 75, 243, 0.3)',
                  }}
                />
                Interests
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '12px',
              }}
            >
              {personal.interests.map((interest) => (
                <div key={interest.label} className="interest-item">
                  <span className="interest-icon">
                    {interestIcons[interest.icon] || '✨'}
                  </span>
                  <span
                    className="font-space"
                    style={{
                      fontSize: '13px',
                      color: 'rgba(200, 200, 216, 0.7)',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {interest.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ========== DIVIDER ========== */}
          <div className="neon-fade-5" style={{ marginBottom: '48px' }}>
            <div className="neon-divider" />
          </div>

          {/* ========== FOOTER ========== */}
          <footer
            className="neon-fade-5"
            style={{
              textAlign: 'center',
              paddingBottom: '32px',
            }}
          >
            <p
              className="font-orbitron"
              style={{
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.12)',
                marginBottom: '8px',
              }}
            >
              Neon Tokyo
            </p>
            <p
              className="font-space"
              style={{
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}
