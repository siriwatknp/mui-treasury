export default ({ palette, transitions, breakpoints }) => {
  const SIZES = {
    xs: 8,
    sm: 10,
    lg: 12,
  };
  return {
    root: {
      display: 'inline-block',
      border: 0,
      background: 'none',
      padding: SIZES.xs,
      lineHeight: 0,
      cursor: 'pointer',
      [breakpoints.up('sm')]: {
        padding: SIZES.sm,
      },
      [breakpoints.up('lg')]: {
        padding: SIZES.lg,
      },
      '& + $root': {
        marginLeft: SIZES.xs,
        [breakpoints.up('sm')]: {
          marginLeft: SIZES.sm,
        },
        [breakpoints.up('sm')]: {
          marginLeft: SIZES.lg,
        },
      },
      '&:hover': {
        '&:after': {
          transform: 'scale(1.2)',
        },
      },
      '&:after': {
        content: '""',
        display: 'inline-block',
        width: SIZES.xs,
        height: SIZES.xs,
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.38)',
        transition: transitions.create(),
        [breakpoints.up('sm')]: {
          width: SIZES.sm,
          height: SIZES.sm,
        },
        [breakpoints.up('lg')]: {
          width: SIZES.lg,
          height: SIZES.lg,
        },
      },
    },
    active: {
      '&:after': {
        backgroundColor: palette.common.white,
      },
    },
  };
};
