export type ConfigSetter<
  C extends object,
  K extends keyof C,
  R extends any = void
> = (value: C[K]) => R;

declare const createSet: <
  C extends object,
  K extends keyof C,
  R extends any = void
>(config: C, key: K) => ConfigSetter<C, K, R>;

export default createSet;
