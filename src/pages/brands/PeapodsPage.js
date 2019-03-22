import React from 'react';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import peapodsTheme from 'theme/peapods';
import PeaButton from 'components/peapods/PeaButton';
import PeaIcon from 'components/peapods/PeaIcon';

const components = [
  {
    component: PeaButton,
    render: () => (
      <Box css={{ '& button': { marginTop: 8, marginLeft: 16 } }}>
        <PeaButton color={'primary'}>Default</PeaButton>
        <PeaButton variant={'outlined'} color={'primary'}>
          Outlined
        </PeaButton>
        <PeaButton variant={'contained'} color={'primary'}>
          Contained
        </PeaButton>
        <PeaButton variant={'contained'} color={'primary'}>
          <span>Create Event</span>
          <PeaIcon icon={'add'} light circular />
        </PeaButton>
        <PeaButton variant={'contained'} color={'primary'} fullWidth>
          <PeaIcon icon={'fab fa-facebook-f'} color={'white'} circular />
          <span>Register with Facebook</span>
        </PeaButton>
      </Box>
    ),
    previewProps: {
      white: true,
    },
  },
  {
    component: PeaIcon,
    render: () => (
      <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
        <PeaIcon icon={'far fa-home'} />
        <PeaIcon icon={'add'} />
        <PeaIcon icon={'fab fa-facebook-f'} color={'white'} circular />
        <PeaIcon icon={'add'} light circular />
      </Box>
    ),
  },
];

const PeapodsPage = () => (
  <MuiThemeProvider theme={peapodsTheme}>
    <Box
      width={'100%'}
      p={{
        xs: 2,
        sm: 4,
      }}
    >
      <Grid container spacing={32}>
        {components.map(({ component, render, previewProps }) => (
          <Grid
            key={get(component, 'metadata.name')}
            item
            xs={12}
            sm={6}
            lg={4}
          >
            <PreviewWidget
              sandboxLink={component.codeSandbox}
              {...get(component, 'metadata')}
              {...previewProps}
            >
              {render()}
            </PreviewWidget>
          </Grid>
        ))}
      </Grid>
    </Box>
  </MuiThemeProvider>
);

// Do not remove this line
PeapodsPage.components = components;

export default PeapodsPage;
