import upperFirst from './upperFirst';
import getAllSidebars from './allSidebarUtils';

const getContainerMarginAttr = (anchor, defaultSide = 'left') => {
  return `margin${upperFirst(anchor || defaultSide)}`;
};

export default ctx => {
  const { primarySidebar, secondarySidebar, getWidth, getGap } = getAllSidebars(
    ctx
  );
  const parseWidth = width => {
    if (width !== '100%') {
      return `calc(100% - ${width}px)`;
    }
    return width;
  };
  const calculateWidth = (container = {}) => {
    const { primaryWidth, secondaryWidth } = getWidth(container);
    if (primaryWidth === '100%' && secondaryWidth === '100%') {
      return '100%';
    }
    if (primaryWidth !== '100%' && secondaryWidth !== '100%') {
      return `calc(100% - ${primaryWidth + secondaryWidth}px)`;
    }
    if (primaryWidth !== '100%') {
      return `calc(100% - ${primaryWidth}px)`;
    }
    return `calc(100% - ${secondaryWidth}px)`;
  };
  const getMarginStyle = (container = {}) => {
    const { primaryGap, secondaryGap } = getGap(container);
    return {
      [getContainerMarginAttr(secondarySidebar.anchor, 'right')]: secondaryGap,
      [getContainerMarginAttr(primarySidebar.anchor, 'left')]: primaryGap,
    };
  };
  return {
    parseWidth,
    calculateWidth,
    getMarginStyle,
    getContainerMarginAttr,
  };
};
