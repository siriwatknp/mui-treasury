import React from 'react';
import { storiesOf } from '@storybook/react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Add from '@material-ui/icons/Add';
import { useCuteToggleStyles } from '@mui-treasury/styles/toggle/cute';
import { useGatsbyRowToggleStyles } from '@mui-treasury/styles/rowToggle/gatsby';
import { useMaterialRowToggleStyles } from '@mui-treasury/styles/rowToggle/material';
import RowToggle from './RowToggle';
import SwitchToggle from '../switch';

const useStyles = makeStyles(() => ({
  ex1: {
    margin: 0,
  },
  ex1Toggle: {
    minHeight: 24,
    marginLeft: 'auto',
  },
  ex2Row: {
    padding: '0px 16px',
  },
  ex3: {
    margin: 0,
    paddingLeft: 8,
  },
  ex4Row: {
    paddingRight: 16,
  },
  ex4: {
    margin: 0,
    marginRight: 8,
    borderRadius: 8,
  },
}));

storiesOf('mui-components|Toggle', module).add('row', () => {
  const Component = () => {
    const classes = useStyles();
    const cuteActionStyles = useCuteToggleStyles();
    return (
      <Box maxWidth={400}>
        <ListItem button className={classes.ex1}>
          Simple <SwitchToggle className={classes.ex1Toggle} />
        </ListItem>
        <RowToggle className={classes.ex2Row}>
          Material UI
          <RowToggle.Action />
        </RowToggle>
        <RowToggle className={classes.ex2Row}>
          <RowToggle.Action button />
          <ListItem className={classes.ex3} button>
            Lead Action
          </ListItem>
        </RowToggle>
        <RowToggle className={classes.ex4Row}>
          <ListItem className={classes.ex4} button>
            Custom
          </ListItem>
          <RowToggle.Action button classes={cuteActionStyles} />
        </RowToggle>
        <RowToggle useStyles={useGatsbyRowToggleStyles}>
          <RowToggle.ListItem>Gatsby styles</RowToggle.ListItem>
          <RowToggle.Action button toggled />
        </RowToggle>
        <RowToggle useStyles={useGatsbyRowToggleStyles}>
          <RowToggle.ListItem selected button>
            Gatsby with icon
          </RowToggle.ListItem>
          <RowToggle.Action button>
            <Add />
          </RowToggle.Action>
        </RowToggle>
        <RowToggle useStyles={useMaterialRowToggleStyles}>
          <RowToggle.ListItem
            component={'a'}
            target={'_blank'}
            href={'https://google.co.th'}
            selected
          >
            Material styles
          </RowToggle.ListItem>
          <RowToggle.Action button />
        </RowToggle>
        <RowToggle useStyles={useMaterialRowToggleStyles}>
          <RowToggle.ListItem button>Material with icon</RowToggle.ListItem>
          <RowToggle.Action button>
            <Add />
          </RowToggle.Action>
        </RowToggle>
      </Box>
    );
  };
  return <Component />;
});
