import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Div100vh from 'react-div-100vh';
import CssBaseline from '@material-ui/core/CssBaseline';

// COMPONENTS
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Box from 'components/atoms/Box';
import Text from 'components/atoms/Text';
import Navigator from 'components/organisms/Navigator';

// PAGES
import HomePage from 'pages/HomePage';
import RootComponentPage from 'pages/RootComponentPage';

const navWidth = '200px';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navOpened: false };
  }

  handleOpenNav = () =>
    this.setState(({ navOpened }) => ({ navOpened: !navOpened }));

  render() {
    const { navOpened } = this.state;
    return (
      <React.Fragment>
        <Drawer open={navOpened} onClose={this.handleOpenNav}>
          <Box minWidth={navWidth} py={{ xs: 2, sm: 0 }}>
            <IconButton onClick={this.handleOpenNav}>
              <Icon>arrow_back_ios_rounded</Icon>
            </IconButton>
            <Navigator onClickItem={this.handleOpenNav} />
          </Box>
        </Drawer>
        <Div100vh
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100rvh',
          }}
        >
          <CssBaseline />
          <AppBar position={'relative'} color={'default'} elevation={0}>
            <Toolbar>
              <Box flex={1}>
                <Hidden smUp>
                  <IconButton onClick={this.handleOpenNav}>
                    <Icon>menu_rounded</Icon>
                  </IconButton>
                </Hidden>
              </Box>
              <Text align={'center'} flexGrow={1} {...Text.brand}>
                Mui Treasury
              </Text>
              <Box flex={1} />
            </Toolbar>
          </AppBar>
          <Hidden xsDown>
            <Drawer variant={'permanent'}>
              <Box minWidth={navWidth}>
                <Box mt={1} transition={'0.3s'} opacity={0}>
                  <Text textAlign={'center'} {...Text.brand}>
                    Mui Treasury
                  </Text>
                </Box>
                <Navigator />
              </Box>
            </Drawer>
          </Hidden>
          <Box ml={{ xs: 0, sm: navWidth }} flexGrow={1}>
            <Switch>
              <Route exact path={'/'} component={HomePage} />
              <Route
                exact
                path={'/components/*'}
                component={RootComponentPage}
              />
            </Switch>
          </Box>
        </Div100vh>
      </React.Fragment>
    );
  }
}

export default App;
