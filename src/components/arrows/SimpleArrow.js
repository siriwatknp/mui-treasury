import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Icon from 'components/predefined/Icon';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    borderRadius: '50%',
    border: '1px solid',
    width: 40,
    minWidth: 40,
    height: 40,
    '& .MuiIcon-root': {
      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    },
    '&:hover': {
      '& .MuiIcon-root': {
        transform: 'scale(1.3)',
        [breakpoints.up('md')]: {
          transform: 'scale(1.7)',
        },
      },
    },
    [breakpoints.up('sm')]: {
      width: 48,
      minWidth: 48,
      height: 48,
    },
    [breakpoints.up('md')]: {
      width: 64,
      minWidth: 64,
      height: 64,
    },
  },
}));

const SimpleArrow = ({ direction, iconProps, ...props }) => {
  const classes = useStyles();
  return (
    <Button classes={classes} display={'flex'} alignItem={'center'} {...props}>
      <Icon>{`keyboard_arrow_${direction}`}</Icon>
    </Button>
  );
};

SimpleArrow.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  iconProps: PropTypes.shape({}),
  className: PropTypes.string,
};
SimpleArrow.defaultProps = {
  iconProps: {},
  className: '',
};

export default SimpleArrow;
