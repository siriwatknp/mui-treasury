/* eslint-disable */
import React from 'react';
import GitHubButton from 'react-github-btn';
import { Link as RouterLink } from 'gatsby';
import Link from '@material-ui/core/Link';
import Box from 'components/atoms/Box';
import Favorite from '@material-ui/icons/Favorite';
import Typography from 'components/extensions/Typography';
import Icon from 'components/extensions/Icon';

const Intro = () => (
  <Box maxWidth={768} mx={'auto'}>
    <Typography variant={'overline'}>Welcome to</Typography>
    <Typography variant={'h4'} weight={'bold'} gutterBottom>
      Layout <Link underline={'none'}>Builder</Link>
    </Typography>
    <Typography indent={'small'} gutterBottom>
      If you haven't see the concept with examples, please read{' '}
      <Link component={RouterLink} to={'/components/layout'}>
        this page
      </Link>{' '}
      to get the idea first. We will start building layout by completing
      settings for each screen (Mobile first, then tablet and Desktop)
    </Typography>
    <Typography indent={'small'} gutterBottom>
      Each screen will be categorized into 4 parts with image example of how it
      will display. Navigation, Header, Content, and Footer.
      <br />
      Here is the list of available config in each part.
    </Typography>
    <Box ml={3}>
      <Typography component={'div'} gutterBottom>
        <b>Navigation</b>
        <ul>
          <li>variant</li>
          <li>width</li>
          <li>collasible</li>
        </ul>
      </Typography>
      <Typography component={'div'} gutterBottom>
        <b>Header</b>
        <ul>
          <li>clipped</li>
          <li>variant</li>
        </ul>
      </Typography>
      <Typography component={'div'} gutterBottom>
        <b>Content</b>
        <ul>
          <li>squeezed</li>
        </ul>
      </Typography>
      <Typography component={'div'} gutterBottom>
        <b>Footer</b>
        <ul>
          <li>shrank</li>
        </ul>
      </Typography>
    </Box>
    <Typography gutterBottom>
      When you complete, you will be able to copy the jsx code & link to
      download React Components
    </Typography>
    <Box py={2}>
      <Typography variant={'h6'} color={'primary'} weight={'bold'}>
        I hope you enjoyed.
      </Typography>
      <Typography color={'primary'} gutterBottom>
        If you like this site, please give me a star on github . Every star
        gives me energy to continue this project.
      </Typography>
      <Box py={1}>
        <GitHubButton
          href="https://github.com/siriwatknp/mui-treasury"
          data-size="large"
          data-show-count="true"
          aria-label="Star siriwatknp/mui-treasury on GitHub"
        >
          Star
        </GitHubButton>
      </Box>
      <Typography gutterBottom>
        <b>Built with</b>{' '}
        <Icon color={'danger'}>
          <Favorite />
        </Icon>{' '}
        (a lot)
      </Typography>
    </Box>
  </Box>
);

Intro.propTypes = {};
Intro.defaultProps = {};

export default Intro;
