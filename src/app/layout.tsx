import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RenderFlow",
  description: "A nextJs portfolio using prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        {children}
      </body>
    </html>
  );
}
