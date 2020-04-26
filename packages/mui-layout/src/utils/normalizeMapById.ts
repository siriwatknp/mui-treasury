import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Dictionary, MapBreakpoint } from '../types';

export default <T>(mapById: Dictionary<MapBreakpoint<T>>) => {
  const result: MapBreakpoint<T[]> = {};
  Object.keys(mapById).forEach(key => {
    Object.keys(mapById[key]).forEach((bp: Breakpoint) => {
      if (!result[bp]) result[bp] = [];
      result[bp].push(mapById[key][bp]);
    });
  });
  return result;
};
