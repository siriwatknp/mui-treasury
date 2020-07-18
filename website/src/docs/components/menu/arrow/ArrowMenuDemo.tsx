import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import Keyboard from '@material-ui/icons/Keyboard';
import Edit from '@material-ui/icons/Edit';

import ArrowMenu from '@mui-treasury/components/menu/arrow';

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

export const ArrowMenuDemo = () => {
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
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Arrow'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <ArrowMenuDemo />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'components/menu/navigation',
  colSpan: 3,
  rowSpan: 1,
  createdAt: 'Sun May 17 2020',
  files: [],
};
// @ts-ignore
ArrowMenuDemo.Showcase = AttachedShowcase
// @ts-ignore
ArrowMenuDemo.metadata = metadata
// hide-end
