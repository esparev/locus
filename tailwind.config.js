const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media",
  content: [
    "./public/pages/*.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Poppins", "Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
