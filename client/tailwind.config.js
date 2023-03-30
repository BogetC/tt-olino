/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      primary: "var(--primary)",
      "primary-light": "var(--primary-light)",
      "primary-lighter": "var(--primary-lighter)",
      "red-light": "var(--red-light)",
      "blue-lighter": "var(--blue-lighter)",
    },
    spacing: {
      auto: "auto",
      0: 0,
      px: "1px",
      1: ".5rem",
      2: ".75rem",
      3: "1rem",
      4: "1.5rem",
      5: "2rem",
      6: "3rem",
      7: "4rem",
      8: "6rem",
      9: "8rem",
      10: "12rem",
      11: "16rem",
      12: "24rem",
    },
    fontFamily: {
      base: ["var(--font-poppins)"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
    },
    extend: {
      maxWidth: {
        screen: "100vw",
      },
    },
  },
  plugins: [],
};
