import { createStyles, Theme } from '@material-ui/core/styles';
export type ReadyEmailSubscribeStyleProps = {}

export type ReadyEmailSubscribeClassKey = keyof ReturnType<typeof readyEmailSubscribeStyles>

const readyEmailSubscribeStyles = ({ palette, shadows }: Theme) => createStyles({
  form: {
    display: 'flex',
    position: 'relative',
    width: '100%',
  },
  input: {
    flex: 1,
    padding: '0.5rem 1rem',
    paddingRight: '4rem',
    backgroundColor: palette.type === 'dark' ? palette.action.focus : palette.action.hover,
    color: palette.text.primary,
    border: 'none',
    borderRadius: 40,
    outline: 'none',
    transition: 'box-shadow 0.3s ease-out',
    '&:hover, &:focus': {
      boxShadow: shadows[4],
    }
  },
  submit: {
    position: 'absolute',
    top: 3,
    right: 3,
    bottom: 3,
    borderRadius: 40,
    backgroundColor: '#ff4e4e',
    color: '#fff',
    padding: '0.5rem 1rem',
    transition: 'transform 0.2s',
    transformOrigin: 'right',
    '&:hover, &:focus': {
      backgroundColor: '#e23e3e',
    },
    '&:active': {
      transform: 'scale(0.92)',
    }
  }
})

export default readyEmailSubscribeStyles
