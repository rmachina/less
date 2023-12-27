/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    screens: {
      '20xl': {'max': '1400px'},
      '19xl': {'max': '1320px'},
      '18xl': {'max': '1090px'},
      '17xl': {'max': '992px'},
      '16xl': {'max': '830px'},
      '15xl': {'max': '768px'},
      '14xl': {'max': '530px'},
    },
    extend: {
      
    },
  },
  plugins: [],
}
