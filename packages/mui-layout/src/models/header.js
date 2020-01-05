import createAllSidebars from './allSidebars';
import { reduceWidths } from './width';
import combineMargin from '../utils/combineMargin';

export default (ctx = {}) => {
  const { header = {} } = ctx;
  const { mainEffect, subEffect, mapSecondaryConfig } = createAllSidebars(ctx);
  const subHeader = mapSecondaryConfig(header);
  return {
    getMarginStyle() {
      return combineMargin(
        !header.clipped ? mainEffect.getMarginStyle(header) : undefined,
        !header.secondaryClipped
          ? subEffect.getMarginStyle(subHeader)
          : undefined
      );
    },
    getWidthStyle() {
      return reduceWidths([
        ...(!header.clipped ? [mainEffect.getWidthObj(header)] : []),
        ...(!header.secondaryClipped ? [subEffect.getWidthObj(subHeader)] : []),
      ]).getStyle();
    },
    getStyle() {
      return {
        ...this.getMarginStyle(),
        ...this.getWidthStyle(),
      };
    },
  };
};
