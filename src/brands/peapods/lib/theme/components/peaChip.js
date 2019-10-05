import Color from 'color';

export default ({ palette: { primary, secondary, common, text, error } }) => ({
  MuiChip: {
    root: {
      '&.PeaTag-root': {
        '& .MuiChip-label': {
          fontSize: 14,
          paddingRight: 14,
          fontWeight: 500,
          color: text.primary,
        },
        '& .MuiChip-deleteIcon': {
          width: 22,
          height: 22,
        },
      },
    },
    clickable: {
      '&:hover': {
        '& .MuiChip-label': {
          color: common.white,
        },
        '& .MuiChip-deleteIcon': {
          color: error.main,
          width: 24,
          height: 24,
          background: common.white,
          borderRadius: '100%',
        },
      },
      '&:focus': {
        '& .MuiChip-label': {
          color: common.white,
        },
      },
    },
    colorPrimary: {
      backgroundColor: Color(primary.main)
        .fade(0.75)
        .string(),
      '&.PeaTag-root': {
        '& .MuiChip-label': {
          color: primary.dark,
        },
      },
    },
    colorSecondary: {
      backgroundColor: Color(secondary.main)
        .fade(0.75)
        .string(),
      '&.PeaTag-root': {
        '& .MuiChip-label': {
          color: secondary.dark,
        },
      },
    },
  },
});
