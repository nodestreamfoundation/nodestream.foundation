import "./globals.css";

import type { Metadata } from "next";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { Space_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "The Nodestream Foundation",
  description: "The Nodestream Foundation.",
  // keywords: "",
  // openGraph: {
  //   title: "",
  //   description: "",
  //   url: "",
  //   siteName: "",
  //   images: [{url: ''}],
  // },
};

import { cn } from "@/lib/utils";

const fonts = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          fonts.className,
          "min-h-screen bg-background antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  );
}
