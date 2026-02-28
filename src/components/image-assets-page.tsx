import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { PiArrowLeftFill, PiDownloadSimpleFill } from 'react-icons/pi'
import { snapdom } from '@zumer/snapdom'
import PHOTO from '~/assets/photoshoot_dulev.png'

// ─── Download helper ────────────────────────────────────────────────────────

async function downloadAsset(ref: HTMLElement, filename: string) {
  const result = await snapdom(ref, { dpr: 1 })
  const blob = await result.toBlob({ type: 'png' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

// ─── Asset components (rendered at native resolution) ───────────────────────

function LinkedInProfileAsset() {
  return (
    <div
      style={{ width: 640, height: 640, position: 'relative', overflow: 'hidden' }}
    >
      <img
        src={PHOTO}
        alt="Dimitar Dulev"
        style={{ width: 640, height: 640, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
      />
    </div>
  )
}

function LinkedInBannerAsset() {
  return (
    <div
      className="neo-grid-bg"
      style={{
        width: 1584,
        height: 396,
        backgroundColor: '#FAFAF8',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '0 80px',
        fontFamily: 'IBM Plex Mono, monospace',
      }}
    >
      {/* Lime accent strip */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 16,
          background: '#C8FF00',
        }}
      />

      {/* dulev.dev logo — top right */}
      <div
        style={{
          position: 'absolute',
          top: 32,
          right: 48,
          fontFamily: 'IBM Plex Mono, monospace',
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: '1px',
          color: '#111111',
          background: '#C8FF00',
          border: '3px solid #111111',
          boxShadow: '4px 4px 0 #111111',
          padding: '6px 14px',
          lineHeight: 1.2,
        }}
      >
        dulev.dev
      </div>

      {/* Text content — centered in banner */}
      <div style={{ position: 'absolute', zIndex: 1, left: '50%', transform: 'translateX(-50%)' }}>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: '#111111',
            lineHeight: 1,
            letterSpacing: '-2px',
            marginBottom: 16,
          }}
        >
          Dimitar Dulev
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: '#FF6B00',
            letterSpacing: '1px',
          }}
        >
          fullstack dev &amp; tinkerer.
        </div>
      </div>
    </div>
  )
}

