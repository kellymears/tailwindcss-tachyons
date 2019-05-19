module.exports = ({addComponents, theme}) => {
  const screens = theme('screens', {})

  const pullquote = {
    '.tachyons-pullquote': {
      paddingLeft: '1em',
      paddingRight: '1em',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: 'athelas,georgia,serif',
      [`@media (min-width: ${screens.md})`]: {
        paddingLeft: 0,
        paddingRight: 0,
        maxWidth: '90%',
      },

      'p': {
        fontWeight: 900,
        lineHeight: '1.5rem',
        fontSize: '1.5rem',
        [`@media (min-width: ${screens.md})`]: {
          fontSize: '3rem',
          lineHeight: '3.5rem',
        },
      },
    },
  }

  addComponents(pullquote)
}
