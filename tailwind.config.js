/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        // add assets folder bg-image.jpg in here
        'hero-pattern': "url('/src/assets/bg-image.jpg')",
        // Add more custom images here
      },
    },
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },

  },
  plugins: [require("daisyui")],
}

