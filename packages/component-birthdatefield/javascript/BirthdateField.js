import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useBirthdateInput } from "@mui-treasury/use-birthdate-input";
import { getBirthdateFieldUtilityClass } from "./birthdateFieldClasses";
const shouldForwardProp = (prop) =>
  prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
const BirthdateFieldRoot = styled(TextField, {
  name: "JunBirthdateField",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === "classes",
})({});
const rootClass = getBirthdateFieldUtilityClass("root");
export const BirthdateField = React.forwardRef(function BirthdateField(
  { ...inProps },
  ref
) {
  const { separator, onChange, inputProps, ...props } = useThemeProps({
    props: inProps,
    name: "JunBirthdateField",
  });
  const { getInputProps } = useBirthdateInput({
    ...props,
    separator,
    onChange,
  });
  const { classes, ...other } = props;
  return (
    <BirthdateFieldRoot
      ref={ref}
      classes={{
        ...classes,
        root: cx(rootClass, classes?.root),
      }}
      inputProps={{ ...inputProps, ...getInputProps() }}
      {...other}
    />
  );
});
