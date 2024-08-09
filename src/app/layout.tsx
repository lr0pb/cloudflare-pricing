import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudflare-pricing.pages.dev/"),
  title: "Cloudflare Developer Platform Pricing",
  description:
    "Open source page for Cloudflare Developer Platform Pricing & Limits",
  openGraph: {
    url: "/",
    images: [
      {
        url: "/screenshot.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(inter.className, "flex justify-center w-full min-h-svh")}
      >
        {children}
      </body>
    </html>
  );
}
