import Link from "next/link"

import { getImage } from "~/server/queries"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export async function FullscreenButton(props: { photoId: number }) {
  // convert the id string to a number
  const idAsNumber = Number(props.photoId)
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

  const image = await getImage(idAsNumber)
  return (
    <div className="absolute right-0 top-0 p-2">
      <Link
        target="_blank"
        rel="noreferrer"
        href={image.url}
        aria-description="full res image url"
      >
        <Button className="rounded-full" size="icon">
          <Icons.link className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  )
}
