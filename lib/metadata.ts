import type { Metadata } from "next";
import { siteName, translations } from "./content";
import { type Language, languages, languageUrl } from "./locales";
import { siteUrl } from "./site-url";

export function portfolioMetadata(language: Language): Metadata {
  const { title, description } = translations[language];
  const url = languageUrl(language);
  const socialImage = new URL(language === "uz" ? "images/og-uz.png" : "images/og.png", siteUrl);
  const alternate = language === "ru" ? "uz" : "ru";

  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: url.href,
      languages: {
        "ru-UZ": languageUrl("ru").href,
        "uz-UZ": languageUrl("uz").href,
        "x-default": languageUrl("ru").href,
      },
    },
    openGraph: {
      type: "website",
      locale: languages[language].locale.replace("-", "_"),
      alternateLocale: languages[alternate].locale.replace("-", "_"),
      url,
      siteName,
      title,
      description,
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
