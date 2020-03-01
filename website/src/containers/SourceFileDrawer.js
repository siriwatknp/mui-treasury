import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
import CodeRounded from '@material-ui/icons/CodeRounded';
import SourceFile from './SourceFile';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  sourceTrigger: {
    position: 'fixed',
    zIndex: 1000,
    bottom: spacing(2),
    right: spacing(2),
    [breakpoints.up('sm')]: {
      bottom: spacing(4),
      right: spacing(4),
    },
    [breakpoints.up('md')]: {
      bottom: spacing(5),
      right: spacing(5),
    },
  },
}));

const SourceFileDrawer = ({ metadata, source }) => {
  const [open, setOpen] = React.useState(false);
  const styles = useStyles();
  return (
    <>
      <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
        <Box width={{ xs: '100vw', sm: 500, md: 700 }}>
          <Box p={{ xs: 2, sm: 3 }}>
            <h2 style={{ margin: 0 }}>How to use</h2>
          </Box>
          <SourceFile
            match={metadata.path}
            fileName={`${metadata.title}.js`}
            source={source}
          />
        </Box>
      </Drawer>
      <Fab color={'primary'} className={styles.sourceTrigger}>
        <CodeRounded onClick={() => setOpen(true)} />
      </Fab>
    </>
  );
};

SourceFileDrawer.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  source: PropTypes.string.isRequired,
};

export default SourceFileDrawer;
