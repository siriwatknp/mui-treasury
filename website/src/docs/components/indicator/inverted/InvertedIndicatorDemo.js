import React from 'react';
import DotIndicator from '@mui-treasury/components/indicator/dot';
import { useInvertedIndicatorStyles } from '@mui-treasury/styles/indicator/inverted';

const InvertedIndicatorDemo = () => {
  const [index, setIndex] = React.useState(0);
  const classes = useInvertedIndicatorStyles();
  return (
    <div>
      {[0, 1, 2].map(i => (
        <DotIndicator
          key={i}
          overrides={classes}
          active={i === index}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  );
};

// hide-start
InvertedIndicatorDemo.metadata = {
  title: 'Inverted',
  path: 'component/indicator/inverted',
  frameProps: {
    bgcolor: '#1c1c1c',
  },
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-styles',
      path: 'indicator/inverted/invertedIndicator.styles.js',
    },
    {
      pkg: 'mui-components',
      path: 'indicator/dot/DotIndicator.js',
    },
  ],
  relates: [],
};
// hide-end

export default InvertedIndicatorDemo;
