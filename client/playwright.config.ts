import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests/e2e",
  outputDir: "./src/tests/e2e/output",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:5000",
    browserName: "firefox",
    testIdAttribute: "test-id",
  },
  webServer: {
    command: "bun run dev",
    url: "http://localhost:5000",
  },
});