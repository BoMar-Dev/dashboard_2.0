/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
    
  ],

  
  theme: {
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

