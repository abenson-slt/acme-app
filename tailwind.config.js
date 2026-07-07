/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@abenson-slt/acme-design-system/tailwind-preset')],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // @abenson-slt/acme-design-system ships pre-built JS whose Tailwind class strings
    // (e.g. Input's `size-full`, Badge's `border-info-border`/`bg-info-bg`)
    // must be scanned here too, or Tailwind's JIT never generates the CSS
    // for them (they only survive by coincidental overlap with app-authored
    // classes) — this was silently dropping most of the design system's
    // component styling.
    './node_modules/@abenson-slt/acme-design-system/dist/**/*.{js,cjs,mjs}',
  ],
  darkMode: 'class',
};
