import { Dictionary } from '../../types';
import { RpsConfig } from '../../shared/State';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export const iterateRpsById = <T>(
  rpsById: Dictionary<RpsConfig<T>>,
  iteratee: (id: string, breakpoint: Breakpoint, value: T) => void
) => {
  Object.keys(rpsById).forEach(id => {
    Object.keys(rpsById[id]).forEach((breakpoint: Breakpoint) => {
      iteratee(id, breakpoint, rpsById[id][breakpoint])
    });
  });
};
