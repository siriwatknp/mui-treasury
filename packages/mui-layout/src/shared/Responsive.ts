import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ComponentData } from './BuilderCreator/MultiObjects';
import { pickNearestBreakpoint } from '../utils';
import { RpsConfig } from '../shared/State';

export const SingleResponsiveObj = <T>(data: RpsConfig<T>) => {
  return {
    getNearestConfig: (screen: Breakpoint) =>
      pickNearestBreakpoint(data, screen),
  };
};

export const MultiResponsiveObj = <T extends { hidden?: boolean }, P = {}>(
  data: Pick<ComponentData<T, P>, 'configMapById'>
) => {
  const { configMapById } = data;
  return {
    getVisibleConfigs: (screen: Breakpoint) =>
      Object.keys(configMapById)
        .map(id =>
          SingleResponsiveObj(configMapById[id]).getNearestConfig(screen)
        )
        .filter(c => !!c && !c.hidden),
    getNearestConfig: (id: string, screen: Breakpoint) =>
      SingleResponsiveObj(configMapById[id]).getNearestConfig(screen),
  };
};
