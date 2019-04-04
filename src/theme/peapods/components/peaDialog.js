/* eslint-disable max-len */
export default ({ spacing, breakpoints, white, palette }) => ({
  MuiDialog: {
    root: {
      '&.PeaConfirmation': {
        '& .DialogTitle--contained + .DialogContent--root': {
          paddingTop: 24,
        },
        '& .DialogContent--root': {
          maxWidth: 400,
        },
        '& .DialogActions-root': {
          justifyContent: 'center',
        },
      },
      '&.PeaInvitationModal': {
        '& .DialogContent--root': {
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 8,
          minWidth: 343,
        },
        '& .ListSubheader-typography': {
          color: palette.secondary.main,
          fontWeight: 'bold',
          paddingLeft: spacing.unit * 2,
        },
        '& .ListItem-secondaryErrorText': {
          color: palette.error.main,
        },
      },
    },
    paper: {
      borderRadius: 16,
      [breakpoints.only('xs')]: {
        margin: spacing.unit * 2,
      },
    },
  },
  MuiDialogTitle: {
    root: {
      '&.DialogTitle--contained': {
        padding: 16,
        background:
          'linear-gradient(90deg, rgba(92,199,153,1), rgba(0,255,176,1))',
        '& *': {
          color: white.text,
          textAlign: 'center',
        },
      },
    },
  },
});
