import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AxionvexTech | Engineering Agency for Production Systems",
  description:
    "A fast-growing engineering agency that embeds senior engineers into product teams. Product engineering, technical strategy, and cloud reliability for SaaS, fintech, and high-growth teams.",
  keywords:
    "engineering agency, senior engineers, product engineering, technical consulting, cloud reliability, SaaS development",
  authors: [{ name: "AxionvexTech" }],
  creator: "AxionvexTech",
  publisher: "AxionvexTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axionvextech.com",
    siteName: "AxionvexTech",
    title: "AxionvexTech | Engineering Agency for Production Systems",
    description:
      "Senior engineers only. No junior handoffs. We build production systems for teams that need strong technical ownership and reliable delivery.",
    images: [
      {
        url: "https://axionvextech.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AxionvexTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AxionvexTech | Engineering Agency for Production Systems",
    description:
      "Senior engineers only. No junior handoffs. We build production systems for teams that need strong technical ownership and reliable delivery.",
    images: ["https://axionvextech.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/axionvextech-favicon.ico", sizes: "any" },
      { url: "/axionvextech-favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/axionvextech-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
