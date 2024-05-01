import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { TopNav } from "~/app/_components/top-nav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "~/app/api/uploadthing/core";

import "@uploadthing/react/styles.css";
import { ScrollArea } from "~/components/ui/scroll-area";
import { TailwindIndicator } from "~/components/tailwind-indicator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Image Gallery",
  description: "An image gallery made with Next.js and Drizzle ORM.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
        <body className={`font-sans ${inter.variable}`}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNav />
            <ScrollArea>{children}</ScrollArea>
          </div>
          {modal}
          <div id="modal-root" />
          <TailwindIndicator />
        </body>
      </html>
    </ClerkProvider>
  );
}
