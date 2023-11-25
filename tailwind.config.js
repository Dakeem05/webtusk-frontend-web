/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'madeForDisplayBold':['madeForDisplayBold', 'sans-serif'],
        // 'noirBoldItallic':['noirBoldItallic', 'sans-serif'],
        'madeForDisplayHeavy':['madeForDisplayHeavy', 'sans-serif'],
        'madeForDisplayVariable':['madeForDisplayVariable', 'sans-serif'],
        // 'noirItalic':['noirItalic', 'sans-serif'],
        // 'noirLight':['noirLight', 'sans-serif'],
        // 'noirLightItalic':['noirLightItalic', 'sans-serif'],
        'madeForDisplayMedium':['madeForDisplayMedium', 'sans-serif'],
        // 'noirMediumItalic':['noirMediumItalic', 'sans-serif'],
        'madeForDisplayRegular':['madeForDisplayRegular', 'sans-serif'],
        'madeForDisplaySemiBold':['madeForDisplaySemiBold', 'sans-serif'],
        // 'noirSemiBoldItalic':['noirSemiBoldItalic', 'sans-serif'],
      },
      borderRadius:{ 
        '4xl': '4rem',
      },
      keyframes:{
        up:{
          "from": {
            transform: "translateY(10.75rem)",
            opacity: '0'
          },
          "to": {
            transform: "translateY(0rem)",
            opacity: '1'
          },
          jump: {
            '0%': {
              opacity: '0',
              transform: 'translateY(-50%)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
          },
          change:{
            // '0%, 100%': { transform: 'rotate(-3deg)' },
            // '50%': { transform: 'rotate(3deg)' },
            "from": {
              
              transform: "translateY(-5%)",
              opacity: '0'
            },
            "to": {
              transform: "translateY(0)",
              opacity: '1'
            },
          },
          scroll:{
            "from": {
              transform: "translate(100rem)",
            },
            "to": {
              transform: "translateX(0)",
            },
          },
          move:{
            "from": {
              opacity:'0',
              transform: "translateX(0)",
            },
            "to": {
              opacity:'1',
              transform: "translateX(-100vw)",
            },
          }
        }
    }, 
    backdropBlur:{
      'filter':'blur(15px)'
    },
    backdropSaturate:{
      'filter':'saturate(180%)'
    },
    backgroundColor:{
      'filter':'rgba(255,255,255,.72)'
    },
    animation:{
      'gone-up': 'up 1.6s ease-in-out both',
      'bounce-up': 'jump 1s linear forward',
      'change': 'change 1s ease-in-out both',
      'scroll-slide': 'scroll 5s ease-in-out both',
      'move': 'move 5s  linear'
    },
    screens:{
      'xs': '400px',
      'xxs': '200px',
      'mid': '1200px',
    }
  },
  plugins: [],
}
}
