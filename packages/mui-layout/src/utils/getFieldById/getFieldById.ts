import { Dictionary } from '../../types';

export const getFieldById = <
  K,
  T extends keyof K,
>(
  dataById: Dictionary<K>,
  field: T
): Dictionary<K[T]> =>
  Object.keys(dataById).reduce(
    (result, id) => ({
      ...result,
      [id]: dataById[id][field],
    }),
    {}
  );
