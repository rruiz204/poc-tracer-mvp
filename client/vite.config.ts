import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    port: 5000,
  },
})
