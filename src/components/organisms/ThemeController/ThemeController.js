/* eslint-disable */
import React from 'react';
import debounce from 'lodash/debounce';
import zipObjectDeep from 'lodash/zipObjectDeep';
import merge from 'lodash/merge';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import Drawer from '@material-ui/core/Drawer';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Hidden from '@material-ui/core/Hidden';
// import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from 'components/atoms/Box';
// import Text from 'components/atoms/Text';
import { JsonHighlight } from 'components/highlights';
import ShouldUpdate from 'containers/ShouldUpdate';

import MobileThemeController from './MobileThemeController';
import GlobalVarForm from '../GlobalVarForm';

const width = '0px';

const getInitialTheme = () => ({
  palette: {
    primary: {
      // main: get(baseTheme, 'palette.primary.main'),
      main: '#3f51b5',
    },
    secondary: {
      // main: get(baseTheme, 'palette.secondary.main'),
      main: '#f50057',
    },
  },
  shape: {
    // borderRadius: get(baseTheme, 'shape.borderRadius'),
    borderRadius: 4,
  },
  typography: {
    // fontSize: get(baseTheme, 'typography.fontSize'),
    fontSize: 14,
    fontFamily: 'Roboto',
    useNextVariants: true,
  },
});

const createExpansionStyle = (order, scrollY) => ({
  position: 'sticky',
  top: scrollY > 64 ? 0 : 64 - scrollY,
  backgroundColor: '#ffffff',
  zIndex: order,
});

