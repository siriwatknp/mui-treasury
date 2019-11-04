export default values => {
  if (typeof window === 'undefined') {
    return 'xs';
  }
  const { innerWidth } = window;
  const keys = Object.keys(values);
  let screen = 'xs';
  keys.slice(1).forEach(k => {
    if (innerWidth >= values[k]) {
      screen = k;
    }
  });
  return screen;
};
