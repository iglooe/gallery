import { siteConfig } from "~/config/site"
import { Icons } from "~/components/icons"

//prettier-ignore
export function TitleCard() {
  return (

      <div className="after:content relative col-span-1 row-span-3 flex h-full flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="flex max-h-full max-w-full items-center justify-center">
            <Icons.mountain />
          </span>
          <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
        </div>
        <div className="flex flex-row">
          <div className="flex h-12 items-center gap-2 px-4 pb-4 font-semibold">
            <Icons.camera />
            <span className="scroll-m-20 text-3xl font-extrabold tracking-tight text-black lg:text-4xl">
              {siteConfig.name}
            </span>
          </div>
        </div>
        <h1 className="mb-4 mt-6 font-bold uppercase tracking-widest text-black">
          An Example Gallery
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
        <div
          id="alert-border"
          className="flex items-center border-l-4 bg-background p-4"
          role="alert"
        >
          <Icons.alert />
          <div className="ms-3 text-sm font-medium text-gray-800 dark:text-gray-300">
            This is a demo app!{" "}
            <span className="text-sm font-normal">
              Image uploads are disabled
            </span>
          </div>
        </div>
      </div>
  )
}
