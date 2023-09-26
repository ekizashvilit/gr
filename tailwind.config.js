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
        275: "275px",
      },

      backgroundColor: {
        gr: "#F1F2F6",
      },

      textColor: {
        customRed: "#ED1A25",
        customGrey: "#D6D6D6",
      },

      borderColor: {
        customRed: "#ED1A25",
      },

      padding: {
        customPadding: "20px",
      },
    },
  },
  plugins: [],
};
