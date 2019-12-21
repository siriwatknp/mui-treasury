import createAllSidebars from './allSidebars';
import { reduceWidths } from './width';

export default (ctx = {}) => {
  const { container = {} } = ctx;
  const {
    mainEffect,
    subEffect,
    mapSecondaryConfig,
    isEdgeAndInset,
    isPrimaryEdge,
    isSecondaryEdge,
  } = createAllSidebars(ctx);
  const subFooter = mapSecondaryConfig(container);
  const mainAttached = isEdgeAndInset && isPrimaryEdge;
  const subAttached = isEdgeAndInset && isSecondaryEdge;
  return {
    getMarginStyle() {
      return {
        ...(mainAttached && mainEffect.getMarginStyle(container)),
        ...(subAttached && subEffect.getMarginStyle(subFooter)),
      };
    },
    getWidthStyle() {
      const finalWidthObj = reduceWidths([
        ...(mainAttached ? [mainEffect.getWidthObj(container)] : []),
        ...(subAttached ? [subEffect.getWidthObj(subFooter)] : []),
      ]);
      return finalWidthObj.getStyle();
    },
    getStyle() {
      return {
        ...this.getMarginStyle(),
        ...this.getWidthStyle(),
      };
    },
  };
};
