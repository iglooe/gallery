// disable caching of older images, and force new images to the ui ASAP.
export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

import { Shell } from "~/components/shell";
import { getAllImages } from "~/server/queries";

async function Images() {
  const images = await getAllImages();

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {[...images, ...images].map((image) => (
        <div key={image.id} className="flex h-56 w-80 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={350}
              height={350}
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <Shell variant="markdown">
      <Images />
    </Shell>
  );
}
