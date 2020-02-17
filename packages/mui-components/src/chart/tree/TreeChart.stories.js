import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TreeChart from './TreeChart';
import Trunk from './submodules/Trunk';
import Stem from './submodules/Stem';
import Twig from './submodules/Twig';
import Branches from './submodules/Branches';

storiesOf('mui-components|Chart', module).add('Tree', () => {
  return (
    <TreeChart length={24} gutter={16} outline={'1px solid red'}>
      <Box p={4}>
        <Grid container spacing={5}>
          <Grid item>
            <Stem>
              <Avatar />
            </Stem>
          </Grid>
          <Grid item>
            <Twig>
              <Stem>
                <Avatar />
              </Stem>
            </Twig>
            <Twig>
              <Stem>
                <Avatar />
              </Stem>
            </Twig>
            <Twig>
              <Stem>
                <Avatar />
              </Stem>
            </Twig>
          </Grid>
          <Grid item>
            <Twig>
              <Stem>
                <Avatar />
              </Stem>
              <Branches>
                <Twig>
                  <Stem>
                    <Avatar />
                  </Stem>
                </Twig>
                <Twig>
                  <Stem>
                    <Avatar />
                  </Stem>
                </Twig>
              </Branches>
            </Twig>
          </Grid>
          <Grid item>
            <Trunk>
              <Avatar />
              <Branches>
                <Twig>
                  <Stem>
                    <Avatar />
                  </Stem>
                  <Branches>
                    <Twig>
                      <Stem>
                        <Avatar />
                      </Stem>
                    </Twig>
                    <Twig>
                      <Stem>
                        <Avatar />
                      </Stem>
                    </Twig>
                  </Branches>
                </Twig>
                <Twig>
                  <Stem>
                    <Avatar />
                  </Stem>
                  <Branches>
                    <Twig>
                      <Stem>
                        <Avatar />
                      </Stem>
                    </Twig>
                    <Twig>
                      <Stem>
                        <Avatar />
                      </Stem>
                    </Twig>
                    <Twig>
                      <Stem>
                        <Avatar />
                      </Stem>
                    </Twig>
                  </Branches>
                </Twig>
              </Branches>
            </Trunk>
          </Grid>
        </Grid>
      </Box>
    </TreeChart>
  );
});
