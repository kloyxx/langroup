import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { publicPath } from "@/lib/site-url";

const photoAvailable = existsSync(join(process.cwd(), "public/images/team.webp"));

export function About() {
  return (
    <section className="section about" id="about" tabIndex={-1} aria-labelledby="about-heading">
      <div className={photoAvailable ? "container about-layout about-with-photo" : "container about-layout"}>
        <div className="about-copy">
          <h2 id="about-heading">Кто мы?</h2>
          <p>
            LANGROUP — команда частных компьютерных мастеров из Ташкента. Мы занимаемся компьютерной техникой, сетевым оборудованием и разработкой программного обеспечения.
          </p>
          <p>
            Работаем напрямую с клиентами, разбираемся в задачах и предлагаем решения с учётом бюджета.
          </p>
        </div>
        {photoAvailable && (
          <Image
            className="team-photo"
            src={publicPath("/images/team.webp")}
            alt="Команда LANGROUP за рабочим местом"
            width={1000}
            height={750}
          />
        )}
      </div>
    </section>
  );
}
