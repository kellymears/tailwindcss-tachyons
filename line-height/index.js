module.exports = ({ addUtilities }) => {
  const lineHeight = {
    '.lh-solid': {
      lineHeight: 1,
    },

    '.lh-title': {
      lineHeight: 1.25,
    },

    '.lh-copy': {
      lineHeight: 1.5,
    },
  }

  addUtilities(lineHeight, {
    variants: ['responsive'],
  })
}
