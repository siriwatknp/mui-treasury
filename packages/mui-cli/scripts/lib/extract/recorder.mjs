export const records = [];

export const rootShouldForwardProp = (prop) => !['ownerState', 'theme', 'sx', 'as', 'classes'].includes(prop);
export const slotShouldForwardProp = (prop) => !['ownerState', 'theme', 'sx', 'as'].includes(prop);

export default function styled(tag, options = {}) {
  return (...styles) => {
    records.push({ name: options.name, slot: options.slot, tag, styles, overridesResolver: options.overridesResolver });
    const Recorded = () => null;
    Recorded.displayName = `${options.name ?? 'Anonymous'}${options.slot ?? ''}`;
    return Recorded;
  };
}
