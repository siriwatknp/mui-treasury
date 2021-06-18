import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import DragIndicator from '@material-ui/icons/DragIndicator';
import { useGrabIconStyles } from '@mui-treasury/styles/icon/grab';

const useStyles = makeStyles(() => ({
  root: {
    color: 'rgba(0,0,0,0.38)',
    '&:active': {
      transform: 'scale(1.4)',
    },
  },
}));

const GrabIconStyle = () => {
  const styles = useStyles();
  const grabStyles = useGrabIconStyles({ activeColor: '#000' });
  return (
    <div>
      <DragIndicator className={styles.root} classes={grabStyles} />
    </div>
  );
};
// hide-start
GrabIconStyle.metadata = {
  title: 'Grab',
  path: 'styles/icon/grab',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat May 23 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'icon/grab/grabIcon.styles.ts' }],
};
// hide-end

export default GrabIconStyle;
