import React from 'react';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader';
import CardHeader from '@material-ui/core/CardHeader';

const ContainedCardHeader = () => {
  const styles = useContainedCardHeaderStyles();
  return (
    <CardHeader
      classes={styles}
      title="Desserts"
      subheader="Select your favourite"
    />
  );
};

// hide-start
ContainedCardHeader.metadata = {
  title: 'Contained',
  path: 'cardHeader/contained',
  relates: [
    {
      label: 'Official Demo',
      url: 'https://material-ui.com/components/cards/#complex-interaction',
    },
    { label: 'Official API', url: 'https://material-ui.com/api/card-header/' },
  ],
  files: [
    {
      pkg: 'mui-styles',
      path: 'cardHeader/contained/containedCardHeader.styles.js',
    },
  ],
};
// hide-end

export default ContainedCardHeader;
