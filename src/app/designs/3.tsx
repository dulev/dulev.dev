import { createFileRoute } from '@tanstack/react-router'
import { Design3 } from '~/components/designs/Design3'

export const Route = createFileRoute('/designs/3')({
  component: Design3,
})
