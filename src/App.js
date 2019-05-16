/* eslint-disable react/sort-comp */
import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Switch, Route, withRouter } from 'react-router-dom';
import Div100vh from 'react-div-100vh';
import CssBaseline from '@material-ui/core/CssBaseline';
import GitHubButton from 'react-github-btn';

// COMPONENTS
import Icon from '@material-ui/core/Icon';
import Box from 'components/atoms/Box';
import Text from 'components/atoms/Text';
import Navigator from 'components/organisms/Navigator';
import Image from 'components/atoms/Image';
import logo from 'assets/images/logo.png';

// PAGES
import HomePage from 'pages/HomePage';
import RootComponentPage from 'pages/RootComponentPage';
import RootBrandPage from 'pages/RootBrandPage';
import RootTemplatePage from 'pages/RootTemplatePage';
import InstructionPage from 'pages/InstructionPage';
import ContributePage from 'pages/ContributePage';
import LayoutBuilderPage from 'pages/Layout/LayoutBuilderPage';
import TimelinePage from 'pages/TimelinePage';
import RootDemoPage from 'demoPages/RootDemoPage';
import {
  Header,
  Content,
  Root,
  Nav,
  presets,
} from 'components/predefined/Layout';

const layoutConfig = presets.createMuiTreasuryLayout();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: 0 };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.debounceScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debounceScroll);
  }

  handleScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };

  debounceScroll = debounce(this.handleScroll, 100, {
    leading: true,
    trailing: true,
  });

  render() {
    const { scrollY } = this.state;
    const { location } = this.props;
    return (
      <Switch>
        <Route exact path={'/demo-pages/*'} component={RootDemoPage} />
        <Route
          path={'/'}
          render={() => (
            <Root
              config={{
                ...layoutConfig,
                navVariant: location.pathname.includes('timeline')
                  ? 'temporary'
                  : layoutConfig.navVariant,
              }}
              component={Div100vh}
            >
              <CssBaseline />
              <Header
                menuIcon={{
                  inactive: <Icon>menu_rounded</Icon>,
                  active: <Icon>chevron_left</Icon>,
                }}
              >
                <Box width={{ xs: 0, md: 81.5 }} />
                <Box flex={1} display={{ xs: 'none', sm: 'block' }} />
                <Text align={'center'} {...Text.brand}>
                  Mui Treasury
                </Text>
                <Box flex={1} />
                <Box>
                  <GitHubButton
                    href="https://github.com/siriwatknp/mui-treasury"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star siriwatknp/mui-treasury on GitHub"
                  >
                    Star
                  </GitHubButton>
                </Box>
              </Header>
              <Nav
                collapsedIcon={{
                  inactive: <Icon>chevron_left</Icon>,
                  active: <Icon>chevron_right</Icon>,
                }}
                header={({ navVariant }) =>
                  navVariant !== 'temporary' && (
                    <Box
                      {...Box.alignCenter}
                      pt={1}
                      px={2}
                      transition={'0.3s'}
                      opacity={0}
                      transform={scrollY > 64 ? 'none' : 'translateY(-100px)'}
                    >
                      <Image opacity={0} width={80} mx={'auto'} src={logo} />
                    </Box>
                  )
                }
              >
                {({ open, setOpen }) => (
                  <Navigator onClickItem={() => (open ? setOpen(false) : {})} />
                )}
              </Nav>
              <Content>
                <Switch>
                  <Route exact path={'/'} component={HomePage} />
                  <Route
                    exact
                    path={'/instruction'}
                    component={InstructionPage}
                  />
                  <Route
                    exact
                    path={'/contribution'}
                    component={ContributePage}
                  />
                  <Route
                    exact
                    path={'/layout-builder'}
                    component={LayoutBuilderPage}
                  />
                  <Route
                    exact
                    path={'/timeline-2019'}
                    component={TimelinePage}
                  />
                  <Route
                    exact
                    path={'/components/*'}
                    component={RootComponentPage}
                  />
                  <Route exact path={'/brands/*'} component={RootBrandPage} />
                  <Route
                    exact
                    path={'/templates/*'}
                    component={RootTemplatePage}
                  />
                </Switch>
              </Content>
            </Root>
          )}
        />
      </Switch>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default withRouter(App);
