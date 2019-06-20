import React from 'react';
import PeaSwipeableTabs from '../lib/PeaSwipeableTabs';

const Tabs = () => (
  <div style={{ width: '100%' }}>
    <PeaSwipeableTabs
      tabs={[
        { label: 'Tweet' },
        { label: 'Responses' },
        { label: 'Media' },
        { label: 'Liking' },
      ]}
    >
      <div
        style={{
          height: 120,
          backgroundColor: '#feca59',
        }}
      />
      <div
        style={{
          height: 120,
          backgroundColor: '#B3DC4A',
        }}
      />
      <div
        style={{
          height: 120,
          backgroundColor: '#9ad9ff',
        }}
      />
      <div
        style={{
          height: 120,
          backgroundColor: '#f9aefe',
        }}
      />
    </PeaSwipeableTabs>
  </div>
);
Tabs.metadata = {
  name: 'Pea Swipeable Tabs',
  api: [
    {
      url: 'https://codesandbox.io/s/swipeable-tabs-ux-improved-53ymk',
      label: 'How it works',
    },
  ],
};
Tabs.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Tabs.code = `
  import PeaSwipeableTabs from '../lib/PeaSwipeableTabs';
  
  const Preview = () => (
    <PeaSwipeableTabs
      tabs={[
        { label: 'Tweet' },
        { label: 'Responses' },
        { label: 'Media' },
        { label: 'Liking' },
      ]}
    >
      <div
        style={{
          height: 120,
          backgroundColor: '#feca59',
        }}
      />
      <div
        style={{
          height: 120,
          backgroundColor: '#B3DC4A',
        }}
      />
      <div
        style={{
          height: 120,
          backgroundColor: '#9ad9ff',
        }}
      />
      <div
        style={{
          height: 120,
          backgroundColor: '#f9aefe',
        }}
      />
    </PeaSwipeableTabs>
  )
`;

export default Tabs;
