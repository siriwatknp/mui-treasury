import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import MuiChip from '@material-ui/core/Chip';
import StarRounded from '@material-ui/icons/StarRounded';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 4,
    paddingRight: 4,
    '& svg': {
      marginTop: -1,
    },
  },
}));

const StatusChip = ({ label, ...props }) => {
  const classes = useStyles(props);
  return (
    <MuiChip
      icon={<StarRounded />}
      classes={classes}
      label={label}
      color="secondary"
      size={'small'}
    />
  );
};

StatusChip.propTypes = {
  label: PropTypes.string,
};
StatusChip.defaultProps = {
  label: 'New',
};

export default StatusChip;
