import "~/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server"

// prettier-ignore
import { ourFileRouter } from "~/app/api/uploadthing/core";

import { siteConfig } from "~/config/site"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Toaster } from "~/components/ui/sonner"
import { TailwindIndicator } from "~/components/tailwind-indicator"

import { TopNav } from "./_components/top-nav"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

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
}
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body className={`font-sans ${inter.variable} overflow-hidden`}>
          <ScrollArea className="h-screen w-full">
            <TopNav />
            <main className="flex justify-center p-4">
              {children}
              {modal}
              <div id="modal-root" />
              <Toaster />
              <TailwindIndicator />
            </main>
          </ScrollArea>
        </body>
      </html>
    </ClerkProvider>
  )
}
