import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LayoutContext } from './Root';

const styles = ({ transitions }) => ({
  root: {
    flexGrow: 1,
    transition: transitions.create(['margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
});

const Content = ({
  className,
  component: Component,
  classes,
  style,
  ...props
}) => {
  const ctx = useContext(LayoutContext);
  const {
    navVariant,
    navWidth,
    collapsible,
    collapsed,
    collapsedWidth,
    open,
    navAnchor,
    squeezed,
  } = ctx;
  const getMargin = () => {
    if (navAnchor !== 'left') return 0;
    if (navVariant === 'persistent' && open) {
      // open is effect only when
      // navVariant === 'persistent' ||
      // navVariant === 'temporary'
      return navWidth;
    }
    if (navVariant === 'permanent') {
      if (collapsible) {
        if (collapsed) return collapsedWidth;
        return navWidth;
      }
      return navWidth;
    }
    return 0;
  };
  const getWidth = () => {
    if (navVariant === 'persistent' && open) {
      // open is effect only when
      // navVariant === 'persistent' ||
      // navVariant === 'temporary'
      if (squeezed) {
        return 'auto';
      }
      return '100%';
    }
    return 'auto';
  };
  return (
    <Component
      {...props}
      className={`${className} ${classes.root}`}
      style={{
        ...style,
        marginLeft: getMargin(),
        width: getWidth(),
      }}
    />
  );
};

Content.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
};
Content.defaultProps = {
  className: '',
  component: 'main',
  style: {},
};

export default withStyles(styles, { name: 'MuiContent' })(Content);
