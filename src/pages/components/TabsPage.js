import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ShouldUpdate from 'containers/ShouldUpdate';
import FirebaseTabs from 'components/tabs/FirebaseTabs';
import InstagramTabs from 'components/tabs/InstagramTabs';
import TwitterTabs from 'components/tabs/TwitterTabs';
import TwitterIconTabs from 'components/tabs/TwitterIconTabs';
import ElevatedTabs from 'components/tabs/ElevatedTabs';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const components = [
  {
    component: FirebaseTabs,
    render: () => <FirebaseTabs />,
  },
  {
    component: InstagramTabs,
    render: () => <InstagramTabs />,
  },
  {
    component: TwitterTabs,
    render: () => <TwitterTabs />,
  },
  {
    component: TwitterIconTabs,
    render: () => <TwitterIconTabs />,
  },
  {
    component: ElevatedTabs,
    render: () => <ElevatedTabs />,
  },
];

const TabsPage = ({ counter, globalTheme, onSelectComponent }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Grid container spacing={32}>
      {components.map(({ component, render, gridItemProps, previewProps }) => (
        <Grid
          key={get(component, 'metadata.name')}
          item
          xs={12}
          sm={12}
          lg={6}
          {...gridItemProps}
        >
          <PreviewWidget
            sandboxLink={component.codeSandbox}
            onClick={() => onSelectComponent(component)}
            {...get(component, 'metadata')}
            {...previewProps}
          >
            <ShouldUpdate value={counter}>
              <MuiThemeProvider
                theme={createTheme({
                  ...globalTheme,
                  overrides: component.getTheme(merge(baseTheme, globalTheme)),
                })}
              >
                {render()}
              </MuiThemeProvider>
            </ShouldUpdate>
          </PreviewWidget>
        </Grid>
      ))}
    </Grid>
  </Box>
);

TabsPage.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
TabsPage.components = components;

export default TabsPage;
