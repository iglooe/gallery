import Link from "next/link";

import { Icons } from "~/components/icons";
import { Separator } from "~/components/ui/separator";

export default function DesktopNav() {
  return (
    <div className="sticky top-0 z-50 hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Icons.logo className="h-6 w-6" />
            <span className="text-xl font-semibold">Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Icons.home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Icons.about className="h-4 w-4" />
              About
            </Link>
            <Separator className="my-4" />
          </nav>
        </div>
      </div>
    </div>
  );
}
