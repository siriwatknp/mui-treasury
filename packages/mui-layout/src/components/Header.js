import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import useConfig from '../hooks/useConfig';

const createGet = (
  { clipped, navVariant, collapsible, collapsed, opened, squeezed, navAnchor },
  normal,
  shrink,
  pushed,
  unsqueeze
) => () => {
  if (clipped || navAnchor !== 'left') return normal;
  if (navVariant === 'persistent' && opened) {
    // opened is effect only when
    // navVariant === 'persistent' ||
    // navVariant === 'temporary'
    if (squeezed) {
      return pushed;
    }
    return unsqueeze;
  }
  if (navVariant === 'permanent') {
    if (collapsible) {
      if (collapsed) return shrink;
      return pushed;
    }
    return pushed;
  }
  return normal;
};

const useStyles = makeStyles(({ zIndex, transitions }) => ({
  root: ({ clipped }) => ({
    zIndex: clipped ? zIndex.drawer + 1 : zIndex.appBar,
    transition: transitions.create(['margin', 'width'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  }),
}));

const useMenuButtonStyles = makeStyles(({ spacing }) => ({
  root: {
    marginLeft: spacing(-1),
    marginRight: spacing(1),
  },
}));

const Header = ({
  style,
  children,
  toolbarProps,
  renderMenuIcon,
  menuButtonProps,
  ...props
}) => {
  const ctx = useConfig();
  const {
    clipped,
    collapsedWidth,
    navWidth,
    navVariant,
    headerPosition,
    opened,
    setOpened,
  } = ctx;
  const getWidth = createGet(
    ctx,
    '100%',
    `calc(100% - ${collapsedWidth}px)`,
    `calc(100% - ${navWidth}px)`,
    '100%'
  );
  const getMargin = createGet(ctx, 0, collapsedWidth, navWidth, navWidth);
  const shouldRenderMenu = navVariant !== 'permanent' && !!renderMenuIcon;
  const classes = useStyles({ ...props, clipped });
  const menuButtonClasses = useMenuButtonStyles(menuButtonProps);
  return (
    <AppBar
      color={'default'}
      elevation={0}
      {...props}
      position={headerPosition}
      classes={classes}
      style={{
        ...style,
        width: getWidth(),
        marginLeft: getMargin(),
      }}
    >
      <Toolbar {...toolbarProps}>
        {shouldRenderMenu && (
          <IconButton
            onClick={() => setOpened(!opened)}
            {...menuButtonProps}
            classes={menuButtonClasses}
          >
            {renderMenuIcon(opened, setOpened)}
          </IconButton>
        )}
        {typeof children === 'function' ? children(ctx) : children}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  toolbarProps: PropTypes.shape({}),
  renderMenuIcon: PropTypes.func,
  menuButtonProps: PropTypes.shape({}),
};
Header.defaultProps = {
  style: {},
  children: null,
  toolbarProps: {},
  renderMenuIcon: null,
  menuButtonProps: {},
};

export default Header;
