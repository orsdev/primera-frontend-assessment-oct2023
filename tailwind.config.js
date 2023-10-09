/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      saira: "'Saira Condensed', sans-serif",
      asap: "'Asap', sans-serif",
    },
    extend: {
      colors: {
        light: "#fdfdfd",
        dark: "#27474e",
        mid: "#496970",
        primary: "#f3344a",
        primary_glare: "#f4d7da",
        secondary: "#678c94",
        secondary_glare: "#ebf0f1",
      },
      boxShadow: {
        custom: "0px 0px 40px rgba(39, 71, 78, 0.1)",
      },
    },
  },
  plugins: [],
};
