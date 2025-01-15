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
          900: "#0B1120",
        },
      },
    },
  },
  plugins: [],
}

