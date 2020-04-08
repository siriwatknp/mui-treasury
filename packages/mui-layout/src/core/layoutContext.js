import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import PropTypes from 'prop-types';
import { isSomeExisted, selectConfigByScreen } from '../utils';
import useScreen from '../hooks/useScreen';
import { defaultLayoutPreset } from '../presets';

const LayoutCtx = React.createContext('value');
LayoutCtx.displayName = 'MuiLayoutCtx';

const LayoutProvider = ({
  config,
  parseConfig,
  children,
  initialOpened, // removed in next major changed #555
  initialOpen = initialOpened,
  initialCollapsed,
  initialSecondaryOpened, // removed in next major changed #555
  initialSecondaryOpen = initialSecondaryOpened,
  initialSecondaryCollapsed,
}) => {
  const [open, setOpen] = React.useState(initialOpen);
  const [collapsed, setCollapsed] = React.useState(initialCollapsed);
  const [secondaryOpen, setSecondaryOpen] = React.useState(
    initialSecondaryOpen
  );
  const [secondaryCollapsed, setSecondaryCollapsed] = React.useState(
    initialSecondaryCollapsed
  );
  const {
    breakpoints: { keys },
  } = useTheme();
  const screen = useScreen(config.screen); // config.screen is for testing purpose only
  const finalConfig = parseConfig(
    isSomeExisted(config, keys) ? selectConfigByScreen(config, screen) : config
  );
  return (
    <LayoutCtx.Provider
      value={{
        screen,
        ...finalConfig,
        autoCollapseDisabled: config.autoCollapseDisabled,
        collapsedBreakpoint: config.collapsedBreakpoint,
        heightAdjustmentDisabled: config.heightAdjustmentDisabled,
        secondaryAutoCollapsedDisabled: config.secondaryAutoCollapsedDisabled,
        secondaryCollapsedBreakpoint: config.secondaryCollapsedBreakpoint,
        secondaryHeightAdjustmentDisabled:
          config.secondaryHeightAdjustmentDisabled,
        open,
        opened: open, // removed in next major changed #555
        setOpen,
        setOpened: setOpen, // removed in next major changed #555
        collapsed,
        setCollapsed,
        secondaryOpen,
        setSecondaryOpen,
        secondaryCollapsed,
        setSecondaryCollapsed,
      }}
    >
      {children}
    </LayoutCtx.Provider>
  );
};
LayoutProvider.propTypes = {
  initialOpened: PropTypes.bool, // removed in next major changed #555
  initialOpen: PropTypes.bool,
  initialCollapsed: PropTypes.bool,
  initialSecondaryOpened: PropTypes.bool, // removed in next major changed #555
  initialSecondaryOpen: PropTypes.bool,
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
  parseConfig: PropTypes.func,
};
LayoutProvider.defaultProps = {
  initialOpen: undefined,
  initialOpened: false, // removed in next major changed #555
  initialCollapsed: false, // removed in next major changed #555
  initialSecondaryOpen: undefined,
  initialSecondaryOpened: false,
  initialSecondaryCollapsed: false,
  config: defaultLayoutPreset,
  parseConfig: c => c,
};

export { LayoutProvider };

export const LayoutConsumer = LayoutCtx.Consumer;

export default LayoutCtx;
