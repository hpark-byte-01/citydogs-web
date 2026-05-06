import type { Metadata } from "next";
import { DM_Serif_Display, Newsreader, Work_Sans, Caveat } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citydogs.ai"),
  title: "CityDogs",
  description:
    "CityDogs connects dog lovers with local dog events, walks, and a community that celebrates our four-legged friends. Available on iOS.",
  openGraph: {
    title: "CityDogs",
    description:
      "Playdates around the corner. Friends who get why you keep seven kinds of bully stick. CityDogs is the app for New York dog owners.",
    images: ["/og-image.png"],
    siteName: "CityDogs",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${dmSerif.variable} ${newsreader.variable} ${workSans.variable} ${caveat.variable}`}
    >
      <body className="paper-grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
