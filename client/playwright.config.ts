import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  outputDir: "./tests/e2e/output",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:5000",
    browserName: "firefox",
  },
  webServer: {
    command: "bun run dev",
    url: "http://localhost:5000",
  },
});