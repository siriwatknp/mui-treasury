import React, { useContext } from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import PropTypes from 'prop-types';
import {
  createLayoutUtils,
  isSomeExisted,
  selectConfigByScreen,
} from '../utils';
import { useScreen } from '../hooks';
import { defaultLayoutPreset } from '../presets';

const LayoutCtx = React.createContext('value');
LayoutCtx.displayName = 'MuiLayoutCtx';

const LayoutProvider = ({
  config,
  children,
  initialOpened,
  initialCollapsed,
  initialRightOpened,
}) => {
  const [opened, setOpened] = React.useState(initialOpened);
  const [rightOpened, setRightOpened] = React.useState(initialRightOpened);
  const [collapsed, setCollapsed] = React.useState(initialCollapsed);
  const {
    breakpoints: { keys },
  } = useTheme();
  const {
    autoCollapseDisabled,
    collapsedBreakpoint,
    heightAdjustmentDisabled,
  } = config;
  const screen = useScreen(config.screen); // config.screen is for testing purpose only
  const finalConfig = isSomeExisted(config, keys)
    ? selectConfigByScreen(config, screen)
    : config;
  const utils = createLayoutUtils({
    opened,
    collapsed,
    ...finalConfig,
  });
  return (
    <LayoutCtx.Provider
      value={{
        screen,
        ...finalConfig,
        ...utils,
        autoCollapseDisabled,
        collapsedBreakpoint,
        heightAdjustmentDisabled,
        opened,
        setOpened,
        collapsed,
        setCollapsed,
        rightOpened,
        setRightOpened,
      }}
    >
      {children}
    </LayoutCtx.Provider>
  );
};
LayoutProvider.propTypes = {
  initialOpened: PropTypes.bool,
  initialCollapsed: PropTypes.bool,
  initialRightOpened: PropTypes.bool,
  config: PropTypes.shape({
    autoCollapseDisabled: PropTypes.bool,
    collapsedBreakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    heightAdjustmentDisabled: PropTypes.bool,
    sidebar: PropTypes.shape({}),
    header: PropTypes.shape({}),
    content: PropTypes.shape({}),
    footer: PropTypes.shape({}),
  }),
  children: PropTypes.node.isRequired,
};
LayoutProvider.defaultProps = {
  initialOpened: false,
  initialCollapsed: false,
  initialRightOpened: false,
  config: defaultLayoutPreset,
};

export { LayoutProvider };

export const useLayoutCtx = () => useContext(LayoutCtx);

export const LayoutConsumer = LayoutCtx.Consumer;

export default LayoutCtx;
