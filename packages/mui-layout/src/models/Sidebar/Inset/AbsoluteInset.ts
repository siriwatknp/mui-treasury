import get from 'lodash/get';
import { AbsoluteInsetSidebarConfig, HeaderConfig } from '../../../types';
import { subtractCalc } from '../../../utils';

export default (
  config: AbsoluteInsetSidebarConfig,
  headerConfig: HeaderConfig
) => {
  const isHidden = config && config.hidden;
  return {
    getRootStyle: () => {
      if (isHidden) return { display: 'none' };
      return {
        width: config.width,
      };
    },
    getBodyStyle: () => {
      if (isHidden) return { display: 'none' };
      return {
        position: 'absolute' as const,
        top: 0,
        width: '100%',
        padding: 'unset',
        margin: 'unset',
        overflow: 'auto',
        height: subtractCalc('100vh', get(headerConfig, 'initialHeight', 0)),
      };
    },
  };
};
