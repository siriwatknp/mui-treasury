import { IContentBuilder } from '../../types';

export default (): IContentBuilder => {
  let id: string;
  return {
    create: function(contentId: string) {
      id = contentId;
    },
    getData: () => ({
      id,
    }),
    debug: () => {
      if (process.env.NODE_ENV !== 'production') {
        console.group('Content:', `"${id}"`);
        console.groupEnd();
      }
    },
  };
};
