import { keyframes } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openS: ['OPENSANS', 'sans-serif'],
        sui: ['SUI'],
      },
      fontSize: {
        '1.5cqw': '1.5cqw',
      },
      keyframes: {
        moveRotUpToCenter : {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(8px) rotate(0deg)" },
          "100%": { transform: "translateY(8px) rotate(45deg)" },
        },
        moveRotDownToCenter : {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(0deg)" },
          "100%": { transform: "translateY(-8px) rotate(-45deg)" },
        },
        moveRotCenterToUp : {
          "0%": { transform: "translateY(8px) rotate(45deg)" },
          "50%": { transform: "translateY(8px) rotate(0deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        moveRotCenterToDown : {
          "0%": { transform: "translateY(-8px) rotate(-45deg)" },
          "50%": { transform: "translateY(-8px) rotate(0deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
      },    
      animation: {
        moveRotUpToCenter: 'moveRotUpToCenter 400ms ease-in-out forwards',
        moveRotDownToCenter: 'moveRotDownToCenter 400ms ease-in-out forwards',
        moveRotCenterToUp: 'moveRotCenterToUp 400ms ease-in-out forwards',
        moveRotCenterToDown: 'moveRotCenterToDown 400ms ease-in-out forwards',
      },
    },
    screens: {
      "mdMobile" : { raw: "(orientation: portrait)" },
      ...defaultTheme.screens
    },
  },
  plugins: [],
};

