import React from 'react';
import { storiesOf } from '@storybook/react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import FamilyTreeChart from './FamilyTreeChart';
import Couple from './submodules/Couple';
import Children from './submodules/Children';
import Children2 from './submodules/Children2';
import Spouse from './submodules/Spouse';
import Inheritor from './submodules/Inheritor';
import TreeChart, { treeChartStyles, DEFAULT_VAR } from '../tree';

const defaultAvatarSize = 40;
const stretchLength = defaultAvatarSize + 3 * DEFAULT_VAR.length;
const useStyles = makeStyles(
  {
    ...treeChartStyles(),
    spouse: {
      display: 'inline-flex',
      position: 'relative',
      marginLeft: DEFAULT_VAR.gutter * 2,
      '&:before': {
        content: '""',
        position: 'absolute',
        width: DEFAULT_VAR.gutter * 2,
        outline: DEFAULT_VAR.outline,
        top: '50%',
        left: -DEFAULT_VAR.gutter * 2,
      },
    },
    spouseWithChildren: {
      '&:after': {
        content: '""',
        position: 'absolute',
        height: '50%',
        outline: DEFAULT_VAR.outline,
        top: '50%',
        left: -DEFAULT_VAR.gutter,
      },
    },
    hasOneSpouse: {
      '&:first-child:before': {
        left: `calc(50% - ${defaultAvatarSize / 2}px - ${
          DEFAULT_VAR.gutter
        }px)`,
      },
      '&:last-child:before': {
        right: `calc(50% + ${defaultAvatarSize / 2}px + ${
          DEFAULT_VAR.gutter
        }px)`,
      },
    },
    stretch: {
      marginTop: () => stretchLength,
      '&:before': {
        height: () => stretchLength,
        top: () => -stretchLength,
      },
    },
  },
  { name: 'FamilyChart' }
);

storiesOf('mui-components|Chart', module)
  .add('Family2', () => {
    return (
      <Grid container spacing={4}>
        <Grid item>
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
            <Children2>
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
            </Children2>
          </TreeChart>
        </Grid>
        <Grid item>
          <TreeChart useStyles={useStyles}>
            <Children2 stretch>
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
            </Children2>
          </TreeChart>
        </Grid>
      </Grid>
    );
  })
  .add('FamilyTree', () => {
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
