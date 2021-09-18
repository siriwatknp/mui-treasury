import { useSeparatorInput } from "@mui-treasury/use-input-siblings";
const dayMonthYearValidator = (day, month, year) => {
  return (
    Number(day) >= 1 &&
    Number(day) <= 31 &&
    Number(month) >= 1 &&
    Number(month) <= 12 &&
    Number(year) >= 1500 &&
    Number(year) <= 2999
  );
};
export const useBirthdateInput = (options = {}) => {
  const { separator = "/" } = options;
  const result = useSeparatorInput({
    ...options,
    separator,
    maxLength: [2, 2, 4],
    validator: (value) => dayMonthYearValidator(...value.split(separator)),
  });
  return {
    ...result,
    getInputProps: (handlers) => ({
      size: 10,
      pattern: "[0-9]{2}.[0-9]{2}.[0-9]{4}",
      inputMode: "numeric",
      ...result.getInputProps(handlers),
    }),
  };
};
