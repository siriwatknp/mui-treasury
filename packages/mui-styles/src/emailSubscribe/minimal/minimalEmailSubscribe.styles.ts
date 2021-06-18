import { createStyles, Theme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
export type MinimalEmailSubscribeStyleProps = {};

export type MinimalEmailSubscribeClassKey = keyof ReturnType<
  typeof minimalEmailSubscribeStyles
>;

const minimalEmailSubscribeStyles = ({ palette }: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      backgroundColor:
        palette.mode === 'dark' ? palette.background.default : blueGrey[50],
      position: 'relative',
      minWidth: 256,
      maxWidth: '100%',
    },
    input: {
      border: 'none',
      flex: 1,
      backgroundColor: 'unset',
      padding: '0.5rem 1rem',
      paddingRight: '3rem',
      color: palette.text.primary,
    },
    submit: {
      alignSelf: 'stretch',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      padding: '0 0.75rem',
      color: palette.action.active,
    },
  });

export default minimalEmailSubscribeStyles;
