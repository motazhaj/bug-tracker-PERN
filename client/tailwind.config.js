/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2dffb7",
        secondary: "#20372a"
      },
      dropShadow: {
        glow: ["0 0px 20px rgba(85,101, 98, 0.35)", "0 0px 65px rgba(85, 101,98, 0.2)"],
      },
    },
  },
  plugins: [],
};
