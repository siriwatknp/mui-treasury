export default ({ palette }) => ({
  MuiModal: {
    root: {
      '&.PeaRegister': {
        '& .PeaRegister-title': {
          color: palette.secondary.main,
          fontWeight: 800,
          marginBottom: 16,
        },
        '& .MuiCard-root': {
          outline: 'none',
          width: 343,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '& .MuiCardMedia-root': {
          paddingTop: '56.25%',
        },
        '& .MuiCardContent-root': {
          textAlign: 'center',
        },
        '& .MuiCardActions-root': {
          padding: 16,
          borderTop: `1px solid ${palette.grey[200]}`,
          justifyContent: 'center',
        },
        '& .IconButton-google': {
          marginLeft: 16,
          padding: 8,
          border: `1px solid ${palette.grey[300]}`,
          '& img': {
            width: 25,
            height: 25,
          },
        },
        '& .PeaRegister-emailRegister': {
          color: palette.grey[500],
          fontWeight: 'bold',
          cursor: 'pointer',
          '&:hover': {
            color: palette.secondary.main,
          },
        },
        '& .PeaRegister-login': {
          fontWeight: 'bold',
          '& a': {
            color: palette.secondary.main,
            cursor: 'pointer',
          },
        },
      },
    },
  },
});
