import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LayoutContext from '../context';
import { createDefaultLayout } from '../utils/presets';
import useMergedConfig from '../hooks/useMergedConfig';
import useWidth from '../hooks/useWidth';

const initialConfig = createDefaultLayout();

// eslint-disable-next-line react/prop-types
const Root = ({ children, config }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [opened, setOpened] = useState(false);
  const mergedConfig = useMergedConfig(config, initialConfig);
  const screen = useWidth(); // screen could be null at first render
  return (
    <LayoutContext.Provider
      value={{
        ...mergedConfig,
        screen,
        collapsed,
        setCollapsed,
        opened,
        setOpened,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

const createScreenPropTypes = valPropTypes =>
  PropTypes.shape({
    xs: valPropTypes,
    sm: valPropTypes,
    md: valPropTypes,
    lg: valPropTypes,
    xl: valPropTypes,
  });
Root.propTypes = {
  // from HOC
  // general
  config: PropTypes.shape({
    clipped: PropTypes.oneOfType([
      PropTypes.bool,
      createScreenPropTypes(PropTypes.bool),
    ]),
    collapsible: PropTypes.oneOfType([
      PropTypes.bool,
      createScreenPropTypes(PropTypes.bool),
    ]),
    collapsedWidth: PropTypes.oneOfType([
      PropTypes.number,
      createScreenPropTypes(PropTypes.number),
    ]),
    collapsed: PropTypes.bool,
    navVariant: PropTypes.oneOfType([
      PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
      createScreenPropTypes(
        PropTypes.oneOf(['permanent', 'persistent', 'temporary'])
      ),
    ]),
    navWidth: PropTypes.oneOfType([
      PropTypes.number,
      createScreenPropTypes(PropTypes.number),
    ]),
    navAnchor: PropTypes.oneOfType([
      PropTypes.oneOf(['left', 'bottom']),
      createScreenPropTypes(PropTypes.oneOf(['left', 'bottom'])),
    ]),
    headerPosition: PropTypes.oneOfType([
      PropTypes.oneOf(['static', 'relative', 'sticky', 'fixed', 'absolute']),
      createScreenPropTypes(
        PropTypes.oneOf(['static', 'relative', 'sticky', 'fixed', 'absolute'])
      ),
    ]),
    squeezed: PropTypes.oneOfType([
      PropTypes.bool,
      createScreenPropTypes(PropTypes.bool),
    ]),
    footerShrink: PropTypes.oneOfType([
      PropTypes.bool,
      createScreenPropTypes(PropTypes.bool),
    ]),
  }),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
Root.defaultProps = {
  config: initialConfig,
};

export default Root;
