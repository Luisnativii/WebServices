/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'B1-Crema': '#fff2d8',
        'B2-Blue': '#113946',
      },
    },
  },
  variants: {
    extend: {
      screens: ['sm', 'md', 'lg', 'xl'],
    },
  },
  plugins: [],
}



