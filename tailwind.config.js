/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        300: "1100px",
      },
      height: {
        300: "300px",
      },
      colors: {
        color1: "#EFEFEF",
        color2: "#9DA2AA",
        color3: "#3C5E84",
        color4: "#23466F",
        color5: "#7C93C3",
        color6: "#9EB8D9",
        color7: "#E1F0DA",
        color8: "#BFD8AF",
        color9: "#72DFD0",
        color10: "#A0F6D2",
        color11: "#E6F8F6"
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        'climate-crisis': ['Climate Crisis', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
