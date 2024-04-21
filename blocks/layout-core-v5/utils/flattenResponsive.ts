import { Responsive } from "./types";

function uniqValues(value: Responsive<any>) {
  return Object.values(value).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

/**
 * use with `display` property
 */
export const flattenStrict = <T>(value: Responsive<T>) => {
  const keys = Object.keys(value);
  if (keys.length === 1 && !!value.xs) {
    return value.xs;
  }
  if (keys.length > 1) {
    const values = uniqValues(value);
    if (values.length === 1) {
      return values[0]!;
    }
  }
  return value;
};

/**
 * use with other css key that is not `display` for the consumer to override
 */
export const flattenLoose = <T>(value: Responsive<T>) => {
  const keys = Object.keys(value);
  if (keys.length === 1) {
    return Object.values(value)[0]!;
  }
  if (keys.length > 1) {
    const values = uniqValues(value);
    if (values.length === 1 && keys.includes("xs")) {
      return values[0]!;
    }
  }
  return value;
};
