import { About } from "@/components/about";
import { Brand } from "@/components/brand";
import { Contacts } from "@/components/contacts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Workflow } from "@/components/workflow";
import { contacts, site } from "@/lib/content";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url.href,
  description: site.description,
  areaServed: {
    "@type": "City",
    name: "Ташкент",
    containedInPlace: { "@type": "Country", name: "Узбекистан" },
  },
  contactPoint: contacts.map(({ name, telephone, telegramUrl }) => ({
    "@type": "ContactPoint",
    name,
    telephone,
    url: telegramUrl,
    availableLanguage: "ru",
  })),
};

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main-content">Перейти к содержанию</a>
      <Header brand={<Brand />} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <About />
        <Workflow />
        <Contacts />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
