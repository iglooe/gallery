// disable caching of older images, and force new images to the ui ASAP.
export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

import { getAllImages } from "~/server/queries";
import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./_components/simple_upload_button";

export default async function HomePage() {
  const images = await getAllImages();

  return (
    <div className="grid max-w-4xl grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:py-6">
      <div className="after:content shadow-highlight after:shadow-highlight relative col-span-1 row-span-3 flex h-full flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="flex max-h-full max-w-full items-center justify-center">
            <Icons.mountain />
          </span>
          <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
        </div>
        <Icons.home />
        <div className="flex flex-row">
          <Link
            href="/"
            className="flex h-12 items-center gap-2 px-4 pb-4 font-semibold"
          >
            <Icons.camera />
            <span className="scroll-m-20 text-3xl font-extrabold tracking-tight text-black lg:text-4xl">
              Acme Gallery
            </span>
          </Link>
        </div>
        <h1 className="mb-4 mt-8 font-bold uppercase tracking-widest text-black">
          2022 Event Photos
        </h1>
        <p className="max-w-[40ch] text-black/75 sm:max-w-[32ch]">
          Built by{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            derek
          </a>
          . Images by{" "}
          <a
            href={siteConfig.links.peppy}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            peppy
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.repo}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="h-18">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SimpleUploadButton />
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {images.map((image) => (
        <Link
          key={image.id}
          className="after:content after:shadow-highlight group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
          href={`/img/${image.id}`}
        >
          <Image
            src={image.url}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            width={720}
            height={480}
            alt="Demo photo"
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </Link>
      ))}
    </div>
  );
}
