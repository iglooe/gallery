import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import type { Metadata } from "next";

import { Toaster } from "~/components/ui/sonner";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { siteConfig } from "~/config/site";
import { ScrollArea } from "~/components/ui/scroll-area";

import DesktopNav from "./_components/desktop-nav";
import MobileNav from "./_components/mobile-nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body className={`font-sans ${inter.variable} overflow-hidden`}>
          <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <DesktopNav />
            <div className="flex flex-col">
              <MobileNav />
              <ScrollArea className="w-full">{children}</ScrollArea>
            </div>
          </div>
          {modal}
          <div id="modal-root" />
          <Toaster />
          <TailwindIndicator />
        </body>
      </html>
    </ClerkProvider>
  );
}
