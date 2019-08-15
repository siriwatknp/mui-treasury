import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Collapse from '@material-ui/core/Collapse';
import MenuItem from '@material-ui/core/MenuItem';
import { useNestedMenuList } from 'mui-utils/src';
import MenuToggle from 'mui-components/src/menuItem/MenuToggle';
import MuiSvgArrowToggle from 'mui-components/src/toggle/MuiSvgArrowToggle';

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    // -------------------------
    // Sub 1
    sub1: {
      paddingLeft: 40,
      '&:hover': {
        backgroundColor: palette.grey[100],
      },
    },
    sub1Selected: {
      fontWeight: 'bold',
      color: palette.primary.main,
    },
    sub1Expanded: {
      fontWeight: 'bold',
    },
    // -------------------------
    // Sub 2
    sub2: {
      paddingLeft: 64,
      position: 'relative',
      '&:before': {
        content: '" "',
        position: 'absolute',
        width: 3,
        height: '100%',
        left: 40,
        backgroundColor: palette.grey[100],
      },
      '&:hover': {
        backgroundColor: palette.grey[100],
      },
    },
    sub2Selected: {
      color: palette.primary.main,
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 3,
        height: '40%',
        left: 40,
        backgroundColor: palette.primary.main,
      },
    },
  };
});

const NestedMenuList = ({ menus, selectedKey, openKeys }) => {
  const classes = useStyles();
  const { injectHeaderProps, injectSubmenuProps } = useNestedMenuList(
    selectedKey,
    openKeys,
  );
  const renderMenus = level => item => {
    const { key, label, subMenus, itemProps } = item;
    const submenuProps = injectSubmenuProps({ ...item, classes, level });
    const headerProps = injectHeaderProps(item);
    return (
      <React.Fragment key={key}>
        {level === 0 ? (
          <MenuToggle
            label={label}
            {...itemProps}
            {...headerProps}
            renderToggle={props => <MuiSvgArrowToggle {...props} />}
          />
        ) : (
          <MenuItem {...itemProps} {...submenuProps}>
            {label}
          </MenuItem>
        )}
        {subMenus && (
          <Collapse in={headerProps.expanded}>
            {subMenus.map(renderMenus(level + 1))}
          </Collapse>
        )}
      </React.Fragment>
    );
  };
  return menus.map(renderMenus(0));
};

NestedMenuList.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  selectedKey: PropTypes.string,
  openKeys: PropTypes.arrayOf(PropTypes.string),
};
NestedMenuList.defaultProps = {
  menus: [],
  selectedKey: '',
  openKeys: [],
};

export default NestedMenuList;
