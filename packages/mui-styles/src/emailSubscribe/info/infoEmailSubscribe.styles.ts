import { createStyles, Theme } from '@material-ui/core/styles';
export type InfoEmailSubscribeStyleProps = {};

export type InfoEmailSubscribeClassKey = keyof ReturnType<
  typeof infoEmailSubscribeStyles
>;

const infoEmailSubscribeStyles = ({ palette }: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      alignItems: 'center',
      minWidth: 296,
    },
    input: {
      flex: 1,
      padding: '0.5rem 1rem',
      border: '1px solid',
      borderColor:
        palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
      borderRadius: '2px 0 0 2px',
      color: palette.text.primary,
      backgroundColor: palette.mode === 'dark' ? 'transparent' : '#fff',
    },
    submit: {
      flexShrink: 0,
      alignSelf: 'stretch',
      borderRadius: '0 2px 2px 0',
      padding: '0.5rem',
      minWidth: 48,
      marginLeft: -1,
      backgroundColor: palette.success.main,
      color: '#fff',
      '&:hover': {
        backgroundColor: palette.success.dark,
      },
    },
  });

export default infoEmailSubscribeStyles;
