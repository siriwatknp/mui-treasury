import React from 'react';
import get from 'lodash/get';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid/Grid';
import Link from '@material-ui/core/Link/Link';
import Typography from '@material-ui/core/Typography/Typography';
import Box from 'components/atoms/Box';
import Image from 'components/atoms/Image';
import PreviewWidget from 'components/molecules/PreviewWidget';
import peapodsBanner from 'components/peapods/assets/register-poster.png';

import MomentUtils from '@date-io/moment';

// PEAPODS THEME
import peapodsTheme from './lib/theme';

// PEAPODS COMPONENTS
import PeaButton from './lib/PeaButton';
import PeaIcon from './lib/PeaIcon';

const components = [
  {
    component: PeaButton,
    render: () => (
      <Box css={{ '& button': { marginTop: 8, marginLeft: 8 } }}>
        <PeaButton elongated color={'primary'}>
          Default
        </PeaButton>
        <PeaButton elongated variant={'outlined'} color={'primary'}>
          Outlined
        </PeaButton>
        <PeaButton elongated variant={'contained'} color={'primary'}>
          Contained
        </PeaButton>
        <PeaButton
          elongated
          labelExpanded
          variant={'contained'}
          color={'primary'}
          icon={'add'}
          iconPosition={'end'}
          iconProps={{ bgColor: 'lightPrimary' }}
        >
          Create Event
        </PeaButton>
        <PeaButton
          elongated
          fullWidth
          labelExpanded
          variant={'contained'}
          color={'primary'}
          icon={<PeaIcon icon={'fab fa-facebook-f'} bgColor={'white'} />}
        >
          Register with Facebook
        </PeaButton>
      </Box>
    ),
    previewProps: {
      white: true,
    },
  },
];

const PeapodsPage = () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <Grid container>
      <Grid item xs={12} sm={'auto'}>
        <Box
          width={{ sm: 240 }}
          maxHeight={{
            xs: 160,
            sm: 'none !important',
          }}
          height={'100%'}
        >
          <Image
            src={peapodsBanner}
            style={{
              objectFit: 'cover',
              height: '100%',
            }}
          />
        </Box>
      </Grid>
      <Grid item xs style={{ borderBottom: '1px solid #f0f0f0' }}>
        <Box
          p={{
            xs: 2,
            md: 3,
          }}
        >
          <Typography variant={'h5'}>
            <Link href={'https://peapods.com/'} target={'_blank'}>
              Peapods
            </Link>
          </Typography>
          <Typography>
            Peapods is a new type of social network that values real human
            interaction.
          </Typography>
          <br />
          <Typography>
            This is a component showcase of peapods app. It uses{' '}
            <Link href={'https://material-ui.com'}>Material-UI</Link> v3.9.2. It
            shows that Material-UI is fully customizable.
          </Typography>
          <br />
          <Box maxWidth={{ sm: 140 }}>
            <PeaButton
              fullWidth
              size={'small'}
              variant={'contained'}
              color={'primary'}
              component={'a'}
              href={'https://peapods.com/'}
              target={'_blank'}
            >
              Visit Peapods
            </PeaButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
    <Box
      width={'100%'}
      p={{
        xs: 2,
        sm: 4,
      }}
    >
      <Grid container spacing={4} justify={'center'}>
        {components.map(
          ({ component, render, previewProps, gridItemProps }) => (
            <Grid
              key={get(component, 'metadata.name')}
              item
              xs={12}
              sm={6}
              lg={4}
              {...gridItemProps}
            >
              <PreviewWidget
                sandboxLink={component.codeSandbox}
                {...get(component, 'metadata')}
                {...previewProps}
              >
                <ThemeProvider theme={peapodsTheme}>{render()}</ThemeProvider>
              </PreviewWidget>
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  </MuiPickersUtilsProvider>
);

// Do not remove this line
PeapodsPage.components = components;

export default PeapodsPage;
