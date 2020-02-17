import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '@material-ui/core/Grid';
import FamilyTreeChart from './FamilyTreeChart';
import Couple from './submodules/Couple';
import Children from './submodules/Children';

storiesOf('mui-components|Chart', module).add('FamilyTree', () => {
  return (
    <Grid container spacing={8}>
      <Grid item>
        <Couple />
        <br />
        <br />
        <Couple spouse={{}} />
        <br />
        <br />
        <Couple spouse={{}} children={[{}]} />
      </Grid>
      <Grid item>
        <Children
          people={[
            { spouse: {}, children: [{}] },
            { spouse: {}, children: [{}] },
            { spouse: {}, children: [{}] },
          ]}
        />
        <br />
        <br />
      </Grid>
      <Grid item>
        <Children
          stretch
          parented
          people={[
            { spouse: {}, children: [{}] },
            { spouse: {}, children: [{}] },
            {},
          ]}
        />
      </Grid>
      <Grid item>
        <FamilyTreeChart
          treeData={{
            spouse: {},
            children: [
              { spouse: {}, children: [{}, {}] },
              {
                spouse: [
                  {
                    children: [
                      { children: [{}] },
                      {},
                      {
                        spouse: {},
                        children: [{}],
                      },
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
      </Grid>
    </Grid>
  );
});
