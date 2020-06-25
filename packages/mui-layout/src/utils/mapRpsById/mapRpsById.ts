import mapValues from 'lodash.mapvalues';
import { Dictionary } from '../../types';
import { RpsConfig } from '../../shared/State';

export const mapRpsById = <T, K = T>(
  rpsById: Dictionary<RpsConfig<T>>,
  iteratee: (key: string) => K
) => {
  return mapValues(rpsById, (value, key) =>
    mapValues(value, nestedValue => ({
      ...nestedValue,
      ...iteratee(key),
    }))
  );
};
