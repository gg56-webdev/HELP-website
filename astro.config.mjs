import { defineConfig } from "astro/config";
import { languages, defaultLocale } from "./i18n";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  i18n: {
    defaultLocale,
    locales: languages.map(({ lang }) => lang),
  },
});
