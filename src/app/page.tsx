// disable caching of older images, and force new images to the ui ASAP.
export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

import { ScrollArea } from "~/components/ui/scroll-area";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { getAllImages } from "~/server/queries";

async function Images() {
  const images = await getAllImages();

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-full w-full flex-col">
          <Link href={`/img/${image.id}`}>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={image.url}
                className="rounded-none object-cover"
                fill
                alt={image.name}
              />
            </AspectRatio>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <ScrollArea className="h-screen w-full max-w-[950px]">
      <div className="flex-1 flex-col overscroll-auto">
        <Images />
      </div>
    </ScrollArea>
  );
}
