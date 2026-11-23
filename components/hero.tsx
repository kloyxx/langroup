import Image from "next/image";
import { BadgeCheck, MapPin, Send } from "lucide-react";
import { contacts, type Copy } from "@/lib/content";
import { publicPath } from "@/lib/site-url";
import { HeroMotion } from "./motion";

export function Hero({ text, location }: { text: Copy["hero"]; location: string }) {
  return (
    <section id="home" tabIndex={-1} className="container hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="location-tag"><MapPin size={16} aria-hidden="true" />{location}</p>
        <h1 id="hero-heading">
          {text.question}{" "}
          <span>{text.answer}</span>
        </h1>
        <p className="hero-description">{text.description}</p>
        <div className="hero-actions">
          <a href={contacts[0].telegramUrl} className="button button-primary">
            <Send size={18} aria-hidden="true" /> {text.telegram}
          </a>
          <a href="#services" className="button button-outline">{text.services}</a>
        </div>
        <p className="hero-note">
          <BadgeCheck size={19} aria-hidden="true" /> {text.note}
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
