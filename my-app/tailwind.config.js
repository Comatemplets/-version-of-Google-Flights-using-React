/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Link: "#1a73e8",
        hoverLink: "#e8f0fe",
      },
      fontSize: {
        small: "12px",
      },
      height: {
        500: "500px",
      },
      width: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
