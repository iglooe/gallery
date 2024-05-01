// disable caching of older images, and force new images to the ui ASAP.
export const dynamic = "force-dynamic";

import Image from "next/image";

import { GetImages } from "~/server/queries";

async function Images() {
  const images = await GetImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Image
            alt="uploaded image"
            width={512}
            height={320}
            src={image.url}
          />
          <div>{image.name}</div>
        </div>
      ))}
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
