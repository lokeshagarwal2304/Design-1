/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#101d2c',
          blue: '#0066ff',
          paper: '#FBF8F2',
        }
      },
      fontFamily: {
        sans: ["Inter", "var(--font-plus-jakarta)", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
