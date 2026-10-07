export function parsePropsKey(key) {
  if (!key || key === 'base') {
    return {};
  }
  return Object.fromEntries(
    key.split(',').map((pair) => {
      const [k, v] = pair.split('=');
      return [k.trim(), v === 'true' ? true : v === 'false' ? false : /^-?\d+(\.\d+)?$/.test(v) ? Number(v) : v];
    }),
  );
}

const LONGHANDS = {
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingBlock: ['paddingTop', 'paddingBottom'],
  paddingInline: ['paddingLeft', 'paddingRight'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginBlock: ['marginTop', 'marginBottom'],
  marginInline: ['marginLeft', 'marginRight'],
  gap: ['rowGap', 'columnGap'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  inset: ['top', 'right', 'bottom', 'left'],
  overflow: ['overflowX', 'overflowY'],
  border: ['Top', 'Right', 'Bottom', 'Left'].flatMap((x) => [`border${x}Width`, `border${x}Style`, `border${x}Color`]),
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  ...Object.fromEntries(['Top', 'Right', 'Bottom', 'Left'].map((x) => [`border${x}`, [`border${x}Width`, `border${x}Style`, `border${x}Color`]])),
  outline: ['outlineWidth', 'outlineStyle', 'outlineColor'],
  flex: ['flexGrow', 'flexShrink', 'flexBasis'],
  background: ['backgroundColor', 'backgroundImage'],
  textDecoration: ['textDecorationLine', 'textDecorationStyle', 'textDecorationColor'],
  transition: ['transitionProperty', 'transitionDuration', 'transitionTimingFunction', 'transitionDelay'],
};
export const longhandsOf = (prop) => LONGHANDS[prop] ?? [prop];
