import { makeStyles, createStyles } from "@material-ui/core/styles";
const SPACE = 24;
const sharedStyles = ({ palette }) =>
  createStyles({
    listBox: {
      margin: "4px 0",
      padding: 0,
      zIndex: 1,
      top: 8,
      left: 0,
      right: 0,
      listStyle: "none",
      backgroundColor: palette.background.paper,
      overflow: "auto",
      maxHeight: "40vh",
      border: "1px solid",
      borderColor: palette.grey["200"],
      borderRadius: 4,
    },
    option: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      cursor: "pointer",
      paddingTop: 6,
      boxSizing: "border-box",
      outline: "0",
      WebkitTapHighlightColor: "transparent",
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      "& svg": {
        marginLeft: -4,
        marginRight: 8,
      },
      '&[aria-selected="true"]': {
        backgroundColor: palette.primary["100"],
        fontWeight: "bold",
        color: palette.primary["500"],
        "& *": {
          color: palette.primary["300"],
        },
      },
      '&[data-focus="true"]:not([aria-selected="true"])': {
        backgroundColor: palette.action.hover,
      },
      "&:active": {
        fontWeight: "bold",
      },
      '&[aria-disabled="true"]': {
        opacity: palette.action.disabledOpacity,
        pointerEvents: "none",
      },
    },
    groupLabel: {
      fontSize: "0.75rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: palette.grey["500"],
      lineHeight: "2.5rem",
      backgroundColor: palette.background.paper,
      letterSpacing: "0.5px",
    },
    groupUl: {
      padding: 0,
    },
    popper: {
      zIndex: 1200,
    },
  });
export const useComboBoxStyles = makeStyles(
  ({ palette, ...rest }) => ({
    anchor: {
      position: "relative",
      border: "1px solid",
      borderColor: palette.grey["500"],
      borderRadius: 4,
      backgroundColor: "#fff",
      padding: "0.625rem 0",
    },
    comboBox: {
      padding: "0 1rem",
      position: "relative",
      display: "flex",
      "& + $comboBox": {
        marginTop: SPACE,
        "&:after": {
          content: '""',
          display: "block",
          height: SPACE,
          border: "1px dashed",
          borderColor: palette.grey["500"],
          position: "absolute",
          left: `calc(1rem + 3px)`,
          top: 0,
          transform: "translateY(-100%)",
        },
        "& $dot": {
          borderRadius: 0,
        },
      },
    },
    inputBase: {
      display: "flex",
    },
    input: {
      padding: 0,
      height: "auto",
      lineHeight: "1.25em",
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: palette.grey["900"],
      marginRight: 12,
      flexShrink: 0,
    },
    ...sharedStyles({ palette, ...rest }),
  }),
  { name: "MuiComboBox" }
);
export const useComboBoxInputStyles = makeStyles(
  ({ palette, ...rest }) => ({
    anchor: {},
    dot: {},
    comboBox: {
      position: "relative",
      display: "flex",
    },
    inputBase: {
      display: "flex",
      padding: "8px 0",
      borderRadius: 4,
      border: "1px solid",
      borderColor: palette.grey["300"],
      backgroundColor: palette.background.paper,
      "&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled):hover": {
        borderColor: palette.grey["500"],
      },
      "&.Mui-focused": {
        borderColor: palette.primary.main,
        boxShadow: `0 0 0 1px ${palette.primary.main}`,
      },
      "&.Mui-focused.MuiInputBase-colorSecondary": {
        borderColor: palette.secondary.main,
        boxShadow: `0 0 0 1px ${palette.secondary.main}`,
      },
      "&.Mui-error": {
        borderColor: palette.error.main,
        backgroundColor: palette.error["100"],
        "&.Mui-focused": {
          boxShadow: `0 0 0 1px ${palette.error.main}`,
        },
      },
      "& svg": {
        margin: "0 6px",
      },
      "&.Mui-disabled": {
        backgroundColor: palette.grey["100"],
        "& svg": {
          color: palette.grey[500],
        },
      },
    },
    input: {
      padding: 0,
      height: "auto",
      lineHeight: "1.25em",
    },
    ...sharedStyles({ palette, ...rest }),
  }),
  { name: "MuiComboBoxInput" }
);
