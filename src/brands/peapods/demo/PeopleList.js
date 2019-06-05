import React from 'react';
import PeaPeopleList from '../lib/PeaPeopleList';
import { PEOPLE } from './_mock';

const PeopleList = () => <PeaPeopleList people={PEOPLE} />;

PeopleList.metadata = {
  name: 'Pea People List',
};
PeopleList.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
PeopleList.code = `
  import PeaPeopleList from '../lib/PeaPeopleList';
  
  const PEOPLE = [
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
      name: 'Yeoman',
      tag: '@whatsup yeo',
      onClick: () => alert('Followed Yeoman!'),
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example2.svg',
      name: 'GGWP',
      tag: '@goodgamewellplay',
      onClick: () => alert('Followed GGWP!'),
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example3.svg',
      name: 'Sawasdee',
      tag: '@helloTH',
      onClick: () => alert('Followed Sawasdee!'),
    },
  ];
  
  const Preview = () => (
    <PeaPeopleList people={PEOPLE} />
  )
`;

export default PeopleList;
