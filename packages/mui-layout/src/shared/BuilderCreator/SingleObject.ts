import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';
import { createSingleObjData, RpsConfig, SingleObjData } from '../State';

type Params<R> = {
  defaultId: string;
  component?: 'Header' | 'Footer' | 'Content';
  Registry?: R;
};
export type DummyRegistry<Config = undefined> =(
  state: SingleObjData<Config>
) => {};

export interface SingleObjBuilderResult<
  R extends DummyRegistry<Config>,
  Config = undefined
> {
  create: (id: string) => ReturnType<R>;
  update: (updater: (config: RpsConfig<Config>) => void) => void;
  hide: (breakpoints: Breakpoint[] | boolean) => void;
  getId: () => string;
  getData: () => RpsConfig<Config>;
  debug?: () => void;
}

type BuilderResult<R extends DummyRegistry<Config>, Config = undefined> = ReturnType<
  R
> &
  SingleObjBuilderResult<R, Config>;

const makeRegistry = (id: string) => (state = createSingleObjData({ id })) => {}

export const createSingleObjBuilder = <
  R extends DummyRegistry<Config>,
  Config = undefined
>({
  defaultId,
  component,
  Registry = makeRegistry(defaultId) as R,
}: Params<R>) => {
  const Builder = (initialRpsConfig = {}): BuilderResult<R, Config> => {
    let state: SingleObjData<Config> = createSingleObjData({
      id: defaultId,
      rpsConfig: initialRpsConfig,
    });
    let registry = Registry(state);

    return {
      ...registry,
      create(id: string) {
        state = createSingleObjData({ id });
        registry = Registry(state);
        return registry;
      },
      update(updater: (config: RpsConfig<Config>) => void) {
        updater(state.rpsConfig);
      },
      hide(breakpoints: Breakpoint[]) {
        if (typeof breakpoints === 'boolean') {
          state.hidden = breakpoints ? keys : [];
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
