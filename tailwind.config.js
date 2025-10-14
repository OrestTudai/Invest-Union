/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#1A1A1A',
        gray: '#7B7B7B',
        darkGray: '#383838',
        lightGray: '#7B7B7B',
        background: '#FAF9F7',
        white: '#FCFCFC',
        green: '#488426',
        darkGreen: '#486935',
        error: '#DC2626',
      },
    },
  },
  plugins: [],
}
