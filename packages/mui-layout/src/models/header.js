import createSidebarEffect from './sidebarEffect';

export default (ctx = {}) => {
  const { header } = ctx;
  const affectedHeader = createSidebarEffect(ctx, header);
  return {
    getStyle: theme => {
      const isHeaderOnTop =
        (header.clipped && header.position !== 'static') ||
        (header.secondaryClipped && header.position !== 'static');
      const layerStyle = isHeaderOnTop
        ? { zIndex: theme.zIndex.drawer + 10 }
        : undefined;
      if (header.clipped && header.secondaryClipped) {
        return layerStyle;
      }
      if (!header.clipped && header.secondaryClipped) {
        return {
          ...layerStyle,
          ...affectedHeader.getStyle({ secondaryDisabled: true }),
        };
      }
      if (header.clipped && !header.secondaryClipped) {
        return {
          ...layerStyle,
          ...affectedHeader.getStyle({ primaryDisabled: true }),
        };
      }
      return {
        ...layerStyle,
        ...affectedHeader.getStyle(),
      };
    },
  };
};
