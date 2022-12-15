const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    colors: {
      black: '#1a1a1a',
      white: '#ffffff',
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    fontFamily: {
      logo: ['Bodoni 72'],
      header: ["Times New Roman", "Noto Sans KR", "Judson", "serif"],
      noto: ["Noto Sans KR", 'sans-serif'],
      default: ["Roboto", 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        hover: '#ffffff20',
        positive: '#27c683',
        negative: '#fa5454',
        warning: '#ff810d',
        highlight: '#9860ff',
        textDefault: '#1a1a1a',
        textSubdued: '#595959',
        textDisabled: '#a6a6a6',
        gray: {
          0: '#1a1a1a',
          10: '#2e2e2e',
          20: '#404040',
          30: '#595959',
          40: '#737373',
          50: '#8c8c8c',
          60: '#a6a6a6',
          70: '#bfbfbf',
          80: '#d9d9d9',
          90: '#f2f2f2',
          100: '#ffffff',
        },
        tangled: {
          luxury: '#c08eff',
          highEnd: '#933fff',
          zenith: '#8f3be9',
        },
        dao: {
          wonder: {
            primary: '#5e5ff5',
          },
        },
      },
      width: {
        fit: 'fit-content',
      },
      keyframes: {
        'auction-live': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'market-scrolling': {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(-900px)'},
        },
        'market-scrolling-reverse': {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(900px)'},
        },
        'marketplace-banner-type-nile': {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateX(calc(-1 * 3140px * 2))'},
        },
        'marketplace-banner-type-nile-md': {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateX(calc(-1 * 2540px * 2))'},
        },
        'marketplace-banner-type-nile-sm': {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateX(calc(-1 * 1924px * 2))'},
        },
        'rotate': {
          '0%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(360deg)'},
        },
        'market-bottom-scrolling': {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-1000px)'},
        },
        'banner-resize' : {
          '0%': {
            opacity: 0,
            transform: 'translateX(-50%) scale(0.75)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(-50%) scale(1)',
          },
        },
        'move-right': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(100% + 474px))',
          },
        },
        'scrollingR': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(-1 * 13 * 200px))',
          },
        },
        'scrollingL': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(1 * 13 * 200px))',
          },
        },
        'scrolling-type': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(-1 * 306px * 11))',
          },
        },
        'scrolling-type-m': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(-1 * 224px * 11))',
          },
        },
        'scrolling-type-s': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(-1 * 258px * 11))',
          },
        },
      },
      animation: {
        'auction-live': 'auction-live 0.8s cubic-bezier(0.47, 2, 0.21, 0.8) infinite alternate',
        'market-scrolling': 'market-scrolling 120s linear infinite',
        'market-scrolling-reverse': 'market-scrolling-reverse 120s linear infinite',
        'rotate': 'rotate 0.7s',
        'market-bottom-scrolling': 'market-bottom-scrolling 35s linear infinite',
        'banner-resize': 'banner-resize 1s ease-in-out',
        'move-right': 'move-right 20s linear infinite',
        'scrollingR': 'scrollingR 65s linear infinite',
        'scrollingL': 'scrollingL 65s linear infinite',
        'marketplace-banner-type-nile': 'marketplace-banner-type-nile 180s linear infinite',
        'marketplace-banner-type-nile-md': 'marketplace-banner-type-nile-md 180s linear infinite',
        'marketplace-banner-type-nile-sm': 'marketplace-banner-type-nile-sm 180s linear infinite',
        'scrolling-type': 'scrolling-type calc(11 * 5s) linear infinite',
        'scrolling-type-m': 'scrolling-type-m calc(11 * 5s) linear infinite',
        'scrolling-type-s': 'scrolling-type-s calc(11 * 5s) linear infinite',
      },
      height: {
        header: '60px',
        fit: 'fit-content',
      },
    },
  },
  variants: {
    extend: {},
  },
};
