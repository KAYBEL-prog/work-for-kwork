/** @type {import('tailwindcss').Config} */

// npx tailwindcss -i ./assets/src/input.css -o ./assets/css/output.css --watch

module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Arial', 'sans-serif'],
    },
    extend: {
      margin: {
        'navbar': '20rem' // 320px
      },
      spacing: {
        'half': '50%',
        'top-offset': '2.625rem',  // 42px
        'navbar': '20rem', // 320px,
      },
      colors: {
        'fill': {
          'pr': 'rgba(120, 120, 128, 0.2)',
          'sc': 'rgba(120, 120, 128, 0.16)',
          'tr': 'rgba(118, 118, 128, 0.12)',
          'qt': 'rgba(116, 116, 128, 0.08)',
        },
        'lab': {
          'pr': 'rgba(0, 0, 0, 1)',
          'sc': 'rgba(60, 60, 67, 0.6)',
          'tr': 'rgba(60, 60, 67, 0.3)',
          'qt': 'rgba(60, 60, 67, 0.18)',
          'pr2': 'rgba(51, 51, 51, 1)',
        },
        'bord': {
          'pr': 'rgba(60, 60, 67, 0.36)',
          'sc': 'rgba(198, 198, 200, 1)',
        },
        'bg': {
          'pr': 'rgba(255, 255, 255, 1)',
          'sc': 'rgba(242, 242, 242, 1)',
        },
        'blue': {
          '900': '#1F59F5'
        },
        'red': {
          '900': 'rgba(255, 59, 48, 1)'
        },
        'money': '#036704'
      },
      fontSize: {
        'large': '8rem', // 128px
        'lg-title': '2.125rem', // 34px
        'title-1': '1.75rem', // 28px
        'title-2': '1.375rem', // 22px
        'title-3': '1.25rem', // 20px
        'par-l': '1.0625rem', // 17px
        'par-m': '0.9375rem', // 15px
        'par-s': '0.8125rem', // 13px
        'cap-l': '0.75rem', // 12px
        'cap-s': '0.6875rem' // 11px
      }
    },
  }
}

