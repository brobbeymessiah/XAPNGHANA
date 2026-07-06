import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18202A",
        steel: "#5D6978",
        mist: "#F4F7FA",
        amber: "#C88A1E",
        forest: "#236A52",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(24, 32, 42, 0.12)",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
