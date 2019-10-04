import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import Icon from '../../extensions/Icon';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    borderRadius: '50%',
    padding: 0,

    '& .MuiIcon-root': {
      color: '#ffffffb3',
      borderRadius: '50%',
      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    },

    '&:hover': {
      '& .MuiIcon-root': {
        color: 'white',
        transform: 'scale(1.1)',

        [breakpoints.up('md')]: {
          transform: 'scale(1.2)',
        },
      },
    },
  },
}));

const ChevronArrow = ({ direction, iconProps, disabled, ...props }) => {
  const classes = useStyles(props);
  if (disabled) {
    return null;
  }

  return (
    <Button {...props} classes={classes}>
      <Icon {...iconProps}>{`fa fa-chevron-circle-${direction}`}</Icon>
    </Button>
  );
};

ChevronArrow.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  iconProps: PropTypes.shape({}),
  disabled: PropTypes.bool.isRequired,
};
ChevronArrow.defaultProps = {
  iconProps: {},
};

export default ChevronArrow;
