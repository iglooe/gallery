// disable caching of older images, and force new images to the ui ASAP.
export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

import { getAllImages } from "~/server/queries";

async function Images() {
  const images = await getAllImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...images, ...images, ...images, ...images, ...images, ...images].map(
        (image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                style={{ objectFit: "contain" }}
                width={192}
                height={192}
                alt={image.name}
              />
            </Link>
            <div>{image.name}</div>
          </div>
        ),
      )}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <Images />
    </main>
  );
}
