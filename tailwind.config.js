module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#2f4553',
        'main-darker': '#0f212e',
        'main-brighter': '#213743',
        'main-darkest': '#071824',
        'main-back': '#1a2c38',
        'custom-gray': '#b1bad3',
        'btn-hover': '#557086',
        'play': '#00E701',
        'active-blue': '#4391E7',
        'playing': '#2b842b',
        'main-green': '#00E701',
        'hover-color': '#557086',
        'mines-pink-color': '#9000ff',
        'mines-pink-shadow': '#7100c7',
        'mines-pink-hover': '#962eff',
        'fail': '#071824',
        'menu-back': '#001529',
        'default': '#FFFFFF',
        'primary': '#1677ff',
        'success': '#45c55c'
      },
      screens: {
        'ml': { 'raw': '(min-width: 917px)' },
        'xs': { 'raw': '(min-width: 400px)' }
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1.1, 1.1)' },
          '100%': { transform: 'scale(1, 1)' },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      }
    },
    fontSize: {
      sm: '0.75rem', //12px
      base: '1rem', //16px
      'lg': '1.125rem', //18px
      'xl': '1.25rem', //20px
      '2xl': '1.5rem', //24px
      '2.5xl': '1.75rem', //28px
      '5xl': '3.1875rem', //51px,
      'h1': [
        '3.875rem',
        {
          lineHeight: '4.65rem',
          fontWeight: '600'
        }
      ],
      'h2': [
        '3.188rem',
        {
          lineHeight: '3.825rem',
          fontWeight: '600'
        }
      ],
      'h3': [
        '2.75rem',
        {
          lineHeight: '3.3rem',
          fontWeight: '600'
        }
      ],
      'h4': [
        '1.875rem',
        {
          lineHeight: '2.25rem',
          fontWeight: '600'
        }
      ],
      'h5': [
        '1.5rem',
        {
          lineHeight: '1.8rem',
          fontWeight: '600'
        }
      ],
      'h6': [
        '1.25rem',
        {
          lineHeight: '1.708rem',
          fontWeight: '800'
        }
      ],
      'h7': [
        '1.25rem',
        {
          lineHeight: '1.65rem',
          fontWeight: '600'
        }
      ],
      'p1': [
        '1.25rem',
        {
          lineHeight: '2rem',
          fontWeight: '500'
        }
      ],
      'p2': [
        '1.125rem',
        {
          lineHeight: '1.625rem',
          fontWeight: '500'
        }
      ],
      'p3': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '500'
        }
      ],
      'p4': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '500'
        }
      ],
      'p5': [
        '0.75rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '500'
        }
      ],
      'p6': [
        '0.75rem',
        {
          lineHeight: '1.13rem',
          fontWeight: '600'
        }
      ],
      'p7': [
        '0.75rem',
        {
          lineHeight: '1.125rem',
          fontWeight: '600'
        }
      ],
      'label': [
        '0.875rem',
        {
          lineHeight: '1.375rem',
        }
      ],
      'input': [
        '0.88rem',
        {
          lineHeight: '1.31rem',
          fontWeight: '600'
        }
      ],
      'score': [
        '0.88rem',
        {
          lineHeight: '1.31rem',
          fontWeight: '700'
        }
      ],
      'normal': [
        '1rem',
        {
          lineHeight: '1rem',
          fontWeight: '600'
        }
      ],
      'navitem': [
        '0.75rem',
        {
          lineHeight: '0.75rem',
          fontWeight: '700'
        }
      ],
      'title1': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '600'
        }
      ],
      'title2': [
        '1rem',
        {
          lineHeight: '1.32rem',
          fontWeight: '600'
        }
      ],
      'multiplier': [
        '1.75rem',
        {
          lineHeight: '2.63rem',
          fontWeight: '700'
        }
      ],
    }
  },
  plugins: [],
}