/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4081',
        secondary: '#536DFE',
        accent: '#00E676',
        'frandroid-pink': '#FF4081',
        'frandroid-blue': '#536DFE',
        'frandroid-green': '#00E676',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to right, #9333ea, #d946ef)',
      },
    },
  },
  plugins: [],
}