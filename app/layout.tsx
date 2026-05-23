import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollProgressBar from "./components/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

const siteUrl = "https://axionvextech.com";
const siteName = "AxionvexTech";
const title = "AxionvexTech — AI-Powered Software Engineering Agency";
const description =
  "We help SaaS and operations-heavy teams build, automate, and stabilize critical systems with senior engineers, practical AI, and structured remote delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | AxionvexTech",
  },
  description,
  keywords: [
    "AI software engineering agency",
    "senior product engineering",
    "AI automation systems",
    "remote engineering operations",
    "product engineering",
    "cloud reliability",
    "SaaS engineering agency",
    "embedded engineering support",
    "AI workflow automation",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "AxionvexTech",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnimatedBackground />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
