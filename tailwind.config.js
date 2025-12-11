/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        moon: {
          pink: '#ff76b8',
          navy: '#1f2a44',
          gold: '#ffd166',
          lilac: '#c4b5fd',
          cream: '#fff1f5'
        }
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgb(0 0 0 / 0.25)'
      }
    }
  },
  plugins: [forms, typography]
};