class ThemeController extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      displayedTheme: getInitialTheme(),
      globalTheme: getInitialTheme(),
      component: null,
      opened: false,
      type: 'global',
      scrollY: 0,
      tabIndex: 0,
    };
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

  handleChangeTheme = (keys, values) => {
    const result = zipObjectDeep(keys, values);
    const displayedResult = zipObjectDeep(keys, values);
    const { globalTheme, displayedTheme } = this.state;
    const newTheme = merge(
      globalTheme,
      result.palette ? { palette: createPalette(result.palette) } : result,
    );
    this.setState(({ counter }) => ({
      counter: counter + 1,
      globalTheme: newTheme,
      displayedTheme: merge(displayedTheme, displayedResult),
    }));
  };

  handleSelectComponent = component => {
    this.setState({ component });
  };

  handleClose = () => this.setState({ opened: false });

  handleOpen = newType => () =>
    this.setState(({ type }) => ({
      opened: true,
      type: newType || type,
    }));

  render() {
    const { children, formHidden, location } = this.props;
    const {
      counter,
      globalTheme,
      displayedTheme,
      component,
      opened,
      type,
      scrollY,
      tabIndex,
    } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <link
            href={`https://fonts.googleapis.com/css?family=${
              displayedTheme.typography.fontFamily
            }`}
            rel="stylesheet"
          />
        </Helmet>
        <Box mr={{ xs: 0, sm: width }}>
          {!formHidden && (
            <GlobalVarForm
              theme={displayedTheme}
              onChange={this.handleChangeTheme}
            />
          )}
          <ShouldUpdate value={{ counter, location }}>
            {children({
              counter,
              component,
              globalTheme,
              onSelectComponent: this.handleSelectComponent,
            })}
          </ShouldUpdate>
        </Box>
        <Dialog
          maxWidth={false}
          open={!!component}
          onClose={() => this.setState({ component: null })}
        >
          <Tabs
            variant={'scrollable'}
            scrollButtons={'off'}
            value={tabIndex}
            onChange={(e, val) => this.setState({ tabIndex: val })}
          >
            <Tab label={'Global'} />
            <Tab label={'Component'} />
            <Tab label={'Sandbox'} />
          </Tabs>
          <Box position={'relative'}>
            {component && tabIndex === 0 && (
              <JsonHighlight value={displayedTheme} />
            )}
            {component && tabIndex === 1 && component.getTheme && (
              <JsonHighlight
                value={
                  component
                    ? component.getTheme(createMuiTheme())
                    : 'Select some component'
                }
              />
            )}
            {component && component.codeSandbox && (
              <Box
                m={-2}
                display={tabIndex === 2 ? 'block' : 'none'}
                minWidth={{ xs: 343, sm: 500, md: 768, lg: 1200 }}
              >
                <iframe
                  title={component.metadata.name}
                  src={`${component.codeSandbox.replace(
                    '/s/',
                    '/embed/',
                  )}?autoresize=1&fontsize=12&hidenavigation=1&module=%2Fsrc%2FComponent.js&view=editor`}
                  style={{
                    width: '100%',
                    height: 500,
                    border: 0,
                    borderRadius: 4,
                    overflow: 'hidden',
                  }}
                  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
              </Box>
            )}
          </Box>
        </Dialog>
        {/*<Hidden>*/}
        {/*<Drawer variant={'permanent'} anchor={'right'}>*/}
        {/*<Box*/}
        {/*width={width}*/}
        {/*transition={'0.3s'}*/}
        {/*style={{ marginTop: scrollY > 64 ? 0 : `${64 - scrollY}px` }}*/}
        {/*>*/}
        {/*{component && component.codeSandbox && (*/}
        {/*<Box p={2} bgcolor={'#faf8f5'} overflow={'scroll'}>*/}
        {/*<Typography variant={'overline'} color={'textSecondary'}>*/}
        {/*LINK TO CODE SANDBOX*/}
        {/*</Typography>*/}
        {/*<Typography>*/}
        {/*<Link href={component.codeSandbox} target={'_blank'}>*/}
        {/*{component.codeSandbox}*/}
        {/*</Link>*/}
        {/*</Typography>*/}
        {/*</Box>*/}
        {/*)}*/}
        {/*<ExpansionPanel square elevation={0}>*/}
        {/*<ExpansionPanelSummary*/}
        {/*expandIcon={<Icon>expand_more</Icon>}*/}
        {/*style={createExpansionStyle(2, scrollY)}*/}
        {/*>*/}
        {/*<Text>Global Theme</Text>*/}
        {/*</ExpansionPanelSummary>*/}
        {/*<Box p={2} bgcolor={'#faf8f5'} overflow={'scroll'}>*/}
        {/*<JsonHighlight value={displayedTheme} />*/}
        {/*</Box>*/}
        {/*</ExpansionPanel>*/}
        {/*<ExpansionPanel square elevation={0}>*/}
        {/*<ExpansionPanelSummary*/}
        {/*expandIcon={<Icon>expand_more</Icon>}*/}
        {/*style={createExpansionStyle(3, scrollY)}*/}
        {/*>*/}
        {/*<Text>Component Theme</Text>*/}
        {/*</ExpansionPanelSummary>*/}
        {/*<Box p={2} bgcolor={'#faf8f5'} overflow={'scroll'}>*/}
        {/*<JsonHighlight*/}
        {/*value={*/}
        {/*// eslint-disable-next-line no-nested-ternary*/}
        {/*component*/}
        {/*? component.getTheme*/}
        {/*? component.getTheme(createMuiTheme())*/}
        {/*: 'This component is ready to use, no need to config theme'*/}
        {/*: 'Select some component'*/}
        {/*}*/}
        {/*/>*/}
        {/*</Box>*/}
        {/*</ExpansionPanel>*/}
        {/*<ExpansionPanel square defaultExpanded elevation={0}>*/}
        {/*<ExpansionPanelSummary*/}
        {/*expandIcon={<Icon>expand_more</Icon>}*/}
        {/*style={createExpansionStyle(4, scrollY)}*/}
        {/*>*/}
        {/*<Text>JSX</Text>*/}
        {/*</ExpansionPanelSummary>*/}
        {/*<Box p={2} bgcolor={'#faf8f5'} overflow={'scroll'}>*/}
        {/*<JsxHighlight*/}
        {/*component={component || 'Select some component'}*/}
        {/*/>*/}
        {/*</Box>*/}
        {/*</ExpansionPanel>*/}
        {/*</Box>*/}
        {/*</Drawer>*/}
        {/*</Hidden>*/}
        <Hidden xsUp>
          <MobileThemeController
            type={type}
            opened={opened}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            component={component}
            globalTheme={displayedTheme}
          />
          <Box height={76} />
        </Hidden>
      </React.Fragment>
    );
  }
}

ThemeController.propTypes = {
  children: PropTypes.func.isRequired,
  formHidden: PropTypes.bool,
  location: PropTypes.shape({}).isRequired,
};
ThemeController.defaultProps = {
  formHidden: false,
};

export default withRouter(ThemeController);
