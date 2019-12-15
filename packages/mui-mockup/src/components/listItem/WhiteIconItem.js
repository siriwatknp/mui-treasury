import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    '&:hover': {
      background: 'none',
      '& $icon': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  icon: {
    minWidth: 0,
    borderRadius: 12,
    padding: 8,
    '& svg': {
      color: '#fff',
      fontSize: 32,
    },
  },
  activeIcon: {
    border: '2px solid rgba(255,255,255,0.7)',
  },
}));

const WhiteIconItem = ({ active, icon, onClick }) => {
  const styles = useStyles();
  return (
    <ListItem className={styles.root} button onClick={onClick}>
      <ListItemIcon className={cx(styles.icon, active && styles.activeIcon)}>
        {icon}
      </ListItemIcon>
    </ListItem>
  );
};

WhiteIconItem.propTypes = {
  icon: PropTypes.node,
};
WhiteIconItem.defaultProps = {
  icon: null,
};

export default WhiteIconItem;
