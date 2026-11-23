import Image from "next/image";
import { publicPath } from "@/lib/site-url";

export function Brand({ homeLabel, footer = false }: { homeLabel: string; footer?: boolean }) {
  return (
    <a className="brand" href="#home" aria-label={`LANGROUP — ${homeLabel}`}>
      <Image
        src={publicPath("/images/logo.webp")}
        width={420}
        height={100}
        alt="LANGROUP"
        loading={footer ? "lazy" : "eager"}
      />
    </a>
  );
}
