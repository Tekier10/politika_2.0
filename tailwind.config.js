/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // pro jistotu i novější Next.js struktury
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
