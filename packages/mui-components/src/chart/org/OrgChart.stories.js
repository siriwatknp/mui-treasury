import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import OrgChart from './OrgChart';

storiesOf('mui-components|Chart', module).add('org', () => (
  <>
    <OrgChart
      treeData={{
        children: [{ children: [{}, {}] }, {}, {}, {}],
      }}
    />
    <br />
    <br />
    <OrgChart
      treeData={[
        { children: [{}, {}, {}] },
        { children: [{}, { children: [{}, {}] }, {}, {}] },
      ]}
      spacingX={16}
      spacingY={24}
      outline={'1px solid red'}
    />
    <br />
    <br />
    <OrgChart
      treeData={{
        name: 'JunZaa',
        position: 'CEO',
        children: [
          { name: 'Husna Childs', position: 'CIO', children: [{}, {}] },
          { name: 'Iona Reyes', position: 'CFO' },
          {},
          {},
        ],
      }}
      renderContent={({ name, position }) => (
        <Box align={'center'}>
          <Avatar />
          <Typography color={'primary'} variant={'subtitle2'}>
            {name}
          </Typography>
          <Typography color={'textSecondary'} variant={'caption'}>
            {position}
          </Typography>
        </Box>
      )}
    />
  </>
));
