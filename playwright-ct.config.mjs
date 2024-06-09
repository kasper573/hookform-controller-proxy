import { defineConfig, devices } from "@playwright/experimental-ct-react";
import react from "@vitejs/plugin-react";
import { defineConfig as defineViteConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  testDir: "./",
  timeout: 10 * 1000,
  use: {
    ctPort: 3100,
    ctViteConfig: defineViteConfig({
      plugins: [vanillaExtractPlugin(), react()],
    }),
  },
  // No need to test multiple browsers as there's no runtime differences
  projects: [{ name: "chromium", use: devices["Desktop Chrome"] }],
});
