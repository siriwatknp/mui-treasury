import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import ArrowMenu from '@mui-treasury/components/menu/arrow';
import Keyboard from '@material-ui/icons/Keyboard';
import Edit from '@material-ui/icons/Edit';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 14,
    paddingLeft: 32,
    width: 160,
  },
}));

const useCheckboxStyles = makeStyles(({ palette }) => ({
  checked: {
    color: palette.text.primary,
  },
}));

const ArrowMenuDemo = () => {
  const classes = useStyles();
  const checkboxClasses = useCheckboxStyles();
  return (
    <div>
      <ArrowMenu
        renderElement={({ styles, onClose }) => (
          <Checkbox
            classes={checkboxClasses}
            className={styles.button}
            color={'default'}
            onChange={onClose}
          />
        )}
      >
        <MenuItem classes={classes}>All</MenuItem>
        <MenuItem classes={classes}>None</MenuItem>
        <MenuItem classes={classes}>Read</MenuItem>
        <MenuItem classes={classes}>Unread</MenuItem>
      </ArrowMenu>
      <ArrowMenu
        renderElement={({ styles, onClose }) => (
          <IconButton
            classes={checkboxClasses}
            className={styles.button}
            color={'default'}
            onChange={onClose}
          >
            <Keyboard />
          </IconButton>
        )}
      >
        <MenuItem classes={classes}>
          <ListItemIcon style={{ minWidth: 32 }}>
            <Edit fontSize={'small'} />
          </ListItemIcon>
          English
        </MenuItem>
      </ArrowMenu>
    </div>
  );
};
// hide-start
ArrowMenuDemo.metadata = {
  title: 'Arrow',
  path: 'components/menu/arrow',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sun May 17 2020',
  stylesUrl: '',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-components', path: 'menu/arrow/ArrowMenu.tsx' }],
};
// hide-end

export default ArrowMenuDemo;
