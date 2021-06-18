import { Breakpoint, keys } from '@material-ui/system';
import { ComponentData } from '../../shared/BuilderCreator/MultiObjects';
import get from '../get';

export const genHiddenBreakpoints = <Config, Props = {}>(
  componentData: Pick<
    ComponentData<Config, Props>,
    'configMapById' | 'hiddenById'
  >,
  id: string,
  predicate: (config: Config) => boolean
) => {
  if (get(componentData, ['hiddenById', id]) === keys) {
    // hidden at all breakpoints if true
    return keys;
  }
  const result: Breakpoint[] = [];
  let found: boolean = false;
  keys.forEach(bp => {
    const config: Config = get(componentData, ['configMapById', id, bp]);
    if (predicate(config)) {
      // if predicate return true, won't add this breakpoint to the list
      found = true;
    } else if (!found || config) {
      result.push(bp);
      found = false;
    }
  });
  return result;
};
