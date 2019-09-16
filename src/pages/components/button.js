import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import SidebarLayout from 'components/layout/SidebarLayout';
import { PKG } from 'constants/menus';
import Grid from '@material-ui/core/Grid';
import molecules from 'components/molecules';
import organisms from 'components/organisms';
import buttonDemos from 'docs/components/button';
import DefaultButton from 'docs/components/button/default';
import FrontMatter from 'containers/FrontMatter';
import { useMultiRowBorderedGrid } from '@mui-treasury/styles';

const { ShowcaseWidget, BoxTabs } = molecules;
const { ComponentHeading } = organisms;

const baseTheme = createMuiTheme();

const ButtonPage = () => {
  const [match, setMatch] = useState('');
  const multiRowGridStyles = useMultiRowBorderedGrid();
  return (
    <SidebarLayout pkg={PKG.components} getOpenKeys={menus => menus[1].key}>
      <Box py={{ xs: '2rem', sm: '3rem', md: '4rem' }}>
        <ComponentHeading
          title={'Button'}
          description={'The most common component of any website'}
        />
      </Box>
      <Drawer
        open={!!match}
        anchor={'right'}
        variant={'temporary'}
        onClose={() => setMatch('')}
      >
        <Box minWidth={{ xs: 256, sm: 500, md: 700 }}>
          <FrontMatter match={match}>
            {({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />}
          </FrontMatter>
        </Box>
      </Drawer>
      <ThemeProvider theme={baseTheme}>
        <Box maxWidth={1152} mx={'auto'}>
          <Grid container>
            <Grid item xs={12} sm={5} md={5}>
              <ShowcaseWidget
                border={'1px solid #e9e9e9'}
                mr={'-1px'}
                name={DefaultButton.title}
                onClickCode={() => setMatch(DefaultButton.path)}
              >
                <DefaultButton />
              </ShowcaseWidget>
            </Grid>
            <Grid item xs={12} sm={7} md={7} container direction={'column'}>
              <BoxTabs
                initialTabIndex={1}
                tabs={[{ label: 'Anatomy' }, { label: 'CSS API' }]}
              >
                {([key], { wrapContent }) =>
                  wrapContent(
                    <>
                      {key === 0 && 'image'}
                      {key === 1 && '2'}
                    </>,
                    { p: 3, flexGrow: 1 }
                  )
                }
              </BoxTabs>
            </Grid>
          </Grid>
        </Box>
        <Box py={{ xs: '2rem', sm: '3rem', md: '4rem' }} textAlign={'center'}>
          <h3>Custom Styles</h3>
          <Grid container classes={multiRowGridStyles}>
            {Object.keys(buttonDemos).map(key => {
              const Component = buttonDemos[key];
              return (
                <Grid
                  key={key}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  classes={multiRowGridStyles}
                >
                  <ShowcaseWidget
                    name={Component.title || Component.name}
                    onClickCode={() => setMatch(Component.path)}
                  >
                    <Component key={key} />
                  </ShowcaseWidget>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </ThemeProvider>
    </SidebarLayout>
  );
};

ButtonPage.propTypes = {};
ButtonPage.defaultProps = {};

export default ButtonPage;
