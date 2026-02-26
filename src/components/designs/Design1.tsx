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

const stickyColors = [
  'bg-amber-100',
  'bg-yellow-100',
  'bg-orange-50',
  'bg-lime-50',
  'bg-rose-50',
]

const tapeColors = [
  'bg-amber-200/70',
  'bg-yellow-200/70',
  'bg-lime-200/70',
  'bg-sky-200/70',
  'bg-rose-200/70',
]

const rotations = [
  '-rotate-[1.5deg]',
  'rotate-[2deg]',
  '-rotate-[0.8deg]',
  'rotate-[1.2deg]',
  '-rotate-[2.2deg]',
  'rotate-[0.5deg]',
]

export function Design1() {
  useEffect(() => {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href =
      'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap'
    document.head.appendChild(linkEl)
    return () => {
      document.head.removeChild(linkEl)
    }
  }, [])

  const { intro, projects, personal } = siteContent

  return (
    <>
      <style>{`
        @keyframes stickyAppear {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-4deg) translateY(20px);
          }
          60% {
            opacity: 1;
            transform: scale(1.03) rotate(1deg) translateY(-4px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) translateY(0);
          }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(var(--base-rotation, 0deg));
          }
          50% {
            transform: translateY(-4px) rotate(calc(var(--base-rotation, 0deg) + 0.5deg));
          }
        }

        @keyframes doodleWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes tapeShine {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.75; }
        }

        @keyframes pencilWrite {
          0% { width: 0; }
          100% { width: 100%; }
        }

        .notebook-page {
          font-family: 'Courier Prime', 'Courier New', monospace;
          background-color: #faf6f0;
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(255, 243, 224, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(255, 236, 210, 0.3) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 80%, rgba(245, 235, 220, 0.4) 0%, transparent 45%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 27px,
              rgba(186, 172, 155, 0.15) 27px,
              rgba(186, 172, 155, 0.15) 28px
            );
        }

        .notebook-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
          z-index: 0;
        }

        .font-handwriting {
          font-family: 'Caveat', cursive;
        }

        .font-mono-notebook {
          font-family: 'Courier Prime', 'Courier New', monospace;
        }

        .sticky-note {
          animation: stickyAppear 0.5s ease-out both;
        }

        .sticky-note:nth-child(1) { animation-delay: 0.1s; }
        .sticky-note:nth-child(2) { animation-delay: 0.25s; }
        .sticky-note:nth-child(3) { animation-delay: 0.4s; }
        .sticky-note:nth-child(4) { animation-delay: 0.55s; }
        .sticky-note:nth-child(5) { animation-delay: 0.7s; }

        .float-gentle {
          animation: gentleFloat 4s ease-in-out infinite;
        }

        .hand-drawn-border {
          border-radius: 2px 8px 4px 12px;
          box-shadow:
            1px 1px 0 rgba(139, 119, 90, 0.15),
            -1px -1px 0 rgba(139, 119, 90, 0.05);
        }

        .tape-strip {
          animation: tapeShine 3s ease-in-out infinite;
        }

        .margin-line {
          border-left: 2px solid rgba(220, 100, 100, 0.2);
        }

        .doodle-hover:hover {
          animation: doodleWiggle 0.3s ease-in-out;
        }

        .fade-slide-up {
          animation: fadeSlideUp 0.6s ease-out both;
        }

        .pencil-underline {
          position: relative;
        }

        .pencil-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(
            90deg,
            rgba(139, 119, 90, 0.5) 0%,
            rgba(139, 119, 90, 0.7) 30%,
            rgba(139, 119, 90, 0.4) 60%,
            rgba(139, 119, 90, 0.6) 100%
          );
          border-radius: 1px;
          animation: pencilWrite 0.8s ease-out 0.3s both;
        }
      `}</style>

      <div className="notebook-page relative min-h-screen">
        {/* Content wrapper */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-10 sm:px-10">
          {/* Navigation - top right, like a paper clip bookmark */}
          <nav
            className="fade-slide-up mb-12 flex items-center justify-between"
            style={{ animationDelay: '0s' }}
          >
            <div className="flex items-center gap-2">
              <span className="font-handwriting text-2xl text-amber-800/60">
                📌
              </span>
              <span className="font-handwriting text-lg text-amber-800/50">
                page 1 of many...
              </span>
            </div>
            <Link
              to="/"
              className="font-handwriting hand-drawn-border rounded-md bg-amber-50/80 px-4 py-1.5 text-lg text-amber-900/70 transition-all hover:bg-amber-100/80 hover:-translate-y-0.5 hover:shadow-md"
            >
              ← back home
            </Link>
          </nav>

          {/* Spiral binding holes decoration */}
          <div className="absolute left-2 top-0 flex flex-col gap-7 pt-14 sm:left-4">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 rounded-full border-2 border-amber-800/10 bg-amber-50/50"
              />
            ))}
          </div>

          {/* Red margin line */}
          <div className="margin-line absolute bottom-0 left-14 top-0 sm:left-16" />

          {/* Main content area - offset to the right of the margin */}
          <div className="pl-8 sm:pl-12">
            {/* ========== INTRO SECTION ========== */}
            <header
              className="fade-slide-up mb-14"
              style={{ animationDelay: '0.1s' }}
            >
              {/* Date stamp */}
              <p className="font-mono-notebook mb-4 text-xs tracking-wider text-amber-800/40">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

              {/* Name - big handwriting */}
              <h1 className="font-handwriting pencil-underline mb-3 inline-block text-5xl font-bold leading-tight text-amber-950 sm:text-6xl">
                {intro.name}
              </h1>

              {/* Tagline */}
              <p className="font-handwriting mt-4 text-2xl leading-relaxed text-amber-800/70 sm:text-3xl">
                {intro.tagline}
              </p>

              {/* Bio - typewriter style */}
              <p className="font-mono-notebook mt-5 max-w-xl text-sm leading-relaxed text-amber-900/60">
                {intro.bio}
              </p>

              {/* Links as doodle-style tags */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  {
                    label: '✏️ GitHub',
                    href: intro.links.github,
                    external: true,
                  },
                  {
                    label: '📎 LinkedIn',
                    href: intro.links.linkedin,
                    external: true,
                  },
                  { label: '🗒️ /uses', href: intro.links.uses, external: false },
                ].map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-handwriting hand-drawn-border doodle-hover inline-block rounded-md border border-amber-800/15 bg-amber-50/60 px-3 py-1 text-lg text-amber-900/70 transition-colors hover:bg-amber-100/70"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="font-handwriting hand-drawn-border doodle-hover inline-block rounded-md border border-amber-800/15 bg-amber-50/60 px-3 py-1 text-lg text-amber-900/70 transition-colors hover:bg-amber-100/70"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </header>

            {/* Doodle divider */}
            <div
              className="fade-slide-up mb-10 flex items-center gap-3"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-800/15 to-transparent" />
              <span className="font-handwriting text-xl text-amber-800/30">
                ~ projects ~
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-800/15 to-transparent" />
            </div>

            {/* ========== PROJECTS SECTION ========== */}
            <section className="mb-14">
              <h2
                className="font-handwriting fade-slide-up mb-8 text-3xl font-semibold text-amber-950/80"
                style={{ animationDelay: '0.25s' }}
              >
                Things I've built 🛠️
              </h2>

              <div className="grid gap-8 sm:grid-cols-2">
                {projects.map((project, i) => (
                  <div
                    key={project.name}
                    className={`sticky-note float-gentle relative ${stickyColors[i % stickyColors.length]} ${rotations[i % rotations.length]} hand-drawn-border p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
                    style={
                      {
                        '--base-rotation': `${i % 2 === 0 ? '-1.5' : '2'}deg`,
                        animationDelay: `${3 + i * 0.5}s`,
                      } as React.CSSProperties
                    }
                  >
                    {/* Tape strip on top */}
                    <div
                      className={`tape-strip absolute -top-2.5 left-1/2 -translate-x-1/2 ${tapeColors[i % tapeColors.length]} h-5 w-16 rounded-sm shadow-sm`}
                      style={{
                        transform: `translateX(-50%) rotate(${i % 2 === 0 ? -2 : 3}deg)`,
                      }}
                    />

                    {/* Project name */}
                    <h3 className="font-handwriting mb-2 mt-1 text-2xl font-bold text-amber-950">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="font-mono-notebook mb-3 text-xs leading-relaxed text-amber-900/65">
                      {project.description}
                    </p>

                    {/* Tech stack - handwritten tags */}
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-handwriting inline-block rounded-full border border-amber-800/10 bg-white/50 px-2 py-0.5 text-sm text-amber-800/65"
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
                        className="font-handwriting text-lg text-amber-700 underline decoration-amber-700/30 decoration-wavy underline-offset-2 transition-colors hover:text-amber-900"
                      >
                        visit →
                      </a>
                      <Link
                        to={project.cvAnchor}
                        className="font-handwriting text-lg text-amber-700/60 underline decoration-amber-700/20 decoration-wavy underline-offset-2 transition-colors hover:text-amber-900"
                      >
                        cv entry
                      </Link>
                    </div>

                    {/* Small corner doodle */}
                    <span className="absolute -bottom-1 -right-1 text-lg opacity-20">
                      {i === 0 ? '🎵' : '🎬'}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Doodle divider */}
            <div
              className="fade-slide-up mb-10 flex items-center gap-3"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-800/15 to-transparent" />
              <span className="font-handwriting text-xl text-amber-800/30">
                ~ about me ~
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-800/15 to-transparent" />
            </div>

            {/* ========== INTERESTS SECTION ========== */}
            <section
              className="fade-slide-up mb-16"
              style={{ animationDelay: '0.6s' }}
            >
              <h2 className="font-handwriting mb-6 text-3xl font-semibold text-amber-950/80">
                When I'm not coding... 🌿
              </h2>

              <div className="flex flex-wrap gap-4">
                {personal.interests.map((interest, i) => (
                  <div
                    key={interest.label}
                    className={`sticky-note doodle-hover hand-drawn-border relative cursor-default ${stickyColors[(i + 2) % stickyColors.length]} px-5 py-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-1`}
                    style={{
                      transform: `rotate(${i % 2 === 0 ? '-' : ''}${1 + (i % 3)}deg)`,
                    }}
                  >
                    {/* Pin effect */}
                    <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-red-400/70 shadow-sm" />

                    <span className="mb-1 block text-center text-2xl">
                      {interestEmojis[interest.icon] || '✨'}
                    </span>
                    <span className="font-handwriting block text-center text-lg text-amber-900/75">
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ========== FOOTER - notebook style ========== */}
            <footer
              className="fade-slide-up border-t border-dashed border-amber-800/15 pb-10 pt-8"
              style={{ animationDelay: '0.8s' }}
            >
              {/* Coffee ring stain */}
              <div
                className="absolute -right-4 bottom-20 h-20 w-20 rounded-full border-[3px] border-amber-800/[0.04] opacity-60"
                style={{
                  background:
                    'radial-gradient(circle, transparent 55%, rgba(180, 140, 80, 0.03) 60%, transparent 70%)',
                }}
              />

              <p className="font-handwriting text-center text-xl text-amber-800/40">
                — end of page —
              </p>
              <p className="font-mono-notebook mt-2 text-center text-xs text-amber-800/25">
                scribbled with care &middot;{' '}
                {new Date().getFullYear()}
              </p>

              {/* Small doodle at the bottom */}
              <div className="mt-4 flex justify-center gap-2 text-amber-800/15">
                <span>~ ~ ~</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
