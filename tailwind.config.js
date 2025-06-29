/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'safe-area-pb': '0px',
      },
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        'screen-safe': ['100vh', '100dvh'],
        'fill-available': '-webkit-fill-available',
      },
      height: {
        'screen-safe': ['100vh', '100dvh'],
        'fill-available': '-webkit-fill-available',
      }
    },
  },
  plugins: [],
};