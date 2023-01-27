/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-yellow": "#FFD232",
        "c-green": "#01E801",
      },
      backgroundColor: {
        "cb-gold": "#D2B6A2",
      },
      fontWeight: {
        w7: "700",
      },
      fontSize: {
        t86: "86px",
        t50: "50px",
      },

      fontFamily: {
        fair: ["Playfair Display", "serif"],
      },
      lineHeight: {
        l11: "89px",
        l12: "45px",
        l14: "55px",
      },
      letterSpacing: {
        tightest_1: "-0.04em",
      },
      width: { w400: "650px" },
    },
  },
  plugins: [],
};
