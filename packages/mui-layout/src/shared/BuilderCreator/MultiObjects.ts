import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';
import { createMultiObjData, createSingleObjData, RpsConfig, SingleObjData } from '../State';
import { DummyRegistry } from './SingleObject';
import { Dictionary } from '../../types';

type Params<R> = {
  Registry?: R;
  component?: 'EdgeSidebar' | 'InsetSidebar' | 'Subheader'
};

export interface MultiObjBuilderResult<
  R extends DummyRegistry,
  Config = undefined,
  Props = {}
> {
  create: (id: string, props: Props) => ReturnType<R>;
  update: (
    id: string,
    updater: (rpsConfig: RpsConfig<Config>) => void
  ) => void;
  hide: (id: string, breakpoints: Breakpoint[] | boolean) => void;
  getData: () => {
    ids: string[];
    rpsConfigById: Dictionary<RpsConfig<Config>>;
  };
  debug?: () => void;
}

export const createMultiObjBuilder = <
  R extends DummyRegistry<Config>,
  Config = undefined,
  Props = {}
>({
  Registry,
  component,
}: Params<R>) => {
  const MultiObjBuilder = (): MultiObjBuilderResult<R, Config, Props> => {
    let state = createMultiObjData<Config>();
    const getRpsConfigById = (field: keyof SingleObjData<Config>) => state.ids.reduce(
      (result, id) => ({
        ...result,
        [id]: state.dataById[id][field],
      }),
      {}
    )
    return {
      create(id, props) {
        if (state.ids.includes(id)) {
          throw new Error(
            `id: ${id} already exists, please define another unique id`
          );
        }
        state.ids.push(id);
        const objData = createSingleObjData({ id });
        objData.rpsConfig = props;
        // @ts-ignore
        state.dataById[id] = objData;
        return Registry(state.dataById[id]) as ReturnType<R>;
      },
      update(id, updater) {
        if (state.dataById[id]) {
          updater(state.dataById[id].rpsConfig);
        } else {
          console.warn(`No sidebar to update. id: ${id}`);
        }
      },
      hide(id, breakpoints) {
        if (typeof breakpoints === 'boolean') {
          state.dataById[id].hidden = breakpoints ? keys : [];
        } else {
          state.dataById[id].hidden = breakpoints
        }
      },
      getData() {
        return {
          ids: state.ids,
          rpsConfigById: getRpsConfigById('rpsConfig'),
          hiddenById: getRpsConfigById('hidden')
        };
      },
      debug() {
        if (process.env.NODE_ENV !== 'production') {
          const data = this.getData()
          state.ids.forEach(id => {
            console.group(`${component}: `, `"${id}"`);
            console.table(data.rpsConfigById[id]);
            console.table(data.hiddenById[id]);
            console.groupEnd();
          });
        }
      }
    };
  };

  return MultiObjBuilder;
};
