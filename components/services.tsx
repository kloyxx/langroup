import { Check } from "lucide-react";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section className="section services" id="services" tabIndex={-1} aria-labelledby="services-heading">
      <div className="container">
        <h2 id="services-heading">Чем мы можем помочь?</h2>
        <div className="services-grid">
          {services.map(({ title, icon: Icon, variant, items }) => (
            <article className="service-card" key={title}>
              <div className={`service-icon service-icon-${variant}`}>
                <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
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
