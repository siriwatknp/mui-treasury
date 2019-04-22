import React from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import presets from './layoutPresets';

const keys = ['xs', 'sm', 'md', 'lg', 'xl'];
export const attachStyle = (screen, styles, fallback) => {
  if (!styles) return fallback;
  if (typeof styles !== 'object') {
    return styles;
  }
  let index = keys.indexOf(screen);
  while (index >= 0) {
    if (styles[keys[index]]) {
      return styles[keys[index]];
    }
    index -= 1;
  }
  return fallback;
};

const initialConfig = presets.createDefaultLayout();
const initialState = {
  ...initialConfig,
  open: false,
  setOpen: () => {},
  setCollapse: () => {},
};
export const { Provider, Consumer } = React.createContext(initialState);

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
    this.setCollapse = val =>
      this.setState(({ collapsed }) =>
        config.collapsible
          ? { collapsed: typeof val === 'object' ? !collapsed : val }
          : {},
      );
    this.setOpen = val =>
      this.setState(({ open }) => ({
        open: typeof val === 'object' ? !open : val,
      }));
    this.state = {
      ...initialState,
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
      config,
      children,
      ...props
    } = this.props;
    const { breakpoint, collapsedWidth, navWidth } = config;
    const isBelowBreakpoint =
      breakpoint && isWidthDown(breakpoint.value, width);
    const value = {
      ...this.state,
      navWidth: attachStyle(width, navWidth, 256),
      collapsedWidth: attachStyle(width, collapsedWidth, 64),
      screen: width,
      isBelowBreakpoint,
    };
    return (
      <Provider value={value}>
        <Component className={`${className} ${classes.root}`} {...props}>
          {typeof children === 'function' ? children(value) : children}
        </Component>
      </Provider>
    );
  }
}

Root.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  component: PropTypes.elementType,
  config: PropTypes.shape({}),
  width: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
Root.defaultProps = {
  className: '',
  component: 'div',
  config: initialConfig,
};

export default withWidth()(withStyles(styles, { name: 'MuiRoot' })(Root));
