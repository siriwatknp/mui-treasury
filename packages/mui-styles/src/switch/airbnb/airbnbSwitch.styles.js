const pxToRem = (px, oneRemPx = 17) => `${px / oneRemPx}rem`;

export default theme => {
  const borderWidth = 2;
  const width = pxToRem(52);
  const height = pxToRem(40);
  const size = pxToRem(32);
  const gap = (40 - 32) / 2;
  const primaryColor = '#60A29B';
  return {
    root: {
      width,
      height,
      padding: 0,
      margin: theme.spacing(1),
      overflow: 'unset',
    },
    switchBase: {
      padding: pxToRem(gap),
      '&$checked': {
        color: '#fff',
        transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
        '& + $track': {
          backgroundColor: 'unset',
          opacity: 1,
        },
        '& $thumb': {
          backgroundColor: '#fff',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="${encodeURIComponent(
            primaryColor
          )}" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>')`,
        },
      },
    },
    track: {
      borderRadius: 40,
      backgroundColor: 'unset',
      border: 'solid #fff',
      borderWidth,
      opacity: 0.48,
    },
    thumb: {
      width: size,
      height: size,
      boxShadow: 'none',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="${encodeURIComponent(
        primaryColor
      )}" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    checked: {},
  };
};
