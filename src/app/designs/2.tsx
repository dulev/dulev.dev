import { createFileRoute } from '@tanstack/react-router'
import { Design2 } from '~/components/designs/Design2'

export const Route = createFileRoute('/designs/2')({
  component: Design2,
})
