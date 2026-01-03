import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mars Centrix | AI & Automation Agency",
  description: "Mars Centrix helps teams design, build, and deploy AI-powered automations that cut busywork, not corners. Get practical AI solutions that actually work.",
  keywords: "AI automation, workflow automation, business automation, AI agency, Mars Centrix",
  authors: [{ name: "Mars Centrix" }],
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "48x48", type: "image/png" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: [
      {
        rel: "icon",
        url: "/logo.png",
      },
    ],
  },
  openGraph: {
    title: "Mars Centrix | AI & Automation Agency",
    description: "Mars Centrix helps teams design, build, and deploy AI-powered automations that cut busywork, not corners.",
    url: "https://marscentrix.com",
    siteName: "Mars Centrix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mars Centrix | AI & Automation Agency",
    description: "Mars Centrix helps teams design, build, and deploy AI-powered automations that cut busywork, not corners.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
