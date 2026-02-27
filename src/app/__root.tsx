/// <reference types="vite/client" />
import { useEffect, type ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouter,
  useMatches,
} from '@tanstack/react-router'
import { SoundProvider, SoundToggle } from '~/components/sound-provider'
import appCss from '~/styles/app.css?url'

const DESIGN_ROUTES = Array.from({ length: 47 }, (_, i) => `/designs/${i + 1}`)

function useArrowKeyNavigation() {
  const router = useRouter()
  const matches = useMatches()

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      const currentPath = matches[matches.length - 1]?.fullPath ?? '/'
      const currentIndex = DESIGN_ROUTES.indexOf(currentPath)

      if (currentPath === '/designs' || currentPath === '/designs/') {
        if (e.key === 'ArrowRight') {
          router.navigate({ to: '/designs/1' as '/' })
        }
        return
      }

      if (currentIndex === -1) return

      if (e.key === 'ArrowLeft') {
        if (currentIndex === 0) {
          router.navigate({ to: '/designs' as '/' })
        } else {
          router.navigate({ to: DESIGN_ROUTES[currentIndex - 1] as '/' })
        }
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < DESIGN_ROUTES.length - 1) {
          router.navigate({ to: DESIGN_ROUTES[currentIndex + 1] as '/' })
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router, matches])
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Dimitar Dulev — Fullstack Dev & Tinkerer' },
      {
        name: 'description',
        content:
          'Personal site of Dimitar Dulev. Fullstack developer & tinkerer.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  useArrowKeyNavigation()

  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen">
        <SoundProvider>
          {children}
          <SoundToggle />
        </SoundProvider>
        <Scripts />
      </body>
    </html>
  )
}
