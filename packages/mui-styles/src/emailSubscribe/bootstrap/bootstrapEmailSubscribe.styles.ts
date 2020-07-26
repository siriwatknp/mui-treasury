import { createStyles, Theme } from '@material-ui/core/styles';
// @ts-ignore
import bootstrapInputStyles from '../../input/bootstrap';
export type BootstrapEmailSubscribeStyleProps = {}

export type BootstrapEmailSubscribeClassKey = keyof ReturnType<typeof bootstrapEmailSubscribeStyles>

const bootstrapEmailSubscribeStyles = (theme: Theme) => {
  const { spacing } = theme;
  const bootstrap = bootstrapInputStyles(theme)
  return createStyles({
    form: {
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      ...bootstrap.input,
      flex: 1,
    },
    submit: {
      alignSelf: 'stretch',
      marginLeft: '0.5rem',
      fontFamily: bootstrap.input.fontFamily,
      padding: spacing(1, 1.5),
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      border: '1px solid',
      borderRadius: 4,
      color: '#fff',
      lineHeight: 1.2,
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
      }
    },
  });
}

export default bootstrapEmailSubscribeStyles
