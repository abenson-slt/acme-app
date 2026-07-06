/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@acme/design-system/tailwind-preset')],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
};
