// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: env.SITE_URL,
  compressHTML: true,
  env: {
    schema: {
      SANITY_PROJECT_ID: envField.string({
        context: "server",
        access: "secret",
      }),
      SANITY_DATASET: envField.string({
        context: "server",
        access: "secret",
        default: "production",
      }),
      SITE_URL: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
    },
  },
  build: {
    inlineStylesheets: "always",
  },
  integrations: [react(), ...(env.SITE_URL ? [sitemap()] : [])],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});