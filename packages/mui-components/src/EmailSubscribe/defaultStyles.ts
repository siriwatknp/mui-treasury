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
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      backgroundColor: palette.background.paper,
      minWidth: 256,
      alignSelf: 'stretch',
      border: '1px solid',
      borderColor: palette.text.hint,
      borderRightWidth: 0,
      padding: '0 0.5rem',
      '&:hover, &:focus': {
        backgroundColor: palette.type === 'dark' ? palette.action.hover : '#f9f9f9',
      },
    },
    submit: {
      padding: spacing(1, 2),
      color: palette.common.white,
      backgroundColor: palette.primary.main,
      '&:hover, &:focus': {
        backgroundColor: palette.primary.dark,
      },
    },
  });
}
