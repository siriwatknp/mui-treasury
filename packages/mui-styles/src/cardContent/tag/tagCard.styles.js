export default ({ palette }) => {
  return {
    card: {
      width: '180px',
      height: '230px',
      margin: '20px 0 0 0',
      display: 'flex',
      background: palette.background.default,
      position: 'relative',
      overflow: 'visible',
      '&::before': {
        content: "' '",
        width: '100%',
        'border-bottom': `30px solid ${palette.background.default}`,
        'border-left': ' 20px solid transparent',
        'border-right': '20px solid transparent',
        position: 'absolute',
        top: '-30px',
      },
    },
    hole: {
      position: 'absolute',
      top: '-20px',
      margin: 'auto',
      width: '100%',
      left: 0,
    },
  };
};
