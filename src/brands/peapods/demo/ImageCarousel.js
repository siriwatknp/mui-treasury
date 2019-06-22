import React from 'react';
import PeaImageCarousel from '../lib/PeaImageCarousel';

const data = [
  {
    id: 1,
    image: 'https://picsum.photos/400/600',
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/600',
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
        image: 'https://picsum.photos/400/600',
      },
      {
        id: 2,
        image: 'https://picsum.photos/400/600'
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
