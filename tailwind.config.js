/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx}"],
  theme: {
    screens: {
      mobile: "10px",
      "small-device": "480px",
      tablet: "770px",
      laptop: "990px",
      desktop: "1200px",
      "large-device": "1920px",
    },

    extend: {},
  },
  plugins: [],
};
