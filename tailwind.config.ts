import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)"], // default body font
        display: ["var(--font-plus-jakarta)"], // headings
        text: ["var(--font-plus-jakarta)"], // normal text
      },
      colors: {
        primaryText: "#464646",
        heroBg: "#E9C81A",
      },
      letterSpacing: {
        tightCustom: "-0.015rem",
      },
      lineHeight: {
        relaxed160: "160%",
      },
    },
  },
  plugins: [],
};

export default config;