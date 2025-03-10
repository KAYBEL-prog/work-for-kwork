
module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          500: 'oklch(0.637 0.237 25.331)',
        },
        blue: {
          400: 'oklch(0.707 0.165 254.624)',
        },
        black: '#000',
        white: '#fff',
        brand: '#FFC800',
        grey: {
          1: '#202020',
          2: '#494A4E',
          3: '#E6E3DE',
        },
      },
      spacing: {
        '0.25': '0.25rem',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '48': '12rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      fontSize: {
        h1: "72px",
        h2: "52px",
        h3: "46px",
        h4: "32px",
        tiny: "40px",
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      screens: {
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '96rem',
      },
      container: {
        center: true,
        padding: '0rem',
        screens: {
          sm: '40rem',
          md: '48rem',
          lg: '64rem',
          xl: '80rem',
          '2xl': '96rem',
        },
      },
      backgroundImage: {
        'hero-block': "url('../assets/img/pages-home/bg-hero-block.png')",
        'bg-items': "url('../assets/img/pages-home/bg-items.png')",
        'bgwhy-xcelerit': "url('../assets/img/pages-home/bg-hero-block__why-xcelerit.png')",
        'resources-insights': "url('../assets/img/bgbg.png')",
      },
      backgroundSize: {
        'hero-block-size': '171%',
      },
      height: {
        'btn': '3.75rem',
        'hero-block': '100vh',
        'our-solutions-inner': '810px',
      },
      minHeight: {
        'our-solutions-inner': '810px',
        'our-solutions-set': '810px',
      },
      maxHeight: {
        'our-solutions-inner': '1500px',
        'our-solutions-set': '1500px',
      },
      screens: {
        'max-860': { 'max': '860px' },
      },
      order: {
        1: '1',
        2: '2',
        3: '3',
      },
      zIndex: {
        10: '10',
      },
    },
  },
  plugins: [],
};
