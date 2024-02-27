import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});