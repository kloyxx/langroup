import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Copy } from "@/lib/content";
import { publicPath } from "@/lib/site-url";

const photoAvailable = existsSync(join(process.cwd(), "public/images/team.webp"));

export function About({ text }: { text: Copy["about"] }) {
  return (
    <section className="section about" id="about" tabIndex={-1} aria-labelledby="about-heading">
      <div className={photoAvailable ? "container about-layout about-with-photo" : "container about-layout"}>
        <div className="about-copy">
          <h2 id="about-heading">{text.heading}</h2>
          <p>{text.introduction}</p>
          <p>{text.approach}</p>
        </div>
        {photoAvailable && (
          <Image
            className="team-photo"
            src={publicPath("/images/team.webp")}
            alt={text.photoAlt}
            width={1000}
            height={750}
          />
        )}
      </div>
    </section>
  );
}
