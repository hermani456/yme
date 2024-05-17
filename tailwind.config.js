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
        secondaryLight: "#026f66",
        'bluish': {
          '50': '#e6e8f0',
          '100': '#e6efff',
          '200': '#d0e2ff',
          '300': '#aac6ff',
          '400': '#7aa1ff',
          '500': '#4572ff',
          '600': '#1f49ff',
          '700': '#0d37f4',
          '800': '#0a2dcd',
          '900': '#0b27a7',
          '950': '#031a6d',
      },
      
      
      },
    },
  },
  plugins: [],
};
