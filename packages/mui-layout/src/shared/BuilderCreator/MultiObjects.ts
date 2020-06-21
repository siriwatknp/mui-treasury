import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';
import mapValues from 'lodash.mapvalues';
import {
  createMultiObjData,
  createSingleObjData,
  RpsConfig,
  RpsConfigArray,
} from '../State';
import { DummyRegistry } from './SingleObject';
import { Dictionary } from '../../types';
import {
  attachHiddenToMapById,
  normalizeMapById,
  getFieldById,
} from '../../utils';

type Params<R> = {
  Registry?: R;
  component?: 'EdgeSidebar' | 'InsetSidebar' | 'Subheader';
};

export interface MultiObjBuilderResult<
  R extends DummyRegistry,
  Config = undefined,
  Props = {}
> {
  create: (id: string, props: Props) => ReturnType<R>;
  update: (id: string, updater: (rpsConfig: RpsConfig<Config>) => void) => void;
  hide: (id: string, breakpoints: Breakpoint[] | boolean) => void;
  getData: () => {
    ids: string[];
    sidebarIds: string[];
    propsById: Dictionary<Props>;
    configMapById: Dictionary<RpsConfig<Config & Props>>;
    configMap: RpsConfigArray<Config & Props>;
    hiddenById: Dictionary<Breakpoint[]>;
  };
  debug?: () => void;
}

export const createMultiObjBuilder = <
  R extends DummyRegistry<Config>,
  Config = undefined,
  Props = Partial<Config>
>({
  Registry,
  component,
}: Params<R>) => {
  const MultiObjBuilder = (
    initialRpsConfigById: Dictionary<RpsConfig<Config>> = {}
  ): MultiObjBuilderResult<R, Config, Props> => {
    let state = createMultiObjData<Config, Props>(initialRpsConfigById);

    const getMapById = () => {
      const mapById = getFieldById(state.dataById, 'rpsConfig');
      const hiddenById = getFieldById(state.dataById, 'hidden');
      const propsById = getFieldById(state.dataById, 'props');
      const finalMapById = mapValues(mapById, (value, key) =>
        mapValues(value, nestedValue => ({
          ...nestedValue,
          ...propsById[key],
        }))
      );
      const attachedMapById = attachHiddenToMapById(finalMapById, hiddenById);
      return {
        configMap: normalizeMapById(attachedMapById),
        configMapById: attachedMapById,
      };
    };
    return {
      create(id, props) {
        if (!state.ids.includes(id)) {
          // throw new Error(
          //   `id: ${id} already exists, please define another unique id`
          // );
          state.ids.push(id);
          state.dataById[id] = createSingleObjData<Config, Props>({
            id,
            props,
          });
        }
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
          state.dataById[id].hidden = breakpoints;
        }
      },
      getData() {
        return {
          ids: state.ids,
          sidebarIds: state.ids,
          propsById: getFieldById(state.dataById, 'props'),
          hiddenById: getFieldById(state.dataById, 'hidden'),
          ...getMapById(),
        };
      },
      debug() {
        if (process.env.NODE_ENV !== 'production') {
          const data = this.getData();
          state.ids.forEach(id => {
            console.group(`${component}: `, `"${id}"`);
            console.table(data.configMapById[id]);
            console.table(data.hiddenById[id]);
            console.groupEnd();
          });
        }
      },
    };
  };

  return MultiObjBuilder;
};
