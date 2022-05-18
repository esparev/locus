const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Poppins", "Open Sans", ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        "5/16": "31.25%",
        "9/19": "47.36%",
        "5/6": "83.333333%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
