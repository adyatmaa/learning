/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0)'},
        },
      },
      animation: {
        slideIn: 'slideIn 1.8s ease-out',
      },
    },
  },
  plugins: [],
}

