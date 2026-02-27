import { createFileRoute } from '@tanstack/react-router'
import { UsesPage } from '~/components/uses-page'

export const Route = createFileRoute('/uses')({
  component: UsesPage,
  head: () => ({
    meta: [{ title: 'Uses — Dimitar Dulev' }],
  }),
})
