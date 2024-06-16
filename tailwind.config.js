/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },

      },
      animation: {
        float1: 'float 3s ease-in-out infinite',
        float2: 'float 4s ease-in  infinite',
        float: 'float 2s ease-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}

