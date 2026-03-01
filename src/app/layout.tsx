import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CheoTech Studio | Portfolio",
  description:
    "CheoTech Studio — Websites, mobile apps, Chrome extensions, and games. Crafting digital experiences that stand out.",
  applicationName: "CheoTech Studio",
  metadataBase: new URL("https://cheotechstudio.com"),
  openGraph: {
    title: "CheoTech Studio | Portfolio",
    description:
      "Websites, mobile apps, Chrome extensions, and games. Crafting digital experiences that stand out.",
    url: "https://cheotechstudio.com",
    siteName: "CheoTech Studio",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CheoTech Studio | Portfolio",
    description:
      "Websites, mobile apps, Chrome extensions, and games. Crafting digital experiences that stand out.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
