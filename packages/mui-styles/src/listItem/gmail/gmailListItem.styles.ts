import Color from 'color';

export type GmailListItemStyleProps = {
  color: string;
  collapsed?: boolean;
};

export default () => ({
  root: ({ collapsed }: GmailListItemStyleProps) => ({
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    minHeight: 32,
    '-webkit-font-smoothing': 'antialiased',
    padding: collapsed ? '0px 6px' : '0 12px 0 26px',
    width: collapsed ? 32 : 'auto',
    borderRadius: collapsed ? 20 : 0,
    overflow: collapsed ? 'hidden' : 'visible',
    marginLeft: collapsed ? 20 : '',
    fontSize: 14,
    '& > svg:first-child': {
      marginRight: 18,
      fontSize: 20,
      opacity: 0.54,
    },
    '& .MuiLabel-amount': {
      fontSize: '0.75rem',
      letterSpacing: 0.3,
      marginLeft: 'auto',
      paddingLeft: 16,
    },
  }),
  selected: ({ color = '#202124' }: GmailListItemStyleProps) => ({
    fontWeight: 'bold' as const,
    color,
    backgroundColor: `${Color(color)
      .saturate(0.5)
      .lighten(0.9)
      .toString()} !important`,
    '& > svg:first-child': {
      opacity: 1,
    }
  }),
});
