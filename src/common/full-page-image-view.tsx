import Image from "next/image"

import { DeleteButton } from "~/components/delete-button"
import { ExitButton } from "~/components/exit-button"
import { FullscreenButton } from "~/components/fullscreen-button"
import { getImage } from "~/server/queries"

export async function FullPageImageView(props: { photoId: string }) {
  // convert the id string to a number
  const idAsNumber = Number(props.photoId)
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

  const image = await getImage(idAsNumber)

  return (
    <div className="relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center p-4 xl:p-0 wide:h-full xl:taller-than-854:h-auto">
      {/* Main image */}
      <div className="w-full overflow-hidden">
        <div className="relative flex aspect-[16/9] items-center justify-center">
          <Image
            src={image.url}
            width={1920}
            height={1280}
            priority
            alt="Next.js Conf image"
          />
          <OverlayMenu photoId={props.photoId} />
        </div>
      </div>
    </div>
  )
}

async function OverlayMenu(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId)
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

  const image = await getImage(idAsNumber)

  return (
    <>
      <FullscreenButton photoId={image.id} />
      <DeleteButton photoId={image.id} />
      <ExitButton />
    </>
  )
}
