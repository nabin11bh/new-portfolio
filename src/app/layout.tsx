import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-raw",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-raw",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-raw",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nabin Bhattarai - Fullstack Developer",
  description:
    "Fullstack developer building SewaSathi, a local services marketplace, plus a job portal and finance management system. React, Node.js, Express, TypeScript, MySQL.",
  keywords: [
    "fullstack developer",
    "React developer",
    "Node.js developer",
    "Nepal developer",
    "SewaSathi",
  ],
  openGraph: {
    title: "Nabin Bhattarai - Fullstack Developer",
    description:
      "Fullstack developer building real-world web applications with React, Node.js, and TypeScript.",
    url: "https://nabinbhattarai11.com.np",
    siteName: "Nabin Bhattarai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabin Bhattarai - Fullstack Developer",
    description:
      "Fullstack developer building real-world web applications with React, Node.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}