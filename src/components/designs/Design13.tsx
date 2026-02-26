import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { siteContent } from '~/data/content'

const interestEmojis: Record<string, string> = {
  guitar: '🎸',
  running: '🏃',
  bike: '🚵',
  mountains: '⛰️',
  terminal: '💻',
}

const cardColors = ['#FF6B6B', '#00D4AA', '#B8A9FF', '#FFD93D'] as const
const pillColors = ['#FF6B6B', '#00D4AA', '#B8A9FF', '#FFD93D', '#FF6B6B'] as const

const patternBackgrounds = [
  // Dots pattern
  `radial-gradient(circle, #000 1px, transparent 1px)`,
  // Diagonal stripes
  `repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(0,0,0,0.06) 8px, rgba(0,0,0,0.06) 10px)`,
  // Grid dots
  `radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)`,
  // Horizontal stripes
  `repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(0,0,0,0.05) 6px, rgba(0,0,0,0.05) 8px)`,
]

const patternSizes = ['16px 16px', '14px 14px', '20px 20px', '12px 12px']

export function Design13() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600;700;800&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        .memphis-page {
          font-family: 'Work Sans', sans-serif;
          background-color: #FFFDF0;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .font-archivo {
          font-family: 'Archivo Black', sans-serif;
        }

        .font-work {
          font-family: 'Work Sans', sans-serif;
        }

        /* Hard shadow utility */
        .hard-shadow {
          box-shadow: 4px 4px 0 #000;
        }

        .hard-shadow-sm {
          box-shadow: 3px 3px 0 #000;
        }

        .hard-shadow-hover:hover {
          box-shadow: 6px 6px 0 #000;
          transform: translate(-2px, -2px);
        }

        .hard-shadow-flip:hover {
          box-shadow: -4px 4px 0 #000;
          transform: translate(4px, 0);
        }

        /* Thick border */
        .memphis-border {
          border: 3px solid #000;
        }

        /* Squiggly line SVG separator */
        .squiggly-line {
          width: 100%;
          height: 20px;
        }

        /* Geometric decorations */
        .geo-triangle {
          width: 0;
          height: 0;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 52px solid var(--geo-color, #FF6B6B);
          position: absolute;
          pointer-events: none;
        }

        .geo-circle {
          width: var(--geo-size, 40px);
          height: var(--geo-size, 40px);
          border-radius: 50%;
          background: var(--geo-color, #00D4AA);
          border: 3px solid #000;
          position: absolute;
          pointer-events: none;
        }

        .geo-ring {
          width: var(--geo-size, 50px);
          height: var(--geo-size, 50px);
          border-radius: 50%;
          background: transparent;
          border: 4px solid var(--geo-color, #B8A9FF);
          position: absolute;
          pointer-events: none;
        }

        .geo-square {
          width: var(--geo-size, 35px);
          height: var(--geo-size, 35px);
          background: var(--geo-color, #FFD93D);
          border: 3px solid #000;
          position: absolute;
          pointer-events: none;
        }

        .geo-cross {
          position: absolute;
          pointer-events: none;
          font-size: 36px;
          font-weight: 900;
          color: var(--geo-color, #FF6B6B);
          line-height: 1;
        }

        /* Dot cluster decoration */
        .dot-cluster {
          position: absolute;
          pointer-events: none;
        }

        .dot-cluster::before,
        .dot-cluster::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #000;
        }

        .dot-cluster::before {
          top: 0;
          left: 0;
        }

        .dot-cluster::after {
          top: 12px;
          left: 14px;
        }

        /* Animations */
        @keyframes memphisFloat {
          0%, 100% { transform: translateY(0) rotate(var(--base-rot, 0deg)); }
          50% { transform: translateY(-8px) rotate(calc(var(--base-rot, 0deg) + 5deg)); }
        }

        @keyframes memphisSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes nameGlitch {
          0%, 100% { text-shadow: 4px 4px 0 #FF6B6B, -2px -2px 0 #00D4AA; }
          25% { text-shadow: -4px 4px 0 #B8A9FF, 2px -2px 0 #FFD93D; }
          50% { text-shadow: 4px -4px 0 #00D4AA, -2px 2px 0 #FF6B6B; }
          75% { text-shadow: -4px -4px 0 #FFD93D, 2px 2px 0 #B8A9FF; }
        }

        .animate-float {
          animation: memphisFloat 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: memphisSpin 20s linear infinite;
        }

        .animate-slide-left {
          animation: slideInLeft 0.6s ease-out both;
        }

        .animate-slide-up {
          animation: slideInUp 0.5s ease-out both;
        }

        .name-glitch {
          animation: nameGlitch 4s ease-in-out infinite;
        }

        /* Card hover shape rotation */
        .memphis-card:hover .card-deco {
          transform: rotate(45deg) scale(1.1);
          transition: transform 0.3s ease;
        }

        .memphis-card .card-deco {
          transition: transform 0.3s ease;
        }

        /* Pill hover */
        .memphis-pill {
          transition: all 0.2s ease;
        }

        .memphis-pill:hover {
          transform: translateY(-2px) rotate(-2deg);
          box-shadow: 3px 3px 0 #000;
        }
      `}</style>

      <div className="memphis-page">
        {/* ===== SCATTERED GEOMETRIC DECORATIONS ===== */}

        {/* Triangle - top left */}
        <div
          className="geo-triangle animate-float"
          style={{
            '--geo-color': '#FF6B6B',
            '--base-rot': '15deg',
            top: '8%',
            left: '5%',
            transform: 'rotate(15deg)',
          } as React.CSSProperties}
        />

        {/* Circle - top right */}
        <div
          className="geo-circle animate-float"
          style={{
            '--geo-color': '#00D4AA',
            '--geo-size': '45px',
            '--base-rot': '-10deg',
            top: '12%',
            right: '8%',
            animationDelay: '1s',
          } as React.CSSProperties}
        />

        {/* Ring - left side */}
        <div
          className="geo-ring"
          style={{
            '--geo-color': '#B8A9FF',
            '--geo-size': '60px',
            top: '35%',
            left: '3%',
          } as React.CSSProperties}
        />

        {/* Square - right side, rotated */}
        <div
          className="geo-square animate-float"
          style={{
            '--geo-color': '#FFD93D',
            '--geo-size': '30px',
            '--base-rot': '25deg',
            top: '45%',
            right: '5%',
            transform: 'rotate(25deg)',
            animationDelay: '2s',
          } as React.CSSProperties}
        />

        {/* Cross - mid left */}
        <div
          className="geo-cross"
          style={{
            '--geo-color': '#FF6B6B',
            top: '55%',
            left: '6%',
          } as React.CSSProperties}
        >
          +
        </div>

        {/* Small circle - bottom left */}
        <div
          className="geo-circle"
          style={{
            '--geo-color': '#FF6B6B',
            '--geo-size': '20px',
            bottom: '20%',
            left: '8%',
          } as React.CSSProperties}
        />

        {/* Triangle - bottom right */}
        <div
          className="geo-triangle animate-float"
          style={{
            '--geo-color': '#B8A9FF',
            '--base-rot': '-20deg',
            bottom: '15%',
            right: '6%',
            transform: 'rotate(-20deg)',
            animationDelay: '0.5s',
          } as React.CSSProperties}
        />

        {/* Ring - top center-right */}
        <div
          className="geo-ring animate-float"
          style={{
            '--geo-color': '#FFD93D',
            '--geo-size': '35px',
            '--base-rot': '0deg',
            top: '6%',
            right: '30%',
            animationDelay: '1.5s',
          } as React.CSSProperties}
        />

        {/* Dot clusters */}
        <div className="dot-cluster" style={{ top: '22%', left: '10%' }} />
        <div className="dot-cluster" style={{ top: '70%', right: '10%' }} />
        <div className="dot-cluster" style={{ bottom: '10%', left: '15%' }} />

        {/* Cross - top area */}
        <div
          className="geo-cross"
          style={{
            '--geo-color': '#00D4AA',
            top: '18%',
            right: '18%',
            fontSize: '28px',
          } as React.CSSProperties}
        >
          +
        </div>

        {/* Small square - bottom area */}
        <div
          className="geo-square animate-spin-slow"
          style={{
            '--geo-color': '#00D4AA',
            '--geo-size': '18px',
            bottom: '30%',
            right: '12%',
          } as React.CSSProperties}
        />

        {/* Zigzag SVG decoration - left */}
        <svg
          className="absolute pointer-events-none"
          style={{ top: '60%', left: '2%' }}
          width="40"
          height="100"
          viewBox="0 0 40 100"
          fill="none"
        >
          <path
            d="M5 5 L35 20 L5 35 L35 50 L5 65 L35 80 L5 95"
            stroke="#FF6B6B"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Zigzag SVG decoration - right */}
        <svg
          className="absolute pointer-events-none"
          style={{ top: '25%', right: '2%' }}
          width="40"
          height="80"
          viewBox="0 0 40 80"
          fill="none"
        >
          <path
            d="M5 5 L35 15 L5 25 L35 35 L5 45 L35 55 L5 65 L35 75"
            stroke="#B8A9FF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* ===== MAIN CONTENT ===== */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-10 sm:px-10">
          {/* Navigation */}
          <nav
            className="animate-slide-left mb-16 flex items-center justify-between"
            style={{ animationDelay: '0s' }}
          >
            <div
              className="memphis-border hard-shadow-sm inline-block px-4 py-2"
              style={{ backgroundColor: '#FFD93D' }}
            >
              <span className="font-archivo text-sm tracking-widest uppercase">
                ACID MEMPHIS
              </span>
            </div>
            <Link
              to="/"
              className="memphis-border hard-shadow font-work inline-block px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000]"
              style={{ backgroundColor: '#FF6B6B', color: '#000' }}
            >
              &larr; Back Home
            </Link>
          </nav>

          {/* ===== HERO / INTRO SECTION ===== */}
          <header
            className="animate-slide-up mb-20"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Name with playful offset/overlap effect */}
            <div className="relative mb-6">
              {/* Shadow text layer */}
              <h1
                className="font-archivo text-6xl leading-none sm:text-8xl lg:text-9xl uppercase select-none"
                aria-hidden="true"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '3px #000',
                  position: 'absolute',
                  top: '6px',
                  left: '6px',
                }}
              >
                {intro.name}
              </h1>
              {/* Main text layer */}
              <h1
                className="font-archivo name-glitch relative text-6xl leading-none sm:text-8xl lg:text-9xl uppercase"
                style={{ color: '#000' }}
              >
                {intro.name}
              </h1>
            </div>

            {/* Tagline in a colored bar */}
            <div
              className="memphis-border hard-shadow mb-8 inline-block px-6 py-3"
              style={{ backgroundColor: '#00D4AA' }}
            >
              <p className="font-work text-lg font-bold uppercase tracking-wider sm:text-xl">
                {intro.tagline}
              </p>
            </div>

            {/* Bio */}
            <p
              className="font-work mb-8 max-w-2xl text-lg leading-relaxed"
              style={{ color: '#333' }}
            >
              {intro.bio}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href={intro.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="memphis-border hard-shadow font-work px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 hard-shadow-hover"
                style={{ backgroundColor: '#B8A9FF' }}
              >
                GitHub
              </a>
              <a
                href={intro.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="memphis-border hard-shadow font-work px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 hard-shadow-hover"
                style={{ backgroundColor: '#FFD93D' }}
              >
                LinkedIn
              </a>
              <Link
                to={intro.links.uses}
                className="memphis-border hard-shadow font-work px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 hard-shadow-hover"
                style={{ backgroundColor: '#FF6B6B' }}
              >
                /uses
              </Link>
            </div>
          </header>

          {/* ===== SQUIGGLY LINE SEPARATOR ===== */}
          <div className="mb-16">
            <svg className="squiggly-line" viewBox="0 0 800 20" preserveAspectRatio="none">
              <path
                d="M0 10 Q20 0 40 10 Q60 20 80 10 Q100 0 120 10 Q140 20 160 10 Q180 0 200 10 Q220 20 240 10 Q260 0 280 10 Q300 20 320 10 Q340 0 360 10 Q380 20 400 10 Q420 0 440 10 Q460 20 480 10 Q500 0 520 10 Q540 20 560 10 Q580 0 600 10 Q620 20 640 10 Q660 0 680 10 Q700 20 720 10 Q740 0 760 10 Q780 20 800 10"
                stroke="#000"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          {/* ===== PROJECTS SECTION ===== */}
          <section className="mb-20">
            <div className="relative mb-10 inline-block">
              <h2
                className="font-archivo text-4xl uppercase sm:text-5xl"
                style={{ color: '#000' }}
              >
                Projects
              </h2>
              {/* Decorative underline bar */}
              <div
                className="absolute -bottom-2 left-0 h-3 w-full"
                style={{ backgroundColor: '#FF6B6B', zIndex: -1 }}
              />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {projects.map((project, i) => {
                const bgColor = cardColors[i % cardColors.length]
                const pattern = patternBackgrounds[i % patternBackgrounds.length]
                const patternSize = patternSizes[i % patternSizes.length]

                return (
                  <div
                    key={project.name}
                    className="memphis-card memphis-border hard-shadow relative transition-all duration-300 hard-shadow-hover animate-slide-up"
                    style={{
                      backgroundColor: bgColor,
                      backgroundImage: pattern,
                      backgroundSize: patternSize,
                      animationDelay: `${0.3 + i * 0.15}s`,
                    }}
                  >
                    {/* Decorative corner shape */}
                    <div
                      className="card-deco absolute -right-3 -top-3 h-8 w-8"
                      style={{
                        backgroundColor: cardColors[(i + 2) % cardColors.length],
                        border: '3px solid #000',
                        borderRadius: i % 2 === 0 ? '50%' : '0',
                      }}
                    />

                    <div className="relative p-6">
                      {/* Project name */}
                      <h3 className="font-archivo mb-3 text-2xl uppercase sm:text-3xl">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="font-work mb-4 text-sm font-medium leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech pills */}
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.tech.map((t, ti) => (
                          <span
                            key={t}
                            className="memphis-pill inline-block rounded-full border-2 border-black px-3 py-1 text-xs font-bold uppercase"
                            style={{
                              backgroundColor: pillColors[ti % pillColors.length],
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="memphis-border hard-shadow-sm font-work inline-block bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_#000]"
                        >
                          Visit &rarr;
                        </a>
                        <Link
                          to={project.cvAnchor}
                          className="memphis-border hard-shadow-sm font-work inline-block bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_#000]"
                        >
                          CV Entry
                        </Link>
                      </div>
                    </div>

                    {/* Bottom pattern strip */}
                    <div
                      className="h-4 w-full border-t-3 border-black"
                      style={{
                        borderTop: '3px solid #000',
                        backgroundImage:
                          'repeating-linear-gradient(90deg, #000 0px, #000 4px, transparent 4px, transparent 8px)',
                        backgroundSize: '8px 100%',
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </section>

          {/* ===== SQUIGGLY LINE SEPARATOR ===== */}
          <div className="mb-16">
            <svg className="squiggly-line" viewBox="0 0 800 20" preserveAspectRatio="none">
              <path
                d="M0 10 Q20 0 40 10 Q60 20 80 10 Q100 0 120 10 Q140 20 160 10 Q180 0 200 10 Q220 20 240 10 Q260 0 280 10 Q300 20 320 10 Q340 0 360 10 Q380 20 400 10 Q420 0 440 10 Q460 20 480 10 Q500 0 520 10 Q540 20 560 10 Q580 0 600 10 Q620 20 640 10 Q660 0 680 10 Q700 20 720 10 Q740 0 760 10 Q780 20 800 10"
                stroke="#FF6B6B"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          {/* ===== INTERESTS SECTION ===== */}
          <section className="mb-20">
            <div className="relative mb-10 inline-block">
              <h2
                className="font-archivo text-4xl uppercase sm:text-5xl"
                style={{ color: '#000' }}
              >
                Interests
              </h2>
              <div
                className="absolute -bottom-2 left-0 h-3 w-full"
                style={{ backgroundColor: '#00D4AA', zIndex: -1 }}
              />
            </div>

            <div className="flex flex-wrap gap-5">
              {personal.interests.map((interest, i) => {
                const bgColor = cardColors[i % cardColors.length]
                return (
                  <div
                    key={interest.label}
                    className="memphis-border hard-shadow animate-slide-up cursor-default transition-all duration-300 hard-shadow-flip"
                    style={{
                      backgroundColor: bgColor,
                      animationDelay: `${0.5 + i * 0.1}s`,
                      transform: `rotate(${i % 2 === 0 ? '-2' : '2'}deg)`,
                    }}
                  >
                    <div className="flex items-center gap-3 px-5 py-4">
                      <span className="text-3xl">
                        {interestEmojis[interest.icon] || '✨'}
                      </span>
                      <span className="font-archivo text-lg uppercase">
                        {interest.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ===== SQUIGGLY LINE SEPARATOR ===== */}
          <div className="mb-10">
            <svg className="squiggly-line" viewBox="0 0 800 20" preserveAspectRatio="none">
              <path
                d="M0 10 Q20 0 40 10 Q60 20 80 10 Q100 0 120 10 Q140 20 160 10 Q180 0 200 10 Q220 20 240 10 Q260 0 280 10 Q300 20 320 10 Q340 0 360 10 Q380 20 400 10 Q420 0 440 10 Q460 20 480 10 Q500 0 520 10 Q540 20 560 10 Q580 0 600 10 Q620 20 640 10 Q660 0 680 10 Q700 20 720 10 Q740 0 760 10 Q780 20 800 10"
                stroke="#B8A9FF"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          {/* ===== FOOTER ===== */}
          <footer className="relative pb-12">
            {/* Decorative shapes around footer */}
            <div className="flex items-center justify-between">
              <div
                className="memphis-border hard-shadow-sm inline-block px-6 py-3"
                style={{ backgroundColor: '#FFD93D' }}
              >
                <p className="font-archivo text-sm uppercase tracking-wider">
                  &copy; {new Date().getFullYear()} &middot; {intro.name}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Small decorative shapes in footer */}
                <div
                  className="h-5 w-5 rounded-full border-2 border-black"
                  style={{ backgroundColor: '#FF6B6B' }}
                />
                <div
                  className="h-5 w-5 border-2 border-black"
                  style={{ backgroundColor: '#00D4AA', transform: 'rotate(45deg)' }}
                />
                <div
                  className="h-5 w-5 rounded-full border-2 border-black"
                  style={{ backgroundColor: '#B8A9FF' }}
                />
              </div>
            </div>

            {/* Bottom zigzag strip */}
            <div className="mt-8">
              <svg width="100%" height="12" viewBox="0 0 800 12" preserveAspectRatio="none">
                <path
                  d="M0 6 L10 0 L20 6 L30 0 L40 6 L50 0 L60 6 L70 0 L80 6 L90 0 L100 6 L110 0 L120 6 L130 0 L140 6 L150 0 L160 6 L170 0 L180 6 L190 0 L200 6 L210 0 L220 6 L230 0 L240 6 L250 0 L260 6 L270 0 L280 6 L290 0 L300 6 L310 0 L320 6 L330 0 L340 6 L350 0 L360 6 L370 0 L380 6 L390 0 L400 6 L410 0 L420 6 L430 0 L440 6 L450 0 L460 6 L470 0 L480 6 L490 0 L500 6 L510 0 L520 6 L530 0 L540 6 L550 0 L560 6 L570 0 L580 6 L590 0 L600 6 L610 0 L620 6 L630 0 L640 6 L650 0 L660 6 L670 0 L680 6 L690 0 L700 6 L710 0 L720 6 L730 0 L740 6 L750 0 L760 6 L770 0 L780 6 L790 0 L800 6"
                  stroke="#000"
                  strokeWidth="2.5"
                  fill="none"
                />
              </svg>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
