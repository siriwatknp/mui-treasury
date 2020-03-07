import React from 'react';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';

const TextInfoCardContentDemo = () => {
  return (
    <div>
      <TextInfoCardContent
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
TextInfoCardContentDemo.metadata = {
  title: 'Text Info',
  path: 'components/cardContent/textInfo',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-components',
      path: 'cardContent/textInfo/TextInfoCardContent.js',
    },
  ],
};
// hide-end

export default TextInfoCardContentDemo;
