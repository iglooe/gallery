import Link from "next/link";

import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";

export default function DesktopNav() {
  return (
    <div className="sticky top-0 z-50 hidden md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <nav className="grid items-start px-2 pt-16 text-sm font-medium">
            <div className="border-r border-primary">
              <div className="flex flex-row">
                <Link
                  href="/"
                  className="flex h-12 items-center gap-2 px-4 pb-4 font-semibold"
                >
                  <Icons.camera />
                  <span className="text-xl font-semibold">Acme Gallery</span>
                </Link>
              </div>
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-6 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Icons.home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-6 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Icons.about className="h-4 w-4" />
                About
              </Link>
              <div className="items-center px-3 py-6">
                <div className="flex flex-col">
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
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
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
