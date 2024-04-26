import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  output: "hybrid",
  // so this marks everything as static except for pages I specify as 'export const prerender = false'
  redirects: {
    "/blog": "/blog/1",
  },
  server: {
    port: 3010,
  },
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    icon(),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    ssr: {
      noExternal: [
        "babylonjs",
        "react-dropzone",
        "tailwind-merge",
        "clsx",
        "@trpc/server",
        "@trpc/client",
        "polotno",
      ],
    },
    optimizeDeps: {
      exclude: ["polotno", "canvas"],
    },
  },
});
