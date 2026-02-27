import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/designs/')({
  component: DesignsPage,
})

const designs = [
  { id: 1, name: 'Dev Notebook', desc: 'Hand-drawn journal aesthetic' },
  { id: 2, name: 'Terminal', desc: 'CLI / green phosphor vibes' },
  { id: 3, name: 'Brutalist Raw', desc: 'Anti-design, massive type' },
  { id: 4, name: 'Bento Grid', desc: 'Apple-inspired card layout' },
  { id: 5, name: 'Retro OS', desc: 'Windows 95 nostalgia' },
  { id: 6, name: 'Editorial Magazine', desc: 'Serif publication feel' },
  { id: 7, name: 'Lo-fi Analog', desc: '4-color zine aesthetic' },
  { id: 8, name: 'Blueprint', desc: 'Technical schematic style' },
  { id: 9, name: 'Neon Tokyo', desc: 'Cyberpunk neon glow' },
  { id: 10, name: 'Cozy Woodshop', desc: 'Warm maker / workshop feel' },
  { id: 11, name: 'Neo Graffiti', desc: 'Neobrutalist street art' },
  { id: 12, name: 'Pixel Punch', desc: 'Neobrutalist pixel blocks' },
  { id: 13, name: 'Acid Memphis', desc: 'Neobrutalist 90s revival' },
  { id: 14, name: 'Stark Mono', desc: 'Neobrutalist monochrome' },
  { id: 15, name: 'Hot Dog Stand', desc: 'Neobrutalist neon clash' },
  { id: 16, name: 'Darkroom', desc: 'Photography darkroom, red safelight' },
  { id: 17, name: 'Dot Matrix', desc: 'Printer output, perforated paper' },
  { id: 18, name: 'Concrete', desc: 'Architectural brutalism, raw forms' },
  { id: 19, name: 'Typewriter Noir', desc: 'Ink & film noir atmosphere' },
  { id: 20, name: 'Circuit Board', desc: 'PCB traces, solder mask green' },
  { id: 21, name: 'Risograph', desc: 'Misregistered layers, spot colors' },
  { id: 22, name: 'Cassette Tape', desc: 'Analog tape, VHS distortion' },
  { id: 23, name: 'Stencil Punk', desc: 'DIY cut-and-paste zine' },
  { id: 24, name: 'Graph Paper', desc: 'Science notebook, hand-plotted' },
  { id: 25, name: 'Glitch', desc: 'RGB shift, data corruption art' },
  { id: 26, name: 'Stamp Collection', desc: 'Postage stamp neobrutalism, warm coral' },
  { id: 27, name: 'Paper Cutout', desc: 'Collage neobrutalism, terracotta + dusty blue' },
  { id: 28, name: 'Highlighter', desc: 'Marker-style highlights, clean bold type' },
  { id: 29, name: 'Ink Press', desc: 'Vintage letterpress, deep indigo accent' },
  { id: 30, name: 'Toy Blocks', desc: 'Playful building blocks, soft saturated colors' },
  { id: 31, name: 'Stamp Refined', desc: 'Stamp collection, lime+orange, no dot perforations' },
  { id: 32, name: 'Clean Punch', desc: 'Pixel Punch toned down, more white space' },
  { id: 33, name: 'Marker Board', desc: 'Lime+orange marker highlights, bold geo sans' },
  { id: 34, name: 'Press Sans', desc: 'Letterpress layout, sans-serif, lime+orange' },
  { id: 35, name: 'Sharp Blocks', desc: 'Toy blocks playfulness, sharp corners, lime+orange' },
  { id: 36, name: 'Stamp + Pixel Fonts', desc: 'Stamp Refined with Silkscreen + DM Mono' },
  { id: 37, name: 'Stamp + Memphis Fonts', desc: 'Stamp Refined with Archivo Black + Work Sans' },
  { id: 38, name: 'Stamp + Stark Fonts', desc: 'Stamp Refined with Outfit 900 + IBM Plex Mono' },
  { id: 39, name: 'Stamp + Silk/Plex Mix', desc: 'Stamp Refined with Silkscreen + IBM Plex Mono' },
  { id: 40, name: 'Stamp + Archivo/Mono', desc: 'Stamp Refined with Archivo Black + DM Mono' },
  { id: 41, name: 'Silk + DM Sans body', desc: 'Silkscreen + DM Mono UI + DM Sans articles' },
  { id: 42, name: 'Silk + Work Sans body', desc: 'Silkscreen + DM Mono UI + Work Sans articles' },
  { id: 43, name: 'Silk + IBM Plex Sans body', desc: 'Silkscreen + DM Mono UI + IBM Plex Sans articles' },
  { id: 44, name: 'Micro 5 + Work Sans', desc: 'Micro 5 headers + DM Mono UI + Work Sans body' },
  { id: 45, name: 'Tiny5 + Work Sans', desc: 'Tiny5 headers + DM Mono UI + Work Sans body' },
  { id: 46, name: 'Bytesized + Work Sans', desc: 'Bytesized headers + DM Mono UI + Work Sans body' },
  { id: 47, name: 'IBM Plex Mono Bold', desc: 'IBM Plex Mono 700 headers + DM Mono UI + Work Sans body' },
]

function DesignsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">dulev.dev</h1>
        <p className="mb-12 text-lg text-neutral-400">
          Pick a homepage design direction.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((d) => (
            <Link
              key={d.id}
              to={`/designs/${d.id}` as '/'}
              className="group rounded-lg border border-neutral-800 bg-neutral-900 p-5 transition-all hover:border-neutral-600 hover:bg-neutral-800"
            >
              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-sm font-mono text-neutral-500">
                  /{d.id}
                </span>
                <span className="font-semibold">{d.name}</span>
              </div>
              <p className="text-sm text-neutral-400">{d.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
