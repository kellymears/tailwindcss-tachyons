module.exports = ({ addUtilities }) => {
  const tracking = {
    '.tracked': {
      letterSpacing: '0.1em',
    },

    '.tracked-tight': {
      letterSpacing: '-0.05em',
    },

    '.tracked-mega': {
      letterSpacing: '-25em',
    },
  }

  addUtilities(tracking, {
    variants: ['responsive'],
  })
}
