/** @type {import('@tailwindcss/postcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Sevillana" : ["Sevillana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
