module.exports = ({ addUtilities }) => {
  const fontScale = {
    '.f-headline': {
      fontSize: '6rem',
    },

    '.f-subheadline': {
      fontSize: '5rem',
    },

    '.f1': {
      fontSize: '3rem',
    },

    '.f2': {
      fontSize: '2.25rem',
    },

    '.f3': {
      fontSize: '1.5rem',
    },

    '.f4': {
      fontSize: '1.25rem',
    },

    '.f5': {
      fontSize: '1rem',
    },

    '.f6': {
      fontSize: '0.875rem',
    },

    '.f7': {
      fontSize: '0.75rem',
    },
  }

  addUtilities(fontScale, {
    variants: ['responsive'],
  })
}
