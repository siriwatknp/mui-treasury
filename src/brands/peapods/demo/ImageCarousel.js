/* eslint-disable max-len */

import React from 'react';

import PeaImageCarousel from '../lib/PeaImageCarousel';

const data = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
  },
];

const ImageCarousel = () => <PeaImageCarousel data={data} />;

ImageCarousel.metadata = {
  name: 'Pea Image Carousel',
};

ImageCarousel.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

ImageCarousel.code = `
  import PeaImageCarousel from '../lib/PeaImageCarousel';
  
  const Preview = () => {
    const data = [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
      }
    ];

    return (
      <PeaImageCarousel
        data={data}
      />
    );
  }
`;

export default ImageCarousel;
