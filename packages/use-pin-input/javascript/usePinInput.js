import React from "react";
import { useInput, useInputSiblings } from "@mui-treasury/use-input-siblings";
const numberValidator = (value) => new RegExp(/\d/).test(value);
const alphanumericValidator = (value) => new RegExp(/[a-zA-Z0-9]/).test(value);
export const usePinInput = (options = {}) => {
  const {
    pinLength = 4,
    defaultValue,
    value,
    type = "number",
    mask = false,
  } = options;
  const validator = type === "number" ? numberValidator : alphanumericValidator;
  const splittedValue = (value || defaultValue || "").split("");
  const siblings = [...Array(pinLength)].map((_, index) =>
    useInput({
      autoFocus: options.autoFocus && index === 0,
      maxLength: 1,
      validator,
      value: splittedValue[index],
    })
  );
  const pinArray = siblings.map(({ value }) => value);
  React.useEffect(() => {
    const pinString = pinArray.join("");
    if (pinString !== (value || defaultValue || "")) {
      options.onChange?.(pinString);
    }
  }, pinArray);
  const pins = useInputSiblings({
    siblings,
    onBlur: options?.onBlur,
  });
  return {
    pins: pins.map((getInputProps) => {
      return (handlers) => {
        const inputProps = getInputProps(handlers);
        return {
          "aria-label": "Please enter your pin code",
          size: 1,
          type: mask ? "password" : "tel",
          pattern: "d",
          placeholder: "○",
          inputMode: "numeric",
          autoComplete: options.otp ? "one-time-code" : "off",
          ...inputProps,
          onChange: (event) => {
            const inputValue = event.target.value;
            if (inputValue.length > 1) {
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
