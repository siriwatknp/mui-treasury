import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';

const getCoreFiles = files => files.filter(({ core }) => !!core);

export const mergeInfo = (...info) =>
  info.reduce((result, curr, index) =>
    index === 0
      ? result
      : {
          ...result,
          links: uniqBy([...result.links, ...curr.links], 'label'),
          files: uniqBy(
            [...result.files, ...getCoreFiles(curr.files)],
            'label',
          ),
          libraries: uniqBy([...result.libraries, ...curr.libraries], 'label'),
          dependencies: uniq([...result.dependencies, ...curr.dependencies]),
        },
  );

export default {
  mergeInfo,
};
