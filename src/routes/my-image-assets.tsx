import { createFileRoute } from '@tanstack/react-router'
import { ImageAssetsPage } from '~/components/image-assets-page'

export const Route = createFileRoute('/my-image-assets')({
  component: ImageAssetsPage,
  head: () => ({
    meta: [{ title: 'Image Assets — Dimitar Dulev' }],
  }),
})
