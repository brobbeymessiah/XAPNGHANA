import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#001F46",
        steel: "#274B6C",
        mist: "#F3FCFF",
        brand: {
          DEFAULT: "#17CAF9",
          dark: "#0B9FCE",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 31, 70, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
