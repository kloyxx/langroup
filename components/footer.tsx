import { MapPin } from "lucide-react";
import { navigation, site } from "@/lib/content";
import { Brand } from "./brand";
import { Year } from "./year";

export function Footer() {
  const buildYear = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    timeZone: "Asia/Tashkent",
  }).format(new Date());

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand footer />
            <p>Частные компьютерные мастера</p>
            <p className="footer-location"><MapPin size={16} aria-hidden="true" />{site.location}</p>
          </div>
          <nav className="footer-nav" aria-label="Навигация в подвале">
            {navigation.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
        </div>
        <p className="footer-copyright">© <Year buildYear={buildYear} /> {site.name}</p>
      </div>
    </footer>
  );
}
