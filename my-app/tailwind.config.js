/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable manual dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      darkbg: '#121212',
      darksurface: '#1E1E1E',
      darktext: '#EAEAEA',
      gold: '#C6A664'
    },
  },
},

  plugins: [],
};
