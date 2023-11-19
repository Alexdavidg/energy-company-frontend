/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FFFBFF',
        'onbackground': '#1B1B1F',
        'primary': '#273FFF',
        'onprimary': '#FFFFFF',
        'primarycontainer': '#dfe0ff',
      },
    },
  },
  plugins: [],
}

