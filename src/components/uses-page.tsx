import { Link } from '@tanstack/react-router'
import { PiArrowLeftFill, PiArrowUpRightFill } from 'react-icons/pi'

export function UsesPage() {
  return (
    <div className="neo-grid-bg bg-bg min-h-screen">
      <nav className="max-w-[860px] mx-auto px-6 pt-8 max-sm:px-4">
        <Link
          to="/"
          className="font-mono text-xs font-bold text-card no-underline py-1.5 px-3 bg-text hover:opacity-70 inline-block"
        >
          <PiArrowLeftFill className="inline mr-1" /> dulev.dev
        </Link>
      </nav>

      <main className="max-w-[860px] mx-auto px-6 pt-8 pb-20 max-sm:px-4">
        <header className="mb-10 bg-card border-3 border-text shadow-brutal p-7 pb-6 max-sm:px-4 max-sm:py-5">
          <h1 className="font-mono font-bold text-[clamp(2.8rem,7.5vw,4.5rem)] text-text m-0 mb-2 leading-tight uppercase">
            Uses
          </h1>
          <p className="font-sans text-[0.9rem] text-muted-light leading-relaxed m-0">
            Tools, apps, and things I've built for fun.
          </p>
        </header>

        <section>
          <h2 className="font-mono font-bold text-xs text-orange border-2 border-orange px-2 py-0.5 leading-none inline-flex items-center mb-5 uppercase tracking-widest">
            Built for fun
          </h2>

          <div className="bg-card border-3 border-text shadow-brutal p-6 max-sm:px-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-mono font-bold text-base text-text uppercase m-0 mb-1">
                  image-assets
                </h3>
                <p className="font-sans text-sm text-muted-light leading-relaxed m-0">
                  Generates social media assets (LinkedIn profile, LinkedIn banner, GitHub profile)
                  from React components using{' '}
                  <span className="font-mono text-orange">snapDOM</span> — captures DOM nodes as
                  pixel-perfect PNGs at native resolution.
                </p>
              </div>
              <Link
                to="/my-image-assets"
                className="font-mono text-xs font-bold text-card no-underline py-1.5 px-3 bg-text hover:bg-orange inline-flex items-center gap-1.5 shrink-0"
              >
                Open <PiArrowUpRightFill />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
