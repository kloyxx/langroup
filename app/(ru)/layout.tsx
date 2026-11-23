import type { ReactNode } from "react";
import { portfolioMetadata } from "@/lib/metadata";
import { Document } from "../document";

export const metadata = portfolioMetadata("ru");

export default function RussianLayout({ children }: { children: ReactNode }) {
  return <Document language="ru">{children}</Document>;
}
