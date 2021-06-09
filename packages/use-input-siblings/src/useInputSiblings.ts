import React, { useEffect } from "react";

interface InputHanders {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export interface UseInputOptions {
  /**
   * number of characters allowed for this input
   */
  maxLength: number;
  /**
   * If `true`, the input will be focused (only at first mount)
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
    value || options.defaultValue || ""
  );

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, []);

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
      size: options.maxLength, // make the input width fit for maxLength chars
      maxLength: options.maxLength,
      value: internalValue,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        handlers?.onChange?.(event);
        if (
          typeof options.validator !== "function" ||
          options.validator(inputValue)
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
  const result = useInput({ ...options, defaultValue, value, maxLength: 2 });
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

interface Sibling extends InputHanders {
  /**
   * a fn that return input props
   */
  getInputProps: () => JSX.IntrinsicElements["input"];
  /**
   * a fn that provide access to the HTMLInputElement
   */
  getDOM: () => HTMLInputElement | null;
  /**
   * options that contain `maxLength`
   */
  options: { maxLength: number };
}
export interface UseInputSiblingsOptions {
  siblings: Array<Sibling>;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
export const useInputSiblings = (options: UseInputSiblingsOptions) => {
  const { siblings } = options;
  const blurEvent =
    React.useRef<React.FocusEvent<HTMLInputElement> | undefined>(undefined);
  const [unFocused, setUnFocused] = React.useState(false);

  React.useEffect(() => {
    if (unFocused) {
      if (
        siblings.every((input) => {
          const DOM = input.getDOM();
          return DOM && DOM.ownerDocument.activeElement !== DOM;
        })
      ) {
        blurEvent.current && options?.onBlur?.(blurEvent.current);
      }
    }
  }, [unFocused]);

  return {
    unFocused,
    inputs: siblings.map((input, index) => {
      return function (handlers?: InputHanders) {
        const inputProps = input.getInputProps();
        return {
          ...inputProps,
          onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
            handlers?.onFocus?.(event);
            input.onFocus?.(event);
            setUnFocused(false);
          },
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            handlers?.onChange?.(event);
            inputProps?.onChange?.(event);
            input.onChange?.(event);
            const { value } = event.target;
            if (value.length === input.options.maxLength) {
              const nextDOM = siblings[index + 1]?.getDOM();
              if (nextDOM) {
                nextDOM.focus();
                nextDOM.setSelectionRange(0, input.options.maxLength);
              }
            }
          },
          onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
            handlers?.onBlur?.(event);
            input.onBlur?.(event);
            blurEvent.current = event;
            setUnFocused(true);
          },
          onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
            handlers?.onKeyDown?.(event);
            input.onKeyDown?.(event);
            if (index > 0) {
              const DOM = siblings[index].getDOM();
              if (event.code === "Backspace" && DOM && !DOM.value.length) {
                siblings[index - 1].getDOM()?.focus();
              }
            }
          },
        };
      };
    }),
  };
};
