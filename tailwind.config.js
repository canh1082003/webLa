/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: {
          color_257866: "#257866",
          color_phu: "#3a9380",
        },
      },
      fontFamily: {
        text: ["Inria Sans", "sans-serif"],
        Title: ["Italiana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
