import { createStyles, Theme } from '@material-ui/core/styles';

export type ZoomNavigationMenuStyleProps = { gutter?: string | number }

export type ZoomNavigationMenuClassKey = keyof ReturnType<typeof zoomNavigationMenuStyles>

const itemHorzPadding = 3
const zoomNavigationMenuStyles = ({ palette, spacing }: Theme) => createStyles({
  menu: {
    display: 'flex',
    overflow: 'auto',
  },
  item: ({ gutter }: ZoomNavigationMenuStyleProps) => ({
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 4,
    padding: spacing(1, itemHorzPadding),
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '0.2s ease-out',
    color: palette.text.primary,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: spacing(itemHorzPadding / 2),
      width: `calc(100% - ${spacing(itemHorzPadding)}px)`,
      height: 2,
      transform: 'scale(0, 1)',
      backgroundColor: palette.text.primary
    },
    '&:hover': {
      '&:after': {
        transform: 'scale(1, 1)',
      }
    },
    '&:not(:first-child)': {
      marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter,
    },
  }),
  itemActive: {
    '&$item': {
      fontWeight: 'bold',
      '&:after': {
        opacity: 1,
        transform: 'scale(1, 1)',
      }
    },
  },
})

export default zoomNavigationMenuStyles
