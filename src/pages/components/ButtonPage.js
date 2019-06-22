/* eslint-disable max-len, react/no-array-index-key */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { createMuiTheme } from '@material-ui/core/styles';
import ButtonSection from 'pages/components/predefined/ButtonSection';
import examples from 'pages/components/predefined/examples/button';
import createSimpleShowcase from 'containers/createSimpleShowcase';
// CONTAINERS
// COMPONENTS
import Box from 'components/atoms/Box';
import Text from 'components/predefined/Typography';
import Copier from 'components/atoms/Copier';
import CodeHighlight from 'components/highlights/CodeHighlight';
// SHOWCASES
import {
  ShinningButton,
  GradientButton,
  GithubButton,
  FirebaseButton,
  TwitterButton,
} from 'docs/components/buttons';

const baseTheme = createMuiTheme();

const components = [
  {
    component: ShinningButton,
    render: () => <ShinningButton />,
  },
  {
    component: GradientButton,
    render: () => <GradientButton.Demo />,
  },
  {
    component: GithubButton,
    render: () => <GithubButton.Demo />,
  },
  {
    component: FirebaseButton,
    render: () => <FirebaseButton.Demo />,
  },
  {
    component: TwitterButton,
    render: () => <TwitterButton.Demo />,
  },
];

const ButtonShowcase = createSimpleShowcase(components, {
  wrapperOmitted: true,
});

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

const ButtonPage = () => (
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
      Predefined Button <code>v1.4</code>
    </Text>
    <Box my={1}>
      <Text variant={'caption'} align={'left'} gutterBottom>
        <b>Last Updated 27 May 2019</b>
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
    <Box
      pt={{
        xs: 2,
        sm: 4,
      }}
    >
      <ButtonSection globalTheme={baseTheme} />
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
          <code>yarn add @material-ui/core @material-ui/styles clsx color</code>{' '}
          <Copier.Text
            text={'yarn add @material-ui/core @material-ui/styles clsx color'}
          />
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
            ({"don't"} worry, no spam, just a React component)
          </Text>
        </li>
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
    <ButtonShowcase />
  </Box>
);

ButtonPage.propTypes = {};
ButtonPage.components = components;

export default ButtonPage;
