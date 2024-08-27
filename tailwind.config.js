/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}