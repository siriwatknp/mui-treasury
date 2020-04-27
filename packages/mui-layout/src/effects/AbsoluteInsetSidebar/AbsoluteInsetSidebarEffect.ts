import { AbsoluteInsetSidebarConfig } from '../../types';

export default (config: AbsoluteInsetSidebarConfig) => {
  return {
    id: config.id,
    getAvoidingStyle: () => ({
      ...(config.anchor === 'left' &&
        !config.hidden && { marginLeft: config.width }),
      ...(config.anchor === 'right' &&
        !config.hidden && { marginRight: config.width }),
    }),
  };
};
