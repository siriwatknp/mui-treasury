/* eslint-disable */
import React, { useState } from 'react';
import get from 'lodash/get';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PrismWithCopier from 'components/molecules/PrismWithCopier';
import Box from 'components/atoms/Box';
import Icon from 'components/extensions/Icon';
import Typography from 'components/extensions/Typography';
import Code from '@material-ui/icons/Code';
import GetApp from '@material-ui/icons/GetApp';
import Description from '@material-ui/icons/Description';

const generateIconImport = ({ type, style }) => {
  if (type === 'svg') {
    if (style === 'chevron')
      return `import MenuIcon from '@material-ui/icons/Menu';
  import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
  import ChevronRightIcon from '@material-ui/icons/ChevronRight';`;
    if (style === 'arrow')
      return `import MenuIcon from '@material-ui/icons/Menu';
  import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';`;
    if (style === 'triangle')
      return `import MenuIcon from '@material-ui/icons/Menu';
  import ArrowRightIcon from '@material-ui/icons/ArrowRight';
  import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';`;
    if (style === 'ios')
      return `import MenuIcon from '@material-ui/icons/Menu';
  import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
  import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';`;
  }
  if (type === 'webfont') {
    return `import Icon from '@material-ui/core/Icon';`;
  }
  return '';
};

const generateIconElement = ({ type, style }, state = null) => {
  if (type === 'svg') {
    if (style === 'chevron') {
      return state === 'active'
        ? '<ChevronLeftIcon />'
        : '<ChevronRightIcon />';
    }
    if (style === 'arrow') {
      return state === 'active' ? '<ArrowBackIcon />' : '<ArrowForwardIcon />';
    }
    if (style === 'triangle') {
      return state === 'active' ? '<ArrowLeftIcon />' : '<ArrowRightIcon />';
    }
    if (style === 'ios') {
      return state === 'active'
        ? '<ArrowBackIosIcon />'
        : '<ArrowForwardIosIcon />';
    }
  }
  if (type === 'webfont') {
    if (style === 'chevron') {
      return state === 'active'
        ? '<Icon>chevron_left</Icon>'
        : '<Icon>chevron_right</Icon>';
    }
    if (style === 'arrow') {
      return state === 'active'
        ? '<Icon>arrow_back</Icon>'
        : '<Icon>arrow_forward</Icon>';
    }
    if (style === 'triangle') {
      return state === 'active'
        ? '<Icon>arrow_left</Icon>'
        : '<Icon>arrow_right</Icon>';
    }
    if (style === 'ios') {
      return state === 'active'
        ? '<Icon>arrow_back_ios</Icon>'
        : '<Icon>arrow_forward_ios</Icon>';
    }
  }
};

const createCode = (config, icon) =>
  `
  import React from 'react';
  import CssBaseline from '@material-ui/core/CssBaseline';
  import Toolbar from '@material-ui/core/Toolbar';
  ${generateIconImport(icon)}
  import {
    Root,
    Header,
    Sidebar,
    Content,
    Footer,
    CollapseBtn,
    SidebarTrigger,
  } from '@mui-treasury/layout';
  import {
    HeaderMockUp,
    NavHeaderMockUp,
    NavContentMockUp,
    ContentMockUp,
    FooterMockUp,
  } from '@mui-treasury/mockup/layout';
  
  const config = ${JSON.stringify(config, null, 2)};
  
  const App = () => {
    return (
      <Root config={config}>
        {({ headerStyles, sidebarStyles, collapsed, opened }) => (
          <>
            <CssBaseline />
            <Header>
              <Toolbar>
                <SidebarTrigger className={headerStyles.leftTrigger}>
                  {opened ? ${generateIconElement(icon, 'active')} : ${
                    icon.type === 'svg' ? '<MenuIcon />' : '<Icon>menu</Icon>'
                  }}
                </SidebarTrigger>
                <HeaderMockUp />
              </Toolbar>
            </Header>
            <Sidebar>
              <NavHeaderMockUp collapsed={collapsed} />
              <div className={sidebarStyles.container}>
                <NavContentMockUp />
              </div>
              <CollapseBtn className={sidebarStyles.collapseBtn}>
                {collapsed ? ${generateIconElement(
                  icon
                )} : ${generateIconElement(icon, 'active')}}
              </CollapseBtn>
            </Sidebar>
            <Content>
              <ContentMockUp />
            </Content>
            <Footer>
              <FooterMockUp />
            </Footer>
          </>
        )}
      </Root>
    )
  }
  
  export default App
`;

