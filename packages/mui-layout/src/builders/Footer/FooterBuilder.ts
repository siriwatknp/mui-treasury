import { IFooterBuilder } from '../../types';

export default (): IFooterBuilder => {
  let id: string;
  return {
    create: function(footerId: string) {
      id = footerId;
    },
    getData: () => ({
      id,
    }),
    debug: () => {
      if (process.env.NODE_ENV !== 'production') {
        console.group('Footer:', `"${id}"`);
        console.groupEnd()
      }
    },
  };
};
