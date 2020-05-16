import Color from 'color';

export type GmailListItemStyleProps = {
  color: string;
};

export default () => ({
  root: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    minHeight: 32,
    '-webkit-font-smoothing': 'antialiased',
    padding: '0 12px 0 26px',
    '& > svg:first-child': {
      marginRight: 18,
      opacity: 0.54,
    },
    '& .MuiLabel-amount': {
      fontSize: '0.75rem',
      letterSpacing: 0.3,
      marginLeft: 'auto',
      paddingLeft: 16,
    },
    fontSize: 14,
  },
  selected: ({ color = '#202124' }: GmailListItemStyleProps) => ({
    fontWeight: 'bold',
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
