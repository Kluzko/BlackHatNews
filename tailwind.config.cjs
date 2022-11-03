/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#161722",
        "secondary": "#cacde8"
      }
    },
  },
  plugins: [
  ],
}
