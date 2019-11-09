import React from 'react';
import Box from '@material-ui/core/Box';
import { PeopleCardFooter } from '@mui-treasury/components/cardFooter';

const faces = [
  'http://i.pravatar.cc/300?img=1',
  'http://i.pravatar.cc/300?img=2',
  'http://i.pravatar.cc/300?img=3',
  'http://i.pravatar.cc/300?img=4',
];

const PeopleCardFooterDemo = () => (
  <Box minWidth={256}>
    <PeopleCardFooter faces={faces} />
  </Box>
);

PeopleCardFooterDemo.propTypes = {};
PeopleCardFooterDemo.defaultProps = {};

// hide-start
PeopleCardFooterDemo.metadata = {
  title: 'People',
  path: 'cardFooter/people', // must match its index.md
  files: [
    {
      pkg: 'mui-components',
      path: 'cardFooter/people/PeopleCardFooter.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardFooter/people/peopleCardFooter.styles.js',
    },
  ],
};
// hide-end

export default PeopleCardFooterDemo;
