import React from 'react';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

const TextInfoContentDemo = () => {
  return (
    <div>
      <TextInfoContent
        overline={'Overline'}
        heading={'Awesome Heading'}
        body={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris.'
        }
      />
    </div>
  );
};
// hide-start
TextInfoContentDemo.metadata = {
  title: 'Text Info',
  path: 'components/content/textInfo',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  stylesUrl: '/styles/text-info-content',
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-components',
      path: 'content/textInfo/TextInfoContent.js',
    },
  ],
};
// hide-end

export default TextInfoContentDemo;
