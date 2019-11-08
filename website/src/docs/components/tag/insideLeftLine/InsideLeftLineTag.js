import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    minWidth: 100,
    padding: 0,
  },
  tag: {
    borderRadius: '0 3px 3px 0',
    background: '#FFFFFF',
    borderLeft: `3px solid ${palette.primary.main}`,
    fontWeight: 'bold',
    padding: '8px 16px',
    margin: spacing(1),
  },
}));

const InsideLeftLineTag = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.tag}>Label 1</Button>
    </div>
  );
};

// hide-start
InsideLeftLineTag.metadata = {
  title: 'LeftLine',
  path: 'tag/insideLeftLine',
  frameProps: {
    bgcolor: '#f5f5f5',
  },
  files: [],
};
// hide-end

export default InsideLeftLineTag;
