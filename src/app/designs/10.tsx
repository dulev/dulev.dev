import { createFileRoute } from '@tanstack/react-router'
import { Design10 } from '~/components/designs/Design10'

export const Route = createFileRoute('/designs/10')({
  component: Design10,
})
