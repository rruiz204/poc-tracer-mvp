/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "cs-blue": {
          500: "#25396D",
          600: "#1F305C",
          700: "#182546",
          800: "#111A32",
          900: "#0B1120",
        },
      },
    },
  },
  plugins: [],
}

