import { ClassNameMap } from '@material-ui/styles';
import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';

type StyleProps = { gutter?: string | number };
type ClassKey = keyof ReturnType<typeof defaultStyles>;

export const useDefaultStyles: (
  props?: StyleProps
) => ClassNameMap<ClassKey> = makeStyles(defaultStyles, {
  name: 'CategoryMenu',
});

export default function defaultStyles({ palette, spacing }: Theme) {
  return createStyles({
    title: {
      marginBottom: '0.5em',
      cursor: 'default',
      fontSize: '1rem',
      color: palette.text.primary,
      letterSpacing: '0.75px',
    },
    item: {
      display: 'block',
      color: palette.text.secondary,
      cursor: 'pointer',
      marginBottom: '0.125rem',
      '&:hover, &:focus': {
        color: palette.text.primary,
      },
    },
    itemActive: {
      '&$item': {
        color: palette.text.primary,
      },
    },
  });
}
