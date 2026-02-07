import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/layout/custom-cursor";

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
    locale: "en_US",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LenisProvider>
            <CustomCursor />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
