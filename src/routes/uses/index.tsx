import { createFileRoute } from '@tanstack/react-router'
import type { UsesSection } from './-uses-data'

export const Route = createFileRoute('/uses/')({
  component: UsesPage,
  head: () => ({
    meta: [{ title: 'Uses – Dimitar Dulev' }],
  }),
})

const sections: UsesSection[] = [
  {
    id: 'hardware',
    title: 'Hardware',
    content: (
      <ul>
        <li><strong>MacBook Pro 16" M4 Pro</strong> – main machine. Plenty of power for my needs.</li>
        <li><strong>Dell U2723QE 27" 4K</strong> – I just love the one cable setup.</li>
        <li><strong>Logitech Ergo K860</strong> – carpal tunnel forced the switch. Love the clicks of mechanical but my wrists don't.</li>
        <li><strong>Logitech MX Master 3S</strong> – of course 😁</li>
        <li><strong>AirPods Pro 3</strong></li>
      </ul>
    ),
  },
  {
    id: 'ai-coding',
    title: 'AI Coding Setup',
    content: (
      <ul>
        <li><strong>Claude Code (Max Plan)</strong> – where most of the work happens. I write less and less code directly, mostly guiding Claude Code from the terminal. Lots of aliases for quick access – <code>c</code>, <code>cf</code> and <code>cfr</code> for fork and resume.
          <ul>
            <li><strong>context7</strong> (MCP) – library docs lookup, sits on top of everything.</li>
            <li><strong>superpowers</strong> (plugin with skills) – systematic debugging and brainstorming are the standouts.</li>
            <li><strong>frontend-design</strong> (skill) – makes Claude much better at design. Generated 50+ design variations for this site, iterated from there.</li>
            <li><strong>code-simplifier</strong> (agent) – cleanup pass after implementation.</li>
          </ul>
        </li>
        <li><strong>Windsurf</strong> – free tab completions for when I do write code by hand.</li>
        <li><strong>aichat</strong> – aliased to <code>?</code>. Type <code>? kill whatever is running on port 3000</code> and it generates and runs the shell command. No context switching.</li>
      </ul>
    ),
  },
  {
    id: 'frontend-stack',
    title: 'Go-to Stack',
    content: (
      <ul>
        <li><strong>React 19</strong> + <strong>TypeScript</strong></li>
        <li><strong>TanStack Start</strong> – router, SSR, forms, query. Easier to reason about than Next.js, no Vercel moat.</li>
        <li><strong>Tailwind CSS v4</strong> + <strong>shadcn/ui</strong> (and Radix UI)</li>
        <li><strong>Drizzle ORM</strong> + <strong>PostgreSQL</strong> – more control and simpler than Prisma.</li>
        <li><strong>Zod</strong> – a must nowadays.</li>
        <li><strong>Jotai</strong> – atomic state. No need to nest a thousand context providers to isolate rerenders.</li>
        <li><strong>Motion</strong> – animations.</li>
        <li><strong>Vite</strong> – build tool.</li>
        <li><strong>Vitest</strong> – testing.</li>
        <li><strong>better-auth</strong> – authentication.</li>
      </ul>
    ),
  },
  {
    id: 'terminal',
    title: 'Terminal & Dev Tools',
    content: (
      <ul>
        <li><strong>Ghostty</strong> – migrated from Warp. Faster, more lightweight, better privacy. I have a custom command for AI CLI generation, so don't need Warp's AI features – everything else goes through Claude Code.</li>
        <li><strong>zsh + Oh My Zsh</strong> – refined theme, zsh-autosuggestions, zsh-completions.</li>
        <li><strong>zoxide</strong> – fast <code>cd</code> replacement, aliased to <code>j</code>. If you use the terminal often, you should be using this.</li>
        <li><strong>fzf</strong> – fuzzy finder. Custom <code>fgco</code> function that lists all branches with commit previews and checks out the selected one. Also use it for navigating git worktrees.</li>
        <li><strong>mise</strong> – runtime version manager. Replaces nvm, pyenv, etc.</li>
        <li><strong>vim</strong> – default editor. I've stopped trying to convince people 😆</li>
        <li><strong>1Password CLI</strong> – never store secrets in plain text. Loads them dynamically with Touch ID.</li>
        <li><strong>pnpm</strong></li>
      </ul>
    ),
  },
  {
    id: 'outdoor',
    title: 'Outdoor & Activities',
    content: (
      <ul>
        <li><strong>Oryx Nine</strong> – hardtail MTB, simpler to maintain. Converted to 1x12 with a full Deore groupset, only the shifter is upgraded to Deore SLX.</li>
        <li><strong>Suunto Race S</strong> – has mapping and a similar featureset to the Garmin 965 for half the price. Works for me.</li>
        <li><strong>Hoka Speedgoat 6</strong> – trail running. Hokas are just more comfortable than anything else. Had Cliftons before, loved those too.</li>
        <li><strong>Nike Pegasus 41</strong> – gym running.</li>
        <li><strong>Altra Torin</strong> – zero-drop for adaptation.</li>
        <li><strong>Salomon Quest 4D GTX</strong> – hiking.</li>
      </ul>
    ),
  },
]

function UsesPage() {
  return (
    <div>
      <main className="max-w-[860px] mx-auto px-8 pb-20 max-sm:px-4">
        <div className="bg-card border-3 border-text shadow-brutal p-7 max-sm:px-4 max-sm:py-5">
          <header className="mb-8">
            <h1 className="font-mono font-bold text-[clamp(2.8rem,7.5vw,4.5rem)] text-text m-0 mb-2 leading-tight">
              Uses
            </h1>
            <p className="font-sans text-[0.9rem] text-muted-light leading-relaxed m-0">
              Hardware, tools, and gear I use day-to-day.
            </p>
            <p className="font-mono text-[0.75rem] text-muted-light m-0 mt-3">
              Last updated: 1 March 2026
            </p>
          </header>

          <div className="flex flex-col gap-8">
            {sections.map((section) => (
              <section key={section.id}>
                <h2 className="font-mono font-bold text-xs text-orange border-2 border-orange px-2 py-0.5 leading-none inline-flex items-center mb-4 uppercase tracking-widest">
                  {section.title}
                </h2>
                <div className="font-sans text-[0.9rem] text-text leading-relaxed [&>p]:m-0 [&>p+p]:mt-3 [&>ul]:m-0 [&>ul]:p-0 [&>ul]:list-none [&_li]:py-1 [&_li]:pl-4 [&_li]:relative [&_li]:before:content-['›'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:font-mono [&_li]:before:text-orange [&_li]:before:font-bold [&_li]:before:text-base [&_strong]:font-mono [&_strong]:text-[0.85rem] [&_strong]:font-bold [&_code]:font-mono [&_code]:text-[0.8rem] [&_code]:text-orange [&_code]:bg-[#f5f5f0] [&_code]:px-1 [&_code]:py-0.5">
                  {section.content}
                </div>
              </section>
            ))}

          </div>
        </div>
      </main>
    </div>
  )
}
