import { createFileRoute, redirect } from '@tanstack/react-router'
import { LINKEDIN_URL } from '~/lib/links'

export const Route = createFileRoute('/linkedin')({
  beforeLoad: () => {
    throw redirect({ href: LINKEDIN_URL })
  },
})
