export default ({ spacing, palette }) => {
  const offset = 40;
  const cardShadow = '0px 14px 80px rgba(34, 35, 58, 0.2)';
  const headerShadow = '4px 4px 20px 1px rgba(0, 0, 0, 0.2)';
  const bgColor = palette.primary.main;
  return {
    root: {
      '&.MuiElevatedCard--01': {
        marginTop: offset,
        borderRadius: spacing(0.5),
        transition: '0.3s',
        boxShadow: cardShadow,
        position: 'relative',
        width: '90%',
        overflow: 'initial',
        background: '#ffffff',
        padding: spacing(2, 0),
        '& .MuiCardHeader-root': {
          flexShrink: 0,
          position: 'absolute',
          top: -offset,
          right: 20,
          left: 20,
          borderRadius: spacing(2),
          backgroundColor: bgColor,
          overflow: 'hidden',
          boxShadow: headerShadow,
          textAlign: 'left',
          '& .MuiCardHeader-title': {
            color: '#ffffff',
            fontWeight: 900,
            letterSpacing: 1,
          },
          '& .MuiCardHeader-subheader': {
            color: '#ffffff',
            opacity: 0.87,
            fontWeight: 200,
            letterSpacing: 0.4,
          },
        },
        '& .MuiCardContent-root': {
          textAlign: 'left',
          '& .MuiCardContent-inner': {
            paddingTop: '38px',
            overflowX: 'auto',
          },
        },
      },
    },
  };
};
