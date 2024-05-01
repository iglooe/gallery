import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { TopNav } from "~/app/_components/top-nav";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
