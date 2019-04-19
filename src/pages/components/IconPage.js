import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box } from 'components/atoms';
import IconSection from 'pages/components/predefined/IconSection';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import CodeHighlight from 'components/highlights/CodeHighlight';

const IconPage = ({ globalTheme }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Typography variant={'h5'} gutterBottom>
      Predefined <code>Icon</code>
    </Typography>
    <Typography gutterBottom>
      <b>The Problem ?</b>
    </Typography>
    <Typography gutterBottom>
      1. Material icons is not enough. We need{' '}
      <Link href={'https://fontawesome.com/icons'}>Font Awesome 5</Link>
    </Typography>
    <Typography gutterBottom>
      2. Font Awesome is not 100% ready to use with Material-UI. (there is
      difference in sizes) <b>Material</b> is 24x24px by default, but{' '}
      <b>Font Awesome</b> depends on its shape
    </Typography>
    <Grid container spacing={32}>
      <Grid item xs={12} sm={6}>
        <Box {...Box.allCenter} height={60}>
          <Icon>favorite</Icon>
        </Box>
        <Typography align={'center'} gutterBottom>
          <Link href={'https://material.io/tools/icons'}>Material Icon</Link>
        </Typography>
        <Box py={1} px={2} bgcolor={'rgb(250, 248, 245)'} textAlign={'center'}>
          <CodeHighlight code={'<Icon>favorite</Icon>'} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box {...Box.allCenter} height={60}>
          <i className={'fab fa-facebook-f'} />
        </Box>
        <Typography align={'center'} gutterBottom>
          <Link href={'https://fontawesome.com/icons'}>Font Awesome</Link>
        </Typography>
        <Box py={1} px={2} bgcolor={'rgb(250, 248, 245)'} textAlign={'center'}>
          <CodeHighlight code={"<i className={'fas fa-heart'} />"} />
        </Box>
      </Grid>
    </Grid>
    <Box pb={2} />
    <Typography gutterBottom>
      3. Many people will use font awesome + material icon in material-ui, and
      will be frustrated when they have to keep consistent size while they
      switch between them.
    </Typography>
    <Typography gutterBottom>
      4. It is not very useful right now, ex. in contrast background I want to
      make the icon turn white or I want it to be bigger or add a little margin
      on the left side of it by <b>using props</b>
    </Typography>
    <Typography gutterBottom>
      5. Icon + Typography really annoyed me.
    </Typography>
    <Box my={2}>
      <Divider />
    </Box>
    <Typography variant={'h5'} gutterBottom>
      Here is the Solution!
    </Typography>
    <Typography gutterBottom>
      I adjusted sizes for both Material and FontAwesome, so when you use it you
      feel like it is from the same lib. Also, I added necessary props that I
      found them useful and appear in many modern website (link, inverted,
      color, bgColor and shape).
    </Typography>
    <Typography>
      <Link href={'https://codesandbox.io/s/6yxy45yn9n'}>Code Sandbox</Link>
    </Typography>
    <Box py={{ xs: 2, sm: 4 }}>
      <IconSection globalTheme={globalTheme} />
    </Box>
    <Typography variant={'h6'}>How to use</Typography>
    <Typography>
      1. Copy component in <code>/src/components/predefined/Icon.js</code>
    </Typography>
    <Typography>2. Use this component instead of Material-ui Button</Typography>
    <Typography gutterBottom>
      3. Look at component propTypes, adjust default props to suit your project.
    </Typography>
    <Box pb={2} />
  </Box>
);

IconPage.propTypes = {
  globalTheme: PropTypes.shape({}).isRequired,
};

export default IconPage;
