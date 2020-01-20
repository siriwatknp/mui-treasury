import React from 'react';
import DotIndicator from '@mui-treasury/components/indicator/dot';

const DotIndicatorDemo = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      {[0, 1, 2].map(i => (
        <DotIndicator
          key={i}
          active={i === index}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  );
};

// hide-start
DotIndicatorDemo.metadata = {
  title: 'Dot',
  path: 'indicator/dot',
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-styles',
      path: 'indicator/dot/dotIndicator.styles.js',
    },
    {
      pkg: 'mui-components',
      path: 'indicator/dot/DotIndicator.js',
    },
  ],
  relates: [],
};
// hide-end

export default DotIndicatorDemo;
