import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ocobobyte.com',
  base: '/ocobobyte.github.io',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
