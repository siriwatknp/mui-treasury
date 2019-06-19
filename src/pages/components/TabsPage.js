import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import {
  ChromeTabs,
  ElevatedTabs,
  FirebaseTabs,
  InstagramTabs,
} from 'docs/components/tabs';

const components = [
  {
    component: ChromeTabs,
    render: () => <ChromeTabs.Demo />,
  },
  {
    component: ElevatedTabs,
    render: () => <ElevatedTabs.Demo />,
  },
  {
    component: FirebaseTabs,
    render: () => <FirebaseTabs.Demo />,
  },
  {
    component: InstagramTabs,
    render: () => <InstagramTabs.Demo />,
  },
];

const TabsPage = createSimpleShowcase(components, {
  gridItemProps: {
    md: 9,
    lg: 6,
  },
});

export default TabsPage;
