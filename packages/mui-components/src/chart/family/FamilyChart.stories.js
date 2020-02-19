import React from 'react';
import { storiesOf } from '@storybook/react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Children from './submodules/Children';
import FamilyChart from './FamilyChart';
import Spouse from './submodules/Spouse';
import Inheritor from './submodules/Inheritor';
import styles from './familyChart.styles';
import TreeChart from '../tree';

const useStyles = makeStyles(styles, { name: 'FamilyChart' });

storiesOf('mui-components|Chart', module).add('Family', () => {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <FamilyChart
          stretchIndexes={[2]}
          tree={{
            displayName: 'A',
            spouse: { displayName: 'B' },
            children: [
              { spouse: {}, children: [{}, {}] },
              {
                displayName: 'C',
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
      </Grid>
      <Grid item>
        <TreeChart useStyles={useStyles}>
          <TreeChart.Stem>
            <Avatar />
          </TreeChart.Stem>
          <Spouse>
            <Avatar />
          </Spouse>
        </TreeChart>
        <br />
        <br />
        <TreeChart useStyles={useStyles}>
          <TreeChart.Stem>
            <Avatar />
          </TreeChart.Stem>
          <Spouse hasChildren>
            <Avatar />
          </Spouse>
        </TreeChart>
      </Grid>
      <Grid item>
        <TreeChart useStyles={useStyles}>
          <Children>
            <Inheritor hasOneSpouse>
              <TreeChart.Stem>
                <Avatar />
              </TreeChart.Stem>
              <Spouse hasChildren>
                <Avatar />
              </Spouse>
            </Inheritor>
            <Inheritor>
              <TreeChart.Stem>
                <Avatar />
              </TreeChart.Stem>
            </Inheritor>
            <Inheritor hasOneSpouse>
              <TreeChart.Stem>
                <Avatar />
              </TreeChart.Stem>
              <Spouse hasChildren>
                <Avatar />
              </Spouse>
            </Inheritor>
          </Children>
        </TreeChart>
      </Grid>
      <Grid item>
        <TreeChart useStyles={useStyles}>
          <Children stretch>
            <Inheritor hasOneSpouse>
              <TreeChart.Stem>
                <Avatar />
              </TreeChart.Stem>
              <Spouse hasChildren>
                <Avatar />
              </Spouse>
            </Inheritor>
            <Inheritor>
              <TreeChart.Stem>
                <Avatar />
              </TreeChart.Stem>
            </Inheritor>
          </Children>
        </TreeChart>
      </Grid>
      <Grid item>
        <TreeChart useStyles={useStyles}>
          <TreeChart.Trunk>
            <div>
              <TreeChart.Stem>
                <Avatar />
              </TreeChart.Stem>
              <Spouse hasChildren>
                <Avatar />
              </Spouse>
            </div>
          </TreeChart.Trunk>
          <Children>
            <Inheritor hasOneSpouse>
              <TreeChart.Stem>
                <Avatar />
              </TreeChart.Stem>
              <Spouse hasChildren>
                <Avatar />
              </Spouse>
              <Children stretch>
                <Inheritor>
                  <TreeChart.Stem>
                    <Avatar />
                  </TreeChart.Stem>
                </Inheritor>
                <Inheritor>
                  <TreeChart.Stem>
                    <Avatar />
                  </TreeChart.Stem>
                </Inheritor>
              </Children>
            </Inheritor>
            <Inheritor>
              <TreeChart.Stem>
                <Avatar />
              </TreeChart.Stem>
              <Children>
                <Inheritor hasOneSpouse>
                  <TreeChart.Stem>
                    <Avatar />
                  </TreeChart.Stem>
                  <Spouse hasChildren>
                    <Avatar />
                  </Spouse>
                  <Children>
                    <Inheritor>
                      <TreeChart.Stem>
                        <Avatar />
                      </TreeChart.Stem>
                      <Children>
                        <Inheritor>
                          <TreeChart.Stem>
                            <Avatar />
                          </TreeChart.Stem>
                        </Inheritor>
                      </Children>
                    </Inheritor>
                    <Inheritor>
                      <TreeChart.Stem>
                        <Avatar />
                      </TreeChart.Stem>
                    </Inheritor>
                    <Inheritor hasOneSpouse>
                      <TreeChart.Stem>
                        <Avatar />
                      </TreeChart.Stem>
                      <Spouse hasChildren>
                        <Avatar />
                      </Spouse>
                      <Children>
                        <Inheritor>
                          <TreeChart.Stem>
                            <Avatar />
                          </TreeChart.Stem>
                        </Inheritor>
                      </Children>
                    </Inheritor>
                  </Children>
                </Inheritor>
                <Inheritor>
                  <TreeChart.Stem>
                    <Avatar />
                  </TreeChart.Stem>
                  <Children>
                    <Inheritor>
                      <TreeChart.Stem>
                        <Avatar />
                      </TreeChart.Stem>
                    </Inheritor>
                    <Inheritor hasOneSpouse>
                      <TreeChart.Stem>
                        <Avatar />
                      </TreeChart.Stem>
                      <Spouse>
                        <Avatar />
                      </Spouse>
                    </Inheritor>
                  </Children>
                </Inheritor>
                <Inheritor>
                  <TreeChart.Stem>
                    <Avatar />
                  </TreeChart.Stem>
                </Inheritor>
              </Children>
            </Inheritor>
            <Inheritor>
              <TreeChart.Stem>
                <Avatar />
              </TreeChart.Stem>
            </Inheritor>
          </Children>
        </TreeChart>
      </Grid>
    </Grid>
  );
});
