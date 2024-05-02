import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Separator } from "~/components/ui/separator";

import TopNav from "./top-nav";

export default function MobileNav() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
              <Icons.logo />
              <span className="text-xl font-bold tracking-tight">Acme Inc</span>
            </div>
            <Separator className="mt-2" />
            <Link
              href="/"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Icons.home className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Icons.about className="h-5 w-5" />
              About
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>
        </SheetContent>
      </Sheet>
      <TopNav />
    </header>
  );
}
