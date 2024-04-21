import { isNil } from "./isNil";

type Empty = "";

export const isNilOrEmpty = <T>(
  value: T | Empty | null | undefined
): value is Empty | null | undefined => {
  return isNil(value) || value === "";
};

export const isNotNilOrEmpty = (value: any) => !isNilOrEmpty(value);
