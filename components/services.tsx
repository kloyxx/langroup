import { Check } from "lucide-react";
import { services, type Copy } from "@/lib/content";

export function Services({ text }: { text: Copy["services"] }) {
  return (
    <section className="section services" id="services" tabIndex={-1} aria-labelledby="services-heading">
      <div className="container">
        <h2 id="services-heading">{text.heading}</h2>
        <div className="services-grid">
          {services.map(({ id, icon: Icon, variant }) => (
            <article className="service-card" key={id}>
              <div className={`service-icon service-icon-${variant}`}>
                <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3>{text.categories[id].title}</h3>
              <ul>
                {text.categories[id].items.map((item) => (
                  <li key={item}><Check size={15} strokeWidth={2.25} aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
