import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import { getGroupyUtilityClass } from "./groupyClasses";
const useUtilityClasses = (styleProps) => {
  const { classes, orientation } = styleProps;
  const slots = {
    root: ["root", orientation],
  };
  return composeClasses(slots, getGroupyUtilityClass, classes);
};
const GroupyRoot = styled(
  "div",
  {},
  {
    name: "JunGroupy",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const { styleProps } = props;
      return {
        ...styles.root,
        ...(styleProps.orientation && styles[styleProps.orientation]),
      };
    },
  }
)(({ styleProps }) => ({
  display: "flex",
  ...(styleProps.orientation === "horizontal" && {
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
  ...(styleProps.orientation === "vertical" && {
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
  const styleProps = {
    ...props,
    orientation,
  };
  const classes = useUtilityClasses(styleProps);
  return (
    <GroupyRoot
      ref={ref}
      as={component}
      {...other}
      styleProps={styleProps}
      className={cx(classes.root, props.className)}
    >
      {children}
    </GroupyRoot>
  );
});
