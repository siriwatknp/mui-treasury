import React from 'react';
import ModeComment from '@material-ui/icons/ModeComment';
import Favorite from '@material-ui/icons/Favorite';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';

const LabelIcon = () => {
  const gutterStyles = usePushingGutterStyles({ space: 3, firstExcluded: true });
  const iconLabelStyles = useLabelIconStyles({ linked: true });
  return (
    <div className={gutterStyles.parent}>
      <span className={iconLabelStyles.root}>
        <ModeComment className={iconLabelStyles.icon} /> 135
      </span>
      <button type={'button'} tabIndex={0} className={iconLabelStyles.link}>
        <Favorite className={iconLabelStyles.icon} /> 12
      </button>
    </div>
  );
};

// hide-start
LabelIcon.metadata = {
  title: 'Label',
  path: 'styles/icon/label',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'gutter/pushing/pushingGutter.styles.js' },
    { pkg: 'mui-styles', path: 'icon/label/labelIcon.styles.js' },
  ],
  relates: [],
};
// hide-end

export default LabelIcon;
