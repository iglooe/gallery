import Image from "next/image";

import { AspectRatio } from "~/components/ui/aspect-ratio";
import { getImage } from "~/server/queries";

export async function FullPageImageView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  return (
    <div className="w-[600px] md:w-[800px] ">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={image.url}
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  );
}
