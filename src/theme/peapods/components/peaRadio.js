export default ({ palette }) => ({
  MuiRadio: {
    root: {
      '&$checked': {
        '& .PeaIcon': {
          padding: 2,
          width: 30,
          height: 30,
          border: '1px solid',
          borderColor: palette.secondary.main,
          borderRadius: '50%',
          boxShadow: `0 0 4px 0 ${palette.secondary.main}`,
          '& img': {
            display: 'block',
            width: '100%',
          },
          '& svg': {
            display: 'block',
          },
        },
      },
    },
  },
});
