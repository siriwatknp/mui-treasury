import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Sheet from 'components/atoms/Sheet';
import Showcase from 'components/molecules/Showcase';
import ChromeTabs from 'components/tabs/ChromeTabs';

const TestChromeTabs = () => {
  const [index, setIndex] = useState(0);
  return (
    <ChromeTabs
      value={index}
      onChange={(e, i) => setIndex(i)}
      tabs={[
        { label: 'Demo.js' },
        { label: 'ParallaxCarousel.js' },
        { label: 'SimpleArrow.js' },
        { label: 'InvertedIndicator' },
        { label: 'ParallaxSlide' },
      ]}
    />
  );
};

storiesOf('molecules', module)
  .add('Showcase', () => (
    <Showcase
      name={'ParallaxCarousel'}
      description={'featuring react-swipeable-views'}
      inverted={boolean('inverted', false)}
    >
      <Sheet
        style={{ width: 200, height: 200 }}
        elevation={2}
        bgColor={'white'}
      />
    </Showcase>
  ))
  .add('ChromeTabs', () => <TestChromeTabs />);
