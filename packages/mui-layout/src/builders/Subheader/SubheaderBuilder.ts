import {
  Dictionary,
  HeaderConfig,
  IRegistryOld,
  MapBreakpoint,
  SubheaderData,
} from '../../types';
import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';
import {
  attachHiddenToMapById,
  INITIAL_HEADER_HEIGHT,
  normalizeMapById,
  pickNearestBreakpoint,
} from '../../utils';

export interface ISubheaderBuilder {
  create: (id: string) => IRegistryOld<HeaderConfig>;
  update: (
    id: string,
    updater: (config: MapBreakpoint<Omit<HeaderConfig, 'id'>>) => void
  ) => void;
  hide: (id: string, breakpoints: Breakpoint[] | boolean) => void;
  getData: () => SubheaderData;
  debug: () => void;
}

export type HeaderConfigMapById = Dictionary<MapBreakpoint<HeaderConfig>>;

export default (initialMapById?: HeaderConfigMapById): ISubheaderBuilder => {
  const hiddenById: Dictionary<Breakpoint[]> = {};
  const mapById: HeaderConfigMapById = Object.assign({}, initialMapById);
  const addConfig = (bp: Breakpoint, config: HeaderConfig): void => {
    if (!mapById[config.id]) {
      mapById[config.id] = {};
    }
    mapById[config.id][bp] = config;
  };
  return {
    create(id) {
      const Registry = (): IRegistryOld<HeaderConfig> => ({
        registerConfig(breakpoint, config) {
          addConfig(breakpoint, {
            initialHeight: pickNearestBreakpoint(
              INITIAL_HEADER_HEIGHT,
              breakpoint
            ),
            ...config,
            id,
          });
          return this;
        },
      });
      return Registry();
    },
    update(id, updater) {
      if (mapById[id]) {
        updater(mapById[id]);
      } else {
        console.warn(`No sidebar to update. id: ${id}`);
      }
    },
    hide(id, breakpoints) {
      if (typeof breakpoints === 'boolean') {
        hiddenById[id] = breakpoints ? keys : [];
      } else {
        if (!hiddenById[id]) hiddenById[id] = [];
        hiddenById[id] = breakpoints;
      }
    },
    getData: () => {
      const attachedMapById = attachHiddenToMapById(mapById, hiddenById);
      return {
        configMap: normalizeMapById(attachedMapById),
        configMapById: attachedMapById,
        hiddenById,
      };
    },
    debug() {
      if (process.env.NODE_ENV !== 'production') {
        Object.keys(mapById).forEach(id => {
          console.group('Subheader:', `"${id}"`);
          console.table(mapById[id]);
          console.groupEnd();
        });
      }
    },
  };
};
