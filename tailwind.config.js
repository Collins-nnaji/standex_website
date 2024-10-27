/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#1ab188',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
      scale: {
        '103': '1.03', 
        '102': '1.02',
        '101': '1.01',// Custom scale value for more subtle scaling
      },
    },
  },
  plugins: [],
}

