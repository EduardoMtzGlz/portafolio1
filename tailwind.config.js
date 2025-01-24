/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#617BF1",
      }, 
      boxShadow: {
        grid: "0px 4px 10px 0px rgba(0, 0, 0, .05)", 
      }, 
      fontFamily: {
        sans: ["var(--font-lato)"], 
      },
    },
  },
  plugins: [],
}
