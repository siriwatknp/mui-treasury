/* eslint-disable */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Clipboard from 'containers/Clipboard';
import CodeHighlight from 'components/highlights/CodeHighlight';
import Box from 'components/atoms/Box';
import Icon from 'components/predefined/Icon';
import Typography from 'components/predefined/Typography';

const generateIconImport = ({ type, style }) => {
  if (type === 'svg') {
    if (style === 'chevron')
      return `import MenuIcon from '@material-ui/icons/Menu';
  import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
  import ChevronLeftIcon from '@material-ui/icons/ChevronRight';`;
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
  ${generateIconImport(icon)}
  import { Root, Header, Nav, Content, Footer } from './Layout';
  
  const config = ${JSON.stringify(config, null, 2)};
  
  const App = () => (
    <Root config={config} style={{ minHeight: "100vh" }}>
      <CssBaseline />
      <Header
        menuIcon={{
          inactive: ${
            icon.type === 'svg' ? '<MenuIcon />' : '<Icon>menu</Icon>'
          },
          active: ${generateIconElement(icon, 'active')}
        }}
      >
          {/* header goes here */}
      </Header>
      <Nav
        collapsedIcon={{
          inactive: ${generateIconElement(icon, 'active')},
          active: ${generateIconElement(icon)}
        }}
        header={
          // you can provide fixed header inside nav
          // change null to some react element
          ctx => null
        }
      >
        {/* nav goes here */}
      </Nav>
      <Content>
        {/* content goes here */}
      </Content>
      <Footer>{/* footer goes here */}</Footer>
    </Root>
  )
  
  export default App
`;

const GetCode = ({ classes, config, icon, open, onClose }) => {
  const [index, setIndex] = useState(0);
  return (
    <Dialog open onClose={onClose}>
      <Tabs
        variant={'fullWidth'}
        value={index}
        onChange={(e, val) => setIndex(val)}
      >
        <Tab
          className={classes.tab}
          label={
            <Typography color={'textPrimary'}>
              <Icon size={'small'}>code</Icon> JSX
            </Typography>
          }
        />
        <Tab
          className={classes.tab}
          label={
            <Typography color={'textPrimary'}>
              <Icon size={'small'}>get_app</Icon> Download
            </Typography>
          }
        />
      </Tabs>
      {index === 0 && (
        <Clipboard>
          {({ renderCopier }) => (
            <Box position={'relative'}>
              {renderCopier({ text: createCode(config, icon) })}
              <Box p={2}>
                <CodeHighlight code={createCode(config, icon)} />
              </Box>
            </Box>
          )}
        </Clipboard>
      )}
      {index === 1 && (
        <Box py={2} minWidth={300} minHeight={300}>
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
              description
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
