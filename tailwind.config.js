/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
            DEFAULT: "#32aa3c",
        },
        "secondary": {
            DEFAULT: "#f2f0eb",
        },
        grey: "#adadad",
        red: "#FF0000",
      },
      fontSize: {
        "xxs": "8px",
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "2.25rem",
        "3xxl": "2.5rem",
        "4xl": "3rem",
      },
    }
  },
  plugins: [],
}

