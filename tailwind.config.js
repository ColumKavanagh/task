/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teachyellow: {
          1: "#FAEB59",
        },
        teachnavy: {
          1: "#122454",
        },
        teachpink: {
          1: "#EED8FE",
        },
      },
    },
  },
  plugins: [],
};
