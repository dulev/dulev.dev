import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '[~]',
  running: '[>]',
  bike: '[o]',
  mountains: '[^]',
  terminal: '[_]',
}

const PAPER = '#f5f0e8'
const GREEN_BAR = '#e8f0e8'
const INK = '#1a1a1a'
const INK_LIGHT = '#3a3a3a'
const HOLE_BG = '#d8d0c4'
const PERF_LINE = '#c8c0b4'

const ASCII_NAME = `
 ____  ___ __  __ ___ _____  _    ____    ____  _   _ _     _______     __
|  _ \\|_ _|  \\/  |_ _|_   _|/ \\  |  _ \\  |  _ \\| | | | |   | ____\\ \\   / /
| | | || || |\\/| || |  | | / _ \\ | |_) | | | | | | | | |   |  _|  \\ \\ / /
| |_| || || |  | || |  | |/ ___ \\|  _ <  | |_| | |_| | |___| |___  \\ V /
|____/|___|_|  |_|___| |_/_/   \\_\\_| \\_\\ |____/ \\___/|_____|_____|  \\_/
`.trim()

function boxTop(width: number) {
  return `\u250C${'─'.repeat(width)}\u2510`
}

function boxBottom(width: number) {
  return `\u2514${'─'.repeat(width)}\u2518`
}

function boxLine(content: string, width: number) {
  const padded = content.padEnd(width, ' ')
  return `\u2502${padded}\u2502`
}

function pageBreak() {
  return '─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  PAGE BREAK  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─'
}

function sectionHeader(title: string) {
  return `${title}\n${'='.repeat(title.length)}`
}

