import React, { useContext } from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import PropTypes from 'prop-types';
import {
  createLayoutUtils,
  isSomeExisted,
  selectConfigByScreen,
  getInitialScreen,
} from './utils';
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
  const {
    breakpoints: { keys, values },
  } = useTheme();
  const screen = config.screen || useScreen() || getInitialScreen(values); // config.screen is for testing purpose only
  const finalConfig = isSomeExisted(config, keys)
    ? selectConfigByScreen(config, screen)
    : config;
  const { getSidebarGap, getWidth, getSidebarWidth } = createLayoutUtils({
    opened,
    collapsed,
    ...finalConfig,
  });
  return (
    <LayoutCtx.Provider
      value={{
        screen,
        ...finalConfig,
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
