import createAllSidebars from './allSidebars';
import { reduceWidths } from './width';

export default (ctx = {}) => {
  const { header = {} } = ctx;
  const { mainEffect, subEffect, mapSecondaryConfig } = createAllSidebars(ctx);
  const subHeader = mapSecondaryConfig(header);
  return {
    getMarginStyle() {
      return {
        ...(!header.clipped && mainEffect.getMarginStyle(header)),
        ...(!header.secondaryClipped && subEffect.getMarginStyle(subHeader)),
      };
    },
    getWidthStyle() {
      return reduceWidths([
        ...(!header.clipped ? [mainEffect.getWidthObj(header)] : []),
        ...(!header.secondaryClipped ? [subEffect.getWidthObj(subHeader)] : []),
      ]).getStyle();
    },
  };
};
