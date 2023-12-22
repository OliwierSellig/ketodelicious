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
        "add-recipe-background":
          "radial-gradient(circle, rgba(250, 252, 252, 0.4) 0%, rgba(250, 252, 252, 0.2) 100%)",
        "recipe-card-gradient-loader":
          "linear-gradient(rgba(51, 51, 51, 0) 0%, rgba(204, 204, 204, 0.1) 100%)",
        "recipe-card-gradient":
          "linear-gradient(rgba(51, 51, 51, 0) 0%, rgba(119, 119, 119, 0.2) 100%)",
        "recipe-view-gradient":
          "linear-gradient(0deg, rgba(85, 85, 85, 0.9) 0%, rgba(85, 85, 85, 0.4) 50%, rgba(85, 85, 85, 0.5) 100%)",
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
        "almond-shade-1": "#C7C4BF",
        "white-tint": "#FEFEFE",
        "white-normal": "#FAFCFC",
        "jade-tint": "#33b989",
        "jade-normal": "#00A86B",
        "jade-shade-1": "#008656",
        "jade-shade-2": "#00764b",
        "gray-tint-3": "#CCC",
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
        "gray-left": "-12px 0px 20px 0px rgba(85, 85, 85, 0.05)",
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
        fadeTop: {
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

        scaleOpacity: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },

        scaleUpModal: {
          "0%": {
            opactiy: "0",
            transform: "translate(-50%, -50%) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },

        fadeLeftModal: {
          "0%": {
            opactiy: "0",
            transform: "translate(-55%, -50%)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%)",
          },
        },

        vertiNavMove: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        rotate: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        dash: {
          "0%": {
            strokeDasharray: "1, 150",
            strokeDashoffset: "0",
          },
          "50%": {
            strokeDasharray: "90, 150",
            strokeDashoffset: "-35",
          },
          "100%": {
            strokeDasharray: "90, 150",
            strokeDashoffset: "-124",
          },
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
      xxxl: { max: "1800px" },

      xxl: { max: "1580px" },

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
