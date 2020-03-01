import React from 'react';
import { storiesOf } from '@storybook/react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import CollapsibleMenu from './CollapsibleMenu';
import SwitchToggle from '../../toggle/switch';
import RowToggle from '../../toggle/row';
import { useCuteToggleStyles } from '@mui-treasury/styles/switchToggle/cute';
import { useGatsbyRowToggleStyles } from '@mui-treasury/styles/rowToggle/gatsby';
import { useGatsbyListItemStyles } from '@mui-treasury/styles/listItem/gatsby';
import { useMaterialRowToggleStyles } from '@mui-treasury/styles/rowToggle/material';
import { useMaterialListItemStyles } from '@mui-treasury/styles/listItem/material';
import { useMaterialCollapsibleMenuStyles } from '@mui-treasury/styles/collapsibleMenu/material';
import { useJupiterCollapsibleMenuStyles } from '@mui-treasury/styles/collapsibleMenu/jupiter';

const useStyles = makeStyles(() => ({
  root: {
    '& li': {
      margin: 0,
    },
  },
  ex3nestedToggle: {
    marginLeft: 'auto',
    marginRight: -16,
  },
}));

storiesOf('mui-components|Menu', module).add('collapsible', () => {
  const Component = () => {
    const cuteToggleStyles = useCuteToggleStyles();
    const classes = useStyles();
    const gatsbyListItemStyles = useGatsbyListItemStyles();
    const materialListItemStyles = useMaterialListItemStyles();
    return (
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={4}>
          <CollapsibleMenu
            renderToggle={({ onClick, collapsed }) => (
              <ListItem button onClick={onClick}>
                Toggler <SwitchToggle toggled={collapsed} />
              </ListItem>
            )}
          >
            <ListItem>List item 1</ListItem>
            <ListItem>List item 2</ListItem>
            <ListItem>List item 3</ListItem>
            <ListItem>List item 4</ListItem>
          </CollapsibleMenu>
        </Grid>
        <Grid item xs={4}>
          <CollapsibleMenu
            collapsed={true}
            renderToggle={({ onClick, collapsed }) => (
              <RowToggle>
                <ListItem>Category header</ListItem>
                <RowToggle.Action
                  button
                  toggled={collapsed}
                  classes={cuteToggleStyles}
                  onClick={onClick}
                />
              </RowToggle>
            )}
          >
            <ListItem>List item 1</ListItem>
            <ListItem>List item 2</ListItem>
            <ListItem>List item 3</ListItem>
            <ListItem>List item 4</ListItem>
          </CollapsibleMenu>
        </Grid>
        <Grid item xs={4}>
          <CollapsibleMenu
            collapsed={true}
            renderToggle={({ onClick, collapsed }) => (
              <RowToggle>
                <ListItem className={classes.ex2Item}>Category header</ListItem>
                <RowToggle.Action
                  button
                  toggled={collapsed}
                  onClick={onClick}
                />
              </RowToggle>
            )}
          >
            <ListItem>List item 1</ListItem>
            <ListItem>List item 2</ListItem>
            <CollapsibleMenu
              renderToggle={({ onClick, collapsed }) => (
                <ListItem button onClick={onClick}>
                  Toggler{' '}
                  <SwitchToggle
                    toggled={collapsed}
                    className={classes.ex3nestedToggle}
                  />
                </ListItem>
              )}
            >
              <ListItem>List item 1.2</ListItem>
              <ListItem>List item 2.2</ListItem>
            </CollapsibleMenu>
            <ListItem>List item 4</ListItem>
          </CollapsibleMenu>
        </Grid>
        <Grid item xs={4}>
          <CollapsibleMenu
            collapsed={true}
            renderToggle={({ onClick, collapsed }) => (
              <RowToggle useStyles={useGatsbyRowToggleStyles}>
                <RowToggle.ListItem button selected>
                  Gatsby styles
                </RowToggle.ListItem>
                <RowToggle.Action
                  button
                  toggled={collapsed}
                  onClick={onClick}
                />
              </RowToggle>
            )}
          >
            <ListItem classes={gatsbyListItemStyles}>List item 1</ListItem>
            <ListItem classes={gatsbyListItemStyles} selected button>
              List item 2
            </ListItem>
            <ListItem classes={gatsbyListItemStyles}>List item 3</ListItem>
            <ListItem classes={gatsbyListItemStyles}>List item 4</ListItem>
          </CollapsibleMenu>
        </Grid>
        <Grid item xs={4}>
          <CollapsibleMenu
            collapsed={true}
            renderToggle={({ onClick, collapsed }) => (
              <RowToggle useStyles={useMaterialRowToggleStyles}>
                <RowToggle.ListItem button>
                  Material with icon
                </RowToggle.ListItem>
                <RowToggle.Action button onClick={onClick}>
                  {collapsed ? <Remove /> : <Add />}
                </RowToggle.Action>
              </RowToggle>
            )}
          >
            <ListItem classes={materialListItemStyles}>List item 1</ListItem>
            <ListItem classes={materialListItemStyles} selected>
              List item 2
            </ListItem>
            <ListItem classes={materialListItemStyles}>List item 3</ListItem>
            <ListItem classes={materialListItemStyles}>List item 4</ListItem>
          </CollapsibleMenu>
        </Grid>
        <Grid item xs={4}>
          <CollapsibleMenu
            collapsed={true}
            useStyles={useMaterialCollapsibleMenuStyles}
            renderToggle={({ onClick, collapsed }) => (
              <CollapsibleMenu.Row>
                <CollapsibleMenu.RowItem button selected>
                  Material with icon
                </CollapsibleMenu.RowItem>
                <CollapsibleMenu.Action
                  button
                  toggled={collapsed}
                  onClick={onClick}
                >
                  {collapsed ? <Remove /> : <Add />}
                </CollapsibleMenu.Action>
              </CollapsibleMenu.Row>
            )}
          >
            <CollapsibleMenu.ListItem>List item 1</CollapsibleMenu.ListItem>
            <CollapsibleMenu.ListItem selected>
              List item 2
            </CollapsibleMenu.ListItem>
            <CollapsibleMenu.ListItem>List item 3</CollapsibleMenu.ListItem>
            <CollapsibleMenu.ListItem>List item 4</CollapsibleMenu.ListItem>
          </CollapsibleMenu>
        </Grid>
        <Grid item xs={4}>
          <CollapsibleMenu
            collapsed={true}
            useStyles={useJupiterCollapsibleMenuStyles}
            renderToggle={({ onClick, collapsed }) => (
              <CollapsibleMenu.Row>
                <CollapsibleMenu.RowItem button selected>
                  Jupiter with icon
                </CollapsibleMenu.RowItem>
                <CollapsibleMenu.Action
                  button
                  toggled={collapsed}
                  onClick={onClick}
                >
                  {collapsed ? <Remove /> : <Add />}
                </CollapsibleMenu.Action>
              </CollapsibleMenu.Row>
            )}
          >
            <CollapsibleMenu.ListItem>List item 1</CollapsibleMenu.ListItem>
            <CollapsibleMenu.ListItem selected>
              List item 2
            </CollapsibleMenu.ListItem>
            <CollapsibleMenu.ListItem>List item 3</CollapsibleMenu.ListItem>
            <CollapsibleMenu.ListItem>List item 4</CollapsibleMenu.ListItem>
          </CollapsibleMenu>
        </Grid>
      </Grid>
    );
  };

  return <Component />;
});
