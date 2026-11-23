import { MapPin, Phone, Send } from "lucide-react";
import { contacts, type Copy } from "@/lib/content";

export function Contacts({ text, location }: { text: Copy["contacts"]; location: string }) {
  return (
    <section className="section contacts" id="contacts" tabIndex={-1} aria-labelledby="contacts-heading">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-intro">
            <h2 id="contacts-heading">{text.heading}</h2>
            <p>{text.description}</p>
            <p className="contact-location"><MapPin size={19} aria-hidden="true" />{location}</p>
          </div>
          <div className="contact-grid">
            {contacts.map((contact) => (
              <article className="contact-card" key={contact.id}>
                <h3>{text.names[contact.id]}</h3>
                <a className="contact-phone" href={`tel:${contact.telephone}`}>
                  <Phone size={17} strokeWidth={1.8} aria-hidden="true" />{contact.phone}
                </a>
                <a
                  className="button button-telegram"
                  href={contact.telegramUrl}
                  aria-label={`Telegram — ${text.names[contact.id]}, @${contact.telegram}`}
                >
                  <Send size={16} aria-hidden="true" />@{contact.telegram}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
