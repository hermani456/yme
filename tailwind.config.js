/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#031a6d",
        background: "#F9F7F3",
        primary: "#7689a2",
        secondary: "#003d38",
        accent: "#3526a6",
        textDark: "#92a9fc",
        backgroundDark: "#0e0b07",
        primaryDark: "#5d7089",
        secondaryDark: "#c2fffa",
        accentDark: "#6859d9",
      },
    },
  },
  plugins: [],
};
