/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FFA500', // You can adjust this to match your exact orange shade
        },
      },
    },
  },
  plugins: [],
}