export function Design17() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  const LINE_HEIGHT = 24
  const totalLines = 80

  return (
    <>
      <style>{`
        .dm-root {
          font-family: 'Share Tech Mono', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${PAPER};
          color: ${INK};
        }

        .dm-root * {
          box-sizing: border-box;
        }

        .dm-text {
          font-family: 'Share Tech Mono', monospace;
          text-shadow:
            0.3px 0px 0px ${INK_LIGHT},
            -0.3px 0px 0px ${INK_LIGHT},
            0px 0.3px 0px ${INK_LIGHT};
          letter-spacing: 0.5px;
        }

        .dm-link {
          color: ${INK};
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-style: dotted;
        }

        .dm-link:hover {
          background-color: ${INK};
          color: ${PAPER};
          text-decoration: none;
        }

        .dm-nav-link {
          color: ${INK};
          text-decoration: none;
          border: 1px dashed ${INK};
          padding: 4px 12px;
        }

        .dm-nav-link:hover {
          background-color: ${INK};
          color: ${PAPER};
        }

        .dm-hole {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: ${HOLE_BG};
          border: 1px solid ${PERF_LINE};
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .dm-tractor-left,
          .dm-tractor-right {
            display: none !important;
          }
          .dm-paper-body {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>

      <div className="dm-root">
        {/* ===== PAGE CONTAINER ===== */}
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            position: 'relative',
          }}
        >
          {/* ===== LEFT TRACTOR FEED STRIP ===== */}
          <div
            className="dm-tractor-left"
            style={{
              width: '40px',
              flexShrink: 0,
              backgroundColor: PAPER,
              borderRight: `2px dashed ${PERF_LINE}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '16px',
              gap: `${LINE_HEIGHT}px`,
            }}
          >
            {Array.from({ length: totalLines }).map((_, i) => (
              <div key={`lh-${i}`} className="dm-hole" />
            ))}
          </div>

          {/* ===== MAIN PAPER BODY ===== */}
          <div
            className="dm-paper-body"
            style={{
              flex: 1,
              paddingLeft: '32px',
              paddingRight: '32px',
              paddingTop: '0',
              paddingBottom: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Green bar striping background */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                zIndex: 0,
                backgroundImage: `repeating-linear-gradient(
                  to bottom,
                  ${PAPER} 0px,
                  ${PAPER} ${LINE_HEIGHT}px,
                  ${GREEN_BAR} ${LINE_HEIGHT}px,
                  ${GREEN_BAR} ${LINE_HEIGHT * 2}px
                )`,
              }}
            />

            {/* Content layer */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* ===== HEADER / DATE STAMP ===== */}
              <div
                className="dm-text"
                style={{
                  paddingTop: '16px',
                  paddingBottom: '8px',
                  fontSize: '12px',
                  color: INK_LIGHT,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  borderBottom: `1px solid ${PERF_LINE}`,
                  marginBottom: '16px',
                }}
              >
                <span>PRINTED: 2026-02-26 23:45:00</span>
                <Link to="/" className="dm-nav-link dm-text" style={{ fontSize: '12px' }}>
                  &lt;-- RETURN TO INDEX
                </Link>
              </div>

              {/* ===== ASCII ART HEADER ===== */}
              <pre
                className="dm-text"
                style={{
                  fontSize: 'clamp(5px, 1.35vw, 14px)',
                  lineHeight: 1.2,
                  margin: '16px 0',
                  overflow: 'hidden',
                  whiteSpace: 'pre',
                  color: INK,
                  textShadow: `
                    0.5px 0px 0px ${INK_LIGHT},
                    -0.5px 0px 0px ${INK_LIGHT},
                    0px 0.5px 0.5px rgba(0,0,0,0.15)
                  `,
                }}
              >
                {ASCII_NAME}
              </pre>

              {/* ===== REPORT TITLE BOX ===== */}
              <div style={{ margin: '24px 0' }}>
                <pre className="dm-text" style={{ fontSize: '14px', lineHeight: '24px', margin: 0 }}>
{boxTop(60)}{'\n'}
{boxLine('  PERSONAL HOMEPAGE REPORT', 60)}{'\n'}
{boxLine(`  SUBJECT: ${intro.name.toUpperCase()}`, 60)}{'\n'}
{boxLine(`  STATUS:  ${intro.tagline}`, 60)}{'\n'}
{boxLine('', 60)}{'\n'}
{boxLine(`  DATE:    2026-02-26`, 60)}{'\n'}
{boxLine(`  REF:     DULEV-DEV-017`, 60)}{'\n'}
{boxBottom(60)}
                </pre>
              </div>

              {/* ===== SECTION 1: ABOUT ===== */}
              <div style={{ margin: '32px 0' }}>
                <pre className="dm-text" style={{ fontSize: '14px', lineHeight: '24px', margin: '0 0 16px 0' }}>
{sectionHeader('SECTION 1: ABOUT')}
                </pre>
                <p
                  className="dm-text"
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    maxWidth: '72ch',
                    margin: '0 0 16px 0',
                  }}
                >
                  &gt; {intro.bio}
                </p>

                <pre className="dm-text" style={{ fontSize: '14px', lineHeight: '24px', margin: 0 }}>
{boxTop(50)}{'\n'}
{boxLine('  LINKS:', 50)}{'\n'}
{boxLine('', 50)}{'\n'}
{boxLine('  [1] GitHub ........... github.com/dulev', 50)}{'\n'}
{boxLine('  [2] LinkedIn ........ linkedin.com/in/dulev', 50)}{'\n'}
{boxLine('  [3] Uses ............ /uses', 50)}{'\n'}
{boxBottom(50)}
                </pre>

                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    marginTop: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <a
                    href={intro.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dm-link dm-text"
                    style={{ fontSize: '14px' }}
                  >
                    [1] GITHUB &gt;&gt;
                  </a>
                  <a
                    href={intro.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dm-link dm-text"
                    style={{ fontSize: '14px' }}
                  >
                    [2] LINKEDIN &gt;&gt;
                  </a>
                  <Link
                    to={intro.links.uses}
                    className="dm-link dm-text"
                    style={{ fontSize: '14px' }}
                  >
                    [3] /USES &gt;&gt;
                  </Link>
                </div>
              </div>

              {/* ===== PAGE BREAK ===== */}
              <pre
                className="dm-text"
                style={{
                  fontSize: '12px',
                  lineHeight: '24px',
                  color: INK_LIGHT,
                  margin: '32px 0',
                  textAlign: 'center',
                }}
              >
                {pageBreak()}
              </pre>

              {/* ===== SECTION 2: PROJECTS ===== */}
              <div style={{ margin: '32px 0' }}>
                <pre className="dm-text" style={{ fontSize: '14px', lineHeight: '24px', margin: '0 0 16px 0' }}>
{sectionHeader('SECTION 2: PROJECT REGISTRY')}
                </pre>

                {projects.map((project, i) => {
                  const num = String(i + 1).padStart(2, '0')
                  const techStr = project.tech.join(', ')
                  const boxWidth = 62

                  return (
                    <div key={project.name} style={{ margin: '24px 0' }}>
                      <pre
                        className="dm-text"
                        style={{ fontSize: '14px', lineHeight: '24px', margin: 0 }}
                      >
{boxTop(boxWidth)}{'\n'}
{boxLine(`  ITEM ${num}: ${project.name.toUpperCase()}`, boxWidth)}{'\n'}
{boxLine(`  ${'─'.repeat(boxWidth - 4)}`, boxWidth)}{'\n'}
{boxLine(`  ${project.description}`, boxWidth)}{'\n'}
{boxLine('', boxWidth)}{'\n'}
{boxLine(`  TECH: ${techStr}`, boxWidth)}{'\n'}
{boxBottom(boxWidth)}
                      </pre>
                      <div
                        style={{
                          display: 'flex',
                          gap: '24px',
                          marginTop: '8px',
                          flexWrap: 'wrap',
                        }}
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dm-link dm-text"
                          style={{ fontSize: '13px' }}
                        >
                          * VISIT SITE: {project.url}
                        </a>
                        <Link
                          to={project.cvAnchor}
                          className="dm-link dm-text"
                          style={{ fontSize: '13px' }}
                        >
                          * CV ENTRY: {project.cvAnchor}
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* ===== PAGE BREAK ===== */}
              <pre
                className="dm-text"
                style={{
                  fontSize: '12px',
                  lineHeight: '24px',
                  color: INK_LIGHT,
                  margin: '32px 0',
                  textAlign: 'center',
                }}
              >
                {pageBreak()}
              </pre>

              {/* ===== SECTION 3: INTERESTS ===== */}
              <div style={{ margin: '32px 0' }}>
                <pre className="dm-text" style={{ fontSize: '14px', lineHeight: '24px', margin: '0 0 16px 0' }}>
{sectionHeader('SECTION 3: PERSONAL INTERESTS')}
                </pre>

                <pre className="dm-text" style={{ fontSize: '14px', lineHeight: '24px', margin: 0 }}>
{boxTop(44)}{'\n'}
{personal.interests
  .map(
    (interest, i) =>
      boxLine(
        `  ${String(i + 1)}. ${interestIcons[interest.icon] || '[*]'} ${interest.label}`,
        44,
      ),
  )
  .join('\n')}{'\n'}
{boxBottom(44)}
                </pre>
              </div>

              {/* ===== PAGE BREAK ===== */}
              <pre
                className="dm-text"
                style={{
                  fontSize: '12px',
                  lineHeight: '24px',
                  color: INK_LIGHT,
                  margin: '32px 0',
                  textAlign: 'center',
                }}
              >
                {pageBreak()}
              </pre>

              {/* ===== SECTION 4: SYSTEM INFO ===== */}
              <div style={{ margin: '32px 0' }}>
                <pre className="dm-text" style={{ fontSize: '14px', lineHeight: '24px', margin: '0 0 16px 0' }}>
{sectionHeader('SECTION 4: SYSTEM INFORMATION')}
                </pre>

                <pre className="dm-text" style={{ fontSize: '13px', lineHeight: '24px', margin: 0, color: INK_LIGHT }}>
{`  PRINTER:    EPSON FX-80
  INTERFACE:  PARALLEL (LPT1)
  MODE:       NLQ (Near Letter Quality)
  PAPER:      CONTINUOUS FEED, 80 COLUMN
  CHARSET:    IBM PC CP437
  DENSITY:    120 x 144 DPI
  REPORT ID:  DMX-2026-017
  GENERATED:  dulev.dev homepage renderer v17.0`}
                </pre>
              </div>

              {/* ===== FOOTER ===== */}
              <div
                style={{
                  borderTop: `1px dashed ${INK_LIGHT}`,
                  marginTop: '48px',
                  paddingTop: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <span
                  className="dm-text"
                  style={{ fontSize: '12px', color: INK_LIGHT }}
                >
                  ** END OF REPORT **
                </span>
                <span
                  className="dm-text"
                  style={{ fontSize: '12px', color: INK_LIGHT }}
                >
                  Page 1 of 1
                </span>
              </div>

              {/* Micro tear-off strip at bottom */}
              <div
                style={{
                  marginTop: '32px',
                  borderTop: `2px dashed ${PERF_LINE}`,
                  paddingTop: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <span
                  className="dm-text"
                  style={{ fontSize: '10px', color: PERF_LINE, letterSpacing: '4px' }}
                >
                  {'+ '.repeat(30)}+
                </span>
              </div>
            </div>
          </div>

          {/* ===== RIGHT TRACTOR FEED / PERFORATION STRIP ===== */}
          <div
            className="dm-tractor-right"
            style={{
              width: '40px',
              flexShrink: 0,
              backgroundColor: PAPER,
              borderLeft: `2px dashed ${PERF_LINE}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '16px',
              gap: `${LINE_HEIGHT}px`,
              position: 'relative',
            }}
          >
            {/* Perforation dots along edge */}
            <div
              style={{
                position: 'absolute',
                left: '-1px',
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundImage: `repeating-linear-gradient(
                  to bottom,
                  transparent 0px,
                  transparent 3px,
                  ${PERF_LINE} 3px,
                  ${PERF_LINE} 6px
                )`,
              }}
            />
            {Array.from({ length: totalLines }).map((_, i) => (
              <div key={`rh-${i}`} className="dm-hole" />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
