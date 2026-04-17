import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://citydogs.ai"),
  title: "CityDogs — when you want more dogs in your life",
  description:
    "CityDogs connects dog lovers with local dog events, walks, and a community that celebrates our four-legged friends.",
  openGraph: {
    title: "CityDogs — when you want more dogs in your life",
    description:
      "Connect with dog lovers, find local events, and join a community that celebrates our four-legged friends.",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
