import { createStyles, Theme } from '@material-ui/core/styles';
export type PlainNavigationMenuStyleProps = { gutter?: string | number };

export type PlainNavigationMenuClassKey = keyof ReturnType<
  typeof plainNavigationMenuStyles
>;

const plainNavigationMenuStyles = ({ palette, spacing }: Theme) =>
  createStyles({
    menu: {
      display: 'flex',
    },
    item: ({ gutter }: PlainNavigationMenuStyleProps) => ({
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      color:
        palette.type === 'dark'
          ? 'rgba(255,255,255,0.57)'
          : palette.text.secondary,
      borderRadius: 4,
      padding: spacing(1, 2),
      cursor: 'pointer',
      textDecoration: 'none',
      transition: '0.2s ease-out',
      '&:hover': {
        color: palette.type === 'dark' ? '#fff' : palette.text.primary,
      },
      '&:not(:first-child)': {
        marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter,
      },
    }),
    itemActive: {
      '&$item': {
        color: palette.type === 'dark' ? '#fff' : palette.text.primary,
      },
    },
  });

export default plainNavigationMenuStyles;