function GitHubProfileAsset() {
  return (
    <div
      style={{ width: 500, height: 500, position: 'relative', overflow: 'hidden' }}
    >
      <img
        src={PHOTO}
        alt="Dimitar Dulev"
        style={{ width: 500, height: 500, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
      />
    </div>
  )
}

// ─── Scaled preview wrapper ──────────────────────────────────────────────────

function ScaledPreview({
  nativeW,
  nativeH,
  scale,
  children,
  showCircle = false,
}: {
  nativeW: number
  nativeH: number
  scale: number
  children: React.ReactNode
  showCircle?: boolean
}) {
  return (
    <div
      style={{
        width: nativeW * scale,
        height: nativeH * scale,
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: nativeW,
          height: nativeH,
        }}
      >
        {children}
      </div>
      {showCircle && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            boxShadow: '0 0 0 2000px rgba(250,250,248,0.85)',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  )
}

// ─── Asset Card ──────────────────────────────────────────────────────────────

function AssetCard({
  badge,
  dimensions,
  filename,
  assetRef,
  previewScale,
  nativeW,
  nativeH,
  showCircle = false,
  children,
}: {
  badge: string
  dimensions: string
  filename: string
  assetRef: React.RefObject<HTMLDivElement | null>
  previewScale: number
  nativeW: number
  nativeH: number
  showCircle?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="bg-card border-3 border-text shadow-brutal flex flex-col">
      {/* Card header */}
      <div className="flex items-center justify-between border-b-3 border-text px-4 py-3">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-text bg-lime px-2 py-0.5">
          {badge}
        </span>
        <span className="font-mono text-xs text-muted">{dimensions}</span>
      </div>

      {/* Preview area */}
      <div className="flex flex-1 items-center justify-center p-6 bg-bg/50">
        <div ref={assetRef}>
          <ScaledPreview
            nativeW={nativeW}
            nativeH={nativeH}
            scale={previewScale}
            showCircle={showCircle}
          >
            {children}
          </ScaledPreview>
        </div>
      </div>

      {/* Footer with download */}
      <div className="border-t-3 border-text px-4 py-3 flex justify-end">
        <button
          type="button"
          onClick={() => {
            if (assetRef.current) {
              // assetRef → ScaledPreview outer (overflow:hidden) → transform div → actual asset div
              const assetEl = assetRef.current
                .firstElementChild   // ScaledPreview outer (scaled dimensions)
                ?.firstElementChild  // transform div (native dimensions, scale() applied)
                ?.firstElementChild as HTMLElement | null  // actual asset div (no transform)
              if (assetEl) downloadAsset(assetEl, filename)
            }
          }}
          className="font-mono text-xs font-bold uppercase tracking-wider py-2 px-4 bg-text text-card hover:bg-orange cursor-pointer flex items-center gap-2"
        >
          <PiDownloadSimpleFill />
          Download PNG
        </button>
      </div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function ImageAssetsPage() {
  const liProfileRef = useRef<HTMLDivElement>(null)
  const liBannerRef = useRef<HTMLDivElement>(null)
  const ghProfileRef = useRef<HTMLDivElement>(null)

  return (
    <div className="neo-grid-bg bg-bg min-h-screen">
      <nav className="max-w-[1100px] mx-auto px-6 pt-8 max-sm:px-4">
        <Link
          to="/"
          className="font-mono text-xs font-bold text-card no-underline py-1.5 px-3 bg-text hover:opacity-70 inline-block"
        >
          <PiArrowLeftFill className="inline mr-1" /> dulev.dev
        </Link>
      </nav>

      <main className="max-w-[1100px] mx-auto px-6 pt-8 pb-20 max-sm:px-4">
        {/* Header */}
        <header className="mb-12 bg-card border-3 border-text shadow-brutal p-7 pb-6 max-sm:px-4 max-sm:py-5">
          <h1 className="font-mono font-bold text-[clamp(2rem,6vw,3.5rem)] text-text m-0 mb-2 leading-tight uppercase">
            Image Assets
          </h1>
          <p className="font-sans text-[0.95rem] text-muted-light leading-relaxed m-0">
            Social media assets generated from React components using{' '}
            <a
              href="https://github.com/zumerlab/snapdom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange font-medium no-underline hover:underline"
            >
              snapDOM
            </a>
            {' '}— captures DOM nodes as pixel-perfect PNGs at native resolution.
          </p>
        </header>

        {/* Asset grid: profile pics side by side, banner full-width below */}
        <div className="grid grid-cols-2 gap-6 mb-6 max-md:grid-cols-1">
          <AssetCard
            badge="LinkedIn Profile"
            dimensions="640 × 640"
            filename="linkedin-profile.png"
            assetRef={liProfileRef}
            previewScale={0.35}
            nativeW={640}
            nativeH={640}
            showCircle
          >
            <LinkedInProfileAsset />
          </AssetCard>

          <AssetCard
            badge="GitHub Profile"
            dimensions="500 × 500"
            filename="github-profile.png"
            assetRef={ghProfileRef}
            previewScale={0.35}
            nativeW={500}
            nativeH={500}
            showCircle
          >
            <GitHubProfileAsset />
          </AssetCard>
        </div>

        <AssetCard
          badge="LinkedIn Banner"
          dimensions="1584 × 396"
          filename="linkedin-banner.png"
          assetRef={liBannerRef}
          previewScale={0.28}
          nativeW={1584}
          nativeH={396}
        >
          <LinkedInBannerAsset />
        </AssetCard>
      </main>
    </div>
  )
}
