import { Theme } from '@material-ui/core/styles';

export type GmailTabsStyleProps = {
  indicatorColors?: Array<string>
}

export type GmailTabsClassKey = keyof ReturnType<typeof tabsStyles>

export const tabsStyles = () => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: 'inset 0 -1px 0 rgba(100,121,143,0.122)',
  },
  indicator: ({ indicatorColors = [] }) => ({
    height: 3,
    backgroundColor: 'rgba(0,0,0,0)',
    '& > div': {
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      height: 3,
      margin: '0 8px',
      ...indicatorColors.reduce((result, color, index) => ({
        ...result,
        [`&.MuiIndicator-${index}`]: {
          backgroundColor: color,
        }
      }), {}),
    },
  }),
});

export type GmailTabItemStyleProps = {
  color?: string;
};

export type GmailTabItemClassKey = keyof ReturnType<typeof tabItemStyles>

export const tabItemStyles = ({ palette }: Theme) => ({
  root: {
    opacity: 1,
    '&:hover': {
      backgroundColor: 'rgba(32,33,36,0.059)',
    },
    '&:hover,&:focus': {
      '& $wrapper': {
        color: 'rgba(0,0,0,0.87)',
      },
    },
    minHeight: 56,
    flex: 1,
    maxWidth: 253,
    padding: '6px 16px',
  },
  labelIcon: {
    '& $wrapper > *:first-child': {
      marginBottom: 0,
      marginRight: 16,
      fontSize: 20,
    },
  },
  wrapper: ({ color = palette.primary.main }: GmailTabItemStyleProps) => ({
    color: 'rgba(0,0,0,0.6)',
    flexDirection: 'row' as const,
    justifyContent: 'flex-start',
    fontSize: 14,
    fontFamily: "'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
    textTransform: 'initial' as const,
    '& .MuiTabItem-labelGroup': {
      minWidth: 0,
    },
    '& .MuiTabItem-label': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiTabItem-subLabel': {
      color: 'rgba(0,0,0,0.38)',
      fontSize: '0.75rem',
      textAlign: 'left',
      fontWeight: 'normal',
      whiteSpace: 'nowrap' as const,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '& .MuiTabItem-tag': {
      backgroundColor: color,
      color: '#fff',
      fontSize: '0.75rem',
      borderRadius: 2,
      lineHeight: '16px',
      padding: '1px 4px',
      letterSpacing: 0.3,
      marginLeft: 8,
      whiteSpace: 'nowrap' as const,
    },
  }),
  selected: ({ color }: GmailTabItemStyleProps) => ({
    '& $wrapper': {
      color: `${color} !important`,
    },
  }),
});
