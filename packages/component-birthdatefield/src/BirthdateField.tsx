import React from "react";
import cx from "clsx";
import { styled, useThemeProps, Theme } from "@mui/material/styles";
import { OverridableComponent } from "@mui-treasury/types";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import {
  useBirthdateInput,
  UseBirthdateInputOptions,
} from "@mui-treasury/use-birthdate-input";
import { getBirthdateFieldUtilityClass } from "./birthdateFieldClasses";

export type BirthdateFieldProps = Omit<TextFieldProps, "select" | "onChange"> &
  UseBirthdateInputOptions;

const shouldForwardProp = (prop: any) =>
  prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";

const BirthdateFieldRoot = styled(TextField, {
  name: "JunBirthdateField",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === "classes",
})({});

const rootClass = getBirthdateFieldUtilityClass("root");

export const BirthdateField: OverridableComponent<BirthdateFieldProps> =
  React.forwardRef<HTMLDivElement, BirthdateFieldProps>(function BirthdateField(
    { ...inProps },
    ref
  ) {
    const { separator, onChange, inputProps, ...props } = useThemeProps<
      Theme,
      BirthdateFieldProps,
      "JunBirthdateField"
    >({
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
