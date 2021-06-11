import React, { useEffect } from "react";
import { InputHanders } from "./types";

export interface UseInputOptions {
  /**
   * number of characters allowed for this input
   */
  maxLength: number;
  /**
   * If `true`, the input will be focused
   */
  autoFocus?: boolean;
  /**
   * initial value (don't use together with `value`)
   */
  defaultValue?: string;
  /**
   * value for controlled input
   */
  value?: string;
  /**
   * a function to validate the user input before setting the state
   */
  validator?: (value: string) => boolean;
  /**
   * a callback function when input value changed
   */
  onChange?: (value: string) => void;
}
export const useInput = (options: UseInputOptions) => {
  const { autoFocus = false, value } = options;
  const ref = React.useRef<HTMLInputElement | null>(null);
  const [internalValue, setInternalValue] = React.useState(
    (value || options.defaultValue || "").slice(0, options.maxLength)
  );

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (typeof value !== "undefined" && value !== internalValue) {
      setInternalValue(value);
    }
  }, [value]);

  return {
    options,
    value: internalValue,
    setValue: setInternalValue,
    getDOM: () => ref.current,
    getInputProps: (handlers?: Pick<InputHanders, "onChange">) => ({
      ref,
      value: internalValue,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        handlers?.onChange?.(event);
        if (
          (typeof options.validator !== "function" ||
            options.validator(inputValue)) &&
          inputValue.length <= options.maxLength
        ) {
          setInternalValue(inputValue);
          options.onChange?.(inputValue);
        }
      },
    }),
  };
};

const prependZero = (value?: string) => {
  if (!value) return "";
  return value.length === 1 ? `0${value}` : value;
};
export interface UseTwoNumbersInputOptions
  extends Omit<UseInputOptions, "maxLength"> {}
export const useTwoNumbersInput = (options?: UseTwoNumbersInputOptions) => {
  let defaultValue = options?.defaultValue;
  if (typeof defaultValue !== "undefined") {
    defaultValue = prependZero(defaultValue);
  }
  let value = options?.value;
  if (typeof value !== "undefined") {
    value = prependZero(value);
  }
  const result = useInput({
    validator: (value) => new RegExp(/^\d{0,2}$/).test(value),
    ...options,
    defaultValue,
    value,
    maxLength: 2,
  });
  return {
    ...result,
    getInputProps: (handlers?: Pick<InputHanders, "onChange" | "onBlur">) => ({
      ...result.getInputProps(handlers),
      onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
        handlers?.onBlur?.(event);
        result.setValue((currentValue) =>
          currentValue.length === 1 ? `0${currentValue}` : currentValue
        );
      },
    }),
  };
};
