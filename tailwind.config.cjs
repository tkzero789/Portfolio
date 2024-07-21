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
      colors: {
        primary: "#d1d5db",
        secondary: "#272724",
        "blur-header": "hsla(45, 17%, 95%, 0.6)",
        "gray-1": "hsl(60 4% 18% / 1)",
        "gray-2": "hsl(60 4% 22% / 1)",
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
