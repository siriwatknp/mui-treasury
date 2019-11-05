export default (source, target) => {
  if (!source || !target) return false;
  const keys = Object.keys(source);
  return keys.some(key => target.indexOf(key) !== -1);
};
