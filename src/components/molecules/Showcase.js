import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Sheet from 'components/atoms/Sheet';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from 'components/predefined/Button';

const useStyles = makeStyles(({ spacing }) => ({
  root: {},
  sheet: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  listItem: {
    paddingLeft: spacing(1),
  },
}));

const Showcase = ({
  className,
  children,
  name,
  description,
  divided,
  inverted,
  dividerProps,
  sheetProps,
  listItemProps,
  listItemTextProps,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={cx('Showcase-root', className)} {...props}>
      <Sheet
        {...inverted && { bgColor: 'dark' }}
        {...sheetProps}
        className={cx(classes.sheet, sheetProps.className)}
      >
        {children}
      </Sheet>
      <ListItem
        {...listItemProps}
        className={cx(classes.listItem, listItemProps.className)}
      >
        <ListItemText
          primary={name}
          secondary={description}
          {...listItemTextProps}
        />
        <Button shape={'circular'} icon={'far fa-search'} />
      </ListItem>
      {divided && <Divider light {...dividerProps} />}
    </div>
  );
};

Showcase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  inverted: PropTypes.bool,
  divided: PropTypes.bool,
  sheetProps: PropTypes.shape({}),
  dividerProps: PropTypes.shape({}),
  listItemProps: PropTypes.shape({}),
  listItemTextProps: PropTypes.shape({}),
};
Showcase.defaultProps = {
  className: '',
  description: '',
  inverted: false,
  divided: true,
  sheetProps: {},
  dividerProps: {},
  listItemProps: {},
  listItemTextProps: {},
};

export default Showcase;
