import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/base";
import SvgIcon from "@mui/material/SvgIcon";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import ButtonBase from "@mui/material/ButtonBase";
import { useNumberInput } from "@mui-treasury/use-number-input";
import { getNumberSpinnerUtilityClass } from "./numberSpinnerClasses";
const useUtilityClasses = (ownerState) => {
  const { StepperProps } = ownerState;
  const slots = {
    stepper: ["stepper"],
    button: ["button"],
    increment: ["increment"],
    decrement: ["decrement"],
  };
  return composeClasses(
    slots,
    getNumberSpinnerUtilityClass,
    StepperProps?.classes
  );
};
const NumberSpinnerButton = styled(ButtonBase, {
  name: "JunNumberSpinner",
  slot: "Button",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.button, styles[ownerState.type]];
  },
})(({ theme, ownerState }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  width: 40,
  height: 40,
  "&:hover:not(.Mui-disabled)": {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.hover,
  },
  "&.Mui-disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  ...(ownerState.type === "increment" && {
    marginRight: -4,
  }),
  ...(ownerState.type === "decrement" && {
    marginLeft: -4,
  }),
}));
const defaultIncrementIcon = (
  <SvgIcon>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </SvgIcon>
);
const defaultDecrementIcon = (
  <SvgIcon>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 13H5v-2h14v2z" />
  </SvgIcon>
);
export const NumberSpinner = React.forwardRef(function NumberSpinner(
  { children, ...inProps },
  ref
) {
  const props = useThemeProps({
    props: inProps,
    name: "JunNumberSpinner",
  });
  const {
    inputElement = <OutlinedInput />,
    endAdornment = null,
    defaultValue,
    allowMouseWheel,
    keepWithinRange,
    clampValueOnBlur,
    focusInputOnChange,
    incrementIcon = defaultIncrementIcon,
    decrementIcon = defaultDecrementIcon,
    IncrementProps,
    DecrementProps,
    InputAdornmentProps,
    StepperProps,
    formatter,
    parser,
    min = 0,
    ...other
  } = props;
  const ownerState = {
    ...props,
  };
  const classes = useUtilityClasses(ownerState);
  const { inputRef, getInputProps, getIncrementProps, getDecrementProps } =
    useNumberInput({ ...props, min });
  return React.cloneElement(inputElement, {
    ref,
    readOnly: true,
    ...other,
    sx: {
      "& input": {
        textAlign: "center",
      },
      ...inputElement.props?.sxProps,
    },
    inputRef,
    inputProps: {
      size: 4,
      ...inputElement.props?.inputProps,
      ...getInputProps(props),
    },
    startAdornment: (
      <InputAdornment position="start">
        <NumberSpinnerButton
          {...DecrementProps}
          {...getDecrementProps(DecrementProps)}
          className={cx(
            classes.button,
            classes.decrement,
            DecrementProps?.className
          )}
          ownerState={{ type: "decrement" }}
        >
          {decrementIcon}
        </NumberSpinnerButton>
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        <NumberSpinnerButton
          {...IncrementProps}
          {...getIncrementProps(IncrementProps)}
          className={cx(
            classes.button,
            classes.increment,
            IncrementProps?.className
          )}
          ownerState={{ type: "increment" }}
        >
          {incrementIcon}
        </NumberSpinnerButton>
      </InputAdornment>
    ),
  });
});
