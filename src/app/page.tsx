// disable caching of older images, and force new images to the ui ASAP.
export const dynamic = "force-dynamic";

import { GetImages } from "~/server/queries";

async function Images() {
  const images = await GetImages();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} />
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
