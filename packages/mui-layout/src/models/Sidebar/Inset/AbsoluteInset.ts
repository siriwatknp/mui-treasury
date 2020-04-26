import get from 'lodash/get';
import { AbsoluteInsetSidebarConfig, HeaderConfig } from '../../../types';
import { subtractCalc } from '../../../utils';

export default (
  config: AbsoluteInsetSidebarConfig,
  headerConfig: HeaderConfig
) => {
  return {
    getRootStyle: () => ({
      width: config.width,
    }),
    getBodyStyle: () => ({
      position: 'absolute' as const,
      top: 0,
      width: '100%',
      padding: 'unset',
      margin: 'unset',
      overflow: 'auto',
      height: subtractCalc('100vh', get(headerConfig, 'initialHeight', 0)),
    }),
  };
};
