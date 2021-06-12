import React from "react";
import {
  useSeparatorInput,
  useInput,
  useInputSiblings,
} from "@mui-treasury/use-input-siblings";
function chunk(str, n) {
  let result = "";
  str.split("").forEach((char, index) => {
    result = `${result}${char}`;
    if (index % n === 3) {
      result = result + " "; // add separator
    }
  });
  return result;
}
const prependZero = (value) => {
  if (!value) return "";
  return value.toString().length === 1 ? `0${value}` : value;
};
const parseCard = (value) => {
  if (!value) return { cardNumber: "", exp: "", ccv: "" };
  return {
    cardNumber: chunk(value.cardNumber || "", 4),
    exp: value.expMonth
      ? `${prependZero(value.expMonth)}/${value.expYear || ""}`
      : "",
    ccv: value.ccv || "",
  };
};
const isObjectEqual = (root, target) => {
  let isEqual = true;
  for (const key in root) {
    if (root[key] !== target[key]) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
};
export const useCardInput = (options = {}) => {
  const {
    defaultValue,
    value,
    autoFocus = false,
    fullYear = false,
    cardSeparator = " ",
  } = options;
  const removeSeparator = (value) =>
    value.replace(new RegExp(cardSeparator, "g"), "");
  const parsedValue = parseCard(value || defaultValue);
  const card = useSeparatorInput({
    autoFocus,
    maxLength: [4, 4, 4, 4],
    separator: cardSeparator,
    value: parsedValue.cardNumber,
    validator: (value) => new RegExp(/\d+/).test(removeSeparator(value)),
  });
  const exp = useSeparatorInput({
    maxLength: [2, fullYear ? 4 : 2],
    separator: "/",
    value: parsedValue.exp,
    validator: (value) =>
      new RegExp(/^(\d{0,2}\/?|\d{0,2}\/\d{0,4})$/).test(value),
  });
  const ccv = useInput({
    maxLength: 4,
    value: parsedValue.ccv,
    validator: (value) => new RegExp(/^\d+$/).test(value),
  });
  const inputs = useInputSiblings({
    siblings: [card, exp, ccv],
    onBlur: options.onBlur,
  });
  React.useEffect(() => {
    const [expMonth, expYear] = exp.value.split("/");
    const result = {
      cardNumber: removeSeparator(card.value),
      expMonth: Number(expMonth) || undefined,
      expYear: Number(expYear) || undefined,
      ccv: ccv.value,
    };
    if (!isObjectEqual(result, parsedValue)) {
      options.onChange?.(result);
    }
  }, [card.value, exp.value, ccv.value]);
  return {
    getCardInputProps: (handlers) => ({
      size: 19,
      type: "tel",
      inputMode: "numeric",
      ...inputs[0](handlers),
    }),
    getExpInputProps: (handlers) => {
      const inputProps = inputs[1](handlers);
      return {
        size: fullYear ? 7 : 5,
        type: "tel",
        inputMode: "numeric",
        ...inputProps,
        onChange: (event) => {
          handlers?.onChange?.(event);
          const inputValue = event.target.value;
          if (
            inputValue.length === 2 &&
            Number.isInteger(Number(inputValue[0])) &&
            inputValue[1] === "/"
          ) {
            exp.setValue(`0${inputValue}`);
          } else {
            inputProps.onChange(event);
          }
        },
      };
    },
    getCCVInputProps: (handlers) => ({
      size: 4,
      type: "tel",
      inputMode: "numeric",
      ...inputs[2](handlers),
    }),
  };
};
