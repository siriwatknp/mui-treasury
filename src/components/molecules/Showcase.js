import React from 'react';
import cx from 'clsx';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Sheet from 'components/atoms/Sheet';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Icon from 'components/predefined/Icon';
import Typography from 'components/predefined/Typography';

const useStyles = makeStyles(({ spacing, transitions }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    transition: transitions.create(),
    height: '100%',
  },
  sheet: {
    flex: 'auto',
    borderRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: 160,
    flexWrap: 'wrap',
  },
  listItem: {
    paddingLeft: spacing(1),
  },
}));

const Showcase = ({
  className,
  actions,
  children,
  name,
  description,
  divided,
  inverted,
  onClickInfo,
  dividerProps,
  sheetProps,
  listItemProps,
  listItemTextProps,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={cx('Showcase-root', classes.root, className)} {...props}>
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
          disableTypography
          primary={
            <Typography
              id={kebabCase(name)}
              variant={'subtitle1'}
              anchor={<Icon size={'small'}>far fa-link</Icon>}
              hrefAnchor={`#${kebabCase(name)}`}
              weight={'bold'}
              color={'textPrimary'}
            >
              {name}
            </Typography>
          }
          secondary={
            <Typography variant={'subtitle2'} color={'textSecondary'}>
              {description}
            </Typography>
          }
          {...listItemTextProps}
        />
        {React.Children.toArray(actions)}
        <IconButton onClick={onClickInfo}>
          <Icon>far fa-search</Icon>
        </IconButton>
      </ListItem>
      {divided && <Divider light {...dividerProps} />}
    </div>
  );
};

Showcase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  description: PropTypes.string,
  inverted: PropTypes.bool,
  divided: PropTypes.bool,
  onClickInfo: PropTypes.func,
  sheetProps: PropTypes.shape({}),
  dividerProps: PropTypes.shape({}),
  listItemProps: PropTypes.shape({}),
  listItemTextProps: PropTypes.shape({}),
};
Showcase.defaultProps = {
  className: '',
  actions: [],
  description: '',
  inverted: false,
  divided: true,
  onClickInfo: () => {},
  sheetProps: {},
  dividerProps: {},
  listItemProps: {},
  listItemTextProps: {},
};

export default Showcase;
