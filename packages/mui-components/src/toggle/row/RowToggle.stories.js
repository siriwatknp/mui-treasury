import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Add from '@material-ui/icons/Add';
import { useCuteToggleStyles } from '@mui-treasury/styles/toggle/cute';
import { useGatsbyRowToggleStyles } from '@mui-treasury/styles/rowToggle/gatsby';
import { useMaterialRowToggleStyles } from '@mui-treasury/styles/rowToggle/material';
import { useJupiterRowToggleStyles } from '@mui-treasury/styles/rowToggle/jupiter';
import RowToggle from './RowToggle';
import SwitchToggle from '../switch';

storiesOf('mui-components|Toggle', module).add('Row', () => {
  const Component = () => {
    const cuteActionStyles = useCuteToggleStyles();
    return (
      <Box maxWidth={400}>
        <ListItem button>
          Simple <SwitchToggle />
        </ListItem>
        <RowToggle>
          Default
          <RowToggle.Action />
        </RowToggle>
        <RowToggle>
          <RowToggle.Action button />
          <ListItem button>Default Lead Action</ListItem>
        </RowToggle>
        <RowToggle>
          <ListItem button>Default Outside</ListItem>
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
        <RowToggle useStyles={useJupiterRowToggleStyles}>
          <RowToggle.ListItem selected>Jupiter styles</RowToggle.ListItem>
          <RowToggle.Action button />
        </RowToggle>
        <RowToggle useStyles={useJupiterRowToggleStyles}>
          <RowToggle.ListItem button>
            Jupiter with icon
            <RowToggle.Action button={false}>
              <Add />
            </RowToggle.Action>
          </RowToggle.ListItem>
        </RowToggle>
      </Box>
    );
  };
  return <Component />;
});
