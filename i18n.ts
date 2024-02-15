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
    "link.panel-discussions": "Panel discussions",
    "link.past-meetings": "Past meetings",
    "link.documentation": "Documentation",
    "link.newsroom": "Newsroom",
    "dropdown.about": "About HELP",
    "link.who-we-are": "Who we are",
    "link.background": "Background",
    "link.network": "Network",
    "link.contact": "Contact",
    "link.flagship-initiatives": "Flagship initiatives",
  },
  fr: {
    "link.home": "Accueil",
    "dropdown.what-we-do": "Nos actions",
    "link.in-brief": "En bref",
    "link.panel-discussions": "Débats d'Experts",
    "link.past-meetings": "Past meetings",
    "link.newsroom": "Annonces",
    "dropdown.about": "À propos de HELP",
    "link.who-we-are": "!!! Who we are",
    "link.background": "!!! Background",
    "link.network": "!!! Network",
    "link.contact": "!!! Contact",
    "link.flagship-initiatives": "Initiatives phares",
  },
} as const;
