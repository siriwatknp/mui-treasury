import { createStyles, Theme } from '@material-ui/core/styles';
export type FloatNavigationMenuStyleProps = { gutter?: string | number }

export type FloatNavigationMenuClassKey = keyof ReturnType<typeof floatNavigationMenuStyles>

const floatNavigationMenuStyles = ({ palette, spacing }: Theme) => createStyles({
  menu: {
    display: 'flex',
    overflow: 'auto',
  },
  item: ({ gutter }: FloatNavigationMenuStyleProps) => ({
    flexShrink: 0,
    color: palette.text.secondary,
    borderRadius: 4,
    padding: spacing(1, 2),
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '0.2s ease-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      color: palette.primary.main,
    },
    '&:not(:first-child)': {
      marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter,
    },
  }),
  itemActive: {
    '&$item': {
      color: palette.primary.main,
    },
  },
})

export default floatNavigationMenuStyles
