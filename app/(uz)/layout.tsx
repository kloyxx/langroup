import type { ReactNode } from "react";
import { portfolioMetadata } from "@/lib/metadata";
import { Document } from "../document";

export const metadata = portfolioMetadata("uz");

export default function UzbekLayout({ children }: { children: ReactNode }) {
  return <Document language="uz">{children}</Document>;
}
