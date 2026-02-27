import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/designs/')({
  component: DesignsPage,
})

const designs = [
  { id: 'main', route: '/', name: 'Main', desc: 'IBM Plex Mono 700 headers + DM Mono UI + Work Sans body' },
  { id: 'inspo', route: '/designs/12', name: 'Inspo', desc: 'Neobrutalist pixel blocks (Design 12)' },
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
              to={d.route as '/'}
              className="group rounded-lg border border-neutral-800 bg-neutral-900 p-5 transition-all hover:border-neutral-600 hover:bg-neutral-800"
            >
              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-sm font-mono text-neutral-500">
                  {d.id}
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
