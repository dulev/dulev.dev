import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
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
]

function HomePage() {
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
              to={`/${d.id}` as '/'}
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
