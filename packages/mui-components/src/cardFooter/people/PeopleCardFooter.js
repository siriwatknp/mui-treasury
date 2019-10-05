import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { usePeopleCardFooterStyles } from '@mui-treasury/styles/cardFooter';

const PeopleCardFooter = ({ faces, noDivider }) => {
  const styles = usePeopleCardFooterStyles();
  return (
    <>
      {!noDivider && <Divider className={styles.divider} light />}
      {faces.map(face => (
        <Avatar className={styles.person} key={face} src={face} />
      ))}
    </>
  );
};

PeopleCardFooter.propTypes = {
  faces: PropTypes.arrayOf(PropTypes.string),
  noDivider: PropTypes.bool,
};
PeopleCardFooter.defaultProps = {
  faces: [],
  noDivider: false,
};

export default PeopleCardFooter;
