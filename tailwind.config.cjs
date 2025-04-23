/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      /* ---- animazione logo fluttuante ---- */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },

      /* ---- font calligrafico ---- */
      fontFamily: {
        script: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
