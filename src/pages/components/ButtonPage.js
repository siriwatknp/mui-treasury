/* eslint-disable max-len, react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import ButtonSection from 'pages/components/predefined/ButtonSection';
import examples from 'pages/components/predefined/examples/button';
// CONTAINERS
import ShouldUpdate from 'containers/ShouldUpdate';
// COMPONENTS
import Box from 'components/atoms/Box';
import Text from 'components/predefined/Typography';
import { PreviewWidget } from 'components/molecules';
import Copier from 'components/atoms/Copier';
import CodeHighlight from 'components/highlights/CodeHighlight';
// SHOWCASES
import GithubButton from 'components/buttons/GithubButton';
import FirebaseButton from 'components/buttons/FirebaseButton';
import TwitterButton from 'components/buttons/TwitterButton';
import GradientButton from 'components/buttons/GradientButton';
import ShinningButton from 'components/buttons/ShinningButton';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const components = [
  {
    component: ShinningButton,
    render: () => <ShinningButton />,
  },
  {
    component: GradientButton,
    render: () => (
      <Box css={{ '& .MuiButton--chubby': { marginTop: 16 } }}>
        <GradientButton />
      </Box>
    ),
  },
  {
    component: GithubButton,
    render: () => (
      <Box css={{ '& .default': { marginRight: 16 } }}>
        <GithubButton />
      </Box>
    ),
  },
  {
    component: FirebaseButton,
    render: () => (
      <Box css={{ '& .default': { marginRight: 16 } }}>
        <FirebaseButton />
      </Box>
    ),
  },
  {
    component: TwitterButton,
    render: () => (
      <Box
        css={{
          '& .default': { marginRight: 16 },
          '& .bottom': { marginTop: 16 },
        }}
      >
        <TwitterButton />
      </Box>
    ),
  },
];

const exampleCode = `
  /* Example */
  // in Button.js that you just downloaded
  ...
  
  Button.defaultProps = {
    shape: 'chubby', // you will have nice chubby every time you use it by default
    shadowless: true, // no shadow at all
  };
  
  export default Button;
  
  // ------------------------------------
  
  // then in other component
  import Button from 'path/to/Button.js'
  
  const Component = () => <Button>Chubby</Button>
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
          Button.getTheme(yourTheme),
        }
      }}
    >
      ...
    </MuiThemeProvider>
  )
`;

const ButtonPage = ({ counter, globalTheme, onSelectComponent }) => {
  console.log('rerendered')
  return (
    <Box
      width={'100%'}
      p={{
        xs: 2,
        sm: 4,
      }}
    >
      <Text
        link
        variant={'h5'}
        id={'predefined-button'}
        href={'#predefined-button'}
        underline={'hover'}
        weight={'bold'}
        color={'textPrimary'}
        gutterBottom
      >
        Predefined Button <code>v1.3</code>
      </Text>
      <Box my={1}>
        <Text variant={'caption'} align={'left'} gutterBottom>
          <b>Last Updated 10 May 2019</b>
        </Text>
      </Box>
      <Text gutterBottom>
        The button and only button that you need if you are using Material-UI,
        just copy the snippet.
      </Text>
      <Text gutterBottom>
        Many props such as <code>loading</code>, <code>inverted</code>,{' '}
        <code>shape</code> are inspired from semantic-ui and antd.
      </Text>
      <Box pt={{
        xs: 2,
        sm: 4,
      }}>
        <ButtonSection globalTheme={globalTheme} />
      </Box>
      <br />
      <Text
        link
        variant={'h6'}
        id={'how-to-use-button'}
        href={'#how-to-use-button'}
        underline={'hover'}
        weight={'bold'}
        color={'textPrimary'}
        gutterBottom
      >
        How to use
      </Text>
      <Text>
        <ol>
          <li>
            <code>yarn add @material-ui/core clsx color</code>{' '}
            <Copier.Text text={'yarn add @material-ui/core clsx color'} />
          </li>
          <li>
            <Text
              link
              href={
                'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fcode%2FButton.js?alt=media'
              }
              rel={'noopener'}
              target={'_blank'}
            >
              Download Button File
            </Text>{' '}
            and put it in your project.{' '}
            <Text component={'span'} inline color={'hint'}>
              ({'don\'t'} worry, no spam, just a React component)
            </Text>
          </li>
          <li>
            Copy theme in <code>Button.getTheme</code>
            <Text gutterBottom />
            <CodeHighlight code={themeCode} />
          </li>
          <br />
          <li>
            Look at component propTypes, adjust default props to suit your
            project.
            <Text gutterBottom />
            <CodeHighlight code={exampleCode} />
          </li>
        </ol>
      </Text>
      <Text
        link
        variant={'h6'}
        id={'example-buttons'}
        href={'#example-buttons'}
        underline={'hover'}
        weight={'bold'}
        color={'textPrimary'}
        gutterBottom
      >
        Examples
      </Text>
      <Grid container spacing={2}>
        {examples.map(({ render, code }, i) => (
          <Grid key={i} item xs={12} sm={4} md={3}>
            <Box textAlign={'center'} py={2}>
              {render()}
            </Box>
            <CodeHighlight code={code} />
          </Grid>
        ))}
      </Grid>
      <Box pb={2} />
      <Divider />
      <Box pb={2} />
      <Text
        link
        variant={'h5'}
        id={'customized-button'}
        href={'#customized-button'}
        underline={'hover'}
        weight={'bold'}
        color={'textPrimary'}
      >
        Customized Buttons
      </Text>
      <Text gutterBottom>
        This section shows that Material-UI can be customize to many themes as you
        like.
      </Text>
      <Box pb={2} />
      <Grid container spacing={4}>
        {components.map(({ component, render, previewProps }) => (
          <Grid key={get(component, 'metadata.name')} item xs={12} sm={6} lg={4}>
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
};

ButtonPage.propTypes = {
  counter: PropTypes.number.isRequired,
  globalTheme: PropTypes.shape({}).isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};
ButtonPage.components = components;

export default ButtonPage;
