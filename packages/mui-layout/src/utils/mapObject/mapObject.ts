import { Dictionary } from '../../types';

export const mapObject = <T, V extends T>(
  obj: Dictionary<T>,
  keyIteratee: (value: T, key: string) => string,
  valueIteratee: ((value: T, key: string) => V) = value => (value as V)
) => {
  let result: { [key: string]: V } = {}
  Object.keys(obj).forEach(key => {
    result[keyIteratee(obj[key], key)] = valueIteratee(obj[key], key)
  })
  return result
};
