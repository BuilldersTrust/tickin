/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      "--dark-blue-color": "var(#0D0f23) ",
      "--white-color": " var(#FAFAFA)",
      "--light-blue-color": "var(#194486)"
    },
      backgroundImage: {
        'hero-pattern': "url('../assets/wavy.png')",
        'hero-img': "url('../assets/hero11.png')",
      }
    },
    
  },
  plugins: [],
}

