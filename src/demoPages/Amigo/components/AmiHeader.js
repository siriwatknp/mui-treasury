import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from 'components/predefined/Typography';
import Button from 'components/predefined/Button';
import Toolbar from './mui/Toolbar';

const AmiHeader = () => (
  <>
    <AppBar elevation={1} style={{ zIndex: 1101 }}>
      <Toolbar size={'small'}>
        <Grid container wrap={'nowrap'}>
          <Grid item xs>
            <Button icon={'fas fa-search'} shape={'circular'} inverted />
          </Grid>
          <Grid item xs container alignItems={'center'} justify={'center'}>
            <Typography variant={'h5'} weight={'900'} spacing={'large'}>
              AMIGO
            </Typography>
          </Grid>
          <Grid item xs>
            <Grid
              container
              alignItems={'center'}
              justify={'flex-end'}
              spacing={2}
              style={{ height: '100%' }}
            >
              <Grid item>
                <Button icon={'far fa-user'} shape={'circular'} inverted />
              </Grid>
              <Grid item>
                <Button icon={'far fa-heart'} shape={'circular'} inverted />
              </Grid>
              <Grid item>
                <Button
                  icon={'far fa-shopping-cart'}
                  shape={'circular'}
                  inverted
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <AppBar elevation={2} position={'sticky'} style={{ marginTop: 60 }}>
      <Toolbar />
    </AppBar>
  </>
);

AmiHeader.propTypes = {};
AmiHeader.defaultProps = {};

export default AmiHeader;
