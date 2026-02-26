import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const ACCENT = '#ff3e00'
const FONT_STACK = 'Arial, Helvetica, sans-serif'

function NavBar() {
  return (
    <nav
      style={{
        fontFamily: FONT_STACK,
        borderBottom: '4px solid black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        backgroundColor: 'white',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'black',
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          border: '4px solid black',
          padding: '8px 16px',
        }}
        className="brutalist-link"
      >
        &larr; BACK
      </Link>
      <div
        style={{
          display: 'flex',
          gap: '0',
        }}
      >
        {[
          { label: 'GITHUB', href: siteContent.intro.links.github },
          { label: 'LINKEDIN', href: siteContent.intro.links.linkedin },
          { label: '/USES', href: siteContent.intro.links.uses },
        ].map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={
              link.href.startsWith('http') ? 'noopener noreferrer' : undefined
            }
            style={{
              color: 'black',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '8px 16px',
              border: '4px solid black',
              borderLeft: i === 0 ? '4px solid black' : 'none',
            }}
            className="brutalist-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section
      style={{
        fontFamily: FONT_STACK,
        borderBottom: '4px solid black',
        padding: '0',
      }}
    >
      <div
        style={{
          borderBottom: '4px solid black',
          padding: '48px 24px 24px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            margin: 0,
            color: 'black',
          }}
        >
          {siteContent.intro.name}
        </h1>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderBottom: 'none',
        }}
      >
        <div
          style={{
            borderRight: '4px solid black',
            padding: '24px',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              margin: 0,
              color: 'black',
            }}
          >
            {siteContent.intro.tagline}
          </p>
        </div>
        <div
          style={{
            padding: '24px',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.4,
              margin: 0,
              color: 'black',
            }}
          >
            {siteContent.intro.bio}
          </p>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ label, number }: { label: string; number: string }) {
  return (
    <div
      style={{
        fontFamily: FONT_STACK,
        borderBottom: '4px solid black',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <span
        style={{
          fontSize: '0.875rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: '0.875rem',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
        }}
      >
        [{number}]
      </span>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section
      style={{
        fontFamily: FONT_STACK,
        borderBottom: '4px solid black',
      }}
    >
      <SectionHeader label="Projects" number="01" />
      {siteContent.projects.map((project, index) => (
        <div
          key={project.name}
          style={{
            borderBottom:
              index < siteContent.projects.length - 1
                ? '4px solid black'
                : 'none',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
            }}
          >
            <div
              style={{
                borderRight: '4px solid black',
                padding: '24px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 'bold',
                  lineHeight: 1,
                  color: ACCENT,
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div style={{ padding: '24px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    margin: 0,
                    color: 'black',
                  }}
                >
                  {project.name}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    padding: '8px 16px',
                    border: '4px solid black',
                    flexShrink: 0,
                  }}
                  className="brutalist-link"
                >
                  VISIT &rarr;
                </a>
              </div>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.4,
                  margin: '0 0 20px 0',
                  color: 'black',
                }}
              >
                {project.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0',
                }}
              >
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '6px 12px',
                      border: '4px solid black',
                      borderLeft:
                        techIndex === 0 ? '4px solid black' : 'none',
                      color: 'black',
                    }}
                    className="brutalist-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: '12px' }}>
                <a
                  href={project.cvAnchor}
                  style={{
                    color: ACCENT,
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                  className="brutalist-accent-link"
                >
                  VIEW ON CV &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

function InterestsSection() {
  return (
    <section
      style={{
        fontFamily: FONT_STACK,
        borderBottom: '4px solid black',
      }}
    >
      <SectionHeader label="Interests" number="02" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${siteContent.personal.interests.length}, 1fr)`,
        }}
      >
        {siteContent.personal.interests.map((interest, index) => (
          <div
            key={interest.label}
            style={{
              borderRight:
                index < siteContent.personal.interests.length - 1
                  ? '4px solid black'
                  : 'none',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
            className="brutalist-interest"
          >
            <span
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'bold',
                lineHeight: 1,
                color: ACCENT,
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'black',
              }}
            >
              {interest.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        fontFamily: FONT_STACK,
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <span
        style={{
          fontSize: '0.875rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        {siteContent.intro.name} &copy; {new Date().getFullYear()}
      </span>
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: ACCENT,
        }}
      >
        BRUTALIST RAW
      </span>
    </footer>
  )
}

export function Design3() {
  return (
    <>
      <style>{`
        .brutalist-link:hover {
          background-color: black !important;
          color: white !important;
        }
        .brutalist-accent-link:hover {
          color: black !important;
          text-decoration: none !important;
        }
        .brutalist-tag:hover {
          background-color: ${ACCENT} !important;
          color: white !important;
          border-color: ${ACCENT} !important;
        }
        .brutalist-interest:hover {
          background-color: black !important;
        }
        .brutalist-interest:hover span {
          color: white !important;
        }
        .brutalist-interest:hover span:first-child {
          color: ${ACCENT} !important;
        }
        * {
          border-radius: 0 !important;
          transition: none !important;
        }
      `}</style>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: 'white',
          color: 'black',
          fontFamily: FONT_STACK,
          border: '4px solid black',
        }}
      >
        <NavBar />
        <HeroSection />
        <ProjectsSection />
        <InterestsSection />
        <Footer />
      </div>
    </>
  )
}
