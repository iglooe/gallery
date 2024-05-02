import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button } from "~/components/ui/button";
import { getImage } from "~/server/queries";
import { Icons } from "~/components/icons";
import { ExitButton } from "~/components/exit-button";
import { DeleteButton } from "~/components/delete-button";

export async function FullPageImageView(props: { photoId: string }) {
  // convert the id string to a number
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center text-white">
      <div className="relative flex-grow">
        <AspectRatio className="w-full" ratio={16 / 9}>
          <Image
            fill
            src={image.url}
            className="object-fill"
            alt={image.name}
          />
        </AspectRatio>
        <ExitButton />
        <div className="absolute bottom-0 right-0 p-1">
          <Link
            target="_blank"
            rel="noreferrer"
            href={image.url}
            aria-description="full res image url"
          >
            <Button variant="ghost" className="dark rounded-none" size="icon">
              <Icons.maximize className="h-6 w-6 text-black" />
            </Button>
          </Link>
        </div>
        <DeleteButton photoId={image.id} />
      </div>
    </div>
  );
}
