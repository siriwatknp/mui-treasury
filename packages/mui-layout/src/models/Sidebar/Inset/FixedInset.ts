import { FixedInsetSidebarConfig } from '../../../types';

export default (config: FixedInsetSidebarConfig) => {
  const isHidden = config && config.hidden;
  return {
    getRootStyle: () => {
      if (isHidden) return { display: 'none' };
      return {
        width: config.width,
      }
    },
    getBodyStyle: () => {
      if (isHidden) return { display: 'none' };
      return {
        position: 'fixed' as const,
        top: 0,
        width: 'auto',
        height: '100%',
        ...(config.anchor === 'left' && { marginLeft: -999, paddingLeft: 999 }),
        ...(config.anchor === 'right' && {
          marginRight: -999,
          paddingRight: 999,
        }),
      };
    },
  };
};
