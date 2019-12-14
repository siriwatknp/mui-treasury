const createSet = (config, key) =>
  function set(value) {
    // eslint-disable-next-line no-param-reassign
    config[key] =
      typeof value === 'object'
        ? {
            ...config[key],
            ...value,
          }
        : value;
  };
export default createSet;
