import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/core";
import { getGroupyUtilityClass } from "./groupyClasses";
const useUtilityClasses = (ownerState) => {
  const { classes, orientation } = ownerState;
  const slots = {
    root: ["root", orientation],
  };
  return composeClasses(slots, getGroupyUtilityClass, classes);
};
const GroupyRoot = styled("div", {
  name: "JunGroupy",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.root,
      ownerState.orientation && styles[ownerState.orientation],
    ];
  },
})(({ ownerState }) => ({
  display: "flex",
  ...(ownerState.orientation === "horizontal" && {
    flexDirection: "row",
    // separate MuiInputBase into another scope
    "& > :not(:first-of-type):not(label + *):not(.MuiInputBase-root)": {
      marginLeft: -1,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    // MuiInputBase
    "& > :first-of-type:not(label) + .MuiInputBase-root": {
      marginLeft: -1,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    "& > *:not(:first-of-type)": {
      "& label + .MuiInputBase-root": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
    "& > :not(:last-child)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      "& .MuiInputBase-root": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  }),
  ...(ownerState.orientation === "vertical" && {
    flexDirection: "column",
    "& > :not(:first-of-type)": {
      marginTop: -1,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    "& > :not(:last-child)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  }),
}));
export const Groupy = React.forwardRef(function Groupy(
  { children, component, ...inProps },
  ref
) {
  const props = useThemeProps({
    props: inProps,
    name: "JunGroupy",
  });
  const { orientation = "horizontal", ...other } = props;
  const ownerState = {
    ...props,
    orientation,
  };
  const classes = useUtilityClasses(ownerState);
  return (
    <GroupyRoot
      ref={ref}
      as={component}
      {...other}
      ownerState={ownerState}
      className={cx(classes.root, props.className)}
    >
      {children}
    </GroupyRoot>
  );
});
