import { createFileRoute } from '@tanstack/react-router'
import { Design1 } from '~/components/designs/Design1'

export const Route = createFileRoute('/designs/1')({
  component: Design1,
})
