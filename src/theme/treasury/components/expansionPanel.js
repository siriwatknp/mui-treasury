export default ({ muiBaseTheme }) => ({
  MuiExpansionPanel: {
    root: {
      borderBottom: `1px solid ${muiBaseTheme.palette.grey[200]}`,
      '&:before': {
        display: 'none',
      },
    },
    expanded: {
      margin: 0,
    },
  },
  MuiExpansionPanelSummary: {
    root: {
      '&$expanded': {
        boxShadow: '0 0 8px 0 rgba(0,0,0,0.12)',
      },
    },
  },
});
