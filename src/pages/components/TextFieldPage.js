import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import {
  BootstrapTextField,
  FilledTextField01,
} from 'docs/components/textFields';

const components = [
  {
    component: BootstrapTextField,
    render: () => <BootstrapTextField />,
  },
  {
    component: FilledTextField01,
    render: () => <FilledTextField01 />,
  },
];

const TextFieldPage = createSimpleShowcase(components);

export default TextFieldPage;
