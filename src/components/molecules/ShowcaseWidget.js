import React from 'react';
import startCase from 'lodash/startCase';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CodeRounded from '@material-ui/icons/CodeRounded';

const useStyles = makeStyles(() => ({
  name: {
    margin: 0,
  },
}));

const ShowcaseWidget = ({ children, name, onClickCode, ...props }) => {
  const styles = useStyles();
  return (
    <Box {...props}>
      <Box
        p={1}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={{
          xs: 200,
          sm: 240,
          md: 280,
        }}
      >
        {children}
      </Box>
      <Box p={2} pt={1} display={'flex'} alignItems={'center'}>
        <p className={styles.name}>{startCase(name)}</p>
        <Box ml={'auto'}>
          <IconButton onClick={onClickCode}>
            <CodeRounded />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

ShowcaseWidget.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClickCode: PropTypes.func,
};
ShowcaseWidget.defaultProps = {
  name: '',
  onClickCode: () => {},
};

export default ShowcaseWidget;
