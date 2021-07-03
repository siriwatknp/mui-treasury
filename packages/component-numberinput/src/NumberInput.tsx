import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { styled, useThemeProps, Theme } from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import SvgIcon from "@material-ui/core/SvgIcon";
import OutlinedInput, {
  OutlinedInputProps,
} from "@material-ui/core/OutlinedInput";
import InputAdornment, {
  InputAdornmentProps,
} from "@material-ui/core/InputAdornment";
import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import {
  getNumberInputUtilityClass,
  numberInputClasses,
} from "./numberInputClasses";
import {
  useNumberInput,
  UseNumberInputOptions,
} from "@mui-treasury/use-number-input";
import capitalize from "@material-ui/utils/capitalize";

export type NumberInputClassKey = keyof typeof numberInputClasses;
export type NumberInputClasses = Partial<typeof numberInputClasses>;

type StepperClasses = {
  stepper?: string;
  stepperSmall?: string;
  stepperMedium?: string;
  button?: string;
  increment?: string;
  decrement?: string;
};

export type NumberInputProps = UseNumberInputOptions & {
  inputElement?: React.ReactElement;
  incrementIcon?: React.ReactNode;
  decrementIcon?: React.ReactNode;
  DecrementProps?: ButtonBaseProps;
  IncrementProps?: ButtonBaseProps;
  InputAdornmentProps?: InputAdornmentProps;
  StepperProps?: JSX.IntrinsicElements["div"] & {
    classes?: StepperClasses;
  };
} & Omit<OutlinedInputProps, "onChange">;

const useUtilityClasses = (styleProps: NumberInputProps) => {
  const { StepperProps, size } = styleProps;
  const slots = {
    stepper: ["stepper", size && `stepper${capitalize(size)}`],
    button: ["button"],
    increment: ["increment"],
    decrement: ["decrement"],
  };
  return composeClasses(
    slots,
    getNumberInputUtilityClass,
    StepperProps?.classes as Required<StepperClasses>
  );
};

const NumberInputStepper = styled("div", {
  name: "JunNumberInput",
  slot: "Stepper",
  overridesResolver: (props, styles) => ({
    ...styles.stepper,
    ...(props.size && styles[`size${capitalize(props.size)}`]),
  }),
})({
  display: "flex",
  flexDirection: "column",
  marginRight: -8,
});

const NumberInputButton = styled(ButtonBase, {
  name: "JunNumberInput",
  slot: "Button",
  overridesResolver: (props, styles) => {
    const { styleProps } = props;
    return {
      ...styles.button,
      ...styles[styleProps.type],
    };
  },
})<{
  styleProps: { size: "small" | "medium" };
}>(({ theme, styleProps }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 4,
  "&:hover": {
    color: theme.palette.text.primary,
  },
  "&.Mui-disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  ...(styleProps.size === "small" && {
    "& svg": {
      fontSize: "1.25rem",
    },
  }),
}));

const defaultIncrementIcon = (
  <SvgIcon>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </SvgIcon>
);
const defaultDecrementIcon = (
  <SvgIcon>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </SvgIcon>
);

export const NumberInput = React.forwardRef<
  any,
  PropsWithChildren<NumberInputProps>
>(function NumberInput(inProps, ref) {
  const props = useThemeProps<Theme, NumberInputProps, "JunNumberInput">({
    props: inProps,
    name: "JunNumberInput",
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
    size = "medium",
    ...other
  } = props;

  const styleProps = {
    ...props,
  };

  const classes = useUtilityClasses(styleProps);

  const { inputRef, getInputProps, getIncrementProps, getDecrementProps } =
    useNumberInput(props);

  return React.cloneElement(inputElement, {
    ref,
    size,
    ...other,
    inputRef,
    inputProps: getInputProps(props),
    endAdornment: (
      <>
        {endAdornment}
        <InputAdornment {...InputAdornmentProps} position="end">
          <NumberInputStepper
            {...StepperProps}
            className={cx(classes.stepper, StepperProps?.className)}
          >
            <NumberInputButton
              {...IncrementProps}
              {...getIncrementProps(IncrementProps)}
              className={cx(
                classes.button,
                classes.increment,
                IncrementProps?.className
              )}
              styleProps={{ size }}
            >
              {incrementIcon}
            </NumberInputButton>
            <NumberInputButton
              {...DecrementProps}
              {...getDecrementProps(DecrementProps)}
              className={cx(
                classes.button,
                classes.decrement,
                DecrementProps?.className
              )}
              styleProps={{ size }}
            >
              {decrementIcon}
            </NumberInputButton>
          </NumberInputStepper>
        </InputAdornment>
      </>
    ),
  });
});
