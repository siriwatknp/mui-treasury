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
  initialSecondaryOpened,
  initialSecondaryCollapsed,
}) => {
  const [opened, setOpened] = React.useState(initialOpened);
  const [collapsed, setCollapsed] = React.useState(initialCollapsed);
  const [secondaryOpened, setSecondaryOpened] = React.useState(
    initialSecondaryOpened
  );
  const [secondaryCollapsed, setSecondaryCollapsed] = React.useState(
    initialSecondaryCollapsed
  );
  const {
    breakpoints: { keys },
  } = useTheme();
  const {
    autoCollapseDisabled,
    collapsedBreakpoint,
    heightAdjustmentDisabled,
    secondaryAutoCollapsedDisabled,
    secondaryCollapsedBreakpoint,
    secondaryHeightAdjustmentDisabled,
  } = config;
  const screen = useScreen(config.screen); // config.screen is for testing purpose only
  const finalConfig = isSomeExisted(config, keys)
    ? selectConfigByScreen(config, screen)
    : config;
  const utils = createLayoutUtils({
    opened,
    collapsed,
    secondaryOpened,
    secondaryCollapsed,
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
        secondaryAutoCollapsedDisabled,
        secondaryCollapsedBreakpoint,
        secondaryHeightAdjustmentDisabled,
        opened,
        setOpened,
        collapsed,
        setCollapsed,
        secondaryOpened,
        setSecondaryOpened,
        secondaryCollapsed,
        setSecondaryCollapsed,
      }}
    >
      {children}
    </LayoutCtx.Provider>
  );
};
LayoutProvider.propTypes = {
  initialOpened: PropTypes.bool,
  initialCollapsed: PropTypes.bool,
  initialSecondaryOpened: PropTypes.bool,
  initialSecondaryCollapsed: PropTypes.bool,
  config: PropTypes.shape({
    autoCollapseDisabled: PropTypes.bool,
    collapsedBreakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    heightAdjustmentDisabled: PropTypes.bool,
    secondaryAutoCollapsedDisabled: PropTypes.bool,
    secondaryCollapsedBreakpoint: PropTypes.oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]),
    secondaryHeightAdjustmentDisabled: PropTypes.bool,
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
  initialSecondaryOpened: false,
  initialSecondaryCollapsed: false,
  config: defaultLayoutPreset,
};

export { LayoutProvider };

export const useLayoutCtx = () => useContext(LayoutCtx);

export const LayoutConsumer = LayoutCtx.Consumer;

export default LayoutCtx;
