/** @type {import('tailwindcss').Config} */

const brandColors = {
  platinum: "#e2e0e2",
  richBlack: "#15202B",
  white: "#fff",
  borrow: "#775533",
};

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...brandColors,

        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platinum,
      },
    },
  },
  plugins: [],
};
