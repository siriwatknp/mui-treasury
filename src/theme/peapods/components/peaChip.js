import Color from 'color';

export default ({ muiBaseTheme, primary }) => ({
  MuiChip: {
    root: {
      '&.PeaTag-root': {
        height: 40,
        padding: '4px 8px',
        borderRadius: muiBaseTheme.shape.borderRadius * 2,
        backgroundColor: Color(primary.main)
          .fade(0.75)
          .string(),
        '& .MuiChip-label': {
          fontSize: 14,
          color: primary.dark,
          fontWeight: 500,
        },
      },
    },
  },
});
