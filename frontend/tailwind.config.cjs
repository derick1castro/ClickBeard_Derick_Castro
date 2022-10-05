/** @type {import('tailwindcss').Config} */

const brandColors = {
  birdBlue: "#1D9BF0",
  platinum: "#e2e0e2",
  silver: "#71767B",
  onix: "#333639",
  richBlack: "#15202B",
  dark: "#000",
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
