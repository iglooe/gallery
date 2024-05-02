import Link from "next/link";

import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Separator } from "~/components/ui/separator";
import { siteConfig } from "~/config/site";

import TopNav from "./top-nav";

export default function MobileNav() {
  return (
    <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Icons.menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Icons.camera />
              <span className="text-xl font-bold tracking-tight">Acme Inc</span>
            </div>
            <Separator className="mt-2" />
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Icons.home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Icons.about className="h-4 w-4" />
              About
            </Link>
            <div className="items-center px-6 py-6">
              <div className="flex flex-col gap-4 md:h-16 md:flex-row md:py-0">
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
          </nav>
        </SheetContent>
      </Sheet>
      <TopNav />
    </header>
  );
}
