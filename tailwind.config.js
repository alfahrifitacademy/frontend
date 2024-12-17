/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customSafetyOrange: "#FF7900",
        customPurple: "#700070",
        customTekhlet: "#4A1B9D",
        customJonquil: "#FFCC00"
      },
    },
  },
  plugins: [],
};
