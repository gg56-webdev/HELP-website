export const languages = [
  { name: "English", lang: "en" },
  { name: "Français", lang: "fr" },
] as const;

export type AvailableLocales = (typeof languages)[number]["lang"];

export const defaultLocale: AvailableLocales = "en";

export const useTranslation =
  (lang: keyof typeof ui) => (key: keyof (typeof ui)["en"]) =>
    // @ts-ignore
    ui[lang][key] || ui[defaultLocale][key];

export const ui = {
  en: {
    "link.home": "Home",
    "dropdown.what-we-do": "What we do",
    "link.in-brief": "In brief",
    "link.documentation": "Documentation",
    "link.covid-19": "Covid-19",
    "link.newsroom": "Newsroom",
    "dropdown.about": "About HELP",
    "link.who-we-are": "Who we are",
    "link.background": "Background",
    "link.network": "HELP Network",
    "link.contact": "Contact Us",
    "link.flagship-initiatives": "Flagship initiatives",
  },
  fr: {
    "link.home": "Accueil",
    "dropdown.what-we-do": "Nos actions",
    "link.in-brief": "En bref",
    "link.newsroom": "Annonces",
    "dropdown.about": "À propos de HELP",
    "link.who-we-are": "!!! Who we are",
    "link.background": "!!! Background",
    "link.network": "!!! Network",
    "link.contact": "!!! Contact",
    "link.flagship-initiatives": "Initiatives phares",
  },
} as const;
