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
        "almond-tint-2": "#FDFCFA",
        "almond-tint-1": "#FBF9F5",
        "almond-normal": "#F9F5EF",
        "white-tint": "#FEFEFE",
        "white-normal": "#FAFCFC",
        "jade-tint": "#33b989",
        "jade-normal": "#00A86B",
        "jade-shade-1": "#008656",
        "jade-shade-2": "#00764b",
        "gray-tint-2": "#777",
        "gray-tint-1": "#555",
        "gray-normal": "#333",
        "gray-shade": "#222",
        "red-normal": "#D23232",
      },
      boxShadow: {
        "cta-top": "0px 20px 24px 0px rgba(130, 129, 126, 1)",
        "cta-bot": "0px -20px 24px 0px rgba(130, 129, 126, 1)",
        "vertical-nav": "12px 0px 20px 0px rgba(85, 85, 85, 0.05)",
        "horizontal-nav": "0px 12px 20px 0px rgba(85, 85, 85, 0.05)",
        "recipe-input": "0px 12px 20px 0px rgba(85, 85, 85, 0.05)",
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
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": { opacity: "1" },
        },
        fadeLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeBottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeTopHeader: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        animateScrollHeader: "fadeFromTopHeader 0.6s",
      },
      aspectRatio: {
        "22/7": "22 / 7",
        "22/9": "22 / 9",
        "16/9": "16 / 9",
        "4/3": "4 / 3",
      },
    },
    screens: {
      xl: { max: "1280px" },

      lg: { max: "1024px" },

      mdl: { max: "900px" },

      md: { max: "760px" },

      sm: { max: "640px" },

      xsm: { max: "440px" },

      xxsm: { max: "340px" },
    },
  },
  plugins: [],
};
export default config;
