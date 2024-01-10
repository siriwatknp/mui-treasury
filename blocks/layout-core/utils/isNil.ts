export const isNil = <T>(
  value: T | null | undefined
): value is null | undefined => {
  return value === null || value === undefined;
};
