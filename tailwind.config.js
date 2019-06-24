module.exports = {
  theme: {
    screens: {
      'sm': '419px',
      // => @media (min-width: 419px) { ... }

      'md': '719px',
      // => @media (min-width: 719px) { ... }

      'lg': '959px',
      // => @media (min-width: 9594px) { ... }

    },
    borderColor: {
      'primary': 'var(--border-color)',
      'accent': 'var(--accent-color)',
    },
    extend: {},
    colors: {
      background: {
        primary: 'var(--bg-color)',
        content: 'var(--bg-content-color)',
        code: 'var(--bg-code)',
        accent: 'var(--accent-color)',
      },
      primary: 'var(--body-color)',
      accent: 'var(--accent-color)',
      accenthover: 'var(--accent-hover)',
      title: 'var(--title-color)',
      bg: 'var(--bg-color)',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    }
  },
  variants: {},
  plugins: []
}
