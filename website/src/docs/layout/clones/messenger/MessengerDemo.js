/* eslint-disable no-use-before-define,react/no-array-index-key */
import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import {
  Root,
  Header,
  Content,
  Sidebar,
  SecondaryInsetSidebar,
  InsetContainer,
  Footer,
  ConfigGenerator,
} from '@mui-treasury/layout';

const useStyles = makeStyles(({ breakpoints }) => ({
  header: {
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .10)',
    backgroundColor: '#ffffff',
  },
  insetPaper: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
    width: '100%',
  },
  content: {
    flex: 1,
  },
}));

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(0, 153, 255)',
      },
    },
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body1: {
        fontSize: `${15 / 16}rem`,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'strong, b': {
            fontWeight: 'bold',
          },
        },
      },
    },
  })
);

const config = ConfigGenerator({ addOnsIncluded: true });
config.addOns.setCollapsedBreakpoint('sm');
config.primarySidebar.setWidth('25%');
config.primarySidebar.setVariant('permanent');
config.primarySidebar.setCollapsible(true);
config.primarySidebar.setCollapsedWidth(80);
config.header.setPosition('relative');
config.header.setOffsetHeight(60);
config.header.setClipped(false);
config.header.setSecondaryClipped(false);
config.footer.setSecondaryInsetBehavior('fit');

config.setSecondarySidebarToInset();
config.secondarySidebar.setWidth('33%');
config.secondarySidebar.setInsetProps({ position: 'absolute' });

const MessengerDemo = () => {
  const styles = useStyles();
  return (
    <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
      <Root theme={theme} config={config.get()}>
        {({ containerStyles, setOpened, screen }) => (
          <>
            <CssBaseline />
            <Header className={styles.header}>
              <Toolbar disableGutters className={styles.toolbar}>
                header
              </Toolbar>
            </Header>
            <Sidebar>sidebar</Sidebar>
            <InsetContainer className={styles.content}>
              <Content>content</Content>
              <SecondaryInsetSidebar
                className={styles.insetSidebar}
                PaperProps={{ className: styles.insetPaper }}
              >
                secondary sidebar
              </SecondaryInsetSidebar>
            </InsetContainer>
            <InsetContainer>
              <Footer>footer</Footer>
            </InsetContainer>
          </>
        )}
      </Root>
    </Box>
  );
};

// hide-start
MessengerDemo.metadata = {
  title: 'Messenger',
  path: 'clones/messenger',
  files: [],
  relates: [],
};
// hide-end
export default MessengerDemo;
