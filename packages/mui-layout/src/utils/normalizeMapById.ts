import { Dictionary, MapBreakpoint } from '../types';
import { iterateRpsById } from './iterateRpsById';

export default <T>(mapById: Dictionary<MapBreakpoint<T>>) => {
  const result: MapBreakpoint<T[]> = {};
  iterateRpsById(mapById, (_, bp, value) => {
    if (!result[bp]) result[bp] = [];
    result[bp].push(value);
  });
  return result;
};
