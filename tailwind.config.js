/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#191624",
      },
      animation:{
        slideup:"slideup 1s ease-in-out"
      }
    },
  },
  plugins: [],
};
