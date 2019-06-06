import React from 'react';
import PeaTrendingHashtagList from '../lib/PeaTrendingHashtagList';

const TrendingHashtagList = () => (
  <PeaTrendingHashtagList
    tags={[
      {
        name: 'Name',
        podCount: 5,
        linkto: '/',
      },
      {
        name: 'Name2',
        podCount: 100,
        linkto: '/',
      },
    ]}
  />
);

TrendingHashtagList.metadata = {
  name: 'Pea TrendingHashtagList',
};
TrendingHashtagList.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
TrendingHashtagList.code = `
  import PeaTrendingHashtagList from '../lib/PeaTrendingHashtagList';
  
  const Preview = () => (
    <PeaTrendingHashtagList
      tags={[
        {
          name: 'Name',
          podCount: 5,
          linkto: '/',
        },
        {
          name: 'Name2',
          podCount: 100,
          linkto: '/',
        },
      ]}
    />
  )
`;

export default TrendingHashtagList;
