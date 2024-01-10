/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    "./blocks/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
