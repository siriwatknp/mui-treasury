/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    "./blocks/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.mdx",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  presets: [require("./blocks/tailwind-preset/material-ui-tailwind-preset")],
  plugins: [],
};
