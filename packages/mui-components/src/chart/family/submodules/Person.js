import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useTreeStyles } from '../../tree';

const Person = ({ displayName, photoURL }) => {
  const classes = useTreeStyles();
  return (
    <Box align={'center'} lineHeight={1}>
      <Avatar
        alt={displayName}
        src={photoURL}
        className={classes.personAvatar}
      />
      <Box
        mt={0.5}
        mb={1}
        minHeight={12}
        position={'relative'}
        mx={'auto'}
        align={'center'}
      >
        {displayName && (
          <p className={classes.personName}>{displayName}</p>
        )}
      </Box>
      <div />
    </Box>
  );
};

Person.propTypes = {
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};
Person.defaultProps = {
  displayName: undefined,
  photoURL: undefined,
};

export default Person;
