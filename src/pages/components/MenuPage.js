import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import { NestedMenu01 } from 'docs/components/menus';

const components = [
  { component: NestedMenu01, render: () => <NestedMenu01.Demo /> },
];

const TagPage = createSimpleShowcase(components);

export default TagPage;
