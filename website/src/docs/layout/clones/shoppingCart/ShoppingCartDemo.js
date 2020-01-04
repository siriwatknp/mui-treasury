import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import UnfoldMore from '@material-ui/icons/UnfoldMore';
import {
  Root,
  Header,
  Content,
  Footer,
  InsetSidebar,
  InsetContainer,
  ConfigGenerator,
} from '@mui-treasury/layout';
import {
  dailyShoppingTheme,
  DailyHeader,
  DailyCart,
  DailyCheckout,
  DailySummary,
} from '@mui-treasury/mockup/brands/dailyShopping';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#ffffff',
  },
  toolbar: {},
  sidebarPaper: {
    width: '100%',
    padding: '24px 0 40px 24px',
  },
  container: {
    minHeight: 0,
  },
  insetContainer: {
    height: '100%',
  },
  content: {
    overflow: 'auto',
  },
  footer: {
    border: 'unset',
  },
  fab: {
    position: 'fixed',
    bottom: 32,
    right: 16,
    color: '#61dafb',
    '& svg': {
      fontSize: 32,
    },
  },
}));

const config = ConfigGenerator({ addOnsIncluded: true });
config.header.setPosition('relative');
config.setPrimarySidebarToInset();
config.primarySidebar.setAnchor('right');
config.primarySidebar.setWidth('33%');
config.primarySidebar.setInsetProps({ position: 'absolute' });
config.secondarySidebar.setAnchor('left');

const ShoppingCartDemo = () => {
  const styles = useStyles();
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      overflow={'hidden'}
    >
      <Root theme={dailyShoppingTheme} config={config.get()}>
        {({ setOpened }) => (
          <>
            <CssBaseline />
            <Fab
              className={styles.fab}
              color={'primary'}
              onClick={() => setOpened(true)}
            >
              <UnfoldMore />
            </Fab>
            <Header className={styles.header}>
              <Container>
                <DailyHeader />
              </Container>
            </Header>
            <Container className={styles.container}>
              <InsetContainer className={styles.insetContainer}>
                <Content className={styles.content}>
                  <DailyCart />
                </Content>
                <InsetSidebar
                  PaperProps={{ classes: { root: styles.sidebarPaper } }}
                >
                  <DailyCheckout />
                </InsetSidebar>
              </InsetContainer>
            </Container>
            <Container>
              <Footer className={styles.footer}>
                <DailySummary />
              </Footer>
            </Container>
          </>
        )}
      </Root>
    </Box>
  );
};

// hide-start
ShoppingCartDemo.metadata = {
  title: 'Shopping Cart',
  path: 'clones/shoppingCart',
  files: [],
  relates: [],
};
// hide-end
export default ShoppingCartDemo;
