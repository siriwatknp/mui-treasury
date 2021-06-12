import { useSeparatorInput } from "@mui-treasury/use-input-siblings";
export const useBirthdateInput = (options = {}) => {
  const { separator = "/" } = options;
  const result = useSeparatorInput({
    ...options,
    separator,
    maxLength: [2, 2, 4],
    validator: (value) =>
      new RegExp(/^\d+$/).test(value.replace(new RegExp(separator, "g"), "")),
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
