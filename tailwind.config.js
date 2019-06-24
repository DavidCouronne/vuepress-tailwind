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
    }
  },
  variants: {},
  plugins: []
}
