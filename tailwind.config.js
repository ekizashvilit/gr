/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        29: "29px",
        170: "170px",
        273: "273px",
        339: "339px",
      },

      height: {
        29: "29px",
        60: "60px",
      },

      backgroundColor: {
        gr: "#F1F2F6",
      },
    },
  },
  plugins: [],
};
