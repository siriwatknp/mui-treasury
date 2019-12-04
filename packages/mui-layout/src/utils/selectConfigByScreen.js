import getDefaultScreenConfig from './getDefaultScreenConfig';

const screenKeys = ['xs', 'sm', 'md', 'lg', 'xl'];

export default (config, screen) => {
  const matchedIndex = screenKeys.indexOf(screen);
  if (matchedIndex === -1) {
    // throw new Error("screen must match one of ['xs', 'sm', 'md', 'lg', 'xl']");
    return getDefaultScreenConfig();
  }
  const possibleScreens = screenKeys.slice(0, matchedIndex + 1);
  let matchedKey = screen;
  possibleScreens.reverse().some(s => {
    matchedKey = s;
    return config[s];
  });
  return config[matchedKey];
};
