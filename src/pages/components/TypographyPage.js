import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Box } from 'components/atoms';
import TypographySection from 'pages/components/predefined/TypographySection';

const TypographyPage = ({ globalTheme }) => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Typography variant={'h5'} gutterBottom>
      Predefined <code>Typography</code>
    </Typography>
    <Typography gutterBottom>No talk, just try.</Typography>
    <Typography>
      <Link
        target={'_blank'}
        rel="noopener"
        href={'https://codesandbox.io/s/4wmz707on4'}
      >
        Code Sandbox
      </Link>
    </Typography>
    <Box py={{ xs: 2, sm: 4 }}>
      <TypographySection globalTheme={globalTheme} />
    </Box>
    <Typography variant={'h6'}>How to use</Typography>
    <Typography>
      1. Copy component in <code>/src/components/predefined/Typography.js</code>
    </Typography>
    <Typography>2. Use this component instead of Material-ui Button</Typography>
    <Typography gutterBottom>
      3. Look at component propTypes, adjust default props to suit your project.
    </Typography>
    <Box pb={2} />
  </Box>
);

TypographyPage.propTypes = {
  globalTheme: PropTypes.shape({}).isRequired,
};

export default TypographyPage;
