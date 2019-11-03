import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import createLayoutUtils from './utils/LayoutUtils';
import useScreen from './hooks/useScreen';

const LayoutCtx = React.createContext('value');
LayoutCtx.displayName = 'MuiLayoutCtx';

const LayoutProvider = ({
  config,
  children,
  initialOpened,
  initialCollapsed,
}) => {
  const [opened, setOpened] = React.useState(initialOpened);
  const [collapsed, setCollapsed] = React.useState(initialCollapsed);
  const screen = useScreen();
  const { getSidebarGap, getWidth, getSidebarWidth } = createLayoutUtils({
    opened,
    collapsed,
    ...config,
  });
  return (
    <LayoutCtx.Provider
      value={{
        screen,
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
  initialOpened: PropTypes.bool,
  initialCollapsed: PropTypes.bool,
  config: PropTypes.shape({
    sidebar: PropTypes.shape({}),
    header: PropTypes.shape({}),
    content: PropTypes.shape({}),
    footer: PropTypes.shape({}),
  }).isRequired,
  children: PropTypes.node.isRequired,
};
LayoutProvider.defaultProps = {
  initialOpened: false,
  initialCollapsed: false,
};

export { LayoutProvider };

export const useLayoutCtx = () => useContext(LayoutCtx);

export const LayoutConsumer = LayoutCtx.Consumer;

export default LayoutCtx;
