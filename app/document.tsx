import type { ReactNode } from "react";
import "@fontsource-variable/golos-text";
import "@fontsource-variable/manrope";
import type { Language } from "@/lib/locales";
import "./globals.css";

export function Document({ language, children }: { language: Language; children: ReactNode }) {
  return (
    <html lang={language}>
      <body>{children}</body>
    </html>
  );
}
