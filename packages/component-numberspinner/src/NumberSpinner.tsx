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
  useNumberInput,
  UseNumberInputOptions,
} from "@mui-treasury/use-number-input";
import {
  getNumberSpinnerUtilityClass,
  numberSpinnerClasses,
} from "./numberSpinnerClasses";

export type NumberSpinnerClassKey = keyof typeof numberSpinnerClasses;
export type NumberSpinnerClasses = Partial<typeof numberSpinnerClasses>;

type StepperClasses = {
  stepper?: string;
  stepperSmall?: string;
  stepperMedium?: string;
  button?: string;
  increment?: string;
  decrement?: string;
};

export type NumberSpinnerProps = UseNumberInputOptions & {
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

const useUtilityClasses = (styleProps: NumberSpinnerProps) => {
  const { StepperProps } = styleProps;
  const slots = {
    stepper: ["stepper"],
    button: ["button"],
    increment: ["increment"],
    decrement: ["decrement"],
  };
  return composeClasses(
    slots,
    getNumberSpinnerUtilityClass,
    StepperProps?.classes as Required<StepperClasses>
  );
};

const NumberSpinnerButton = styled(ButtonBase, {
  name: "JunNumberSpinner",
  slot: "Button",
  overridesResolver: (props, styles) => {
    const { styleProps } = props;
    return {
      ...styles.button,
      ...styles[styleProps.type],
    };
  },
})<{ styleProps: { type: "increment" | "decrement" } }>(
  ({ theme, styleProps }) => ({
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
    ...(styleProps.type === "increment" && {
      marginRight: -4,
    }),
    ...(styleProps.type === "decrement" && {
      marginLeft: -4,
    }),
  })
);

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

export const NumberSpinner = React.forwardRef<
  any,
  PropsWithChildren<NumberSpinnerProps>
>(function NumberSpinner({ children, ...inProps }, ref) {
  const props = useThemeProps<Theme, NumberSpinnerProps, "JunNumberSpinner">({
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

  const styleProps = {
    ...props,
  };

  const classes = useUtilityClasses(styleProps);

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
          styleProps={{ type: "decrement" }}
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
          styleProps={{ type: "increment" }}
        >
          {incrementIcon}
        </NumberSpinnerButton>
      </InputAdornment>
    ),
  });
});
