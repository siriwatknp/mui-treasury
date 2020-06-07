import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FileCopy from '@material-ui/icons/FileCopy';
import Copier from 'components/atoms/Copier';

const useStyles = makeStyles(() => ({
  button: {
    padding: '4px 12px',
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 100,
  },
  icon: {
    marginRight: 4,
    fontSize: '1.1em',
  },
}));

const SourceCopier = ({ source, sourceName, children }) => {
  const styles = useStyles();
  return (
    <Box className={'SourceCopier-root'} position={'relative'}>
      {children}
      {source && (
        <Copier text={source}>
          {({ copied }) => (
            <Button
              variant={'contained'}
              color={'secondary'}
              size={'small'}
              className={styles.button}
            >
              {!copied && <FileCopy className={styles.icon} />}{' '}
              {copied ? 'Copied!' : sourceName}
            </Button>
          )}
        </Copier>
      )}
    </Box>
  );
};

SourceCopier.propTypes = {
  children: PropTypes.node.isRequired,
  source: PropTypes.string.isRequired,
  sourceName: PropTypes.string,
};
SourceCopier.defaultProps = {
  sourceName: 'Click to copy',
};

export default SourceCopier;
