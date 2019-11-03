import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import createLayoutUtils from './utils/LayoutUtils';

const LayoutCtx = React.createContext('value');
LayoutCtx.displayName = 'MuiLayoutCtx';

const LayoutProvider = ({ config, children }) => {
  const [opened, setOpened] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const { getSidebarGap, getWidth, getSidebarWidth } = createLayoutUtils({
    opened,
    collapsed,
    ...config,
  });
  return (
    <LayoutCtx.Provider
      value={{
        ...config,
        getSidebarWidth,
        getSidebarGap,
        getWidth,
        opened,
        setOpened,
        collapsed,
        setCollapsed,
      }}
    >
      {children}
    </LayoutCtx.Provider>
  );
};
LayoutProvider.propTypes = {
  config: PropTypes.shape({
    sidebar: PropTypes.shape({}).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export { LayoutProvider };

export const useLayoutCtx = () => useContext(LayoutCtx);

export const LayoutConsumer = LayoutCtx.Consumer;

export default LayoutCtx;
