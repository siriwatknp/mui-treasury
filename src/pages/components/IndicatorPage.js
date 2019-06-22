import React, { useState } from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import { DotIndicator, InvertedIndicator } from 'docs/components/indicators';

const components = [
  {
    component: DotIndicator,
    render: props => <DotIndicator.Demo {...props} />,
  },
  {
    component: InvertedIndicator,
    render: props => <InvertedIndicator.Demo {...props} />,
    previewProps: {
      inverted: true,
    },
  },
];

const TempIndicatorPage = createSimpleShowcase(components);

const IndicatorPage = () => {
  const [index, setIndex] = useState(0);
  return <TempIndicatorPage index={index} setIndex={setIndex} />;
};

IndicatorPage.info = TempIndicatorPage.info;
IndicatorPage.components = TempIndicatorPage.components;

export default IndicatorPage;
