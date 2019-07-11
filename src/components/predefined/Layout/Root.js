import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import presets from './layoutPresets';

const keys = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * From https://material-ui.com/components/use-media-query/#migrating-from-withwidth
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.only(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

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
export const LayoutContext = React.createContext(initialConfig);

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.setCollapse = val =>
      this.setState(({ collapsed }) => ({
        collapsed: typeof val === 'object' ? !collapsed : val,
      }));
    this.setOpen = val =>
      this.setState(({ open }) => ({
        open: typeof val === 'object' ? !open : val,
      }));
    this.state = {
      open: false,
      collapsed: false,
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
      config,
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
      footerShrink,
    } = config;
    const value = {
      ...this.state,
      clipped: getScreenValue(clipped, width, initialConfig.clipped),
      collapsible: getScreenValue(
        collapsible,
        width,
        initialConfig.collapsible,
      ),
      collapsedWidth: getScreenValue(
        collapsedWidth,
        width,
        initialConfig.collapsedWidth,
      ),
      navVariant: getScreenValue(navVariant, width, initialConfig.navVariant),
      navWidth: getScreenValue(navWidth, width, initialConfig.navWidth),
      navAnchor: getScreenValue(navAnchor, width, initialConfig.navAnchor),
      headerPosition: getScreenValue(
        headerPosition,
        width,
        initialConfig.headerPosition,
      ),
      squeezed: getScreenValue(squeezed, width, initialConfig.squeezed),
      footerShrink: getScreenValue(
        footerShrink,
        width,
        initialConfig.footerShrink,
      ),
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

const RootWithWidth = ({...others}) => {
  const width = useWidth();
  return (<Root width={width} {...others} />);
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
    footerShrink: PropTypes.oneOfType([
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

export default withStyles(styles, { name: 'MuiRoot' })(RootWithWidth);
