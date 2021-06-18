import { ClassNameMap } from '@material-ui/styles';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';

type StyleProps = {};
type ClassKey = keyof ReturnType<typeof defaultStyles>;

export const useDefaultStyles: (
  props?: StyleProps
) => ClassNameMap<ClassKey> = makeStyles(defaultStyles, {
  name: 'EmailSubscribe',
});

export default function defaultStyles({ palette, spacing }: Theme) {
  return createStyles({
    form: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: 4,
      '&:focus-within': {
        boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)',
      },
    },
    input: {
      backgroundColor: palette.background.paper,
      minWidth: 256,
      flex: 1,
      alignSelf: 'stretch',
      border: '1px solid',
      borderColor: palette.action.disabled,
      borderRightWidth: 0,
      borderRadius: '4px 0 0 4px',
      padding: '0 0.5rem',
      outline: 'none',
      color: palette.text.primary,
      '&:hover, &:focus': {
        borderColor:
          palette.mode === 'dark'
            ? palette.text.secondary
            : palette.primary.main,
        boxShadow: `inset 0 0 0 1px ${
          palette.mode === 'dark'
            ? palette.text.secondary
            : palette.primary.main
        }`,
        backgroundColor:
          palette.mode === 'dark' ? palette.action.hover : '#f9f9f9',
      },
    },
    submit: {
      padding: spacing(1, 2),
      borderRadius: '0 4px 4px 0',
      color: palette.common.white,
      backgroundColor:
        palette.mode === 'dark' ? palette.divider : palette.primary.main,
      '&:hover, &:focus': {
        backgroundColor:
          palette.mode === 'dark'
            ? 'rgba(255,255,255,0.2)'
            : palette.primary.dark,
      },
    },
  });
}
