import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import playformCompress from "@playform/compress";
import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    playformCompress(),
    tunnel(),
  ],
});
