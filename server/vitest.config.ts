import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig, configDefaults } from "vitest/config";

const excludedFiles = [
  ...configDefaults.exclude,
  "server.ts", "bootstrap.ts",

  // CQR Files
  "**/**Query.ts/**",
  "**/**Command.ts/**",
  "**/**Response.ts/**",

  // Other Components
  "**/Controllers/**",
  "**/Database/**",
  "**/Routers/**",
];

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      provider: "v8",
      exclude: excludedFiles,
    },
    exclude: excludedFiles,
  },
});