import last from 'lodash/last';

export const bundleJS = req => {
  const cache = {};
  req.keys().forEach(key => {
    const module = req(key).default;
    const folder = key.split('/');
    const component = last(folder);
    const name = component.replace('.js', '');
    if (!component.match(/^index.js$/)) {
      cache[name] = module;
    }
  });
  return cache;
};
