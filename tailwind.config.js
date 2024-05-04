/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'all-side': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      },
    },
    fontFamily: {
      sans: [
        'Montserrat',
        'Roboto',
        'sans-serif',
      ],
    },
  },
  plugins: [],
}
