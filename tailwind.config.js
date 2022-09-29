/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6366f1",

          "secondary": "#b7d7f4",

          "accent": "#ed6d8a",

          "neutral": "#191821",

          "base-100": "#2E2D48",

          "info": "#A3B6E0",

          "success": "#2BB679",

          "warning": "#C89509",

          "error": "#F23A78",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
