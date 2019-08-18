import { useMemo } from 'react';
import { useTheme } from '@material-ui/core/styles';
import createGetScreenValue from '../utils/createGetScreenValue';
import useConfig from './useConfig';
import useWidth from './useWidth';

export default (config, defaultConfig = {}) => {
  // if no config passed from params, use context instead.
  const context = config || useConfig();
  const {
    breakpoints: { keys },
  } = useTheme();
  const currentScreen = useWidth();
  const contextKeys = Object.keys(context);
  const getScreenValue = createGetScreenValue(keys, currentScreen);
  const assignValue = () => {
    const screenContext = {};
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < contextKeys.length; i++) {
      const key = contextKeys[i];
      screenContext[key] = getScreenValue(context[key], defaultConfig[key]);
    }
    return screenContext;
  };
  return useMemo(assignValue, [context, currentScreen]);
};
