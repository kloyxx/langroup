import { contacts, siteName, translations } from "@/lib/content";
import { languageUrl, type Language } from "@/lib/locales";
import { About } from "./about";
import { Brand } from "./brand";
import { Contacts } from "./contacts";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Services } from "./services";
import { Workflow } from "./workflow";

export function Portfolio({ language }: { language: Language }) {
  const text = translations[language];
  const location = `${text.city}, ${text.country}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: languageUrl(language).href,
    description: text.description,
    areaServed: {
      "@type": "City",
      name: text.city,
      containedInPlace: { "@type": "Country", name: text.country },
    },
    contactPoint: contacts.map(({ id, telephone, telegramUrl }) => ({
      "@type": "ContactPoint",
      name: text.contacts.names[id],
      telephone,
      url: telegramUrl,
      availableLanguage: "ru",
    })),
  };

  return (
    <>
      <a className="skip-link" href="#main-content">{text.skipLink}</a>
      <Header
        brand={<Brand homeLabel={text.navigation.labels.home} />}
        language={language}
        text={text.navigation}
      />
      <main id="main-content" tabIndex={-1}>
        <Hero text={text.hero} location={location} />
        <Services text={text.services} />
        <About text={text.about} />
        <Workflow text={text.workflow} />
        <Contacts text={text.contacts} location={location} />
      </main>
      <Footer navigation={text.navigation} tagline={text.footerTagline} location={location} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
