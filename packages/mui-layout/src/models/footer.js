import createAllSidebars from './allSidebars';
import { reduceWidths } from './width';
import combineMargin from '../utils/combineMargin';

export default (ctx = {}) => {
  const { footer = {} } = ctx;
  const {
    mainEffect,
    subEffect,
    mapSecondaryConfig,
    isEdgeAndInset,
    isPrimaryInset,
    isPrimaryEdge,
    isSecondaryEdge,
    isSecondaryInset,
  } = createAllSidebars(ctx);
  const subFooter = mapSecondaryConfig(footer);
  const mainAttached = !isEdgeAndInset || (isPrimaryInset && isSecondaryEdge);
  const subAttached = !isEdgeAndInset || (isPrimaryEdge && isSecondaryInset);
  return {
    getMarginStyle() {
      return combineMargin(
        mainEffect.getMarginStyle(footer),
        subEffect.getMarginStyle(subFooter)
      );
    },
    getWidthStyle() {
      const finalWidthObj = reduceWidths([
        ...(mainAttached ? [mainEffect.getWidthObj(footer)] : []),
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
