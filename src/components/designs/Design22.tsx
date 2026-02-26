import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const { intro, projects, personal } = siteContent

function tapeCounter(n: number): string {
  return String(n).padStart(3, '0')
}

function LevelMeter({ levels, size = 'normal' }: { levels: number[]; size?: 'normal' | 'small' }) {
  const h = size === 'small' ? 4 : 6
  const gap = size === 'small' ? 2 : 3
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: `${gap}px` }}>
      {levels.map((level, i) => (
        <div
          key={i}
          style={{
            width: `${level}%`,
            minWidth: '8px',
            maxWidth: size === 'small' ? '60px' : '100px',
            height: `${h}px`,
            borderRadius: '1px',
            background:
              level > 80
                ? '#cc3030'
                : level > 60
                  ? '#e8a030'
                  : '#4a8030',
          }}
        />
      ))}
    </div>
  )
}

function TapeTypeIndicator({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '1px 8px',
        border: '1px solid #8a7860',
        borderRadius: '2px',
        fontSize: '9px',
        fontFamily: "'B612 Mono', monospace",
        color: '#c0b090',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        background: 'linear-gradient(180deg, #3a2e22 0%, #2a2018 100%)',
      }}
    >
      {label}
    </span>
  )
}

export function Design22() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=B612+Mono:wght@400;700&family=Permanent+Marker&display=swap');

        .cassette-root {
          font-family: 'B612 Mono', monospace;
          background: #1a1418;
          color: #e8e0d0;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          position: relative;
          overflow-x: hidden;
        }

        /* Noise / grain overlay */
        .cassette-root::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 50;
          opacity: 0.06;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 256px 256px;
        }

        /* VHS tracking distortion band */
        @keyframes vhsTracking {
          0% { top: -40px; opacity: 0; }
          5% { opacity: 1; }
          15% { top: 8%; opacity: 1; }
          20% { opacity: 0.7; }
          30% { top: 15%; }
          45% { opacity: 0; }
          50% { top: -40px; opacity: 0; }
          55% { top: 5%; opacity: 0.9; }
          65% { top: 12%; }
          75% { opacity: 0; }
          100% { top: -40px; opacity: 0; }
        }

        .vhs-tracking {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          z-index: 60;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(232, 160, 48, 0.15) 10%,
            rgba(232, 224, 208, 0.25) 20%,
            transparent 25%,
            rgba(232, 160, 48, 0.2) 40%,
            transparent 50%,
            rgba(232, 224, 208, 0.3) 65%,
            transparent 75%,
            rgba(232, 160, 48, 0.15) 90%,
            transparent 100%
          );
          animation: vhsTracking 8s ease-in-out infinite;
          box-shadow:
            0 -1px 4px rgba(232, 160, 48, 0.1),
            0 1px 4px rgba(232, 160, 48, 0.1);
        }

        .vhs-tracking::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 0;
          width: 100%;
          height: 12px;
          background: repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 1px,
            rgba(232, 160, 48, 0.04) 1px,
            rgba(232, 160, 48, 0.04) 2px
          );
        }

        /* Tape reel spin */
        @keyframes reelSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .reel-spin {
          animation: reelSpin 3s linear infinite;
        }

        /* Cassette label card styling */
        .cassette-label {
          position: relative;
          background: linear-gradient(135deg, #3a2a1e 0%, #4a3828 50%, #3a2a1e 100%);
          border: 2px solid #6a5838;
          border-radius: 12px;
          padding: 20px 24px;
          margin-bottom: 24px;
          overflow: hidden;
        }

        .cassette-label::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(232, 160, 48, 0.15);
          pointer-events: none;
        }

        .cassette-label-alt {
          background: linear-gradient(135deg, #2e2418 0%, #3e3020 50%, #2e2418 100%);
          border-color: #5a4830;
        }

        /* Handwritten style */
        .handwritten {
          font-family: 'Permanent Marker', cursive;
          letter-spacing: 0.5px;
        }

        /* Section side header */
        .side-header {
          font-family: 'B612 Mono', monospace;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #8a7860;
          border-bottom: 1px solid #3a2e22;
          padding-bottom: 8px;
          margin-bottom: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Tape counter style */
        .tape-counter {
          font-family: 'B612 Mono', monospace;
          font-size: 10px;
          color: #6a5a48;
          background: #0e0c0a;
          padding: 2px 6px;
          border-radius: 2px;
          border: 1px solid #2a2218;
          letter-spacing: 2px;
          display: inline-block;
        }

        /* Level meter bar */
        .level-meter-row {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Amber link style */
        .amber-link {
          color: #e8a030;
          text-decoration: none;
          border-bottom: 1px dotted rgba(232, 160, 48, 0.4);
          transition: all 0.2s ease;
        }
        .amber-link:hover {
          color: #f0c060;
          border-bottom-color: #f0c060;
          text-shadow: 0 0 8px rgba(232, 160, 48, 0.3);
        }

        /* Offwhite link style */
        .offwhite-link {
          color: #e8e0d0;
          text-decoration: none;
          border-bottom: 1px dotted rgba(232, 224, 208, 0.3);
          transition: all 0.2s ease;
        }
        .offwhite-link:hover {
          color: #fff;
          border-bottom-color: #fff;
        }

        /* Scrollbar */
        .cassette-root::-webkit-scrollbar { width: 6px; }
        .cassette-root::-webkit-scrollbar-track { background: #1a1418; }
        .cassette-root::-webkit-scrollbar-thumb { background: #3a2e22; border-radius: 3px; }
        .cassette-root::-webkit-scrollbar-thumb:hover { background: #e8a030; }

        @media (max-width: 640px) {
          .cassette-label { padding: 14px 16px; }
          .tech-chips { flex-wrap: wrap; }
        }
      `}</style>

      <div className="cassette-root">
        {/* VHS tracking distortion line */}
        <div className="vhs-tracking" />

        {/* Top chrome bar - tape deck display */}
        <div
          style={{
            background: 'linear-gradient(180deg, #2a2218 0%, #1e1a14 100%)',
            borderBottom: '1px solid #3a2e22',
            padding: '12px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 40,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Tape reels indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                className="reel-spin"
                style={{
                  width: '14px',
                  height: '14px',
                  border: '2px solid #6a5a48',
                  borderRadius: '50%',
                  borderTopColor: '#e8a030',
                }}
              />
              <div
                className="reel-spin"
                style={{
                  width: '14px',
                  height: '14px',
                  border: '2px solid #6a5a48',
                  borderRadius: '50%',
                  borderTopColor: '#e8a030',
                  animationDirection: 'reverse',
                }}
              />
            </div>
            <span style={{ color: '#e8a030', fontSize: '11px', letterSpacing: '2px' }}>
              &#9654; PLAY
            </span>
            <span className="tape-counter">{tapeCounter(0)}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <TapeTypeIndicator label="CrO2" />
            <TapeTypeIndicator label="TYPE II" />
            <TapeTypeIndicator label="60min" />
          </div>
        </div>

        {/* Main content area */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '40px 24px 80px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* ===================== SIDE A ===================== */}
          <div className="side-header">
            <span>&#9654;&#9654; Side A &mdash; About</span>
            <span className="tape-counter">{tapeCounter(1)}</span>
          </div>

          {/* Intro cassette label */}
          <div className="cassette-label">
            {/* Oval window decorative cutout */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '55%',
                height: '24px',
                borderRadius: '50%',
                border: '1.5px solid rgba(232, 160, 48, 0.12)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
              <span
                className="handwritten"
                style={{ color: '#e8a030', fontSize: '28px', lineHeight: 1.2 }}
              >
                {intro.name}
              </span>
              <span className="tape-counter">{tapeCounter(12)}</span>
            </div>

            <div
              className="handwritten"
              style={{
                color: '#c0a878',
                fontSize: '15px',
                marginBottom: '12px',
              }}
            >
              {intro.tagline}
            </div>

            <div
              style={{
                color: '#a89878',
                fontSize: '13px',
                lineHeight: 1.7,
                maxWidth: '580px',
                marginBottom: '16px',
              }}
            >
              {intro.bio}
            </div>

            {/* Recording level meters as decoration */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              <span style={{ color: '#6a5a48', fontSize: '9px', letterSpacing: '1px' }}>L</span>
              <LevelMeter levels={[90, 75, 60, 85, 45, 70, 95, 55, 80]} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              <span style={{ color: '#6a5a48', fontSize: '9px', letterSpacing: '1px' }}>R</span>
              <LevelMeter levels={[70, 85, 55, 90, 65, 80, 50, 75, 88]} />
            </div>
          </div>

          {/* Links cassette */}
          <div className="cassette-label cassette-label-alt">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
              }}
            >
              <span
                className="handwritten"
                style={{ color: '#e8a030', fontSize: '16px' }}
              >
                Links & Connections
              </span>
              <span className="tape-counter">{tapeCounter(47)}</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px' }}>
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="amber-link"
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="amber-link"
              >
                LinkedIn
              </a>
              <Link to="/uses" className="amber-link">
                /uses
              </Link>
            </div>
          </div>

          {/* Decorative divider between sides */}
          <div
            style={{
              margin: '48px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: '#3a2e22' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#6a5a48', fontSize: '10px', letterSpacing: '2px' }}>FLIP</span>
              <span style={{ color: '#e8a030', fontSize: '16px' }}>&#9198;</span>
              <span style={{ color: '#6a5a48', fontSize: '10px', letterSpacing: '2px' }}>TAPE</span>
            </div>
            <div style={{ flex: 1, height: '1px', background: '#3a2e22' }} />
          </div>

          {/* ===================== SIDE B ===================== */}
          <div className="side-header">
            <span>&#9654;&#9654; Side B &mdash; Projects</span>
            <span className="tape-counter">{tapeCounter(301)}</span>
          </div>

          {/* Project cassettes */}
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`cassette-label${i % 2 === 1 ? ' cassette-label-alt' : ''}`}
            >
              {/* Oval window */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '55%',
                  height: '24px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(232, 160, 48, 0.1)',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '6px',
                }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="handwritten"
                  style={{
                    color: '#e8a030',
                    fontSize: '22px',
                    textDecoration: 'none',
                    borderBottom: '1px dotted rgba(232, 160, 48, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {project.name}
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <TapeTypeIndicator label={`TRK ${i + 1}`} />
                  <span className="tape-counter">{tapeCounter(301 + (i + 1) * 47)}</span>
                </div>
              </div>

              <div
                style={{
                  color: '#a89878',
                  fontSize: '13px',
                  lineHeight: 1.7,
                  marginBottom: '14px',
                  maxWidth: '580px',
                }}
              >
                {project.description}
              </div>

              {/* Tech chips */}
              <div
                className="tech-chips"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '12px',
                }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '2px 10px',
                      background: '#1a1418',
                      border: '1px solid #4a3828',
                      borderRadius: '3px',
                      fontSize: '11px',
                      color: '#c0a878',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Mini level meter per project */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#5a4a38', fontSize: '8px', letterSpacing: '1px' }}>REC</span>
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#cc3030',
                    boxShadow: '0 0 4px rgba(204, 48, 48, 0.5)',
                  }}
                />
                <LevelMeter
                  levels={[65, 80, 50, 90, 70, 55, 85]}
                  size="small"
                />
              </div>
            </div>
          ))}

          {/* Interests section — like a mixtape tracklist */}
          <div
            style={{
              marginTop: '36px',
              border: '1px solid #3a2e22',
              borderRadius: '8px',
              padding: '20px 24px',
              background: 'linear-gradient(180deg, #221c16 0%, #1a1418 100%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
              }}
            >
              <span
                className="handwritten"
                style={{ color: '#e8a030', fontSize: '16px' }}
              >
                Mixtape Tracklist
              </span>
              <span className="tape-counter">{tapeCounter(512)}</span>
            </div>

            {personal.interests.map((interest, i) => (
              <div
                key={interest.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom:
                    i < personal.interests.length - 1
                      ? '1px solid #2a2218'
                      : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      color: '#6a5a48',
                      fontSize: '11px',
                      fontFamily: "'B612 Mono', monospace",
                      minWidth: '20px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ color: '#e8e0d0', fontSize: '14px' }}>
                    {interest.label}
                  </span>
                </div>
                <LevelMeter
                  levels={[
                    40 + ((i * 17 + 11) % 50),
                    30 + ((i * 23 + 7) % 60),
                    50 + ((i * 13 + 19) % 40),
                  ]}
                  size="small"
                />
              </div>
            ))}
          </div>

          {/* Bottom tape transport controls / nav */}
          <div
            style={{
              marginTop: '56px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Tape transport bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '12px 32px',
                background: '#221c16',
                borderRadius: '6px',
                border: '1px solid #3a2e22',
              }}
            >
              <span style={{ color: '#6a5a48', fontSize: '18px', cursor: 'default' }}>&#9198;</span>
              <span style={{ color: '#6a5a48', fontSize: '18px', cursor: 'default' }}>&#9194;</span>
              <span style={{ color: '#e8a030', fontSize: '20px', cursor: 'default' }}>&#9724;</span>
              <span style={{ color: '#6a5a48', fontSize: '18px', cursor: 'default' }}>&#9193;</span>
              <span style={{ color: '#6a5a48', fontSize: '18px', cursor: 'default' }}>&#9197;</span>
            </div>

            {/* Counter at end */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="tape-counter">{tapeCounter(999)}</span>
              <span style={{ color: '#5a4a38', fontSize: '9px', letterSpacing: '1.5px' }}>
                END OF TAPE
              </span>
            </div>

            {/* Back to home */}
            <Link
              to="/"
              className="offwhite-link"
              style={{
                marginTop: '8px',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              &#9664; Rewind to Home
            </Link>

            {/* Footer branding */}
            <div
              style={{
                marginTop: '32px',
                textAlign: 'center',
                color: '#3a2e22',
                fontSize: '10px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}
            >
              <div>Manufactured by dulev.dev</div>
              <div style={{ marginTop: '4px' }}>
                High Fidelity &bull; Noise Reduction &bull; Dolby B
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
