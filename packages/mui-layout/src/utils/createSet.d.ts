export type ConfigSetter<
  C extends object,
  K extends keyof C,
  T extends any = void
> = (value: C[K]) => T;

declare const createSet: <
  C extends object,
  K extends keyof C,
  T extends any = void
>(config: C, key: K) => ConfigSetter<C, K, T>;

export default createSet;
