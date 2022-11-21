// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind reset to avoid overriding Docusaurus styles
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"],
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  theme: {
    colors: {
      white: "#fff",
      primary: {
        300: "#13cc72",
        400: "#11b565",
        500: "#10ad61",
        600: "#0f9d58",
        default: "#0f9d58",
        700: "#0d8d4f",
        800: "#0d854b",
        900: "#0a6e3e",
      },
      secondary: {
        300: "#ededed",
        400: "#d4d4d4",
        500: "#adadad",
        600: "#878787",
        default: "#878787",
        700: "#616161",
        800: "#141414",
        900: "#0d0d0d",
      },
      success: "#0d8d4f",
      warning: "#f4b400",
      danger: "#db4437",
    },
    extend: {},
  },
  plugins: [],
};
