import React from 'react';
import FamilyTree from '@mui-treasury/components/chart/family';
import Box from '@material-ui/core/Box';

const FamilyChart = () => {
  return (
    <Box>
      <FamilyTree stretchIndexes={[2]} tree={getData()} />
    </Box>
  );
};
// hide-start
FamilyChart.metadata = {
  title: 'Family',
  path: 'chart/family',
  description: 'Build for family usage',
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Feb 19 2020',
  size: 'huge',
  files: [
    { pkg: 'mui-components', path: 'chart/family/FamilyChart.js' },
    { pkg: 'mui-components', path: 'chart/family/FamilyChart.stories.js' },
  ],
};
// hide-end
const getData = () => ({
  displayName: 'Alanis',
  spouse: { displayName: 'Leon' },
  children: [
    {
      displayName: 'Hattie',
      spouse: { displayName: 'Alessa' },
      children: [{ displayName: 'Alexander' }, { displayName: 'Bryna' }],
    },
    {
      displayName: 'Celina',
      spouse: [
        {
          displayName: 'Dayna',
          spouse: { displayName: 'Josephe' },
          children: [
            {
              displayName: 'Zandra',
              children: [{ displayName: 'Anuj' }],
            },
            { displayName: 'Damian' },
            {
              displayName: 'Mary',
              spouse: { displayName: 'Celina' },
              children: [{ displayName: 'Benita' }],
            },
          ],
        },
        {
          displayName: 'Claude',
          children: [
            { displayName: 'Ryanne' },
            { displayName: 'Theodora', spouse: { displayName: 'Cristina' } },
          ],
        },
        { displayName: 'Zlatan' },
      ],
    },
    { displayName: 'Geraldine' },
  ],
});

export default FamilyChart;
