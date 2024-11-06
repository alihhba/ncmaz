/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "light",

  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // primary: {...colors.teal,
        //     '600': '#7692ff',
        //     '900': '#091540',
        // },
        primary: {
          50: "#edf3ff",
          100: "#deeaff",
          200: "#c4d7ff",
          300: "#a0bcff",
          400: "#7692ff",
          500: "#5b70f9",
          600: "#3d47ee",
          700: "#2f34d3",
          800: "#292faa",
          900: "#091540",
        },
        success: colors.green["500"],
        danger: colors.red["500"],
        pending: colors.amber["400"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-rtl"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
