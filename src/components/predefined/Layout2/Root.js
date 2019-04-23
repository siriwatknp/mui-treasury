import React from 'react';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import presets from './layoutPresets';

const keys = ['xs', 'sm', 'md', 'lg', 'xl'];

export const getScreenValue = (ctx, currentScreen, defaultValue) => {
  if (ctx === null || ctx === undefined) return defaultValue;
  if (typeof ctx !== 'object') {
    return ctx;
  }
  let index = keys.indexOf(currentScreen);
  while (index >= 0) {
    if (ctx[keys[index]] !== undefined) {
      return ctx[keys[index]];
    }
    index -= 1;
  }
  return defaultValue;
};

const initialConfig = presets.createDefaultLayout();
const initialState = {
  clipped: false,
  collapsible: true,
  collapsedWidth: 64,
  collapsed: false,
  navVariant: 'permanent',
  navWidth: 256,
  navAnchor: 'left',
  headerPosition: 'relative',
  squeezed: true,
  open: false,
  setOpen: () => {},
  setCollapse: () => {},
};
export const LayoutContext = React.createContext(initialState);

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

class Root extends React.Component {
  constructor(props) {
    super(props);
    const { config } = props;
    // config = initialConfig if not provided.
    this.setCollapse = val =>
      this.setState(({ collapsed }) => ({
        collapsed: typeof val === 'object' ? !collapsed : val,
      }));
    this.setOpen = val =>
      this.setState(({ open }) => ({
        open: typeof val === 'object' ? !open : val,
      }));
    this.state = {
      ...config,
      setCollapse: this.setCollapse,
      setOpen: this.setOpen,
    };
  }

  render() {
    const {
      className,
      component: Component,
      classes,
      width,
      children,
      ...props
    } = this.props;
    const {
      clipped,
      collapsible,
      collapsedWidth,
      navVariant,
      navWidth,
      navAnchor,
      headerPosition,
      squeezed,
    } = this.state;
    const value = {
      ...this.state,
      clipped: getScreenValue(clipped, width, initialState.clipped),
      collapsible: getScreenValue(collapsible, width, initialState.collapsible),
      collapsedWidth: getScreenValue(
        collapsedWidth,
        width,
        initialState.collapsedWidth,
      ),
      navVariant: getScreenValue(navVariant, width, initialState.navVariant),
      navWidth: getScreenValue(navWidth, width, initialState.navWidth),
      navAnchor: getScreenValue(navAnchor, width, initialState.navAnchor),
      headerPosition: getScreenValue(
        headerPosition,
        width,
        initialState.headerPosition,
      ),
      squeezed: getScreenValue(squeezed, width, initialState.squeezed),
      screen: width,
    };
    return (
      <LayoutContext.Provider value={value}>
        <Component className={`${className} ${classes.root}`} {...props}>
          {typeof children === 'function' ? children(value) : children}
        </Component>
      </LayoutContext.Provider>
    );
  }
}

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
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  // general
  className: PropTypes.string,
  component: PropTypes.elementType,
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
        PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
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
        PropTypes.oneOf(['static', 'relative', 'sticky', 'fixed', 'absolute']),
      ),
    ]),
    squeezed: PropTypes.oneOfType([
      PropTypes.bool,
      createScreenPropTypes(PropTypes.bool),
    ]),
  }),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
Root.defaultProps = {
  className: '',
  component: 'div',
  config: initialConfig,
};

export default withWidth()(withStyles(styles, { name: 'MuiRoot' })(Root));
