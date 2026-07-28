import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        body: ["Outfit", "system-ui", "sans-serif"],
        heading: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      colors: {
        cream: "#FDFBF7",
        navy: "#1a3a5c",
        gold: "#c9a84c",
      },
    },
  },
  plugins: [],
} satisfies Config;
