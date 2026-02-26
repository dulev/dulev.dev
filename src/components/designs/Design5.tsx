import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { siteContent } from '~/data/content'

const { intro, projects, personal } = siteContent

const interestIcons: Record<string, string> = {
  guitar: '🎸',
  running: '🏃',
  bike: '🚵',
  mountains: '⛰️',
  terminal: '💻',
}

function Win95Button({
  children,
  onClick,
  className = '',
  active = false,
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  active?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        background: '#c0c0c0',
        border: active ? '2px inset #808080' : '2px outset #dfdfdf',
        padding: '2px 8px',
        fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
        fontSize: '12px',
        cursor: 'pointer',
        minWidth: '24px',
        lineHeight: '1.4',
      }}
    >
      {children}
    </button>
  )
}

function TitleBar({
  title,
  icon,
  onClose,
  onMinimize,
  onMaximize,
  active = true,
}: {
  title: string
  icon?: string
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
  active?: boolean
}) {
  return (
    <div
      style={{
        background: active
          ? 'linear-gradient(90deg, #000080 0%, #1084d0 100%)'
          : 'linear-gradient(90deg, #808080 0%, #b0b0b0 100%)',
        padding: '2px 3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {icon && (
          <span style={{ fontSize: '12px', lineHeight: 1 }}>{icon}</span>
        )}
        <span
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '10px',
            color: '#ffffff',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </span>
      </div>
      <div style={{ display: 'flex', gap: '2px', flexShrink: 0 }}>
        <button
          onClick={onMinimize}
          style={{
            width: '16px',
            height: '14px',
            background: '#c0c0c0',
            border: '2px outset #dfdfdf',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            fontSize: '8px',
            lineHeight: 1,
          }}
        >
          <span style={{ marginBottom: '1px' }}>_</span>
        </button>
        <button
          onClick={onMaximize}
          style={{
            width: '16px',
            height: '14px',
            background: '#c0c0c0',
            border: '2px outset #dfdfdf',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            fontSize: '8px',
            lineHeight: 1,
          }}
        >
          □
        </button>
        <button
          onClick={onClose}
          style={{
            width: '16px',
            height: '14px',
            background: '#c0c0c0',
            border: '2px outset #dfdfdf',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            fontSize: '10px',
            fontWeight: 'bold',
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
    </div>
  )
}

function Window({
  title,
  icon,
  children,
  style,
  defaultVisible = true,
}: {
  title: string
  icon?: string
  children: React.ReactNode
  style?: React.CSSProperties
  defaultVisible?: boolean
}) {
  const [visible, setVisible] = useState(defaultVisible)
  const [minimized, setMinimized] = useState(false)

  if (!visible) return null

  return (
    <div
      style={{
        border: '2px outset #dfdfdf',
        background: '#c0c0c0',
        boxShadow: '2px 2px 0px #000000',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      <TitleBar
        title={title}
        icon={icon}
        onClose={() => setVisible(false)}
        onMinimize={() => setMinimized(!minimized)}
        onMaximize={() => setMinimized(false)}
      />
      {!minimized && (
        <div
          style={{
            border: '2px inset #808080',
            margin: '2px',
            background: '#ffffff',
            padding: '8px',
            overflow: 'auto',
            flex: 1,
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

function MenuBar({ items }: { items: string[] }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0',
        padding: '1px 0',
        background: '#c0c0c0',
        borderBottom: '1px solid #808080',
        marginBottom: '0',
      }}
    >
      {items.map((item) => (
        <span
          key={item}
          style={{
            padding: '1px 8px',
            fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          <u>{item[0]}</u>
          {item.slice(1)}
        </span>
      ))}
    </div>
  )
}

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatted = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <div
      style={{
        border: '2px inset #808080',
        padding: '2px 10px',
        fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <span style={{ fontSize: '11px' }}>🔊</span>
      {formatted}
    </div>
  )
}

function StartMenu({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 998,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '100%',
          left: '0',
          width: '240px',
          background: '#c0c0c0',
          border: '2px outset #dfdfdf',
          zIndex: 999,
          boxShadow: '2px -2px 0px #000000',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
          }}
        >
          <div
            style={{
              width: '24px',
              background: 'linear-gradient(0deg, #000080 0%, #1084d0 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '6px 0',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                color: '#c0c0c0',
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '9px',
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
            >
              dulev.dev
            </span>
          </div>
          <div style={{ flex: 1, padding: '2px 0' }}>
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 8px',
                fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
                fontSize: '12px',
                textDecoration: 'none',
                color: '#000000',
                cursor: 'pointer',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = '#000080') ||
                (e.currentTarget.style.color = '#ffffff')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = 'transparent') ||
                (e.currentTarget.style.color = '#000000')
              }
            >
              <span>📁</span> GitHub
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 8px',
                fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
                fontSize: '12px',
                textDecoration: 'none',
                color: '#000000',
                cursor: 'pointer',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = '#000080') ||
                (e.currentTarget.style.color = '#ffffff')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = 'transparent') ||
                (e.currentTarget.style.color = '#000000')
              }
            >
              <span>👤</span> LinkedIn
            </a>
            <Link
              to={intro.links.uses}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 8px',
                fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
                fontSize: '12px',
                textDecoration: 'none',
                color: '#000000',
                cursor: 'pointer',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = '#000080') ||
                (e.currentTarget.style.color = '#ffffff')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = 'transparent') ||
                (e.currentTarget.style.color = '#000000')
              }
            >
              <span>🔧</span> My Setup (/uses)
            </Link>
            <div
              style={{
                height: '1px',
                background: '#808080',
                margin: '2px 4px',
                borderBottom: '1px solid #ffffff',
              }}
            />
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 8px',
                fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
                fontSize: '12px',
                textDecoration: 'none',
                color: '#000000',
                cursor: 'pointer',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = '#000080') ||
                (e.currentTarget.style.color = '#ffffff')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = 'transparent') ||
                (e.currentTarget.style.color = '#000000')
              }
            >
              <span>🏠</span> Back to Home
            </Link>
            <div
              style={{
                height: '1px',
                background: '#808080',
                margin: '2px 4px',
                borderBottom: '1px solid #ffffff',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 8px',
                fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
                fontSize: '12px',
                cursor: 'pointer',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = '#000080') ||
                (e.currentTarget.style.color = '#ffffff')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = 'transparent') ||
                (e.currentTarget.style.color = '#000000')
              }
            >
              <span>⏻</span> Shut Down...
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function DesktopIcon({
  icon,
  label,
  onClick,
}: {
  icon: string
  label: string
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        cursor: 'pointer',
        width: '70px',
        padding: '4px',
        textAlign: 'center',
      }}
      onDoubleClick={onClick}
    >
      <span style={{ fontSize: '32px', lineHeight: 1 }}>{icon}</span>
      <span
        style={{
          fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
          fontSize: '11px',
          color: '#ffffff',
          textShadow: '1px 1px 0px #000000',
          wordBreak: 'break-word',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export function Design5() {
  const [startOpen, setStartOpen] = useState(false)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .win95-scrollbar::-webkit-scrollbar {
          width: 16px;
          height: 16px;
        }
        .win95-scrollbar::-webkit-scrollbar-track {
          background: #c0c0c0;
          border: 1px inset #808080;
        }
        .win95-scrollbar::-webkit-scrollbar-thumb {
          background: #c0c0c0;
          border: 2px outset #dfdfdf;
        }
        .win95-scrollbar::-webkit-scrollbar-button {
          background: #c0c0c0;
          border: 2px outset #dfdfdf;
          width: 16px;
          height: 16px;
        }
        .win95-link {
          color: #0000ff;
          text-decoration: underline;
          cursor: pointer;
          font-family: "Trebuchet MS", Tahoma, sans-serif;
          font-size: 13px;
        }
        .win95-link:visited {
          color: #800080;
        }
        .win95-link:hover {
          color: #ff0000;
        }
        .win95-body {
          font-family: "Trebuchet MS", Tahoma, sans-serif;
          font-size: 13px;
          line-height: 1.5;
          color: #000000;
        }
      `}</style>

      <div
        className="win95-scrollbar"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #008080 0%, #005f5f 40%, #007070 70%, #009090 100%)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Desktop area */}
        <div
          style={{
            flex: 1,
            padding: '16px',
            display: 'flex',
            gap: '24px',
            minHeight: 'calc(100vh - 36px)',
          }}
        >
          {/* Desktop icons on the left */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flexShrink: 0,
              paddingTop: '8px',
            }}
          >
            <DesktopIcon icon="💾" label="My Computer" />
            <DesktopIcon icon="🌐" label="Internet Explorer" />
            <DesktopIcon icon="📝" label="Notepad" />
            <DesktopIcon icon="♻️" label="Recycle Bin" />
          </div>

          {/* Windows area */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '900px',
            }}
          >
            {/* About Me Window */}
            <Window
              title={`About - ${intro.name}`}
              icon="👤"
              style={{ width: '100%' }}
            >
              <MenuBar items={['File', 'Edit', 'View', 'Help']} />
              <div className="win95-body" style={{ padding: '8px' }}>
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: '#000080',
                      border: '2px inset #808080',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      flexShrink: 0,
                    }}
                  >
                    👨‍💻
                  </div>
                  <div>
                    <h2
                      style={{
                        fontFamily: '"Press Start 2P", monospace',
                        fontSize: '13px',
                        margin: '0 0 4px 0',
                        color: '#000080',
                      }}
                    >
                      {intro.name}
                    </h2>
                    <p
                      style={{
                        margin: '0 0 8px 0',
                        fontStyle: 'italic',
                        color: '#444',
                      }}
                    >
                      {intro.tagline}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    border: '1px solid #808080',
                    borderRight: '1px solid #ffffff',
                    borderBottom: '1px solid #ffffff',
                    padding: '8px',
                    marginBottom: '12px',
                    background: '#ffffcc',
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>README.txt:</strong> {intro.bio}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <a
                    href={intro.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="win95-link"
                  >
                    📁 GitHub
                  </a>
                  <span style={{ color: '#808080' }}>|</span>
                  <a
                    href={intro.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="win95-link"
                  >
                    👤 LinkedIn
                  </a>
                  <span style={{ color: '#808080' }}>|</span>
                  <Link to={intro.links.uses} className="win95-link">
                    🔧 /uses
                  </Link>
                  <span style={{ color: '#808080' }}>|</span>
                  <Link to="/" className="win95-link">
                    🏠 Home
                  </Link>
                </div>
              </div>
            </Window>

            {/* Projects Window */}
            <Window
              title="C:\Projects"
              icon="📂"
              style={{ width: '100%' }}
            >
              <MenuBar items={['File', 'Edit', 'View', 'Tools', 'Help']} />
              <div className="win95-body" style={{ padding: '4px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px',
                    marginBottom: '4px',
                    fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
                    fontSize: '11px',
                    color: '#808080',
                  }}
                >
                  <span>Address:</span>
                  <div
                    style={{
                      flex: 1,
                      border: '2px inset #808080',
                      background: '#ffffff',
                      padding: '2px 4px',
                      fontSize: '12px',
                      color: '#000',
                    }}
                  >
                    C:\Users\dulev\Projects\
                  </div>
                </div>

                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '12px',
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        background: '#c0c0c0',
                        borderBottom: '1px solid #808080',
                      }}
                    >
                      <th
                        style={{
                          textAlign: 'left',
                          padding: '3px 8px',
                          border: '1px outset #dfdfdf',
                          fontWeight: 'normal',
                        }}
                      >
                        Name
                      </th>
                      <th
                        style={{
                          textAlign: 'left',
                          padding: '3px 8px',
                          border: '1px outset #dfdfdf',
                          fontWeight: 'normal',
                        }}
                      >
                        Description
                      </th>
                      <th
                        style={{
                          textAlign: 'left',
                          padding: '3px 8px',
                          border: '1px outset #dfdfdf',
                          fontWeight: 'normal',
                        }}
                      >
                        Tech Stack
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, i) => (
                      <tr
                        key={project.name}
                        style={{
                          background: i % 2 === 0 ? '#ffffff' : '#f0f0f0',
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.background = '#000080') &&
                          (e.currentTarget.style.color = '#ffffff')
                        }
                        onMouseOut={(e) => {
                          e.currentTarget.style.background =
                            i % 2 === 0 ? '#ffffff' : '#f0f0f0'
                          e.currentTarget.style.color = '#000000'
                        }}
                      >
                        <td style={{ padding: '4px 8px' }}>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="win95-link"
                            style={{ fontSize: '12px' }}
                          >
                            📄 {project.name}
                          </a>
                        </td>
                        <td
                          style={{
                            padding: '4px 8px',
                            fontSize: '12px',
                          }}
                        >
                          {project.description}
                        </td>
                        <td
                          style={{
                            padding: '4px 8px',
                            fontSize: '11px',
                          }}
                        >
                          {project.tech.join(', ')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div
                  style={{
                    borderTop: '1px solid #808080',
                    marginTop: '8px',
                    paddingTop: '4px',
                    fontSize: '11px',
                    color: '#808080',
                  }}
                >
                  {projects.length} object(s)
                </div>
              </div>
            </Window>

            {/* Interests Window */}
            <Window
              title="Interests.exe"
              icon="⭐"
              style={{ width: '100%' }}
            >
              <div
                className="win95-body"
                style={{
                  padding: '8px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                {personal.interests.map((interest) => (
                  <div
                    key={interest.label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      width: '80px',
                      padding: '8px 4px',
                      cursor: 'default',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: '#c0c0c0',
                        border: '2px outset #dfdfdf',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                      }}
                    >
                      {interestIcons[interest.icon] || '❓'}
                    </div>
                    <span
                      style={{
                        fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
                        fontSize: '11px',
                        wordBreak: 'break-word',
                      }}
                    >
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  borderTop: '2px inset #808080',
                  margin: '0 2px',
                  padding: '4px 8px',
                  background: '#c0c0c0',
                  fontFamily: '"Trebuchet MS", Tahoma, sans-serif',
                  fontSize: '11px',
                  color: '#444',
                }}
              >
                <span
                  style={{
                    border: '1px inset #808080',
                    padding: '1px 6px',
                  }}
                >
                  {personal.interests.length} item(s) selected
                </span>
              </div>
            </Window>
          </div>
        </div>

        {/* Taskbar */}
        <div
          style={{
            height: '36px',
            background: '#c0c0c0',
            borderTop: '2px outset #dfdfdf',
            display: 'flex',
            alignItems: 'center',
            padding: '2px 4px',
            justifyContent: 'space-between',
            position: 'sticky',
            bottom: 0,
            zIndex: 1000,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              position: 'relative',
            }}
          >
            {startOpen && <StartMenu onClose={() => setStartOpen(false)} />}
            <Win95Button
              onClick={() => setStartOpen(!startOpen)}
              active={startOpen}
              className=""
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontWeight: 'bold',
                }}
              >
                <span
                  style={{
                    background:
                      'linear-gradient(135deg, #ff0000, #00ff00, #0000ff, #ffff00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    lineHeight: 1,
                  }}
                >
                  ⊞
                </span>
                Start
              </span>
            </Win95Button>

            <div
              style={{
                width: '1px',
                height: '24px',
                background: '#808080',
                borderRight: '1px solid #ffffff',
                margin: '0 2px',
              }}
            />

            {/* Taskbar window buttons */}
            <Win95Button active>
              <span style={{ fontSize: '11px' }}>
                👤 About - {intro.name.split(' ')[0]}
              </span>
            </Win95Button>
            <Win95Button>
              <span style={{ fontSize: '11px' }}>📂 C:\Projects</span>
            </Win95Button>
            <Win95Button>
              <span style={{ fontSize: '11px' }}>⭐ Interests.exe</span>
            </Win95Button>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Clock />
          </div>
        </div>
      </div>
    </>
  )
}
