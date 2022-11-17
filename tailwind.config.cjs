/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#5B21B6',
          700: '#6D28D9',
          500: '#7C3AED',
        },
        darkBase: '#27272A',
        lightBase: '#F5F5F5',
      },
      fontFamily: {
        'Montserrat': "'Montserrat', sans-serif",
        'Poppins': "'Poppins', sans-serif",
      }
    },
  },
  plugins: [],
}
