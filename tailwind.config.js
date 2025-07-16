import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        "card-border": "rgb(var(--color-card-border) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
