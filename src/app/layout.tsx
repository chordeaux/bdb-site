import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const meloDrama = localFont({
  src: [
    { path: "/fonts/Melodrama-Variable.woff2", weight: "2000" },
  ],
  variable: "--font-melodrama",
});


export const metadata: Metadata = {
  title: "BDB",
  description: "We build modern solutions that help businesses grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${meloDrama.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
