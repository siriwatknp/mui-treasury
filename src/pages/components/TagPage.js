import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import { LinkTag } from 'docs/components/tags';

const components = [{ component: LinkTag, render: () => <LinkTag.Demo /> }];

const TagPage = createSimpleShowcase(components);

export default TagPage;
