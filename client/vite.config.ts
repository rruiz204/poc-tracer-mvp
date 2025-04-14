import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    port: 5000,
  },
  resolve: {
    alias: [
      { find: "@services", replacement: "/src/Core/Services" },
      { find: "@schemas", replacement: "/src/Core/Schemas" },
      { find: "@helpers", replacement: "/src/Core/Helpers" },
      { find: "@models", replacement: "/src/Core/Models" },
      { find: "@stores", replacement: "/src/Core/Stores" },
      { find: "@hooks", replacement: "/src/Core/Hooks" },

      { find: "@components", replacement: "/src/Components" },
      { find: "@modules", replacement: "/src/Modules" },
      { find: "@assets", replacement: "/src/Assets" },
      { find: "@shadcn", replacement: "/src/Shadcn" },
    ],
  },
})
