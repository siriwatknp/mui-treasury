import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NestedMenu from './NestedMenu';
import { useGatsbyNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/gatsby';
import { useMaterialNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/material';
import { useJupiterNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/jupiter';

const DefaultNestedMenu = ({ menus, useStyles }) => (
  <NestedMenu menus={menus} useStyles={useStyles}>
    <NestedMenu.ListItem button selected level={1}>
      Introduction
    </NestedMenu.ListItem>
    <NestedMenu.ListItem button level={1}>
      Quick Start
    </NestedMenu.ListItem>
    <NestedMenu.Parent level={1} active collapsed>
      <NestedMenu.Collapse
        level={1}
        collapsed
        renderToggle={({ onClick, collapsed }) => (
          <NestedMenu.Collapse.Row>
            <NestedMenu.Collapse.RowItem button selected>
              Reference Guides
            </NestedMenu.Collapse.RowItem>
            <NestedMenu.Collapse.Action onClick={onClick} toggled={collapsed} />
          </NestedMenu.Collapse.Row>
        )}
      >
        <NestedMenu.Collapse.List>
          <NestedMenu.ListItem level={2}>
            Preparing Your Environment
          </NestedMenu.ListItem>
          <NestedMenu.ListItem level={2}>
            Deploying & Hosting
          </NestedMenu.ListItem>
          <NestedMenu.Parent level={2} active>
            <NestedMenu.Collapse
              level={2}
              collapsed
              renderToggle={({ onClick, collapsed }) => (
                <NestedMenu.Collapse.Row>
                  <NestedMenu.Collapse.RowItem
                    selected
                    button
                    onClick={onClick}
                  >
                    Custom Configuration
                    <NestedMenu.Collapse.Action
                      button={false}
                      toggled={collapsed}
                    />
                  </NestedMenu.Collapse.RowItem>
                </NestedMenu.Collapse.Row>
              )}
            >
              <NestedMenu.Collapse.List>
                <NestedMenu.ListItem level={3} selected>
                  Customizing Babel.js Config
                </NestedMenu.ListItem>
                <NestedMenu.ListItem level={3}>
                  Using Babel Plugin Macros
                </NestedMenu.ListItem>
                <NestedMenu.ListItem level={3}>
                  Adding a Custom Webpack Config
                </NestedMenu.ListItem>
              </NestedMenu.Collapse.List>
            </NestedMenu.Collapse>
          </NestedMenu.Parent>
        </NestedMenu.Collapse.List>
      </NestedMenu.Collapse>
    </NestedMenu.Parent>
    <NestedMenu.Parent level={1}>
      <NestedMenu.Collapse
        level={1}
        renderToggle={({ onClick, collapsed }) => (
          <NestedMenu.Collapse.Row>
            <NestedMenu.Collapse.RowItem button selected>
              Gatsby API
            </NestedMenu.Collapse.RowItem>
            <NestedMenu.Collapse.Action onClick={onClick} toggled={collapsed} />
          </NestedMenu.Collapse.Row>
        )}
      >
        <NestedMenu.ListItem level={2}>Gatsby Themes</NestedMenu.ListItem>
        <NestedMenu.ListItem level={2}>Gatsby Link</NestedMenu.ListItem>
      </NestedMenu.Collapse>
    </NestedMenu.Parent>
    <NestedMenu.Parent level={1}>
      <NestedMenu.Collapse
        level={1}
        renderToggle={({ onClick, collapsed }) => (
          <NestedMenu.Collapse.Row>
            <NestedMenu.Collapse.RowItem button>
              Release & Migration
            </NestedMenu.Collapse.RowItem>
            <NestedMenu.Collapse.Action onClick={onClick} toggled={collapsed} />
          </NestedMenu.Collapse.Row>
        )}
      >
        <NestedMenu.ListItem level={2}>v2 Release Notes</NestedMenu.ListItem>
        <NestedMenu.ListItem level={2}>v1 Release Notes</NestedMenu.ListItem>
      </NestedMenu.Collapse>
    </NestedMenu.Parent>
  </NestedMenu>
);

storiesOf('mui-components|Menu', module).add('nested', () => {
  const Component = () => {
    return (
      <Box p={2}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <DefaultNestedMenu />
          </Grid>
          <Grid item xs={4}>
            <NestedMenu menus={getMenus()} />
          </Grid>
          <Grid item xs={4}>
            <DefaultNestedMenu useStyles={useGatsbyNestedMenuStyles} />
          </Grid>
          <Grid item xs={4}>
            <NestedMenu
              menus={getMenus()}
              useStyles={useGatsbyNestedMenuStyles}
            />
          </Grid>
          <Grid item xs={4}>
            <DefaultNestedMenu useStyles={useMaterialNestedMenuStyles} />
          </Grid>
          <Grid item xs={4}>
            <DefaultNestedMenu useStyles={useJupiterNestedMenuStyles} />
          </Grid>
        </Grid>
      </Box>
    );
  };

  return <Component />;
});

const getMenus = () => [
  {
    key: 'intro',
    label: 'Introduction',
  },
  {
    key: 'quick start',
    label: 'Quick Start',
  },
  {
    key: 'recipes',
    label: 'Recipes',
  },
  {
    key: 'pluginLib',
    label: 'Plugin Library',
  },
  {
    key: 'starterLib',
    label: 'Starter Library',
  },
  {
    key: 'resources',
    label: 'Awesome Gatsby Resources',
  },
  {
    key: 'refGuides',
    label: 'Reference Guides',
    isToggleOutside: true,
    subMenus: [
      {
        key: 'preparingEnv',
        label: 'Preparing Your Environment',
        subMenus: [
          {
            key: 'browserSupport',
            label: 'Browser Support',
          },
          {
            key: 'gatsbyWindow',
            label: 'Gatsby on Windows',
          },
          {
            key: 'gatsbyLinux',
            label: 'Gatsby on Linux',
          },
        ],
      },
      {
        key: 'deployHosting',
        label: 'Deploying & Hosting',
        subMenus: [
          {
            key: 'preparing',
            label: 'Preparing a Site for Deployment',
          },
          {
            key: 'awsAmplify',
            label: 'Deploying to AWS Amplify',
          },
          {
            key: 'awsS3',
            label: 'Deploying to S3 and CloudFront',
          },
        ],
      },
      {
        key: 'customConfig',
        label: 'Custom Configuration',
        subMenus: [
          {
            key: 'babeljs',
            label: 'Customizing Babel.js Config',
          },
          {
            key: 'babelPluginMacro',
            label: 'Using Babel Plugin Macros',
          },
          {
            key: 'customWebpack',
            label: 'Adding a Custom Webpack Config',
          },
        ],
      },
    ],
  },
  {
    key: 'api',
    label: 'Gatsby API',
    subMenus: [
      {
        key: 'themes',
        label: 'Gatsby Themes',
      },
      {
        key: 'link',
        label: 'Gatsby Link',
      },
      {
        key: 'image',
        label: 'Gatsby Image',
      },
      {
        key: 'config',
        label: 'Gatsby Config',
      },
    ],
  },
  {
    key: 'migration',
    label: 'Releases & Migration',
    subMenus: [
      {
        key: 'v2',
        label: 'v2 Release Notes',
      },
      {
        key: 'v1',
        label: 'v1 Release Notes',
      },
      {
        key: 'v1Tov2',
        label: 'Migration from v1 to v2',
      },
      {
        key: 'v0Tov1',
        label: 'Migration from v0 to v1',
      },
    ],
  },
];
