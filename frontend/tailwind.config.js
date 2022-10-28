/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  theme: {
    extend: {},
  },
};
