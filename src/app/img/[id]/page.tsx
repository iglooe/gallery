import { FullscreenView } from "~/views/fullscreen-view"

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  return (
    <div className="flex min-h-0 min-w-0 overflow-y-hidden">
      <FullscreenView photoId={photoId} />
    </div>
  )
}
