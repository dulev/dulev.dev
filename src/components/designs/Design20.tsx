import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

// PCB color palette — strict 3-color
const SOLDER_MASK = '#0a3a1a'
const COPPER = '#d4944a'
const SILKSCREEN = '#e8e8e0'

// Darker/lighter variants derived from the 3 colors
const SOLDER_DARK = '#062a12'
const SOLDER_LIGHT = '#0e4d24'
const COPPER_DIM = 'rgba(212, 148, 74, 0.35)'
const COPPER_BRIGHT = '#e0a85e'
const SILK_DIM = 'rgba(232, 232, 224, 0.5)'

// Component designators
const SECTION_LABELS: Record<string, string> = {
  intro: 'U1',
  projects: 'U2',
  interests: 'U3',
  links: 'U4',
  footer: 'J1',
}

// Interest ASCII icons for the PCB theme
const interestIcons: Record<string, string> = {
  guitar: '~||~',
  running: '>>-',
  bike: '/o\\',
  mountains: '/\\/\\',
  terminal: '>_',
}

export function Design20() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;500;600;700&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .pcb-root {
          font-family: 'Overpass Mono', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${SOLDER_MASK};
          color: ${SILKSCREEN};
          position: relative;
        }

        .pcb-root * {
          box-sizing: border-box;
        }

        /* PCB dot grid background */
        .pcb-grid {
          background-image:
            radial-gradient(circle, ${COPPER_DIM} 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* Silkscreen label style */
        .pcb-silk {
          font-family: 'Overpass Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 300;
          color: ${SILKSCREEN};
        }

        /* Copper trace style */
        .pcb-trace-h {
          height: 2px;
          background-color: ${COPPER};
        }

        .pcb-trace-v {
          width: 2px;
          background-color: ${COPPER};
        }

        /* Solder pad — filled circle with ring */
        .pcb-pad {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: ${COPPER};
          box-shadow: 0 0 0 2px ${SOLDER_MASK}, 0 0 0 4px ${COPPER};
          flex-shrink: 0;
        }

        /* Via hole — small filled circle with annular ring */
        .pcb-via {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: ${SOLDER_DARK};
          border: 2px solid ${COPPER};
          flex-shrink: 0;
        }

        /* Through-hole drill — small empty circle */
        .pcb-drill {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: transparent;
          border: 1.5px solid ${COPPER_DIM};
          flex-shrink: 0;
        }

        /* IC chip package card */
        .pcb-ic {
          border: 2px solid ${COPPER};
          background-color: ${SOLDER_DARK};
          position: relative;
        }

        .pcb-ic:hover {
          border-color: ${COPPER_BRIGHT};
          box-shadow: 0 0 12px ${COPPER_DIM};
        }

        /* Pin notches along IC edges */
        .pcb-pin {
          width: 8px;
          height: 3px;
          background-color: ${COPPER};
          flex-shrink: 0;
        }

        .pcb-pin-v {
          width: 3px;
          height: 8px;
          background-color: ${COPPER};
          flex-shrink: 0;
        }

        /* Component designator label */
        .pcb-designator {
          font-family: 'Overpass Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: ${SILKSCREEN};
          background-color: transparent;
        }

        /* Copper text (for headings) */
        .pcb-copper-text {
          color: ${COPPER};
          font-family: 'Overpass Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Links */
        .pcb-link {
          color: ${COPPER};
          text-decoration: none;
          border-bottom: 1px solid ${COPPER_DIM};
          transition: border-color 0.2s;
        }

        .pcb-link:hover {
          border-bottom-color: ${COPPER_BRIGHT};
          color: ${COPPER_BRIGHT};
        }

        .pcb-btn {
          color: ${SILKSCREEN};
          text-decoration: none;
          border: 1px solid ${COPPER};
          padding: 8px 16px;
          font-family: 'Overpass Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          background-color: transparent;
          transition: background-color 0.2s, color 0.2s;
        }

        .pcb-btn:hover {
          background-color: ${COPPER};
          color: ${SOLDER_MASK};
        }

        /* Tech tag as SMD component */
        .pcb-smd {
          font-size: 10px;
          font-family: 'Overpass Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: ${SILKSCREEN};
          border: 1px solid ${COPPER_DIM};
          padding: 3px 10px;
          background-color: ${SOLDER_MASK};
          white-space: nowrap;
        }

        .pcb-smd:hover {
          border-color: ${COPPER};
        }

        /* Trace connector — right angle L-shape */
        .pcb-trace-corner {
          position: relative;
        }

        .pcb-trace-corner::before {
          content: '';
          position: absolute;
          background-color: ${COPPER};
        }

        @keyframes pcbPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .pcb-signal {
          animation: pcbPulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="pcb-root pcb-grid">
        {/* ===== TOP EDGE — PCB board edge with fiducials ===== */}
        <div
          style={{
            borderBottom: `1px solid ${COPPER_DIM}`,
            padding: '8px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="pcb-pad" />
            <span className="pcb-designator" style={{ fontSize: '9px', opacity: 0.5 }}>
              FID1
            </span>
          </div>
          <span
            className="pcb-silk"
            style={{ fontSize: '9px', letterSpacing: '0.3em', opacity: 0.4 }}
          >
            REV 2.0 &mdash; DULEV.DEV PCB
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="pcb-designator" style={{ fontSize: '9px', opacity: 0.5 }}>
              FID2
            </span>
            <div className="pcb-pad" />
          </div>
        </div>

        {/* ===== NAVIGATION TRACE BAR ===== */}
        <nav
          style={{
            padding: '16px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: `2px solid ${COPPER}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="pcb-via" />
            <span
              className="pcb-copper-text"
              style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.2em' }}
            >
              DULEV.DEV
            </span>
            <div className="pcb-trace-h" style={{ width: '40px' }} />
            <div className="pcb-via" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="pcb-drill" />
            <div className="pcb-trace-h" style={{ width: '24px' }} />
            <Link to="/" className="pcb-btn">
              &larr; HOME
            </Link>
          </div>
        </nav>

        {/* ===== U1: INTRO SECTION ===== */}
        <section style={{ padding: '48px 32px 32px' }}>
          {/* Section designator with trace */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div className="pcb-pad" />
            <div className="pcb-trace-h" style={{ width: '32px' }} />
            <span className="pcb-designator">{SECTION_LABELS.intro}: INTRO</span>
            <div className="pcb-trace-h" style={{ flex: 1 }} />
            <div className="pcb-via" />
          </div>

          {/* IC chip card for intro */}
          <div className="pcb-ic" style={{ padding: '0', maxWidth: '800px' }}>
            {/* Top pin row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '0 24px',
                transform: 'translateY(-1px)',
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`pin-top-${i}`} className="pcb-pin" />
              ))}
            </div>

            {/* IC body */}
            <div style={{ display: 'flex' }}>
              {/* Left pin column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  padding: '16px 0',
                  transform: 'translateX(-1px)',
                }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={`pin-left-${i}`} className="pcb-pin-v" />
                ))}
              </div>

              {/* Content area */}
              <div style={{ padding: '32px 24px', flex: 1 }}>
                {/* Pin 1 indicator — notch */}
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: `1px solid ${COPPER_DIM}`,
                    marginBottom: '16px',
                  }}
                />

                <h1
                  className="pcb-copper-text"
                  style={{
                    fontSize: 'clamp(28px, 6vw, 56px)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: '12px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {intro.name}
                </h1>

                <p
                  className="pcb-silk"
                  style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    marginBottom: '20px',
                    letterSpacing: '0.12em',
                    lineHeight: 1.6,
                  }}
                >
                  {intro.tagline}
                </p>

                <div
                  className="pcb-trace-h"
                  style={{ width: '100%', marginBottom: '20px', opacity: 0.4 }}
                />

                <p
                  style={{
                    fontSize: '13px',
                    color: SILK_DIM,
                    lineHeight: 1.8,
                    maxWidth: '560px',
                    marginBottom: '28px',
                  }}
                >
                  {intro.bio}
                </p>

                {/* Links as test points */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <div className="pcb-via" />
                  <a
                    href={intro.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pcb-btn"
                  >
                    GITHUB
                  </a>
                  <div className="pcb-trace-h" style={{ width: '16px' }} />
                  <a
                    href={intro.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pcb-btn"
                  >
                    LINKEDIN
                  </a>
                  <div className="pcb-trace-h" style={{ width: '16px' }} />
                  <Link to={intro.links.uses} className="pcb-btn">
                    /USES
                  </Link>
                  <div className="pcb-via" />
                </div>
              </div>

              {/* Right pin column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  padding: '16px 0',
                  transform: 'translateX(1px)',
                }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={`pin-right-${i}`} className="pcb-pin-v" />
                ))}
              </div>
            </div>

            {/* Bottom pin row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '0 24px',
                transform: 'translateY(1px)',
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`pin-bot-${i}`} className="pcb-pin" />
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRACE CONNECTOR between sections ===== */}
        <div style={{ padding: '0 32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="pcb-via" />
          <div className="pcb-trace-h" style={{ width: '48px' }} />
          <div
            style={{
              width: '2px',
              height: '32px',
              backgroundColor: COPPER,
            }}
          />
          <div className="pcb-trace-h" style={{ flex: 1 }} />
          <span className="pcb-designator pcb-signal" style={{ fontSize: '9px' }}>
            SIG: DATA_BUS
          </span>
          <div className="pcb-trace-h" style={{ width: '48px' }} />
          <div className="pcb-via" />
        </div>

        {/* ===== U2: PROJECTS SECTION ===== */}
        <section style={{ padding: '32px 32px 48px' }}>
          {/* Section designator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div className="pcb-pad" />
            <div className="pcb-trace-h" style={{ width: '32px' }} />
            <span className="pcb-designator">{SECTION_LABELS.projects}: PROJECTS</span>
            <div className="pcb-trace-h" style={{ flex: 1 }} />
            <span className="pcb-designator" style={{ fontSize: '9px', opacity: 0.4 }}>
              4.7k&Omega;
            </span>
            <div className="pcb-drill" />
            <div className="pcb-trace-h" style={{ width: '16px' }} />
            <div className="pcb-via" />
          </div>

          {/* Project cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
            }}
          >
            {projects.map((project, i) => (
              <div key={project.name} className="pcb-ic" style={{ padding: 0 }}>
                {/* Top pins */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '0 20px',
                    transform: 'translateY(-1px)',
                  }}
                >
                  {Array.from({ length: 8 }).map((_, pi) => (
                    <div key={`proj-pin-t-${i}-${pi}`} className="pcb-pin" />
                  ))}
                </div>

                {/* IC body with left/right pins */}
                <div style={{ display: 'flex' }}>
                  {/* Left pins */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      padding: '12px 0',
                      transform: 'translateX(-1px)',
                    }}
                  >
                    {Array.from({ length: 4 }).map((_, pi) => (
                      <div key={`proj-pin-l-${i}-${pi}`} className="pcb-pin-v" />
                    ))}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px 20px', flex: 1 }}>
                    {/* Designator and pin-1 dot */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '12px',
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          border: `1px solid ${COPPER_DIM}`,
                        }}
                      />
                      <span className="pcb-designator" style={{ fontSize: '9px' }}>
                        U2.{i + 1} &mdash; IC{String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3
                      className="pcb-copper-text"
                      style={{
                        fontSize: 'clamp(20px, 3vw, 28px)',
                        fontWeight: 700,
                        marginBottom: '12px',
                      }}
                    >
                      {project.name}
                    </h3>

                    <p
                      style={{
                        fontSize: '12px',
                        color: SILK_DIM,
                        lineHeight: 1.8,
                        marginBottom: '16px',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech stack as SMD components */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '20px',
                      }}
                    >
                      {project.tech.map((t, ti) => (
                        <span key={t} className="pcb-smd">
                          R{ti + 1}: {t}
                        </span>
                      ))}
                    </div>

                    {/* Trace separator */}
                    <div
                      className="pcb-trace-h"
                      style={{ width: '100%', marginBottom: '16px', opacity: 0.3 }}
                    />

                    {/* Links */}
                    <div
                      style={{
                        display: 'flex',
                        gap: '12px',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                      }}
                    >
                      <div className="pcb-drill" />
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pcb-btn"
                        style={{ fontSize: '10px' }}
                      >
                        VISIT &rarr;
                      </a>
                      <div className="pcb-trace-h" style={{ width: '12px' }} />
                      <Link
                        to={project.cvAnchor}
                        className="pcb-btn"
                        style={{ fontSize: '10px' }}
                      >
                        CV ENTRY &rarr;
                      </Link>
                      <div className="pcb-drill" />
                    </div>
                  </div>

                  {/* Right pins */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      padding: '12px 0',
                      transform: 'translateX(1px)',
                    }}
                  >
                    {Array.from({ length: 4 }).map((_, pi) => (
                      <div key={`proj-pin-r-${i}-${pi}`} className="pcb-pin-v" />
                    ))}
                  </div>
                </div>

                {/* Bottom pins */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '0 20px',
                    transform: 'translateY(1px)',
                  }}
                >
                  {Array.from({ length: 8 }).map((_, pi) => (
                    <div key={`proj-pin-b-${i}-${pi}`} className="pcb-pin" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TRACE CONNECTOR ===== */}
        <div
          style={{
            padding: '0 32px 0 64px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div className="pcb-pad" />
          <div className="pcb-trace-h" style={{ width: '24px' }} />
          <div style={{ width: '2px', height: '24px', backgroundColor: COPPER }} />
          <div className="pcb-trace-h" style={{ flex: 1 }} />
          <span
            className="pcb-designator"
            style={{ fontSize: '9px', opacity: 0.4 }}
          >
            NET: /INTERESTS
          </span>
          <div className="pcb-trace-h" style={{ width: '32px' }} />
          <div className="pcb-pad" />
        </div>

        {/* ===== U3: INTERESTS SECTION ===== */}
        <section style={{ padding: '32px 32px 48px' }}>
          {/* Section designator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div className="pcb-pad" />
            <div className="pcb-trace-h" style={{ width: '32px' }} />
            <span className="pcb-designator">{SECTION_LABELS.interests}: INTERESTS</span>
            <div className="pcb-trace-h" style={{ flex: 1 }} />
            <span className="pcb-designator" style={{ fontSize: '9px', opacity: 0.4 }}>
              100nF
            </span>
            <div className="pcb-drill" />
          </div>

          {/* Interests as discrete components on the board */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'stretch',
            }}
          >
            {personal.interests.map((interest, i) => (
              <div
                key={interest.label}
                style={{
                  border: `1px solid ${COPPER_DIM}`,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: SOLDER_DARK,
                  cursor: 'default',
                  position: 'relative',
                }}
              >
                {/* Left solder pad */}
                <div className="pcb-via" />

                {/* Component body */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span
                    className="pcb-designator"
                    style={{ fontSize: '8px', opacity: 0.5 }}
                  >
                    C{i + 1} &mdash; {interestIcons[interest.icon] || '***'}
                  </span>
                  <span
                    className="pcb-silk"
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                    }}
                  >
                    {interest.label}
                  </span>
                </div>

                {/* Right solder pad */}
                <div className="pcb-via" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== TRACE CONNECTOR ===== */}
        <div
          style={{
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div className="pcb-via" />
          <div className="pcb-trace-h" style={{ flex: 1 }} />
          <div className="pcb-via" />
          <div className="pcb-trace-h" style={{ width: '48px' }} />
          <span className="pcb-designator pcb-signal" style={{ fontSize: '9px' }}>
            GND
          </span>
          <div className="pcb-trace-h" style={{ width: '48px' }} />
          <div className="pcb-pad" />
        </div>

        {/* ===== U4: EXTERNAL LINKS / CONNECTOR SECTION ===== */}
        <section style={{ padding: '32px 32px 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div className="pcb-pad" />
            <div className="pcb-trace-h" style={{ width: '32px' }} />
            <span className="pcb-designator">{SECTION_LABELS.links}: EXT CONNECTORS</span>
            <div className="pcb-trace-h" style={{ flex: 1 }} />
            <div className="pcb-drill" />
          </div>

          {/* Connector block styled like a pin header */}
          <div
            className="pcb-ic"
            style={{
              maxWidth: '480px',
              padding: 0,
            }}
          >
            {/* Top pins */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '0 16px',
                transform: 'translateY(-1px)',
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`conn-pin-t-${i}`} className="pcb-pin" />
              ))}
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '4px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: `1px solid ${COPPER_DIM}`,
                  }}
                />
                <span className="pcb-designator" style={{ fontSize: '9px' }}>
                  J1 &mdash; HEADER 3x1
                </span>
              </div>

              {/* Connector rows */}
              {[
                { label: 'PIN 1: GITHUB', href: intro.links.github, external: true },
                { label: 'PIN 2: LINKEDIN', href: intro.links.linkedin, external: true },
                { label: 'PIN 3: /USES', href: intro.links.uses, external: false },
              ].map((link, i) => (
                <div
                  key={link.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 0',
                    borderTop: i > 0 ? `1px solid ${COPPER_DIM}` : 'none',
                  }}
                >
                  <div className="pcb-pad" />
                  <div className="pcb-trace-h" style={{ width: '16px' }} />
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pcb-link"
                      style={{
                        fontFamily: "'Overpass Mono', monospace",
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="pcb-link"
                      style={{
                        fontFamily: "'Overpass Mono', monospace",
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom pins */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '0 16px',
                transform: 'translateY(1px)',
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`conn-pin-b-${i}`} className="pcb-pin" />
              ))}
            </div>
          </div>
        </section>

        {/* ===== BOTTOM TRACE & VIA ROW ===== */}
        <div
          style={{
            padding: '16px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`bottom-via-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div className={i % 2 === 0 ? 'pcb-via' : 'pcb-drill'} />
              <div className="pcb-trace-h" style={{ width: '24px', opacity: i % 3 === 0 ? 1 : 0.3 }} />
            </div>
          ))}
          <div className="pcb-trace-h" style={{ flex: 1, opacity: 0.2 }} />
          <div className="pcb-pad" />
        </div>

        {/* ===== FOOTER — Board edge / silkscreen info ===== */}
        <footer
          style={{
            borderTop: `2px solid ${COPPER}`,
            padding: '24px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="pcb-pad" />
            <span
              className="pcb-silk"
              style={{ fontSize: '10px', letterSpacing: '0.2em', opacity: 0.6 }}
            >
              {intro.name} &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              className="pcb-silk"
              style={{ fontSize: '9px', letterSpacing: '0.25em', opacity: 0.35 }}
            >
              DESIGN 20 / CIRCUIT BOARD
            </span>
            <div className="pcb-drill" />
            <div className="pcb-drill" />
            <div className="pcb-pad" />
          </div>
        </footer>

        {/* ===== BOTTOM EDGE — PCB board edge fiducials ===== */}
        <div
          style={{
            borderTop: `1px solid ${COPPER_DIM}`,
            padding: '8px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="pcb-pad" />
            <span className="pcb-designator" style={{ fontSize: '9px', opacity: 0.5 }}>
              FID3
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={`edge-drill-${i}`} className="pcb-drill" />
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="pcb-designator" style={{ fontSize: '9px', opacity: 0.5 }}>
              FID4
            </span>
            <div className="pcb-pad" />
          </div>
        </div>
      </div>
    </>
  )
}
