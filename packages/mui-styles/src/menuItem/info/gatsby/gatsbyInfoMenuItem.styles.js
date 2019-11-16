export default () => ({
  root: {
    color: '#36313d',
    font:
      "100%/1.5 -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
    fontKerning: 'normal',
    fontFeatureSettings: '"kern", "liga", "clig", "calt"',
    fontSize: 14,
    minHeight: 45,
    lineHeight: '21px',
    padding: '12px 16px 12px 1.5rem',
    '&:before, &:after': {
      content: '" "',
      top: '1.3em',
      height: 8,
      position: 'absolute',
      transition: 'all 250ms cubic-bezier(0.4,0,0.2,1)',
    },
    '&:before': {
      left: '0.5rem',
      width: 8,
      borderRadius: '100%',
      transform: 'scale(0)',
    },
    '&:after': {
      left: 0,
      top: '1.3em',
      height: 8,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      transform: 'translateX(-100%)',
    },
    '&:hover': {
      background: 'rgba(241,222,250,0.275)',
      color: '#663399',
      '&:before': {
        background: '#8a4baf',
        transform: 'scale(1)',
      },
    },
    '&$selected': {
      backgroundColor: 'rgba(0,0,0,0)',
      '&:hover': {
        background: 'rgba(241,222,250,0.275)',
      },
    },
    '&$focusVisible': {
      background: 'rgba(241,222,250,0.275)',
      '&:before': {
        background: '#8a4baf',
        transform: 'scale(1)',
      },
    },
  },
  selected: {
    color: 'rgb(138, 75, 175)',
    fontWeight: 500,
    '&:after': {
      width: 'calc(0.5rem + 8px)',
      background: 'rgb(138, 75, 175)',
      transform: 'translateX(0)',
    },
  },
  info: {
    marginLeft: 'auto',
    color: 'rgba(138, 75, 175, 0.87)',
    font:
      "100%/1.5 -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
  },
  focusVisible: {},
});
