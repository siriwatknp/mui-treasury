import React from "react";
import {
  useSeparatorInput,
  useInput,
  useInputSiblings,
} from "@mui-treasury/use-input-siblings";

interface InputHanders {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export interface CardValue {
  cardNumber?: string;
  expMonth?: number;
  expYear?: number;
  ccv?: string;
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
  onChange?: (value: CardValue) => void;
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
  if (!value) return { cardNumber: "", exp: "", ccv: "" };
  return {
    cardNumber: chunk(value.cardNumber || "", 4),
    exp: value.expMonth
      ? `${prependZero(value.expMonth)}/${value.expYear || ""}`
      : "",
    ccv: value.ccv || "",
  };
};
const isObjectEqual = <T extends { [k: string]: any }>(root: T, target: T) => {
  let isEqual = true;
  for (const key in root) {
    if (root[key] !== target[key]) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
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
    const result: CardValue = {
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
    getCardInputProps: (handlers?: InputHanders) => ({
      size: 19,
      type: "tel",
      inputMode: "numeric" as const,
      ...inputs[0](handlers),
    }),
    getExpInputProps: (handlers?: InputHanders) => {
      const inputProps = inputs[1](handlers);
      return {
        size: fullYear ? 7 : 5,
        type: "tel",
        inputMode: "numeric" as const,
        ...inputProps,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
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
    getCCVInputProps: (handlers?: InputHanders) => ({
      size: 4,
      type: "tel",
      inputMode: "numeric" as const,
      ...inputs[2](handlers),
    }),
  };
};
