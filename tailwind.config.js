/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#70f7ce",

          "secondary": "#fce18a",

          "accent": "#f7e197",

          "neutral": "#3f4a47",

          "base-100": "#1c2224",

          "info": "#3abff8",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
}

