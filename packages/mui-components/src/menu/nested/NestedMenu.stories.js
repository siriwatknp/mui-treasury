import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NestedMenu from './NestedMenu';
import { useGatsby2NestedMenuStyles } from '@mui-treasury/styles/nestedMenu/gatsby2';
import { useMaterialNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/material';
import { useJupiter2NestedMenuStyles } from '@mui-treasury/styles/nestedMenu/jupiter2';

const DefaultNestedMenu = ({ useStyles }) => (
  <NestedMenu useStyles={useStyles}>
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
          <NestedMenu.ListItem level={2}>Deploying & Hosting</NestedMenu.ListItem>
          <NestedMenu.Parent level={2} active>
            <NestedMenu.Collapse
              level={2}
              collapsed
              renderToggle={({ onClick, collapsed }) => (
                <NestedMenu.Collapse.Row>
                  <NestedMenu.Collapse.RowItem selected button onClick={onClick}>
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
            <DefaultNestedMenu useStyles={useGatsby2NestedMenuStyles} />
          </Grid>
          <Grid item xs={4}>
            <DefaultNestedMenu useStyles={useMaterialNestedMenuStyles} />
          </Grid>
          <Grid item xs={4}>
            <DefaultNestedMenu useStyles={useJupiter2NestedMenuStyles} />
          </Grid>
        </Grid>
      </Box>
    );
  };

  return <Component />;
});
