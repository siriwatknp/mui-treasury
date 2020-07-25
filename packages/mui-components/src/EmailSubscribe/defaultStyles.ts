import { ClassNameMap } from '@material-ui/styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 4,
      '&:focus-within': {
        boxShadow: '0 0 12px 0 rgba(0,0,0,0.12)',
      }
    },
    input: {
      backgroundColor: palette.background.paper,
      minWidth: 256,
      alignSelf: 'stretch',
      border: '1px solid',
      borderColor: palette.text.hint,
      borderRightWidth: 0,
      borderRadius: '4px 0 0 4px',
      padding: '0 0.5rem',
      outline: 'none',
      '&:hover, &:focus': {
        borderColor: palette.primary.main,
        boxShadow: `inset 0 0 0 1px ${palette.primary.main}`,
        backgroundColor: palette.type === 'dark' ? palette.action.hover : '#f9f9f9',
      },
    },
    submit: {
      padding: spacing(1, 2),
      borderRadius: '0 4px 4px 0',
      color: palette.common.white,
      backgroundColor: palette.primary.main,
      '&:hover, &:focus': {
        backgroundColor: palette.primary.dark,
      },
    },
  });
}
