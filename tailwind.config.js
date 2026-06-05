/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B2545", // Azul Escuro
        accent: "#C5A059",  // Dourado/Bronze
        secondary: "#F4EFEA", // Bege/Creme Claro
        whatsapp: "#25D366", // Verde WhatsApp
        darkGray: "#333333", // Cinza Escuro
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
