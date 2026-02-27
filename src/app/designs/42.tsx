import { createFileRoute } from '@tanstack/react-router'
import { Design42 } from '~/components/designs/Design42'

export const Route = createFileRoute('/designs/42')({
  component: Design42,
})
