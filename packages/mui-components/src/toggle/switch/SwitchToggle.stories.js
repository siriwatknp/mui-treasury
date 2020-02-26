import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import SwitchToggle from './SwitchToggle';
import { useCuteToggleStyles } from '@mui-treasury/styles/toggle/cute';

storiesOf('mui-components|Toggle', module).add('Switch', () => {
  const Component = () => {
    const cuteStyles = useCuteToggleStyles();
    const secondaryCuteStyles = useCuteToggleStyles({
      color: 'secondary.main',
    });
    return (
      <Box p={2} maxWidth={500}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <SwitchToggle />
            <SwitchToggle toggled />
          </Grid>
          <Grid item xs={4}>
            <SwitchToggle button focusRipple />
            <SwitchToggle button focusRipple toggled />
          </Grid>
          <Grid item xs={4}>
            <SwitchToggle button>
              <Add />
            </SwitchToggle>
            <SwitchToggle button toggled>
              <Remove />
            </SwitchToggle>
          </Grid>
          <Grid item xs={4}>
            <SwitchToggle classes={cuteStyles} />
            <SwitchToggle toggled classes={cuteStyles} />
          </Grid>
          <Grid item xs={4}>
            <SwitchToggle button classes={secondaryCuteStyles}>
              <Add />
            </SwitchToggle>
            <SwitchToggle button toggled classes={secondaryCuteStyles}>
              <Remove />
            </SwitchToggle>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return <Component />;
});
