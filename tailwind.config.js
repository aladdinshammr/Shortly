/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Specifically scan index.html in the root
    "./pages/**/*.html", // Scan any HTML files in a "pages" folder
    "./js/**/*.js", // Scan any JavaScript files where you might toggle classes
    "./src/**/*.{html,js}", // If you have a src folder, scan that too
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};
