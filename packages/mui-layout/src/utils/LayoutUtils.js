import upperFirst from './upperFirst';
import createSidebarUtils, { secondaryAdapter } from './sidebarUtils';

const getSidebarGap = ({
  sidebar = {},
  sidebarWidth,
  persistentPushed,
  opened,
}) => {
  switch (sidebar.variant) {
    case 'temporary':
      return 0;
    case 'permanent':
      return sidebarWidth;
    case 'persistent':
      return opened && persistentPushed ? sidebarWidth : 0;
    default:
      return undefined;
  }
};

const getAffectedWidth = ({
  opened,
  sidebar,
  sidebarWidth,
  persistentScreenFit,
  persistentPushed,
} = {}) => {
  switch (sidebar.variant) {
    case 'temporary':
      return '100%';
    case 'permanent':
      return sidebarWidth;
    case 'persistent':
      return opened && persistentScreenFit && persistentPushed
        ? sidebarWidth
        : '100%';
    default:
      return undefined;
  }
};

const getContainerWidth = ({
  primaryOpened,
  primarySidebar,
  primarySidebarWidth,
  persistentScreenFit,
  persistentPushed,
  secondaryOpened,
  secondarySidebar,
  secondarySidebarWidth,
  secondaryPersistentScreenFit,
  secondaryPersistentPushed,
} = {}) => {
  const primaryWidth = getAffectedWidth({
    opened: primaryOpened,
    sidebar: primarySidebar,
    sidebarWidth: primarySidebarWidth,
    persistentScreenFit,
    persistentPushed,
  });
  const secondaryWidth = getAffectedWidth({
    opened: secondaryOpened,
    sidebar: secondarySidebar,
    sidebarWidth: secondarySidebarWidth,
    persistentScreenFit: secondaryPersistentScreenFit,
    persistentPushed: secondaryPersistentPushed,
  });
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

const getContainerMarginAttr = (sidebar, defaultSide = 'left') => {
  return `margin${upperFirst(sidebar.anchor || defaultSide)}`;
};

const getContainerMarginStyle = ({
  primarySidebar,
  primarySidebarWidth,
  primaryOpened,
  persistentPushed,
  secondarySidebar,
  secondarySidebarWidth,
  secondaryOpened,
  secondaryPersistentPushed,
}) => ({
  [getContainerMarginAttr(primarySidebar, 'left')]: getSidebarGap({
    sidebar: primarySidebar,
    sidebarWidth: primarySidebarWidth,
    opened: primaryOpened,
    persistentPushed,
  }),
  [getContainerMarginAttr(secondarySidebar, 'right')]: getSidebarGap({
    sidebar: secondarySidebar,
    sidebarWidth: secondarySidebarWidth,
    opened: secondaryOpened,
    persistentPushed: secondaryPersistentPushed,
  }),
});

export default ({
  opened: primaryOpened,
  collapsed: primaryCollapsed,
  sidebar: primarySidebar = {},
  secondaryOpened,
  secondaryCollapsed,
  secondarySidebar = {},
  header = {},
  content = {},
  footer = {},
}) => {
  const { clipped } = header;
  const primSidebar = createSidebarUtils({
    sidebar: primarySidebar,
    opened: primaryOpened,
    collapsed: primaryCollapsed,
  });
  const secSidebar = createSidebarUtils({
    sidebar: secondarySidebar,
    opened: secondaryOpened,
    collapsed: secondaryCollapsed,
  });
  const primarySidebarWidth = primSidebar.width;
  const secondarySidebarWidth = secSidebar.width;
  const getWidth = ({
    persistentScreenFit,
    persistentPushed,
    secondaryPersistentScreenFit,
    secondaryPersistentPushed,
  } = {}) => {
    return getContainerWidth({
      persistentScreenFit,
      persistentPushed,
      primaryOpened,
      primarySidebar,
      primarySidebarWidth,
      secondaryPersistentScreenFit,
      secondaryPersistentPushed,
      secondaryOpened,
      secondarySidebar,
      secondarySidebarWidth,
    });
  };
  const margin = getContainerMarginStyle({
    primarySidebar,
    primarySidebarWidth,
    primaryOpened,
    secondarySidebar,
    secondarySidebarWidth,
    secondaryOpened,
    ...header,
  });
  return {
    getSidebarWidth: () => primarySidebarWidth,
    getSidebarGap: primSidebar.calculateGap,
    getSecondarySidebarWidth: () => secondarySidebarWidth,
    getSecondarySidebarGap: secondaryAdapter.mapSecondaryArgs(
      secSidebar.calculateGap
    ),
    getWidth,
    getContainerMarginStyle: ({ persistentPushed } = {}) =>
      getContainerMarginStyle({
        primarySidebar,
        primarySidebarWidth,
        primaryOpened,
        secondarySidebar,
        secondarySidebarWidth,
        secondaryOpened,
        persistentPushed,
      }),
    getContentStyle: () => ({
      ...margin,
      width: getWidth(content),
    }),
    getFooterStyle: () => ({
      ...margin,
      width: getWidth(footer),
    }),
    getHeaderStyle: () => {
      if (clipped) {
        return {};
      }
      return {
        ...margin,
        width: getWidth(header),
      };
    },
  };
};
