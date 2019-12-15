import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  rootActive: ({ accentColor = '#ffffff' }) => ({
    backgroundColor: 'rgba(0,0,0,0.38)',
    '&:before': {
      content: '" "',
      display: 'block',
      width: 3,
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: accentColor,
      borderTopRightRadius: 3,
      borderBottomRightRadius: 3,
    },
  }),
  icon: ({ accentColor = '#ffffff' }) => ({
    minWidth: 40,
    opacity: 0.6,
    color: accentColor,
  }),
  primary: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    fontWeight: 900,
    opacity: 0.6,
  },
  iconActive: () => ({
    opacity: 0.87,
  }),
  primaryActive: {
    opacity: 1,
  },
}));

const BlueListItem = ({
  active,
  accentColor,
  icon,
  primaryText,
  secondaryText,
}) => {
  const styles = useStyles({ accentColor });
  return (
    <ListItem className={cx(styles.root, active && styles.rootActive)}>
      <ListItemIcon className={cx(styles.icon, active && styles.iconActive)}>
        {icon}
      </ListItemIcon>
      <ListItemText
        classes={{
          primary: cx(styles.primary, active && styles.primaryActive),
        }}
        primaryTypographyProps={{
          noWrap: true,
        }}
        primary={primaryText}
        secondary={secondaryText}
      />
    </ListItem>
  );
};

BlueListItem.propTypes = {
  active: PropTypes.bool,
  accentColor: PropTypes.string,
  icon: PropTypes.node,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
};
BlueListItem.defaultProps = {
  active: false,
  accentColor: undefined,
  icon: undefined,
  primaryText: undefined,
  secondaryText: undefined,
};

export default BlueListItem;
