/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      es: { max: "375px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      transitionProperty: {
        bg: "background-color",
      },
      borderColor: {
        border: "var(--border)",
      },
      colors: {
        primary: "var(--primary)",
        "primary-text": "var(--primary-text)",
        "body-text": "var(--body-text)",
        "dark-text": "var(--dark-text)",
        "card-base": "var(--card-base)",
        "card-dark": "var(--card-dark)",
        badge: "var(--badge)",
        "navigation-background": "var(--navigation-background)",
        "primary-btn-hover": "var(--primary-btn-hover)",
        "outline-btn-hover": "var(--outline-btn-hover)",
      },
      animation: {
        text: "text 5s ease infinite",
        rotate: "rotate 1s ease-in-out",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
