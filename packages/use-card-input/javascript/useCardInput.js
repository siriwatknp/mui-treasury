import React from "react";
import {
  useSeparatorInput,
  useInput,
  useInputSiblings,
  useIsFirstMount,
} from "@mui-treasury/use-input-siblings";
import { useExpiryInput } from "@mui-treasury/use-expiry-input";
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
  if (!value) return { cardName: "", cardNumber: "", exp: "", csc: "" };
  return {
    cardName: value.cardName,
    cardNumber: chunk(value.cardNumber || "", 4),
    exp: value.expMonth
      ? `${prependZero(value.expMonth)}/${value.expYear || ""}`
      : "",
    csc: value.csc || "",
  };
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
  const name = useInput({
    autoFocus,
    value: parsedValue.cardName,
    maxLength: 26,
    validator: (value) => value.length >= 2 && value.length <= 26,
  });
  const card = useSeparatorInput({
    maxLength: [4, 4, 4, 4],
    separator: cardSeparator,
    value: parsedValue.cardNumber,
    validator: (value) => new RegExp(/\d{16}/).test(removeSeparator(value)),
  });
  const exp = useExpiryInput({
    value: {
      expMonth: value?.expMonth || defaultValue?.expMonth,
      expYear: value?.expYear || defaultValue?.expYear,
    },
    fullYear,
  });
  const csc = useInput({
    maxLength: 4,
    value: parsedValue.csc,
    validator: (value) => new RegExp(/^\d{3,4}$/).test(value),
  });
  const [
    getNameInputProps,
    getCardInputProps,
    getExpInputProps,
    getCSCInputProps,
  ] = useInputSiblings({
    siblings: [name, card, exp, csc],
    onBlur: options.onBlur,
  });
  const isFirstMount = useIsFirstMount();
  React.useEffect(() => {
    if (!isFirstMount) {
      const [expMonth, expYear] = exp.value.split("/");
      const result = {
        cardName: name.value,
        cardNumber: removeSeparator(card.value),
        expMonth: Number(expMonth) || undefined,
        expYear: Number(expYear) || undefined,
        csc: csc.value,
      };
      options.onChange?.(result, {
        invalid: name.invalid || card.invalid || exp.invalid || csc.invalid,
        invalidFields: {
          ccName: name.invalid,
          ccNumber: card.invalid,
          ccExp: exp.invalid,
          ccSecurity: csc.invalid,
        },
      });
    }
  }, [name.value, card.value, exp.value, csc.value]);
  return {
    getCardNameInputProps: (handlers) => ({
      size: 26,
      type: "text",
      placeholder: "Full Name",
      autoComplete: "cc-name",
      name: "ccname",
      required: true,
      ...getNameInputProps(handlers),
    }),
    getCardNumberInputProps: (handlers) => ({
      size: 19,
      type: "tel",
      name: "cardnumber",
      inputMode: "numeric",
      autoComplete: "cc-number",
      pattern:
        "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35d{3})d{11})$",
      required: true,
      ...getCardInputProps(handlers),
    }),
    getExpInputProps: (handlers) => ({
      size: fullYear ? 7 : 5,
      type: "tel",
      inputMode: "numeric",
      autoComplete: "cc-exp",
      name: "ccexp",
      placeholder: fullYear ? "MM/YYYY" : "MM/YY",
      required: true,
      ...getExpInputProps(handlers),
    }),
    getCSCInputProps: (handlers) => ({
      size: 4,
      type: "tel",
      inputMode: "numeric",
      name: "csc",
      autoComplete: "cc-csc",
      required: true,
      ...getCSCInputProps(handlers),
    }),
  };
};
