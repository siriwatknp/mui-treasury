import { ClassNameMap } from '@material-ui/styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type StyleProps = { gutter?: string | number };
type ClassKey = keyof ReturnType<typeof defaultStyles>;

export const useDefaultStyles: (
  props?: StyleProps
) => ClassNameMap<ClassKey> = makeStyles(defaultStyles, {
  name: 'NavigationMenu',
});

export default function defaultStyles({ palette, spacing }: Theme) {
  return createStyles({
    menu: {
      display: 'flex',
      overflow: 'auto',
    },
    item: ({ gutter }: StyleProps) => ({
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      color: palette.text.secondary,
      borderRadius: 4,
      padding: spacing(1, 2),
      cursor: 'pointer',
      textDecoration: 'none',
      transition: '0.2s ease-out',
      '&:hover': {
        color: palette.text.primary,
        backgroundColor: 'rgba(0,0,0,0.04)',
      },
      '&:not(:first-child)': {
        marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter,
      },
    }),
    itemActive: {
      '&$item': {
        color: palette.text.primary,
        backgroundColor: `rgba(0,0,0,0.08) !important`,
      },
    },
  });
}