const parseConfig = config => {
  const createScreenConfig = (screen, offsetHeight) => {
    const squeezed = get(config, ['squeezed', screen]);
    return ({
      [screen]: {
        sidebar: {
          anchor: 'left',
          hidden: false,
          inset: false,
          variant: get(config, ['navVariant', screen]),
          width: get(config, ['navWidth', screen]),
          collapsible: get(config, ['collapsible', screen]),
          collapsedWidth: get(config, ['collapsedWidth', screen]),
        },
        header: {
          position: get(config, ['headerPosition', screen]),
          clipped: get(config, ['clipped', screen]),
          offsetHeight,
          persistentBehavior: squeezed ? 'fit' : 'flexible',
        },
        content: {
          persistentBehavior: squeezed ? 'fit' : 'flexible',
        },
        footer: {
          persistentBehavior: squeezed ? 'fit' : 'flexible',
        },
      },
    });
  };
  return {
    autoCollapseDisabled: false,
    collapsedBreakpoint: 'sm',
    heightAdjustmentDisabled: false,
    ...createScreenConfig('xs', 56),
    ...createScreenConfig('sm', 64),
    ...createScreenConfig('md', 64),
  };
};

const GetCode = ({ classes, config, icon, open, onClose }) => {
  const [index, setIndex] = useState(0);
  return (
    <Dialog open={open} onClose={onClose}>
      <Tabs
        variant={'fullWidth'}
        value={index}
        onChange={(e, val) => setIndex(val)}
      >
        <Tab
          className={classes.tab}
          label={
            <Typography color={'textPrimary'}>
              <Icon size={'small'}>
                <Code />
              </Icon>{' '}
              JSX
            </Typography>
          }
        />
        <Tab
          className={classes.tab}
          label={
            <Typography color={'textPrimary'}>
              <Icon size={'small'}>
                <GetApp />
              </Icon>{' '}
              Download
            </Typography>
          }
        />
      </Tabs>
      {index === 0 && (
        <PrismWithCopier code={createCode(parseConfig(config), icon)} />
      )}
      {index === 1 && (
        <Box py={2} minWidth={300} minHeight={300}>
          <ListItem
            button
            component={'a'}
            href={
              'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2FLayout-v2.0.zip?alt=media&token=1364969b-af98-4ffb-9074-f4051d420e5c'
            }
            rel="noopener"
          >
            <Icon
              size={'big'}
              shape={'circular'}
              bgColor={'default'}
              style={{ marginRight: 16 }}
            >
              <Description />
            </Icon>
            <ListItemText
              primary={'v2.0'}
              secondary={'Download'}
              secondaryTypographyProps={{ color: 'secondary' }}
            />
          </ListItem>
          <ListItem
            button
            component={'a'}
            href={
              'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fcode%2FLayout-v1.1.zip?alt=media'
            }
            rel="noopener"
          >
            <Icon
              size={'big'}
              shape={'circular'}
              bgColor={'default'}
              style={{ marginRight: 16 }}
            >
              <Description />
            </Icon>
            <ListItemText
              primary={'v1.1'}
              secondary={'Download'}
              secondaryTypographyProps={{ color: 'secondary' }}
            />
          </ListItem>
        </Box>
      )}
    </Dialog>
  );
};

GetCode.propTypes = {};
GetCode.defaultProps = {};

const styles = () => ({
  tab: {
    textTransform: 'unset',
  },
});

export default withStyles(styles)(GetCode);
