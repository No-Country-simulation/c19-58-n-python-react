/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "close-menu": "url('../Obra-Social-Proyecto/public/menu-close.svg')",
        "open-menu": "url('../Obra-Social-Proyecto/public/menu-open.svg')"
      }

    },
  },
  plugins: [],
}