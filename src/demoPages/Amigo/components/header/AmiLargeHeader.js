import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Typography from 'extensions/Typography';
import Button from 'extensions/Button';
import MegaMenu from '../MegaMenu';

const useStyles = makeStyles(({ transitions }) => ({
  searchInput: ({ searchAppeared }) => ({
    width: searchAppeared ? 180 : 0,
    opacity: searchAppeared ? 1 : 0,
    transition: transitions.create(),
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    marginTop: 8,
    marginLeft: 8,
    padding: '0 8px',
    display: 'inline-block',
    color: '#ffffff',
  }),
  secondAppBar: ({ trigger }) => ({
    zIndex: 1099,
    transition: transitions.create('top', {
      duration: transitions.duration.leavingScreen,
      easing: transitions.easing.easeOut,
    }),
    top: trigger ? 0 : 64,
  }),
  appBarBg: {
    zIndex: 1098,
  },
}));

const AmiLargeHeader = () => {
  const trigger = useScrollTrigger();
  const inputRef = useRef(null);
  const [searchAppeared, setSearchAppeared] = useState(false);
  const classes = useStyles({ searchAppeared, trigger });
  const handleSearchClick = () => {
    setSearchAppeared(!searchAppeared);
    if (!searchAppeared && inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={0}>
          <Toolbar>
            <Grid container wrap={'nowrap'} alignItems={'center'}>
              <Grid item xs>
                <Button
                  icon={'fas fa-search'}
                  shape={'circular'}
                  inverted
                  onClick={handleSearchClick}
                />
                <InputBase
                  inputRef={inputRef}
                  className={classes.searchInput}
                />
              </Grid>
              <Grid item xs container alignItems={'center'} justify={'center'}>
                <Typography variant={'h5'} weight={'900'} spacing={'big'}>
                  AMIGO
                </Typography>
              </Grid>
              <Grid item xs>
                <Grid
                  container
                  alignItems={'center'}
                  justify={'flex-end'}
                  spacing={2}
                  wrap={'nowrap'}
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
      </Slide>
      <AppBar position={'sticky'} elevation={0} className={classes.appBarBg}>
        <Toolbar />
      </AppBar>
      <AppBar
        elevevation={2}
        position={'sticky'}
        className={classes.secondAppBar}
      >
        <Toolbar>
          <MegaMenu
            menus={[
              { label: 'NEW RELEASES' },
              { label: 'MEN' },
              { label: 'WOMEN' },
              { label: 'KIDS' },
            ]}
            subMenus={[
              {
                label: 'SHOES',
                children: [
                  'Lifestyle',
                  'Running',
                  'Training',
                  'Basketball',
                  'Footer',
                  'Soccer',
                  'Tennis',
                ],
              },
              {
                label: 'CLOTHING',
                children: ['Shorts', 'Polos', 'Jacket & Sweatshirts'],
              },
              {
                label: 'SALE',
                children: ['Shoes', 'Clothing'],
              },
            ]}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

AmiLargeHeader.propTypes = {};
AmiLargeHeader.defaultProps = {};

export default AmiLargeHeader;
