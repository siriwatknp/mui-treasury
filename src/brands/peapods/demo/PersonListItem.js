import React from 'react';
import Box from 'components/atoms/Box';
import PeaPersonListItem from '../lib/PeaPersonListItem';
import { PEOPLE } from './_mock';

const PersonListItem = () => (
  <Box flex={1}>
    <PeaPersonListItem {...PEOPLE[0]} />
  </Box>
);

PersonListItem.metadata = {
  name: 'Pea Person ListItem',
};
PersonListItem.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
PersonListItem.code = `
  import PeaPersonListItem from '../lib/PeaPersonListItem';
  
  const mock = {
    src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
    name: 'Yeoman',
    tag: '@whatsup yeo',
    onClick: () => alert('Followed Yeoman!'),
  }
  const Preview = () => (
    <PeaPersonListItem {...mock} />
  )
`;

export default PersonListItem;
