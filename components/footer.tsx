import { MapPin } from "lucide-react";
import { siteName, type Copy } from "@/lib/content";
import { sectionIds } from "@/lib/locales";
import { Brand } from "./brand";
import { Year } from "./year";

export function Footer({ navigation, tagline, location }: { navigation: Copy["navigation"]; tagline: string; location: string }) {
  const buildYear = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    timeZone: "Asia/Tashkent",
  }).format(new Date());

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand homeLabel={navigation.labels.home} footer />
            <p>{tagline}</p>
            <p className="footer-location"><MapPin size={16} aria-hidden="true" />{location}</p>
          </div>
          <nav className="footer-nav" aria-label={navigation.footer}>
            {sectionIds.map((id) => <a key={id} href={`#${id}`}>{navigation.labels[id]}</a>)}
          </nav>
        </div>
        <p className="footer-copyright">© <Year buildYear={buildYear} /> {siteName}</p>
      </div>
    </footer>
  );
}
