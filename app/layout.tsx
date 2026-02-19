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
  title: "AxionvexTech | Global Technical Consulting & Web Development",
  description: "AxionvexTech delivers cutting-edge technology solutions and expert consulting services. We specialize in web development, technical consulting, and cloud solutions for enterprise clients worldwide.",
  keywords: "technical consulting, web development, cloud solutions, enterprise software, IT services, digital transformation",
  authors: [{ name: "AxionvexTech" }],
  creator: "AxionvexTech",
  publisher: "AxionvexTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axionvextech.com",
    siteName: "AxionvexTech",
    title: "AxionvexTech | Global Technical Consulting & Web Development",
    description: "Transform your digital future with our expert technical consulting and web development solutions.",
    images: [
      {
        url: "https://axionvextech.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AxionvexTech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AxionvexTech | Global Technical Consulting & Web Development",
    description: "Transform your digital future with our expert technical consulting and web development solutions.",
    images: ["https://axionvextech.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
