/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7B3D", // Add this line
        dark_primary: "#ef3907",
        secondary: "#FFF1EB",
        tertiary: "#EBF0FA",
        title: "#2A3551",
        paragraph: "#445473",
        light_paragraph: "#667799",
      },
      boxShadow: {
        custom: "0 4px 24px rgba(19,19,93,.1)",
      },
      animation: {
        fadeIn: "fadeIn .2s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      fontSize: {
        "6xl": "52px", // Adding custom font size for .text-6xl
      },
      borderRadius: {
        xl: "10px",
      },
    },
  },
  plugins: [],
};
