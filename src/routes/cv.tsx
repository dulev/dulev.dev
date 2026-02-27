import { createFileRoute } from '@tanstack/react-router'
import { CvPage } from '~/components/cv-page'

export const Route = createFileRoute('/cv')({
  component: CvPage,
  head: () => ({
    meta: [{ title: 'CV — Dimitar Dulev' }],
  }),
})
