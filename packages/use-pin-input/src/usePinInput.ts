import React from "react";
import {
  useInput,
  useInputSiblings,
  useIsFirstMount,
  InputHanders,
} from "@mui-treasury/use-input-siblings";

const numberValidator = (value: string) => new RegExp(/\d/).test(value);
const alphanumericValidator = (value: string) =>
  new RegExp(/[a-zA-Z0-9]/).test(value);

export interface UsePinInputOptions {
  /**
   * If `true`, the input will be focused
   */
  autoFocus?: boolean;
  /**
   * The type of values the pin-input should allow
   */
  type?: "number" | "alphanumeric";
  /**
   * If `true`, the input's value will be masked just like `type=password`
   */
  mask?: boolean;
  /**
   * If `true`, the pin input component signals to its fields that they should use `autocomplete="one-time-code"`.
   */
  otp?: boolean;
  /**
   * number of pin inputs (this number should never change between render)
   */
  pinLength?: number;
  /**
   * initial value (don't use together with `value`)
   */
  defaultValue?: string;
  /**
   * value for controlled input
   */
  value?: string;
  /**
   * a callback function when input value changed
   */
  onChange?: (value: string, meta: { invalid: boolean }) => void;
  /**
   * a callback function when all inputs are not focused
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const usePinInput = (options: UsePinInputOptions = {}) => {
  const {
    pinLength = 4,
    defaultValue,
    value,
    type = "number",
    mask = false,
  } = options;
  const validator = type === "number" ? numberValidator : alphanumericValidator;
  const splittedValue = (value || defaultValue || "").split("");
  const siblings = [...Array(pinLength).fill(undefined)].map((_, index) =>
    useInput({
      autoFocus: options.autoFocus && index === 0,
      maxLength: 1,
      validator,
      value: splittedValue[index],
    })
  );

  const isFirstMount = useIsFirstMount();
  const pinArray = siblings.map(({ value }) => value);
  React.useEffect(() => {
    if (!isFirstMount) {
      options.onChange?.(pinArray.join(""), {
        invalid: siblings.some((pinInput) => pinInput.invalid),
      });
    }
  }, pinArray);

  const pins = useInputSiblings({
    siblings,
    onBlur: options?.onBlur,
  });

  return {
    pins: pins.map((getInputProps) => {
      return (handlers?: InputHanders) => {
        const inputProps = getInputProps(handlers);
        return {
          "aria-label": "Please enter your pin code",
          size: 1,
          type: mask ? "password" : "tel",
          pattern: "d",
          placeholder: "○",
          inputMode: "numeric" as const,
          autoComplete: options.otp ? "one-time-code" : "off",
          ...inputProps,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            let inputValue = event.target.value;
            if (inputValue.length > 2) {
              inputValue =
                inputValue[0] === inputProps.value
                  ? inputValue.slice(1)
                  : inputValue.substring(-1);
              handlers?.onChange?.(event);
              // copy & paste
              const valueArray = inputValue
                .split("")
                .filter(validator)
                .slice(0, siblings.length);
              valueArray.forEach((val, index) => {
                siblings[index].setValue(val);
              });
              const nextInput =
                siblings[
                  Math.min(valueArray.length, siblings.length - 1)
                ].getDOM();
              if (nextInput) nextInput.focus();
            } else {
              inputProps.onChange(event);
            }
          },
        };
      };
    }),
  };
};
