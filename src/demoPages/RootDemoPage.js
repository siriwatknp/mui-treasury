import React from 'react';
import GitHubButton from 'react-github-btn';
import { Switch, Route, Link } from 'react-router-dom';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from 'components/predefined/Button';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import theme from 'theme/treasury';
import Amigo from './Amigo';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    minHeight: 48,
  },
});

const RootDemoPage = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <>
        <Switch>
          <Route
            exact
            path={'/demo-pages/amigo-e-commerce'}
            component={Amigo}
          />
        </Switch>
        <AppBar color={'default'} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Grid container justify={'space-between'} alignItems={'center'}>
              <Grid item>
                <Tooltip title={'Back to mui-treasury'}>
                  <Button component={Link} to={'/'} icon={'fas fa-arrow-left'}>
                    Leave Demo
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <GitHubButton
                  href="https://github.com/siriwatknp/mui-treasury"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star siriwatknp/mui-treasury on GitHub"
                >
                  Star
                </GitHubButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
    </ThemeProvider>
  );
};

RootDemoPage.propTypes = {};
RootDemoPage.defaultProps = {};

export default RootDemoPage;
