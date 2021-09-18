import React from "react";
import {
  useSeparatorInput,
  useIsFirstMount,
} from "@mui-treasury/use-input-siblings";
const prependZero = (value) => {
  if (!value) return "";
  return value.toString().length === 1 ? `0${value}` : value;
};
const formatValue = (value) =>
  value.expMonth ? `${prependZero(value.expMonth)}/${value.expYear || ""}` : "";
export const expiryValidator = (value) =>
  new RegExp(/^(0[1-9]|1[0-2])\/(2[0-9]{3}|[0-9]{2})$/).test(value);
export const useExpiryInput = (options) => {
  const { fullYear = false, defaultValue, value } = options || {};
  const formattedValue = formatValue(value || defaultValue || {});
  const expiry = useSeparatorInput({
    maxLength: [2, fullYear ? 4 : 2],
    separator: "/",
    value: formattedValue,
    validator: expiryValidator,
  });
  const isFirstMount = useIsFirstMount();
  React.useEffect(() => {
    if (!isFirstMount) {
      const [expMonth, expYear] = expiry.value.split("/");
      options?.onChange?.(
        {
          expMonth: Number(expMonth) || undefined,
          expYear: Number(expYear) || undefined,
        },
        { invalid: !expiryValidator(expiry.value) }
      );
    }
  }, [expiry.value]);
  return {
    ...expiry,
    getInputProps: (handlers) => {
      const inputProps = expiry.getInputProps(handlers);
      return {
        ...inputProps,
        size: fullYear ? 7 : 5,
        type: "tel",
        inputMode: "numeric",
        onChange: (event) => {
          const inputValue = event.target.value;
          if (
            inputValue.length === 2 &&
            Number.isInteger(Number(inputValue[0])) &&
            inputValue[1] === "/"
          ) {
            handlers?.onChange?.(event);
            expiry.setValue(`0${inputValue}`);
          } else {
            inputProps.onChange(event);
          }
        },
      };
    },
  };
};
