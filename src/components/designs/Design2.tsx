import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const { intro, projects, personal } = siteContent

const prompt = 'dulev@dev:~$'

function formatDate(daysAgo: number): string {
  const d = new Date()
  d.setDate(d.getDate() - daysAgo)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, ' ')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export function Design2() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap');

        .terminal-root {
          font-family: 'IBM Plex Mono', monospace;
          background: #0a0a0a;
          color: #33ff33;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          position: relative;
          overflow-x: hidden;
        }

        /* CRT scanline overlay */
        .terminal-root::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0px,
            rgba(0, 0, 0, 0) 1px,
            rgba(0, 0, 0, 0.15) 1px,
            rgba(0, 0, 0, 0.15) 2px
          );
        }

        /* CRT vignette */
        .terminal-root::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 11;
          background: radial-gradient(
            ellipse at center,
            transparent 60%,
            rgba(0, 0, 0, 0.45) 100%
          );
        }

        /* Screen flicker */
        @keyframes flicker {
          0% { opacity: 1; }
          3% { opacity: 0.97; }
          6% { opacity: 1; }
          7.5% { opacity: 0.95; }
          9% { opacity: 1; }
          50% { opacity: 1; }
          52% { opacity: 0.98; }
          54% { opacity: 1; }
          90% { opacity: 1; }
          92% { opacity: 0.96; }
          94% { opacity: 1; }
        }

        .terminal-screen {
          animation: flicker 8s infinite;
        }

        /* Typewriter effect */
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          0%, 100% { border-color: #33ff33; }
          50% { border-color: transparent; }
        }

        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #33ff33;
          animation:
            typing 2.8s steps(44, end) forwards,
            blink-caret 0.8s step-end infinite;
          width: 0;
        }

        /* Glow effect for headings */
        .text-glow {
          text-shadow: 0 0 8px rgba(51, 255, 51, 0.4);
        }

        .text-glow-bright {
          text-shadow: 0 0 12px rgba(51, 255, 51, 0.6), 0 0 24px rgba(51, 255, 51, 0.2);
        }

        /* Terminal link styles */
        .term-link {
          color: #33ff33;
          text-decoration: underline;
          text-decoration-style: dotted;
          text-underline-offset: 3px;
          transition: all 0.15s ease;
        }

        .term-link:hover {
          color: #66ff66;
          text-shadow: 0 0 8px rgba(51, 255, 51, 0.5);
          text-decoration-style: solid;
        }

        /* Fade in for sections */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .fade-in-1 { animation: fadeIn 0.4s 3.2s both; }
        .fade-in-2 { animation: fadeIn 0.4s 3.8s both; }
        .fade-in-3 { animation: fadeIn 0.4s 4.4s both; }
        .fade-in-4 { animation: fadeIn 0.4s 5.0s both; }
        .fade-in-5 { animation: fadeIn 0.4s 5.6s both; }

        /* Window control dots */
        .window-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }

        /* Scrollbar styling */
        .terminal-root::-webkit-scrollbar {
          width: 8px;
        }
        .terminal-root::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        .terminal-root::-webkit-scrollbar-thumb {
          background: #1a3a1a;
          border-radius: 4px;
        }
        .terminal-root::-webkit-scrollbar-thumb:hover {
          background: #33ff33;
        }

        /* Table styling */
        .ls-table {
          border-collapse: collapse;
          width: 100%;
        }
        .ls-table td {
          padding: 2px 0;
          white-space: nowrap;
        }
        .ls-table td:not(:last-child) {
          padding-right: 16px;
        }

        @media (max-width: 640px) {
          .ls-table {
            font-size: 11px;
          }
          .ls-table td:not(:last-child) {
            padding-right: 8px;
          }
          .hide-mobile {
            display: none;
          }
        }
      `}</style>

      <div className="terminal-root">
        <div className="terminal-screen" style={{ position: 'relative', zIndex: 1 }}>
          {/* Terminal window chrome */}
          <div
            style={{
              background: '#1a1a1a',
              borderBottom: '1px solid #2a2a2a',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'sticky',
              top: 0,
              zIndex: 5,
            }}
          >
            <span className="window-dot" style={{ background: '#ff5f56' }} />
            <span className="window-dot" style={{ background: '#ffbd2e' }} />
            <span className="window-dot" style={{ background: '#27c93f' }} />
            <span
              style={{
                marginLeft: '12px',
                color: '#666',
                fontSize: '13px',
                letterSpacing: '0.5px',
              }}
            >
              dulev@dev: ~/portfolio
            </span>
          </div>

          {/* Terminal body */}
          <div
            style={{
              padding: '24px 28px 64px',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontSize: '14px',
            }}
          >
            {/* Boot sequence */}
            <div style={{ color: '#1a7a1a', marginBottom: '8px', fontSize: '12px' }}>
              <div>GNU/Linux 6.1.0-dulev (tty1)</div>
              <div>Last login: {formatDate(0)} on pts/0</div>
            </div>

            {/* Intro / Typewriter */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ marginBottom: '4px' }}>
                <span style={{ color: '#1aaa1a' }}>{prompt}</span>{' '}
                <span style={{ color: '#88ff88' }}>whoami</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className="typewriter text-glow-bright" style={{ fontSize: '20px', fontWeight: 700 }}>
                  {intro.name} &mdash; {intro.tagline}
                </span>
              </div>
            </div>

            {/* Bio */}
            <div className="fade-in-1" style={{ marginBottom: '40px' }}>
              <div style={{ marginBottom: '4px' }}>
                <span style={{ color: '#1aaa1a' }}>{prompt}</span>{' '}
                <span style={{ color: '#88ff88' }}>cat about.txt</span>
              </div>
              <div
                style={{
                  color: '#29cc29',
                  padding: '8px 0',
                  maxWidth: '620px',
                }}
              >
                {intro.bio}
              </div>
            </div>

            {/* Projects as ls -la */}
            <div className="fade-in-2" style={{ marginBottom: '40px' }}>
              <div style={{ marginBottom: '4px' }}>
                <span style={{ color: '#1aaa1a' }}>{prompt}</span>{' '}
                <span style={{ color: '#88ff88' }}>ls -la ./projects/</span>
              </div>
              <div style={{ padding: '8px 0', overflowX: 'auto' }}>
                <div style={{ color: '#1a7a1a', marginBottom: '4px', fontSize: '12px' }}>
                  total {projects.length * 4}K
                </div>
                <table className="ls-table">
                  <tbody>
                    <tr style={{ color: '#1a7a1a' }}>
                      <td>drwxr-xr-x</td>
                      <td className="hide-mobile">dulev</td>
                      <td className="hide-mobile">dev</td>
                      <td className="hide-mobile">4.0K</td>
                      <td>{formatDate(0)}</td>
                      <td>
                        <span style={{ color: '#5599ff' }}>.</span>
                      </td>
                    </tr>
                    <tr style={{ color: '#1a7a1a' }}>
                      <td>drwxr-xr-x</td>
                      <td className="hide-mobile">dulev</td>
                      <td className="hide-mobile">dev</td>
                      <td className="hide-mobile">4.0K</td>
                      <td>{formatDate(1)}</td>
                      <td>
                        <span style={{ color: '#5599ff' }}>..</span>
                      </td>
                    </tr>
                    {projects.map((project, i) => (
                      <tr key={project.name}>
                        <td style={{ color: '#22bb22' }}>drwxr-xr-x</td>
                        <td className="hide-mobile" style={{ color: '#22bb22' }}>
                          dulev
                        </td>
                        <td className="hide-mobile" style={{ color: '#22bb22' }}>
                          dev
                        </td>
                        <td className="hide-mobile" style={{ color: '#22bb22' }}>
                          {(i + 1) * 2}.{i}K
                        </td>
                        <td style={{ color: '#22bb22' }}>{formatDate(i * 3 + 2)}</td>
                        <td>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="term-link"
                            style={{ fontWeight: 700 }}
                          >
                            {project.name.toLowerCase().replace(/\s+/g, '-')}/
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Project details */}
              {projects.map((project) => (
                <div key={project.name} style={{ margin: '16px 0 24px' }}>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ color: '#1aaa1a' }}>{prompt}</span>{' '}
                    <span style={{ color: '#88ff88' }}>
                      cat ./projects/{project.name.toLowerCase().replace(/\s+/g, '-')}/README.md
                    </span>
                  </div>
                  <div
                    style={{
                      borderLeft: '2px solid #1a5a1a',
                      paddingLeft: '16px',
                      margin: '8px 0',
                    }}
                  >
                    <div className="text-glow" style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="term-link"
                      >
                        {project.name}
                      </a>
                    </div>
                    <div style={{ color: '#29cc29', marginBottom: '8px' }}>
                      {project.description}
                    </div>
                    <div style={{ color: '#1a9a1a', fontSize: '12px' }}>
                      <span style={{ color: '#1a7a1a' }}>tech:</span>{' '}
                      {project.tech.map((t, i) => (
                        <span key={t}>
                          <span style={{ color: '#44cc44' }}>{t}</span>
                          {i < project.tech.length - 1 ? (
                            <span style={{ color: '#1a5a1a' }}> | </span>
                          ) : null}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="fade-in-3" style={{ marginBottom: '40px' }}>
              <div style={{ marginBottom: '4px' }}>
                <span style={{ color: '#1aaa1a' }}>{prompt}</span>{' '}
                <span style={{ color: '#88ff88' }}>cat interests.txt</span>
              </div>
              <div style={{ padding: '8px 0', color: '#29cc29' }}>
                {personal.interests.map((interest, i) => (
                  <div key={interest.label} style={{ padding: '2px 0' }}>
                    <span style={{ color: '#1a7a1a' }}>{String(i + 1).padStart(2, ' ')}.</span>{' '}
                    <span style={{ color: '#33ff33' }}>{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="fade-in-4" style={{ marginBottom: '40px' }}>
              <div style={{ marginBottom: '4px' }}>
                <span style={{ color: '#1aaa1a' }}>{prompt}</span>{' '}
                <span style={{ color: '#88ff88' }}>cat links.sh</span>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div style={{ color: '#1a7a1a', marginBottom: '4px' }}>#!/bin/bash</div>
                <div style={{ marginBottom: '2px' }}>
                  <span style={{ color: '#1a7a1a' }}>export </span>
                  <span style={{ color: '#22bb22' }}>GITHUB</span>
                  <span style={{ color: '#1a7a1a' }}>=</span>
                  <a
                    href={intro.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="term-link"
                  >
                    &quot;{intro.links.github}&quot;
                  </a>
                </div>
                <div style={{ marginBottom: '2px' }}>
                  <span style={{ color: '#1a7a1a' }}>export </span>
                  <span style={{ color: '#22bb22' }}>LINKEDIN</span>
                  <span style={{ color: '#1a7a1a' }}>=</span>
                  <a
                    href={intro.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="term-link"
                  >
                    &quot;{intro.links.linkedin}&quot;
                  </a>
                </div>
                <div style={{ marginBottom: '2px' }}>
                  <span style={{ color: '#1a7a1a' }}>export </span>
                  <span style={{ color: '#22bb22' }}>USES</span>
                  <span style={{ color: '#1a7a1a' }}>=</span>
                  <a href={intro.links.uses} className="term-link">
                    &quot;{intro.links.uses}&quot;
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation back */}
            <div className="fade-in-5" style={{ marginBottom: '32px' }}>
              <div>
                <span style={{ color: '#1aaa1a' }}>{prompt}</span>{' '}
                <span style={{ color: '#88ff88' }}>cd /</span>
              </div>
              <div style={{ marginTop: '8px' }}>
                <Link to="/" className="term-link" style={{ fontSize: '13px' }}>
                  [navigate to home directory]
                </Link>
              </div>
            </div>

            {/* Idle prompt with blinking cursor */}
            <div className="fade-in-5">
              <span style={{ color: '#1aaa1a' }}>{prompt}</span>{' '}
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '16px',
                  background: '#33ff33',
                  verticalAlign: 'middle',
                  animation: 'blink-caret 0.8s step-end infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
