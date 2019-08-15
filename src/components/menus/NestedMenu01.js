/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import ButtonBase from '@material-ui/core/ButtonBase';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    // Header
    header: { display: 'flex' },
    headerSelected: {
      '& > $item': {
        fontWeight: 'bold',
        color: palette.primary.main,
      },
    },
    headerExpanded: {
      '& > $item': {
        fontWeight: 'bold',
      },
    },
    item: {
      minWidth: 0,
      flexGrow: 1,
      '&:hover': {
        backgroundColor: palette.grey[100],
      },
    },
    itemArrow: {
      margin: '0 -4px 0 auto',
    },
    toggle: {
      minWidth: 48,
      '&:hover': {
        backgroundColor: palette.grey[200],
      },
    },
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

const Header = ({
  label,
  selected,
  expanded,
  separated,
  toggle = separated,
  onMenuClick,
  onToggle,
  ...menuItemProps
}) => {
  const classes = useStyles();
  const icon = `keyboard_arrow_${expanded ? 'up' : 'down'}`;
  return (
    <div
      className={cx(
        classes.header,
        selected && classes.headerSelected,
        expanded && classes.headerExpanded,
      )}
    >
      {separated ? (
        <>
          <MenuItem
            className={classes.item}
            {...menuItemProps}
            onClick={onMenuClick}
          >
            {label}
          </MenuItem>
          {toggle && (
            <ButtonBase className={classes.toggle} onClick={onToggle}>
              <Icon>{icon}</Icon>
            </ButtonBase>
          )}
        </>
      ) : (
        <MenuItem
          className={classes.item}
          {...menuItemProps}
          onClick={e => {
            onToggle(e);
            onMenuClick(e);
          }}
        >
          {label} {toggle && <Icon className={classes.itemArrow}>{icon}</Icon>}
        </MenuItem>
      )}
    </div>
  );
};

Header.defaultProps = {
  onToggle: () => {},
  onMenuClick: () => {},
};

const NestedMenu01 = ({ menus, selectedKey, openKeys }) => {
  const classes = useStyles();
  const [currentKey, setCurrentKey] = useState(selectedKey || '');
  const [currentOpenKeys, setCurrentOpenKeys] = useState(openKeys || []);
  console.log('currentOpenKeys', currentOpenKeys);

  useEffect(() => {
    setCurrentKey(selectedKey);
  }, [selectedKey]);

  useEffect(() => {
    setCurrentOpenKeys(openKeys);
  }, [openKeys]);

  const handleToggle = key => () => {
    if (currentOpenKeys.includes(key)) {
      return setCurrentOpenKeys(currentOpenKeys.filter(k => k !== key));
    }
    return setCurrentOpenKeys([...currentOpenKeys, key]);
  };

  const renderMenus = level => ({
    key,
    label,
    subMenus,
    separated,
    ...rest
  }) => (
    <React.Fragment key={key}>
      {level === 0 ? (
        <Header
          label={label}
          selected={
            subMenus ? separated && currentKey === key : currentKey === key
          }
          expanded={currentOpenKeys.includes(key)}
          separated={separated}
          onMenuClick={() => {
            if (!subMenus || separated) {
              setCurrentKey(key);
            }
            if (subMenus && !currentOpenKeys.includes(key)) {
              handleToggle(key)();
            }
          }}
          {...subMenus && {
            toggle: true,
            onToggle: handleToggle(key),
          }}
          {...rest}
        />
      ) : (
        <MenuItem
          className={cx(
            classes[`sub${level}`],
            currentKey === key && classes[`sub${level}Selected`],
            currentOpenKeys.includes(key) && classes[`sub${level}Expanded`],
          )}
          onClick={() => (subMenus ? handleToggle(key)() : setCurrentKey(key))}
          {...rest}
        >
          {label}
        </MenuItem>
      )}
      {subMenus && (
        <Collapse in={currentOpenKeys.includes(key)}>
          {subMenus.map(renderMenus(level + 1))}
        </Collapse>
      )}
    </React.Fragment>
  );
  return menus.map(renderMenus(0));
};

NestedMenu01.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  selectedKey: PropTypes.string,
  openKeys: PropTypes.arrayOf(PropTypes.string),
};
NestedMenu01.defaultProps = {
  menus: [],
  selectedKey: '',
  openKeys: [],
};

export default NestedMenu01;
