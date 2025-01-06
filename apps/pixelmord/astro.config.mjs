import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelmord.de",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), react()],
});
