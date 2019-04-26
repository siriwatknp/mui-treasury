/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PeaMenuItem from './PeaMenuItem';
import PeaAvatar from './PeaAvatar';
import PeaButton from './PeaButton';
import PeaSearchInput from './PeaSearchInput';
import { ReactComponent as Logo } from './assets/peapods-logo-circle.svg';

const styles = () => ({
  root: {
    '& .PeaSearchInput-root': {
      paddingTop: 4,
      paddingBottom: 4,
    },
  },
  stretch: {
    flexGrow: 1,
  },
});

const PeaAppBar = ({ classes, ...props }) => (
  <AppBar
    className={clsx('PeaAppBar-root', classes.root)}
    color={'default'}
    {...props}
  >
    <Toolbar>
      <div>
        <Grid container spacing={16}>
          <Grid item>
            <PeaMenuItem
              label={'Home'}
              icon={'home'}
              onClick={() => alert('Home')}
            />
          </Grid>
          <Grid item>
            <PeaMenuItem
              label={'Discover'}
              icon={'search'}
              onClick={() => alert('Search')}
            />
          </Grid>
          <Grid item>
            <PeaMenuItem
              label={'Notifications'}
              icon={'notifications'}
              badgeShowed
              badgeContent={1}
              onClick={() => alert('Noti')}
            />
          </Grid>
          <Grid item>
            <PeaMenuItem
              label={'Messages'}
              icon={'email'}
              badgeShowed
              badgeContent={1}
              onClick={() => alert('Message')}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.stretch} />
      <div style={{ width: 32, height: 32 }}>
        <Logo />
      </div>
      <div className={classes.stretch} />
      <div>
        <Grid container spacing={16}>
          <Grid item>
            <PeaSearchInput placeholder={'Find...'} className={classes.input} />
          </Grid>
          <Grid item>
            <PeaButton
              variant={'contained'}
              color={'primary'}
              icon={'add'}
              iconPosition={'end'}
              iconProps={{ bgColor: 'lightPrimary' }}
            >
              Create Event
            </PeaButton>
          </Grid>
          <Grid item>
            <PeaAvatar
              src={
                'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg'
              }
            />
          </Grid>
        </Grid>
      </div>
    </Toolbar>
  </AppBar>
);

PeaAppBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};
PeaAppBar.defaultProps = {};
PeaAppBar.metadata = {
  name: 'Pea App Bar',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};
PeaAppBar.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default withStyles(styles, { name: 'PeaAppBar' })(PeaAppBar);
