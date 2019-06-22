import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import { InvertedArrow, SimpleArrow } from 'docs/components/arrows';

const components = [
  {
    component: SimpleArrow,
    render: () => <SimpleArrow.Demo />,
  },
  {
    component: InvertedArrow,
    render: () => <InvertedArrow.Demo />,
    previewProps: {
      inverted: true,
    },
  },
];

const ArrowPage = createSimpleShowcase(components);

export default ArrowPage;
