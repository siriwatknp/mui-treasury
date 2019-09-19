import last from 'lodash/last';

export const bundleStyles = reqSource => {
  const cache = {};
  reqSource.keys().forEach(filename => {
    const raw = reqSource(filename);
    const name = filename.replace('./', '');
    if (!name.match(/^index.js$/)) {
      cache[name] = raw;
    }
  });
  return cache;
};

export const bundleJS = (req, reqSource) => {
  const cache = {};
  req.keys().forEach(filename => {
    const module = req(filename).default;
    const folder = filename.split('/');
    const component = last(folder);
    const name = component.replace('.js', '');
    if (!component.match(/^index.js$/)) {
      if (reqSource && module) {
        module.raw_js = reqSource(filename);
      }
      cache[name] = module;
    }
  });
  return cache;
};
