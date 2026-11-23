import type { MetadataRoute } from "next";
import { languageOptions, languageUrl } from "@/lib/locales";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    "ru-UZ": languageUrl("ru").href,
    "uz-UZ": languageUrl("uz").href,
  };

  return languageOptions.map((language) => ({
    url: languageUrl(language).href,
    alternates: { languages },
  }));
}
