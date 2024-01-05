import React from "react";
import { useExpiryInput } from "../use-expiry-input";
import {
  useInput,
  useInputSiblings,
  useIsFirstMount,
  useSeparatorInput,
} from "../use-input-siblings";

interface InputHanders {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export interface CardValue {
  cardName?: string;
  cardNumber?: string;
  expMonth?: number;
  expYear?: number;
  csc?: string;
}
export interface UseCardInputOptions {
  /**
   * separator between card number
   * @default " "
   */
  cardSeparator?: string;
  /**
   * If `true`, the input will be focused
   */
  autoFocus?: boolean;
  /**
   * If `true`, year will be in YYYY format
   */
  fullYear?: boolean;
  /**
   * initial value (don't use together with `value`)
   */
  defaultValue?: CardValue;
  /**
   * value for controlled input
   */
  value?: CardValue;
  /**
   * a callback function when input value changed
   */
  onChange?: (
    value: CardValue,
    meta: {
      invalid: boolean;
      invalidFields: {
        ccName: boolean;
        ccNumber: boolean;
        ccExp: boolean;
        ccSecurity: boolean;
      };
    }
  ) => void;
  /**
   * a callback function when all inputs are not focused
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

function chunk(str: string, n: number) {
  let result = "";
  str.split("").forEach((char, index) => {
    result = `${result}${char}`;
    if (index % n === 3) {
      result = result + " "; // add separator
    }
  });
  return result;
}

const prependZero = (value: number | undefined) => {
  if (!value) return "";
  return value.toString().length === 1 ? `0${value}` : value;
};

const parseCard = (value: CardValue | undefined) => {
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

export const useCardInput = (options: UseCardInputOptions = {}) => {
  const {
    defaultValue,
    value,
    autoFocus = false,
    fullYear = false,
    cardSeparator = " ",
  } = options;
  const removeSeparator = (value: string) =>
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
      const result: CardValue = {
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
    getCardNameInputProps: (handlers?: InputHanders) => ({
      size: 26,
      type: "text",
      placeholder: "Full Name",
      autoComplete: "cc-name",
      name: "ccname",
      required: true,
      ...getNameInputProps(handlers),
    }),
    getCardNumberInputProps: (handlers?: InputHanders) => ({
      size: 19,
      type: "tel",
      name: "cardnumber",
      inputMode: "numeric" as const,
      autoComplete: "cc-number",
      pattern:
        "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35d{3})d{11})$",
      required: true,
      ...getCardInputProps(handlers),
    }),
    getExpInputProps: (handlers?: InputHanders) => ({
      size: fullYear ? 7 : 5,
      type: "tel",
      inputMode: "numeric" as const,
      autoComplete: "cc-exp",
      name: "ccexp",
      placeholder: fullYear ? "MM/YYYY" : "MM/YY",
      required: true,
      ...getExpInputProps(handlers),
    }),
    getCSCInputProps: (handlers?: InputHanders) => ({
      size: 4,
      type: "tel",
      inputMode: "numeric" as const,
      name: "csc",
      autoComplete: "cc-csc",
      required: true,
      ...getCSCInputProps(handlers),
    }),
  };
};
