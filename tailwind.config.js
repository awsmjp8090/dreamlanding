/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'card-dark': '#111',
      },
      borderColor: {
        'card-border': '#333',
      }      
    },
  },
  plugins: [],
};
