/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
    
  ],

  theme: {
   
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    },


    extend: {
      colors: {
        customBlue: '#407AB4',
        customRed: '#D45D5D',
        customPurple: '#7A5CBB',
        babyBlue: '#C5E2FF',
        buttonGreen:'#dae9d9',
        customPink: '#E87BDD',
        customLightGray:'#F3F3F3'
      },
    },
  },
  plugins: [],
}

