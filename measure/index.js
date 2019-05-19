module.exports = ({addUtilities}) => {
  const measure = {
    '.measure-narrow': {
      maxWidth: '20em',
    },

    '.measure': {
      maxWidth: '30em',
    },

    '.measure-wide': {
      maxWidth: '34em',
    },

    '.indent': {
      textIndent: '1em',
      marginTop: 0,
      marginBottom: 0,
    },

    '.uppercase-small': {
      fontVariant: 'small-caps',
    },

    '.truncate': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  }

  addUtilities(measure, {
    variants: ['responsive'],
  })
}
