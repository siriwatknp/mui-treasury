import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import {
  ChromeInput,
  SearchInput,
  BootstrapInput,
} from 'docs/components/inputs';

const components = [
  {
    component: ChromeInput,
    render: () => <ChromeInput />,
  },
  {
    component: SearchInput,
    render: () => <SearchInput />,
  },
  {
    component: BootstrapInput,
    render: () => <BootstrapInput />,
  },
];

const InputPage = createSimpleShowcase(components);

export default InputPage;
