import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import {
  ChromeTabs,
  ElevatedTabs,
  FirebaseTabs,
  InstagramTabs,
  PillsTabs,
  TwitterIconTabs,
  TwitterTabs,
} from 'docs/components/tabs';

const components = [
  {
    component: ChromeTabs,
    render: () => <ChromeTabs.Demo />,
    gridItemProps: {
      md: 10,
    },
  },
  {
    component: TwitterIconTabs,
    render: () => <TwitterIconTabs.Demo />,
  },
  {
    component: TwitterTabs,
    render: () => <TwitterTabs.Demo />,
  },
  {
    component: FirebaseTabs,
    render: () => <FirebaseTabs.Demo />,
  },
  {
    component: InstagramTabs,
    render: () => <InstagramTabs.Demo />,
  },
  {
    component: ElevatedTabs,
    render: () => <ElevatedTabs.Demo />,
  },
  {
    component: PillsTabs,
    render: () => <PillsTabs.Demo />,
  },
];

const TabsPage = createSimpleShowcase(components, {
  gridItemProps: {
    md: 9,
    lg: 6,
  },
});

export default TabsPage;
