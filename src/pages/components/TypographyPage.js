/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { Box } from 'components/atoms';
import TypographySection from 'pages/components/predefined/TypographySection';
import Copier from 'components/atoms/Copier';
import Text from 'components/predefined/Typography';
import CodeHighlight from 'components/highlights/CodeHighlight';

const exampleCode = `
  /* Example Usage */
  import Typography from 'path/to/Typography.js'
  
  const App = () => (
    <>
      // support code (inspired from antd)
      <Typography>
        <code>Code</code>
      </Typography>
      
      // auto use @material-ui/core/Link
      <Typography link>
        Link
      </Typography>
      
      // support any weight
      <Typography weight={900}>
        Heavy Font
      </Typography>
    </>
  )
`;

const themeCode = `
  // in your root component
  import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
  import yourTheme from 'path/to/yourTheme.js';
  
  // if you dont have your theme, use createMuiTheme;
  // const yourTheme = createMuiTheme();  
  
  const App = () => (
    <MuiThemeProvider
      theme={{
        ...yourTheme,
        overrides: {
          // you should separate getTheme into another file
          // and then import from there.
          Typography.getTheme(yourTheme),
        }
      }}
    >
      ...
    </MuiThemeProvider>
  )
`;

const TypographyPage = ({ globalTheme }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Text variant={'h5'} gutterBottom>
      Predefined <code>Typography</code>
    </Text>
    <Text gutterBottom>No talk, just try.</Text>
    <Text>
      <Link
        target={'_blank'}
        rel="noopener"
        href={'https://codesandbox.io/s/4wmz707on4'}
      >
        Code Sandbox
      </Link>
    </Text>
    <Box py={{ xs: 2, sm: 4 }}>
      <TypographySection globalTheme={globalTheme} />
    </Box>
    <Text variant={'h6'}>How to use</Text>
    <Text>
      <ol>
        <li>
          <code>yarn add @material-ui/core clsx</code>{' '}
          <Copier.Text text={'yarn add @material-ui/core clsx'} />
        </li>
        <li>
          <Text
            link
            href={
              'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fcode%2FTypography.js?alt=media'
            }
            rel={'noopener'}
            target={'_blank'}
          >
            Download Typography File
          </Text>{' '}
          and put it in your project.{' '}
          <Text component={'span'} inline color={'hint'}>
            ({"don't"} worry, no spam, just a React component)
          </Text>
        </li>
        <li>
          Copy theme in <code>Typography.getTheme</code>
          <br />
          <CodeHighlight code={themeCode} />
        </li>
        <li>
          Look at component propTypes, adjust default props to suit your
          project.
        </li>
      </ol>
    </Text>
    <CodeHighlight code={exampleCode} />
    <Box pb={2} />
  </Box>
);

TypographyPage.propTypes = {
  globalTheme: PropTypes.shape({}).isRequired,
};

export default TypographyPage;
