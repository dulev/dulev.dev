import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const BLUE_INK = '#2244aa'
const RED_INK = '#cc2222'
const WHITE = '#ffffff'
const FINE_GRID = '#c8d8f0'
const MAJOR_GRID = '#a0b8d8'
const GRID_SIZE = 20
const MAJOR_EVERY = 5

const interestIcons: Record<string, string> = {
  guitar: '\u266B',
  running: '\u2192',
  bike: '\u25CB',
  mountains: '\u25B3',
  terminal: '>_',
}

// Scatter plot positions for interests (x%, y%) on a chart area
const scatterPositions = [
  { x: 15, y: 25 },
  { x: 55, y: 60 },
  { x: 75, y: 20 },
  { x: 35, y: 72 },
  { x: 85, y: 45 },
]

// Tech "skill levels" for bar chart visualization
const techBarData = [
  { label: 'React', value: 92 },
  { label: 'TypeScript', value: 88 },
  { label: 'Node.js', value: 85 },
  { label: 'PostgreSQL', value: 78 },
  { label: 'AWS', value: 72 },
  { label: 'Next.js', value: 90 },
]

export function Design24() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Victor+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .gp-root {
          font-family: 'Victor Mono', monospace;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background-color: ${WHITE};
          color: ${BLUE_INK};
          position: relative;
          overflow-x: hidden;
        }

        .gp-root * {
          box-sizing: border-box;
        }

        .gp-grid-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
          background-image:
            linear-gradient(${FINE_GRID} 1px, transparent 1px),
            linear-gradient(90deg, ${FINE_GRID} 1px, transparent 1px),
            linear-gradient(${MAJOR_GRID} 1.5px, transparent 1.5px),
            linear-gradient(90deg, ${MAJOR_GRID} 1.5px, transparent 1.5px);
          background-size:
            ${GRID_SIZE}px ${GRID_SIZE}px,
            ${GRID_SIZE}px ${GRID_SIZE}px,
            ${GRID_SIZE * MAJOR_EVERY}px ${GRID_SIZE * MAJOR_EVERY}px,
            ${GRID_SIZE * MAJOR_EVERY}px ${GRID_SIZE * MAJOR_EVERY}px;
        }

        .gp-margin-line {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 80px;
          width: 2px;
          background-color: ${RED_INK};
          opacity: 0.45;
          z-index: 1;
          pointer-events: none;
        }

        .gp-content {
          position: relative;
          z-index: 2;
          max-width: 960px;
          margin: 0 auto;
          padding: 40px 40px 80px 100px;
        }

        .gp-handwritten {
          font-family: 'Caveat', cursive;
        }

        .gp-typed {
          font-family: 'Victor Mono', monospace;
        }

        .gp-link {
          color: ${BLUE_INK};
          text-decoration: none;
          border-bottom: 1.5px solid ${BLUE_INK};
          transition: color 0.15s, border-color 0.15s;
        }

        .gp-link:hover {
          color: ${RED_INK};
          border-color: ${RED_INK};
        }

        .gp-nav-link {
          color: ${BLUE_INK};
          text-decoration: none;
          font-family: 'Caveat', cursive;
          font-size: 22px;
          border-bottom: 1.5px dashed ${BLUE_INK};
          padding-bottom: 2px;
        }

        .gp-nav-link:hover {
          color: ${RED_INK};
          border-color: ${RED_INK};
        }

        /* Arrow annotation */
        .gp-arrow {
          position: relative;
          display: inline-block;
        }

        .gp-arrow-line {
          display: inline-block;
          width: 40px;
          height: 0;
          border-top: 1.5px solid ${RED_INK};
          vertical-align: middle;
          margin: 0 6px;
          position: relative;
        }

        .gp-arrow-line::after {
          content: '';
          position: absolute;
          right: -1px;
          top: -5px;
          width: 0;
          height: 0;
          border-left: 8px solid ${RED_INK};
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }

        .gp-underline-hand {
          position: relative;
          display: inline-block;
        }

        .gp-underline-hand::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 2px;
          background: ${RED_INK};
          transform: rotate(-0.5deg);
          opacity: 0.7;
        }

        .gp-bar-hand {
          background: ${BLUE_INK};
          height: 18px;
          position: relative;
          border-radius: 0 2px 2px 0;
          opacity: 0.8;
        }

        .gp-bar-hand::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 3px,
            rgba(255,255,255,0.15) 3px,
            rgba(255,255,255,0.15) 6px
          );
        }

        .gp-scatter-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${RED_INK};
          transform: translate(-50%, -50%);
        }

        .gp-scatter-label {
          position: absolute;
          font-family: 'Caveat', cursive;
          font-size: 16px;
          color: ${BLUE_INK};
          white-space: nowrap;
          transform: translate(-50%, 8px);
        }

        .gp-annotation {
          font-family: 'Caveat', cursive;
          color: ${RED_INK};
          font-size: 18px;
        }

        .gp-section-label {
          font-family: 'Caveat', cursive;
          font-size: 14px;
          color: ${RED_INK};
          opacity: 0.7;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .gp-margin-line {
            left: 24px;
          }
          .gp-content {
            padding: 24px 16px 60px 40px;
          }
          .gp-scatter-chart {
            height: 260px !important;
          }
        }
      `}</style>

      <div className="gp-root">
        {/* Graph paper background grid */}
        <div className="gp-grid-bg" />

        {/* Red margin line */}
        <div className="gp-margin-line" />

        {/* Main content */}
        <div className="gp-content">

          {/* ===== TOP DATE AND NAV ===== */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '48px',
            }}
          >
            <span
              className="gp-handwritten"
              style={{
                fontSize: '18px',
                color: BLUE_INK,
                opacity: 0.6,
              }}
            >
              Feb 27, 2026
            </span>
            <Link to="/" className="gp-nav-link">
              &larr; back to index
            </Link>
          </div>

          {/* ===== NAME / HEADER ===== */}
          <div style={{ marginBottom: '12px' }}>
            <h1
              className="gp-handwritten"
              style={{
                fontSize: 'clamp(42px, 7vw, 64px)',
                fontWeight: 700,
                color: BLUE_INK,
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {intro.name}
            </h1>
            {/* Hand-drawn underline */}
            <svg
              width="280"
              height="8"
              viewBox="0 0 280 8"
              style={{ display: 'block', marginTop: '4px' }}
            >
              <path
                d="M0 5 Q30 2, 70 4 T140 3 T210 5 T280 3"
                stroke={RED_INK}
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>

          {/* Tagline as a handwritten annotation */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span className="gp-annotation" style={{ fontSize: '22px' }}>
              <span className="gp-arrow-line" />
              {intro.tagline}
            </span>
          </div>

          {/* Bio in typed text */}
          <p
            className="gp-typed"
            style={{
              fontSize: '14px',
              lineHeight: '28px',
              color: BLUE_INK,
              maxWidth: '580px',
              margin: '24px 0 16px 0',
            }}
          >
            {intro.bio}
          </p>

          {/* Handwritten margin annotation */}
          <div
            className="gp-handwritten"
            style={{
              color: RED_INK,
              fontSize: '15px',
              marginBottom: '32px',
              opacity: 0.7,
              fontStyle: 'italic',
              transform: 'rotate(-1.5deg)',
              transformOrigin: 'left center',
            }}
          >
            * see links below!
          </div>

          {/* ===== LINKS ===== */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              marginBottom: '56px',
              alignItems: 'center',
            }}
          >
            <a
              href={intro.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="gp-link gp-typed"
              style={{ fontSize: '14px' }}
            >
              GitHub
            </a>
            <a
              href={intro.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="gp-link gp-typed"
              style={{ fontSize: '14px' }}
            >
              LinkedIn
            </a>
            <Link
              to={intro.links.uses}
              className="gp-link gp-typed"
              style={{ fontSize: '14px' }}
            >
              /uses
            </Link>
          </div>

          {/* ===== SECTION DIVIDER ===== */}
          <svg
            width="100%"
            height="2"
            style={{ display: 'block', marginBottom: '48px' }}
          >
            <line
              x1="0" y1="1" x2="100%" y2="1"
              stroke={BLUE_INK}
              strokeWidth="1"
              strokeDasharray="8 4"
              opacity="0.3"
            />
          </svg>

          {/* ===== SKILLS BAR CHART ===== */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <h2
                className="gp-handwritten"
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: BLUE_INK,
                  margin: 0,
                }}
              >
                Skills
              </h2>
              <span
                className="gp-handwritten"
                style={{ color: RED_INK, fontSize: '16px', opacity: 0.7 }}
              >
                (approximate proficiency)
              </span>
            </div>

            {/* Y-axis label */}
            <div
              className="gp-section-label"
              style={{
                transform: 'rotate(-90deg)',
                position: 'absolute',
                left: '-18px',
                marginTop: '80px',
                transformOrigin: 'left center',
              }}
            >
              technology
            </div>

            {/* Chart area */}
            <div
              style={{
                marginTop: '16px',
                paddingLeft: '100px',
                position: 'relative',
              }}
            >
              {/* X-axis label */}
              <div
                className="gp-section-label"
                style={{
                  textAlign: 'center',
                  marginBottom: '8px',
                }}
              >
                experience (years) &rarr;
              </div>

              {/* Axis line (top) */}
              <div
                style={{
                  borderTop: `1.5px solid ${BLUE_INK}`,
                  borderLeft: `1.5px solid ${BLUE_INK}`,
                  paddingTop: '8px',
                  paddingBottom: '8px',
                }}
              >
                {techBarData.map((item, i) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px',
                      position: 'relative',
                    }}
                  >
                    {/* Label on the left (absolutely positioned outside the axis) */}
                    <span
                      className="gp-typed"
                      style={{
                        position: 'absolute',
                        right: '100%',
                        marginRight: '8px',
                        fontSize: '12px',
                        color: BLUE_INK,
                        whiteSpace: 'nowrap',
                        width: '90px',
                        textAlign: 'right',
                      }}
                    >
                      {item.label}
                    </span>
                    {/* Bar */}
                    <div
                      className="gp-bar-hand"
                      style={{
                        width: `${item.value}%`,
                        maxWidth: '100%',
                      }}
                    />
                    {/* Value annotation */}
                    <span
                      className="gp-handwritten"
                      style={{
                        fontSize: '14px',
                        color: RED_INK,
                        marginLeft: '6px',
                        opacity: 0.8,
                      }}
                    >
                      {item.value}%
                    </span>
                    {/* Circled annotation on highest bar */}
                    {i === 0 && (
                      <span
                        className="gp-handwritten"
                        style={{
                          fontSize: '13px',
                          color: RED_INK,
                          marginLeft: '8px',
                          border: `1.5px solid ${RED_INK}`,
                          borderRadius: '50%',
                          padding: '1px 6px',
                          opacity: 0.7,
                        }}
                      >
                        !
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* X-axis tick marks */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: `1.5px solid ${BLUE_INK}`,
                  paddingTop: '4px',
                }}
              >
                {[0, 25, 50, 75, 100].map((val) => (
                  <span
                    key={val}
                    className="gp-typed"
                    style={{ fontSize: '10px', color: BLUE_INK, opacity: 0.6 }}
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ===== SECTION DIVIDER ===== */}
          <svg
            width="100%"
            height="2"
            style={{ display: 'block', marginBottom: '48px' }}
          >
            <line
              x1="0" y1="1" x2="100%" y2="1"
              stroke={BLUE_INK}
              strokeWidth="1"
              strokeDasharray="8 4"
              opacity="0.3"
            />
          </svg>

          {/* ===== PROJECTS (DATA ENTRIES) ===== */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <h2
                className="gp-handwritten"
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: BLUE_INK,
                  margin: 0,
                }}
              >
                Projects
              </h2>
              <span className="gp-annotation" style={{ fontSize: '15px', opacity: 0.7 }}>
                <span className="gp-arrow-line" style={{ width: '24px' }} />
                data entries
              </span>
            </div>

            {/* Axis labels for project "chart" */}
            <div
              className="gp-section-label"
              style={{ marginBottom: '8px' }}
            >
              ref# &middot; project name &middot; description &middot; stack
            </div>

            {projects.map((project, i) => {
              const refNum = String(i + 1).padStart(3, '0')
              return (
                <div
                  key={project.name}
                  style={{
                    borderLeft: `2.5px solid ${BLUE_INK}`,
                    paddingLeft: '20px',
                    marginBottom: '32px',
                    position: 'relative',
                  }}
                >
                  {/* Reference dot on axis */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-5.5px',
                      top: '8px',
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      backgroundColor: RED_INK,
                    }}
                  />

                  {/* Reference number */}
                  <span
                    className="gp-typed"
                    style={{
                      fontSize: '11px',
                      color: BLUE_INK,
                      opacity: 0.5,
                      display: 'block',
                      marginBottom: '2px',
                    }}
                  >
                    REF #{refNum}
                  </span>

                  {/* Project name */}
                  <h3
                    className="gp-typed"
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: BLUE_INK,
                      margin: '0 0 6px 0',
                    }}
                  >
                    <span className="gp-underline-hand">{project.name}</span>
                  </h3>

                  {/* Description */}
                  <p
                    className="gp-typed"
                    style={{
                      fontSize: '13px',
                      lineHeight: '24px',
                      color: BLUE_INK,
                      margin: '0 0 8px 0',
                      maxWidth: '540px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack as inline annotations */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px 12px',
                      marginBottom: '10px',
                    }}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="gp-typed"
                        style={{
                          fontSize: '11px',
                          color: BLUE_INK,
                          border: `1px solid ${FINE_GRID}`,
                          padding: '2px 8px',
                          backgroundColor: 'rgba(200, 216, 240, 0.2)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Handwritten annotation arrow */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                    <span className="gp-annotation" style={{ fontSize: '14px', opacity: 0.6 }}>
                      <span className="gp-arrow-line" style={{ width: '20px' }} />
                      {i === 0 ? 'main project!' : 'check this out'}
                    </span>
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gp-link gp-typed"
                      style={{ fontSize: '12px' }}
                    >
                      {project.url}
                    </a>
                    <Link
                      to={project.cvAnchor}
                      className="gp-link gp-typed"
                      style={{ fontSize: '12px' }}
                    >
                      CV entry &rarr;
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ===== SECTION DIVIDER ===== */}
          <svg
            width="100%"
            height="2"
            style={{ display: 'block', marginBottom: '48px' }}
          >
            <line
              x1="0" y1="1" x2="100%" y2="1"
              stroke={BLUE_INK}
              strokeWidth="1"
              strokeDasharray="8 4"
              opacity="0.3"
            />
          </svg>

          {/* ===== INTERESTS SCATTER PLOT ===== */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <h2
                className="gp-handwritten"
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: BLUE_INK,
                  margin: 0,
                }}
              >
                Interests
              </h2>
              <span className="gp-annotation" style={{ fontSize: '15px', opacity: 0.7 }}>
                (scatter plot)
              </span>
            </div>

            {/* Scatter plot chart area */}
            <div style={{ position: 'relative' }}>
              {/* Y-axis label */}
              <div
                className="gp-handwritten"
                style={{
                  position: 'absolute',
                  left: '-8px',
                  top: '50%',
                  transform: 'rotate(-90deg) translateX(50%)',
                  transformOrigin: 'left center',
                  color: BLUE_INK,
                  fontSize: '14px',
                  opacity: 0.6,
                  whiteSpace: 'nowrap',
                }}
              >
                interest level &uarr;
              </div>

              {/* Chart frame */}
              <div
                className="gp-scatter-chart"
                style={{
                  marginLeft: '32px',
                  height: '320px',
                  position: 'relative',
                  borderLeft: `1.5px solid ${BLUE_INK}`,
                  borderBottom: `1.5px solid ${BLUE_INK}`,
                }}
              >
                {/* Minor grid lines inside the chart */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                    backgroundImage: `
                      linear-gradient(${FINE_GRID} 1px, transparent 1px),
                      linear-gradient(90deg, ${FINE_GRID} 1px, transparent 1px)
                    `,
                    backgroundSize: '20% 20%',
                    opacity: 0.5,
                  }}
                />

                {/* Scatter dots + labels */}
                {personal.interests.map((interest, i) => {
                  const pos = scatterPositions[i % scatterPositions.length]
                  return (
                    <div key={interest.label}>
                      {/* Data point */}
                      <div
                        className="gp-scatter-dot"
                        style={{
                          left: `${pos.x}%`,
                          top: `${pos.y}%`,
                        }}
                      />
                      {/* Icon + Label */}
                      <div
                        className="gp-scatter-label"
                        style={{
                          left: `${pos.x}%`,
                          top: `${pos.y}%`,
                          transform: 'translate(-50%, 10px)',
                        }}
                      >
                        <span style={{ marginRight: '4px' }}>
                          {interestIcons[interest.icon] || '*'}
                        </span>
                        {interest.label}
                      </div>
                      {/* Connecting line (hand-drawn feel via SVG) */}
                      <svg
                        style={{
                          position: 'absolute',
                          left: `${pos.x}%`,
                          top: `${pos.y}%`,
                          width: '1px',
                          height: '1px',
                          overflow: 'visible',
                          pointerEvents: 'none',
                        }}
                      >
                        <line
                          x1="0" y1="5"
                          x2="0" y2="14"
                          stroke={RED_INK}
                          strokeWidth="1"
                          opacity="0.4"
                        />
                      </svg>
                    </div>
                  )
                })}

                {/* Y-axis tick marks */}
                {[0, 20, 40, 60, 80, 100].map((val) => (
                  <div
                    key={`ytick-${val}`}
                    style={{
                      position: 'absolute',
                      left: '-20px',
                      top: `${100 - val}%`,
                      transform: 'translateY(50%)',
                    }}
                  >
                    <span
                      className="gp-typed"
                      style={{ fontSize: '9px', color: BLUE_INK, opacity: 0.5 }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              {/* X-axis label */}
              <div
                className="gp-handwritten"
                style={{
                  textAlign: 'center',
                  marginTop: '8px',
                  marginLeft: '32px',
                  color: BLUE_INK,
                  fontSize: '14px',
                  opacity: 0.6,
                }}
              >
                time spent &rarr;
              </div>

              {/* X-axis tick marks */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginLeft: '32px',
                  marginTop: '2px',
                }}
              >
                {[0, 2, 4, 6, 8, 10].map((val) => (
                  <span
                    key={`xtick-${val}`}
                    className="gp-typed"
                    style={{ fontSize: '9px', color: BLUE_INK, opacity: 0.5 }}
                  >
                    {val}
                  </span>
                ))}
              </div>

              {/* Handwritten annotation near the chart */}
              <div
                className="gp-handwritten"
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '0px',
                  color: RED_INK,
                  fontSize: '14px',
                  opacity: 0.65,
                  transform: 'rotate(2deg)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="gp-arrow-line" style={{ width: '16px' }} />
                all high interest!
              </div>
            </div>
          </div>

          {/* ===== SECTION DIVIDER ===== */}
          <svg
            width="100%"
            height="2"
            style={{ display: 'block', marginBottom: '48px' }}
          >
            <line
              x1="0" y1="1" x2="100%" y2="1"
              stroke={BLUE_INK}
              strokeWidth="1"
              strokeDasharray="8 4"
              opacity="0.3"
            />
          </svg>

          {/* ===== NOTES / OBSERVATIONS SECTION ===== */}
          <div style={{ marginBottom: '56px' }}>
            <h2
              className="gp-handwritten"
              style={{
                fontSize: '28px',
                fontWeight: 600,
                color: BLUE_INK,
                margin: '0 0 16px 0',
              }}
            >
              Observations &amp; Notes
            </h2>

            <div
              style={{
                borderLeft: `2px dashed ${BLUE_INK}`,
                paddingLeft: '16px',
                opacity: 0.7,
              }}
            >
              <p
                className="gp-handwritten"
                style={{
                  fontSize: '20px',
                  color: BLUE_INK,
                  lineHeight: '32px',
                  margin: '0 0 8px 0',
                }}
              >
                Subject demonstrates strong preference for building
                side projects and learning through practice.
              </p>
              <p
                className="gp-handwritten"
                style={{
                  fontSize: '20px',
                  color: RED_INK,
                  lineHeight: '32px',
                  margin: '0 0 8px 0',
                  transform: 'rotate(-0.5deg)',
                }}
              >
                Notable: 7+ years of experience &mdash; consistent growth trajectory.
              </p>
              <p
                className="gp-handwritten"
                style={{
                  fontSize: '18px',
                  color: BLUE_INK,
                  lineHeight: '32px',
                  margin: 0,
                  opacity: 0.6,
                }}
              >
                Conclusion: recommend further investigation via the links above.
              </p>
            </div>
          </div>

          {/* ===== FOOTER ===== */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '16px',
              paddingTop: '24px',
              borderTop: `1px solid ${FINE_GRID}`,
            }}
          >
            {/* Bottom-left: signature-style */}
            <div>
              <span
                className="gp-handwritten"
                style={{
                  fontSize: '16px',
                  color: BLUE_INK,
                  opacity: 0.5,
                }}
              >
                dulev.dev &mdash; design 24 / graph paper
              </span>
            </div>
            {/* Bottom-right: page number */}
            <div
              className="gp-handwritten"
              style={{
                fontSize: '18px',
                color: RED_INK,
                opacity: 0.6,
              }}
            >
              pg. 1
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
