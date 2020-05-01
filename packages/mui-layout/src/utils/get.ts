import { Dictionary } from '../types';

type PropertyPath =
  | string
  | number
  | symbol
  | readonly (string | number | symbol)[];

/**
 * @see _.get
 */
function get<TObject extends object, TKey extends keyof TObject>(
  object: TObject | null | undefined,
  path: TKey | [TKey]
): TObject[TKey] | undefined;

/**
 * @see _.get
 */
function get<TObject extends object, TKey extends keyof TObject, TDefault>(
  object: TObject | null | undefined,
  path: TKey | [TKey],
  defaultValue: TDefault
): Exclude<TObject[TKey], undefined> | TDefault;

/**
 * @see _.get
 */
function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1]
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2]
): TObject[TKey1][TKey2] | undefined;

/**
 * @see _.get
 */
function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TDefault
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2],
  defaultValue: TDefault
): Exclude<TObject[TKey1][TKey2], undefined> | TDefault;

/**
 * @see _.get
 */
function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2]
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2, TKey3]
): TObject[TKey1][TKey2][TKey3] | undefined;

/**
 * @see _.get
 */
function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2],
  TDefault
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2, TKey3],
  defaultValue: TDefault
): Exclude<TObject[TKey1][TKey2][TKey3], undefined> | TDefault;

/**
 * @see _.get
 */
function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2],
  TKey4 extends keyof TObject[TKey1][TKey2][TKey3]
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2, TKey3, TKey4]
): TObject[TKey1][TKey2][TKey3][TKey4] | undefined;

/**
 * @see _.get
 */
function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2],
  TKey4 extends keyof TObject[TKey1][TKey2][TKey3],
  TDefault
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2, TKey3, TKey4],
  defaultValue: TDefault
): Exclude<TObject[TKey1][TKey2][TKey3][TKey4], undefined> | TDefault;

/**
 * @see _.get
 */
function get<TDefault>(
  object: null | undefined,
  path: PropertyPath,
  defaultValue: TDefault
): TDefault;

/**
 * @see _.get
 */
function get(object: null | undefined, path: PropertyPath): undefined;

/**
 * @see _.get
 */
function get(object: any, path: PropertyPath, defaultValue?: any): any;

function get<T extends object, K extends keyof T>(
  obj: T,
  path: K | [K],
  defaultValue?: T
): T[K] {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res: Dictionary<{}>, key: string) =>
          res !== null && res !== undefined ? res[key] : res,
        obj
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
}

export default get;
