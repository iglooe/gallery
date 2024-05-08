import Image from "next/image"
import Link from "next/link"

import { getAllImages } from "~/server/queries"

import { TitleCard } from "./_components/title-card"

// disable caching of older images, and force new images to the ui ASAP.
export const dynamic = "force-dynamic"

export default async function HomePage() {
  const images = await getAllImages()

  return (
    <div className="grid max-w-4xl grid-cols-1 items-center justify-center gap-2 sm:grid-cols-2">
      <TitleCard />
      {images.map((image) => (
        <Link
          key={image.id}
          className="group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-none after:shadow-highlight"
          href={`/img/${image.id}`}
        >
          <Image
            src={image.url}
            className="rounded-none brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            width={720}
            height={450}
            alt="Demo photo"
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </Link>
      ))}
    </div>
  )
}
