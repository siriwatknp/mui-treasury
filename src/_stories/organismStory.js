import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import ComponentInfo from 'components/organisms/ComponentInfo';

const demoCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  
  const organismStory = (props) => {
    return (
      <div></div>
    );
  }
  
  organismStory.propTypes = {};
  organismStory.defaultProps = {};
  
  export default organismStory;
  
`;

storiesOf('organisms', module).add('ComponentInfo', () => (
  <ComponentInfo
    name={'ParallaxCarousel'}
    links={[
      {
        label: 'Code sandbox',
        url: 'https://codesandbox.io',
      },
      {
        label: 'Full API',
        url: 'https://codesandbox.io',
      },
      {
        label: 'Official demos',
        url: 'https://codesandbox.io',
      },
    ]}
    libraries={[
      {
        label: 'react-swipaeable-views',
        url: 'https://codesandbox.io',
      },
      {
        label: 'clsx',
        url: 'https://codesandbox.io',
        icon: 'keyboard_arrow_right',
      },
    ]}
    childComponents={[
      {
        overline: 'arrow',
        label: 'SimpleArrow',
        url: 'https://codesandbox.io',
      },
      {
        overline: 'indicator',
        label: 'InvertedIndicator',
        url: 'https://codesandbox.io',
        icon: 'keyboard_arrow_right',
      },
    ]}
    files={[
      { label: 'Demo.js', code: demoCode },
      { label: 'ParallaxCarousel.js' },
      { label: 'SimpleArrow.js' },
      { label: 'InvertedIndicator' },
      { label: 'ParallaxSlide' },
    ]}
  />
));
