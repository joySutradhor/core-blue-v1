/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode :"class",
  theme: {
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif'],
      'albert': ["Albert Sans", "sans-serif"]
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 5s ease-in-out infinite',
      },
      
    },
    
  },
  plugins: [],
}