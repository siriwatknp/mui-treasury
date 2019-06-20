/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Box } from 'components/atoms';
import Text from 'components/predefined/Typography';
import IconSection from 'pages/components/predefined/IconSection';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import CodeHighlight from 'components/highlights/CodeHighlight';
import Copier from 'components/atoms/Copier';

const materialIconCode =
  '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />';

const exampleCode = `
  /* Example Usage */
  // SVG
  import Favorite from '@material-ui/icons/Favorite'
  
  // webfont style
  import Icon from 'path/to/Icon.js'
  
  const App = () => (
    <>
      // material icon
      <Favorite />
      
      // material webfont
      <Icon icon="favorite" /> or <Icon>favorite</Icon>
      
      // font awesome
      <Icon icon="fas fa-heart" /> or <Icon>fas fa-heart</Icon>
    </>
  )
`;

const IconPage = ({ globalTheme }) => (
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
      id={'predefined-icon'}
      href={'#predefined-icon'}
      underline={'hover'}
      weight={'bold'}
      color={'textPrimary'}
      gutterBottom
    >
      Predefined Icon <code>v1.1</code>
    </Text>
    <Text gutterBottom>
      <b>The Problem ?</b>
    </Text>
    <Text gutterBottom>
      1. Material icons is not enough. We need{' '}
      <Link
        target={'_blank'}
        rel="noopener"
        href={'https://fontawesome.com/icons'}
      >
        Font Awesome 5
      </Link>
    </Text>
    <Text gutterBottom>
      2. Font Awesome is not 100% ready to use with Material-UI. (there is
      difference in sizes) <b>Material</b> is 24x24px by default, but{' '}
      <b>Font Awesome</b> depends on its shape
    </Text>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Box {...Box.allCenter} height={60}>
          <Icon>favorite</Icon>
        </Box>
        <Text align={'center'} gutterBottom>
          <Link
            target={'_blank'}
            rel="noopener"
            href={'https://material.io/tools/icons'}
          >
            Material Icon
          </Link>
        </Text>
        <Box py={1} px={2} textAlign={'center'}>
          <CodeHighlight padded={2} code={'<Icon>favorite</Icon>'} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box {...Box.allCenter} height={60}>
          <i className={'fab fa-facebook-f'} />
        </Box>
        <Text align={'center'} gutterBottom>
          <Link
            target={'_blank'}
            rel="noopener"
            href={'https://fontawesome.com/icons'}
          >
            Font Awesome
          </Link>
        </Text>
        <Box py={1} px={2} textAlign={'center'}>
          <CodeHighlight padded={2} code={"<i className={'fas fa-heart'} />"} />
        </Box>
      </Grid>
    </Grid>
    <Box pb={2} />
    <Text gutterBottom>
      3. Many people will use font awesome + material icon in material-ui, and
      will be frustrated when they have to keep consistent size while they
      switch between them.
    </Text>
    <Text gutterBottom>
      4. It is not very useful right now, ex. in contrast background I want to
      make the icon turn white or I want it to be bigger or add a little margin
      on the left side of it by <b>using props</b>
    </Text>
    <Text gutterBottom>5. Icon + Text really annoyed me.</Text>
    <Box my={2}>
      <Divider />
    </Box>
    <Text variant={'h5'} gutterBottom>
      Here is the Solution!
    </Text>
    <Text gutterBottom>
      I adjusted sizes for both Material and FontAwesome, so when you use it you
      feel like it is from the same lib. Also, I added necessary props that I
      found them useful and appear in many modern website (link, inverted,
      color, bgColor and shape).
    </Text>
    <Text>
      <Link
        target={'_blank'}
        rel="noopener"
        href={'https://codesandbox.io/s/6yxy45yn9n'}
      >
        Code Sandbox
      </Link>
    </Text>
    <Box py={{ xs: 2, sm: 4 }}>
      <IconSection globalTheme={globalTheme} />
    </Box>
    <Text variant={'h6'}>How to use</Text>
    <Text>
      <ol>
        <li>
          <code>yarn add @material-ui/core @material-ui/styles clsx</code>{' '}
          <Copier.Text
            text={'yarn add @material-ui/core @material-ui/styles clsx color'}
          />
        </li>
        <li>
          If you want to use material icon SVG
          <br />
          <code>yarn add @material-ui/icons</code>{' '}
          <Copier.Text text={'yarn add @material-ui/icons'} />
          <br />
          <br />
          of if you want to web material webfont
          <br />
          <code>{materialIconCode}</code>{' '}
          <Copier.Text text={materialIconCode} />
        </li>
        <li>
          Good news, it integrates seamlessly with{' '}
          <Text
            link
            href={'https://fontawesome.com/start'}
            target={'_blank'}
            rel="noopener"
          >
            Font Awesome 5
          </Text>
        </li>
        <li>
          <Text
            link
            href={
              'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fcode%2FIcon.js?alt=media'
            }
            rel={'noopener'}
            target={'_blank'}
          >
            Download Icon File
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
    <Box pb={2} />
  </Box>
);

IconPage.propTypes = {
  globalTheme: PropTypes.shape({}).isRequired,
};

export default IconPage;
