/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        },
      },
      fontFamily:{
        'sans': ['Montserrat', ],
        'serif': ['Merriweather', ],
        "poppins": ["Poppins", ]
      },
      
    },
  },
  plugins: [],
}