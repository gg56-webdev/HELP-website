export const languages = [
  { name: "English", lang: "en", default: true },
  { name: "Française", lang: "fr" },
];

export const defaultLocale = languages.find(
  (language) => language.default,
)?.lang;
