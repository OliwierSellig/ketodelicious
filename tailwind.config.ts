import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cta-image": "url('../../public/images/bckg.png')",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        ubuntu: ["var(--font-ubuntu)", "sans-serif"],
        kalam: ["var(--font-kalam)", "sans-serif"],
      },
      colors: {
        "almond-tint": "#FDFCFA",
        "almond-normal": "#F9F5EF",
        "white-tint": "#FEFEFE",
        "white-normal": "#FAFCFC",
        "jade-tint": "#33b989",
        "jade-normal": "#00A86B",
        "jade-shade": "#008656",
        "gray-normal": "#333",
        "gray-shade": "#222",
      },
      boxShadow: {
        "cta-top": "0px 20px 24px 0px rgba(130, 129, 126, 1)",
        "cta-bot": "0px -20px 24px 0px rgba(130, 129, 126, 1)",
      },
      keyframes: {
        fadeFromTopHeader: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -32px)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, 0)",
          },
        },
      },
      animation: {
        animateScrollHeader: "fadeFromTopHeader 0.6s",
      },
    },
    screens: {
      xl: { max: "1280px" },

      lg: { max: "1024px" },

      md: { max: "760px" },

      sm: { max: "640px" },

      xsm: { max: "440px" },

      xxsm: { max: "340px" },
    },
  },
  plugins: [],
};
export default config;
