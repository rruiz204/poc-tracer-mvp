import { defineConfig, configDefaults } from "vitest/config";

const excludedFiles = [
  ...configDefaults.exclude,
  "server.ts", "bootstrap.ts",
  "**/Controllers/**",
  "**/Database/**",
  "**/Routers/**",
];

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      exclude: excludedFiles,
    },
    exclude: excludedFiles,
  },
});