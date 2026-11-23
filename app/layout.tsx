import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/golos-text";
import "@fontsource-variable/manrope";
import { site } from "@/lib/content";
import "./globals.css";

const socialImage = new URL("images/og.png", site.url);

export const metadata: Metadata = {
  metadataBase: site.url,
  title: site.title,
  description: site.description,
  alternates: { canonical: site.url.href },
  openGraph: {
    type: "website",
    locale: "ru_UZ",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Компьютерные мастера LANGROUP в Ташкенте",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
