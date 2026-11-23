import Image from "next/image";
import { BadgeCheck, MapPin, Send } from "lucide-react";
import { contacts, site } from "@/lib/content";
import { publicPath } from "@/lib/site-url";
import { HeroMotion } from "./motion";

export function Hero() {
  return (
    <section id="home" tabIndex={-1} className="container hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="location-tag"><MapPin size={16} aria-hidden="true" />{site.location}</p>
        <h1 id="hero-heading">
          Компьютер тормозит?
          <span>Мы поможем.</span>
        </h1>
        <p className="hero-description">
          Сборка, диагностика и настройка компьютеров. Сети, видеонаблюдение и разработка программного обеспечения в Ташкенте.
        </p>
        <div className="hero-actions">
          <a href={contacts[0].telegramUrl} className="button button-primary">
            <Send size={18} aria-hidden="true" /> Написать в Telegram
          </a>
          <a href="#services" className="button button-outline">Наши услуги</a>
        </div>
        <p className="hero-note">
          <BadgeCheck size={19} aria-hidden="true" /> Частные компьютерные мастера. Без посредников.
        </p>
      </div>
      <HeroMotion>
        <Image
          src={publicPath("/images/computer.svg")}
          alt=""
          width={620}
          height={480}
          fetchPriority="high"
        />
      </HeroMotion>
    </section>
  );
}
