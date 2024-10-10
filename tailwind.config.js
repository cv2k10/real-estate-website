/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          600: '#4A3728',
        },
        beige: {
          100: '#F5F0EB',
        },
      },
    },
  },
  plugins: [],
};