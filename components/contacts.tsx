import { MapPin, Phone, Send } from "lucide-react";
import { contacts, site } from "@/lib/content";

export function Contacts() {
  return (
    <section className="section contacts" id="contacts" tabIndex={-1} aria-labelledby="contacts-heading">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-intro">
            <h2 id="contacts-heading">Нужна помощь с техникой?</h2>
            <p>Напишите нам, расскажите о проблеме или отправьте фото ошибки. Обсудим возможное решение и стоимость.</p>
            <p className="contact-location"><MapPin size={19} aria-hidden="true" />{site.location}</p>
          </div>
          <div className="contact-grid">
            {contacts.map((contact) => (
              <article className="contact-card" key={contact.name}>
                <h3>{contact.name}</h3>
                <a className="contact-phone" href={`tel:${contact.telephone}`}>
                  <Phone size={17} strokeWidth={1.8} aria-hidden="true" />{contact.phone}
                </a>
                <a
                  className="button button-telegram"
                  href={contact.telegramUrl}
                  aria-label={`Telegram — ${contact.name}, @${contact.telegram}`}
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
