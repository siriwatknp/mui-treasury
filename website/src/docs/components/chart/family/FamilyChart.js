import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FamilyTree from '@mui-treasury/components/chart/family';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

const usePersonStyles = makeStyles(() => ({
  avatar: {
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.1)',
  },
  name: {
    fontSize: 13,
    marginTop: 4,
    marginBottom: 8,
    display: 'inline-block',
  },
}));

const FamilyChart = () => {
  const classes = usePersonStyles();
  return (
    <Box>
      <FamilyTree
        stretchIndexes={[2]}
        renderContent={({ name }) => (
          <Box align={'center'} lineHeight={1}>
            <Avatar className={classes.avatar} />
            {name && <span className={classes.name}>{name}</span>}
            <div />
          </Box>
        )}
        tree={{
          name: 'A',
          spouse: { name: 'B' },
          children: [
            { spouse: {}, children: [{}, {}] },
            {
              name: 'C',
              spouse: [
                {
                  spouse: {},
                  children: [
                    { children: [{}] },
                    {},
                    { spouse: {}, children: [{}] },
                  ],
                },
                { children: [{}, { spouse: {} }] },
                {},
              ],
            },
            {},
          ],
        }}
      />
    </Box>
  );
};
// hide-start
FamilyChart.metadata = {
  title: 'Family',
  path: 'chart/family',
  description: 'Build for family uses',
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Feb 19 2020',
  size: 'huge',
  files: [
    { pkg: 'mui-components', path: 'chart/family/FamilyChart.js' },
    { pkg: 'mui-components', path: 'chart/family/FamilyChart.stories.js' },
  ],
};
// hide-end

export default FamilyChart;
