import { StickyInsetSidebarConfig } from '../../../types';

export default (config: StickyInsetSidebarConfig) => {
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
        position: 'sticky' as const,
        top: config.top,
        margin: 'unset',
        padding: 'unset',
        height: 'auto',
      };
    },
  };
};
