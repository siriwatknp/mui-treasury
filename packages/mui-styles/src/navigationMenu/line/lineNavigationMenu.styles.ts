import { createStyles, Theme } from '@material-ui/core/styles';

export type LineNavigationMenuStyleProps = { gutter?: string | number };

export type LineNavigationMenuClassKey = keyof ReturnType<
  typeof lineNavigationMenuStyles
>;

const itemHorzPadding = 2;
const lineNavigationMenuStyles = ({ spacing, palette }: Theme) =>
  createStyles({
    menu: {
      display: 'flex',
      overflow: 'auto',
    },
    item: ({ gutter }: LineNavigationMenuStyleProps) => ({
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      borderRadius: 4,
      padding: spacing(1, itemHorzPadding),
      cursor: 'pointer',
      textDecoration: 'none',
      transition: '0.2s ease-out',
      color: palette.text.secondary,
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        left: spacing(itemHorzPadding),
        width: `calc(100% - ${spacing(itemHorzPadding * 2)}px)`,
        height: 3,
        transform: 'scale(0, 1)',
        transition: '0.2s ease-out',
        opacity: 0,
        backgroundColor: palette.primary.light,
      },
      '&:hover': {
        color:
          palette.type === 'dark'
            ? palette.primary.light
            : palette.primary.main,
        '&:after': {
          opacity: 1,
          transform: 'scale(1, 1)',
        },
      },
      '&:not(:first-child)': {
        marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter,
      },
    }),
    itemActive: {
      '&$item': {
        color:
          palette.type === 'dark'
            ? palette.primary.light
            : palette.primary.main,
        '&:after': {
          opacity: 1,
          transform: 'scale(1, 1)',
          backgroundColor:
            palette.type === 'dark'
              ? palette.primary.light
              : palette.primary.main,
        },
      },
    },
  });

export default lineNavigationMenuStyles;
