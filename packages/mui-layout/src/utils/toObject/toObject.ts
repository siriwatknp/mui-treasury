export function toObject<T extends string | number>(
  array: T[]
): { [key: string]: T };
export function toObject<T extends string | number, K>(
  array: T[],
  transformer: (item: T) => K
): {
  [key: string]: K;
};
export function toObject<T, P extends keyof T>(
  array: T[],
  key: P
): {
  [key: string]: T;
};
export function toObject<T, P extends keyof T, K>(
  array: T[],
  key: P,
  transformer: (item: T) => K
): {
  [key: string]: K;
};
export function toObject(
  array: any,
  secondParam: any = undefined,
  thirdParam: any = undefined
): any {
  const result: any = {};
  if (!secondParam && !thirdParam) {
    array.forEach((item: string) => {
      result[item] = item;
    });
    return result;
  }
  if (typeof secondParam === 'function') {
    array.forEach((item: string) => {
      result[item] = secondParam(item);
    });
    return result;
  }
  if (typeof secondParam === 'string' && !thirdParam) {
    array.forEach((item: any) => {
      result[item[secondParam]] = item;
    });
    return result;
  }
  array.forEach((item: any) => {
    result[item[secondParam]] = thirdParam(item);
  });
  return result;
}
