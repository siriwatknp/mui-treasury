import React from 'react';
import Box from 'components/atoms/Box';
import PeaStatistic from '../lib/PeaStatistic';

const Statistic = () => (
  <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
    <PeaStatistic label={'Pods'} value={2} />
    <PeaStatistic label={'Following'} value={48} />
    <PeaStatistic label={'Followers'} value={5} />
  </Box>
);

Statistic.metadata = {
  name: 'Pea Statistic',
};
Statistic.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Statistic.code = `
  import PeaStatistic from '../lib/PeaStatistic';
  
  const Preview = () => (
    <>
      <PeaStatistic label={'Pods'} value={2} />
      <PeaStatistic label={'Following'} value={48} />
      <PeaStatistic label={'Followers'} value={5} />
    </>
  )
`;

export default Statistic;
