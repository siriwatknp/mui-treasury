import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';
import { createSingleObjState, RspConfig, SingleObjData } from '../State';

type Params<R> = {
  defaultId: string;
  component: 'Header' | 'Footer' | 'Content';
  Registry?: R;
};
export type DummyRegistry = (...args: any[]) => {};

export interface SingleObjBuilderResult<
  R extends DummyRegistry,
  Config = undefined
> {
  create: (id: string) => ReturnType<R>;
  update: (updater: (config: RspConfig<Config>) => void) => void;
  hide: (breakpoints: Breakpoint[] | boolean) => void;
  getId: () => string;
  getData: () => RspConfig<Config>;
  debug?: () => void;
}

export type BuilderResult<
  R extends DummyRegistry,
  Config = undefined
> = ReturnType<R> & SingleObjBuilderResult<R, Config>;

export const createSingleObjBuilder = <
  R extends DummyRegistry,
  Config = undefined
>({
  defaultId,
  component,
  Registry = (() => {}) as R,
}: Params<R>) => {
  const Builder = (initialRpsConfig = {}): BuilderResult<R, Config> => {
    let state: SingleObjData<Config> = createSingleObjState({
      id: defaultId,
      rpsConfig: initialRpsConfig,
    });
    let registry = Registry(state);

    return {
      ...registry,
      create(id: string) {
        state = createSingleObjState({ id });
        registry = Registry(state);
        return registry;
      },
      update(updater: (config: RspConfig<Config>) => void) {
        updater(state.rpsConfig);
      },
      hide(breakpoints: Breakpoint[]) {
        if (typeof breakpoints === 'boolean') {
          if (breakpoints) {
            state.hidden = keys;
          }
        } else {
          state.hidden = breakpoints;
        }
      },
      getId: () => state.id,
      getData: () => state.rpsConfig,
      debug: () => {
        if (process.env.NODE_ENV !== 'production') {
          console.group(`${component}: `, `"${state.id}"`);
          console.table(state.rpsConfig);
          console.table(state.hidden);
          console.groupEnd();
        }
      },
    } as BuilderResult<R, Config>;
  };

  return Builder;
};
