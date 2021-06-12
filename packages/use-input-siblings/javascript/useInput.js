import React, { useEffect } from "react";
export const useInput = (options) => {
  const { autoFocus = false, value } = options;
  const ref = React.useRef(null);
  const [internalValue, setInternalValue] = React.useState(
    (value || options.defaultValue || "").slice(0, options.maxLength)
  );
  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
      if (ref.current.value.length !== 0) {
        ref.current.setSelectionRange(0, ref.current.value.length);
      }
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
    getInputProps: (handlers) => ({
      ref,
      value: internalValue,
      onChange: (event) => {
        const inputValue = event.target.value;
        handlers?.onChange?.(event);
        if (
          (inputValue === "" ||
            typeof options.validator !== "function" ||
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
const prependZero = (value) => {
  if (!value) return "";
  return value.length === 1 ? `0${value}` : value;
};
export const useTwoNumbersInput = (options) => {
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
    getInputProps: (handlers) => ({
      ...result.getInputProps(handlers),
      onBlur: (event) => {
        handlers?.onBlur?.(event);
        result.setValue((currentValue) =>
          currentValue.length === 1 ? `0${currentValue}` : currentValue
        );
      },
    }),
  };
};
