import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const LayoutCtx = React.createContext('value');
LayoutCtx.displayName = 'MuiLayoutCtx';

const LayoutProvider = ({ config, children }) => {
  const [opened, setOpened] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const getSidebarWidth = () => {
    const { sidebar } = config;
    if (sidebar.collapsible && collapsed) return sidebar.collapsedWidth;
    return sidebar.width;
  };
  return (
    <LayoutCtx.Provider
      value={{
        ...config,
        getSidebarWidth,
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

export const useConfig = () => useContext(LayoutCtx);

export const LayoutConsumer = LayoutCtx.Consumer;

export default LayoutCtx;
