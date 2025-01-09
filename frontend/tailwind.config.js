/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "serif"],
        title: ["Knewave", "serif"],
      },
      colors: {
        color: {
          primary: "#99cc99",
          secondary: "#02834f",
          accent: "#b22616",
          base: "#e6e7e9",
        },
      },
    },
  },

  plugins: [],
};
