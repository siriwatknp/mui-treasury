import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';

import { ParallaxSlide } from 'docs/components/slides';

const components = [
  {
    component: ParallaxSlide,
    render: () => <ParallaxSlide.Demo />,
  },
];

const SlidePage = createSimpleShowcase(components, {
  gridItemProps: {
    sm: 12,
    md: 12,
    lg: 12,
  },
});

export default SlidePage;
