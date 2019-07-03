export default ({ spacing, palette, borderColor }) => ({
  MuiTooltip: {
    tooltip: {
      backgroundColor: palette.grey[100],
      color: palette.grey[700],
      border: `solid 1px ${borderColor.default}`,
      fontSize: 14,
      padding: `${spacing(1)}px ${spacing(2)}px`,
    },
  },
});
