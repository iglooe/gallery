import { FullPageImageView } from "~/common/full-page-image-view"

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  return (
    <div className="flex size-full min-h-0 min-w-0 overflow-y-hidden">
      <FullPageImageView photoId={photoId} />
    </div>
  )
}
