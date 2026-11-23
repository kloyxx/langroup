import { publicPath, siteUrl } from "./site-url";

export const languages = {
  ru: { label: "Русский", locale: "ru-UZ", path: "/" },
  uz: { label: "Oʻzbekcha", locale: "uz-UZ", path: "/uz/" },
} as const;

export type Language = keyof typeof languages;

export const languageOptions = ["ru", "uz"] as const;

export const sectionIds = ["home", "services", "about", "workflow", "contacts"] as const;

export type SectionId = (typeof sectionIds)[number];

export function languagePath(language: Language) {
  return publicPath(languages[language].path);
}

export function languageUrl(language: Language) {
  return new URL(languages[language].path.slice(1), siteUrl);
}
