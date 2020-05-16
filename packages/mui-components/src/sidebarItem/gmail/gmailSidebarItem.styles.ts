import Color from 'color';

export type GmailSidebarClassKey =
  | 'root'
  | 'selected'
  | 'focusVisible'
  | 'collapsed'
  | 'dot';

export type GmailSidebarItemStyleProps = {
  color: string;
};

export default () => {
  return {
    root: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-start',
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      minHeight: 32,
      transition: '0.2s',
      '-webkit-font-smoothing': 'antialiased',
      padding: '0 12px 0 26px',
      fontSize: 14,
      '&:hover, &$focusVisible': {
        backgroundColor: 'rgba(0,0,0,0.04)',
      },
      '& .GmailSidebarItem-startIcon': {
        display: 'inline-flex',
        opacity: 0.54,
        marginRight: 18,
        '& > *': {
          fontSize: 20,
        },
      },
      '& .GmailSidebarItem-amount': {
        fontSize: '0.75rem',
        letterSpacing: 0.3,
        marginLeft: 'auto',
        paddingLeft: 16,
      },
    },
    selected: ({ color }: GmailSidebarItemStyleProps) => ({
      fontWeight: 'bold' as const,
      color,
      backgroundColor: `${Color(color || 'rgba(0,0,0,0.08)')
        .saturate(0.5)
        .lighten(0.9)
        .toString()} !important`,
      '& .GmailSidebarItem-startIcon': {
        opacity: 1,
      },
    }),
    collapsed: ({ color }: GmailSidebarItemStyleProps) => ({
      padding: '0 6px',
      width: 32,
      borderRadius: 20,
      marginLeft: 20,
      '& .GmailSidebarItem-label': {
        display: 'none',
      },
      '& .GmailSidebarItem-amount': {
        position: 'absolute' as const,
        top: 0,
        right: -8,
        backgroundColor: color,
        color: '#fff',
        padding: '0 4px',
        borderRadius: 10,
        fontWeight: 'normal',
      }
    }),
    dot: {
      '& .GmailSidebarItem-amount': {
        display: 'none',
      },
      '&:after': {
        display: 'block',
        content: '""',
        position: 'absolute',
        width: 8,
        height: 8,
        backgroundColor: '#da3125',
        top: 4,
        right: -2,
        borderRadius: '50%',
      }
    },
    focusVisible: {},
  };
};
