// disable caching of older images, and force new images to the ui ASAP.
export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { AspectRatio } from "~/components/ui/aspect-ratio";
import { getAllImages } from "~/server/queries";
import { Icons } from "~/components/icons";
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import { ImageSkeleton } from "./_components/image-skeleton";
import { SignedIn } from "@clerk/nextjs";

async function AllImages() {
  const images = await getAllImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 pb-2">
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

function AlertNotice() {
  return (
    <SignedIn>
      <div className="px-4">
        <Alert className="space-x-1">
          <Icons.alert />
          <AlertTitle>This is a demo site.</AlertTitle>
          <AlertDescription>
            Uploading images is disabled by default.
          </AlertDescription>
        </Alert>
      </div>
    </SignedIn>
  );
}

export default function HomePage() {
  return (
    <div className="h-[calc(100vh-56px)] w-full max-w-[950px]">
      <div className="flex-1 flex-col overscroll-auto">
        <AlertNotice />
        <Suspense fallback={<ImageSkeleton />}>
          <AllImages />
        </Suspense>
      </div>
    </div>
  );
}
