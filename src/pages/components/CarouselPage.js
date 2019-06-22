import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import { ParallaxCarousel } from 'docs/components/carousels';

const components = [
  {
    component: ParallaxCarousel,
    render: props => <ParallaxCarousel.Demo {...props} />,
  },
];

const fontUrl =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css?family=Poppins:900&display=swap';

const TempCarouselPage = createSimpleShowcase(components, {
  gridItemProps: {
    sm: 12,
    md: 12,
    lg: 12,
  },
});

const CarouselPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Helmet>
        <link href={fontUrl} rel="stylesheet" />
      </Helmet>
      <TempCarouselPage index={index} setIndex={setIndex} />;
    </>
  );
};

CarouselPage.info = TempCarouselPage.info;
CarouselPage.components = TempCarouselPage.components;

export default CarouselPage;
