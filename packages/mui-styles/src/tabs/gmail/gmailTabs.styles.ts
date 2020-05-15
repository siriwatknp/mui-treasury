export const tabsStyles = () => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
  },
  // flexContainer: {},
  indicator: {
    height: 3,
    backgroundColor: 'rgba(0,0,0,0)',
    '& > div': {
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      height: 3,
      margin: '0 8px',
      '&.MuiIndicator-0': {
        backgroundColor: '#d93025',
      },
      '&.MuiIndicator-1': {
        backgroundColor: '#1a73e8',
      },
      '&.MuiIndicator-2': {
        backgroundColor: '#188038',
      },
      '&.MuiIndicator-3': {
        backgroundColor: '#e37400',
      },
    },
  },
});

export type GmailTabItemStyleProps = {
  color: string;
};

export const tabItemStyles = () => ({
  root: {
    opacity: 1,
    '&:hover': {
      backgroundColor: 'rgba(32,33,36,0.059)',
    },
    '&:hover,&:focus': {
      '& $wrapper': {
        color: 'rgba(0,0,0,0.87)',
      }
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
  wrapper: ({ color }: GmailTabItemStyleProps) => ({
    color: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 14,
    fontFamily: "'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
    textTransform: 'initial' as const,
    '& .MuiTabItem-label': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiTabItem-subLabel': {
      color: '#5f6368',
      fontSize: '0.75rem',
      textAlign: 'left',
      fontWeight: 'normal',
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
    },
  }),
  selected: ({ color }: GmailTabItemStyleProps) => ({
    '& $wrapper': {
      color: `${color} !important`,
    }
  }),
});
