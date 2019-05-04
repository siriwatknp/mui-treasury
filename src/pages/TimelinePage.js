import React from 'react';
import Grid from '@material-ui/core/Grid';
import Browser from 'components/atoms/Browser';
import Text from 'components/atoms/Text';
import Box from 'components/atoms/Box';

const TimelinePage = () => (
  <Box
    maxWidth={{
      sm: 732,
      md: 960,
      lg: 1152,
    }}
    p={{
      xs: 2,
      md: 3,
    }}
    mx={'auto'}
  >
    <Box
      textAlign={{
        xs: 'left',
        md: 'center',
      }}
    >
      <Text
        variant={'h1'}
        fontSize={{
          xs: 24,
          sm: 40,
        }}
        fontWeight={900}
        gutterBottom
      >
        Timeline 2019
      </Text>
      <Text color={'text.secondary'} variant={'h6'}>
        accomplish <b>6</b> inspiring pages
      </Text>
      <Text color={'text.secondary'} variant={'h6'} gutterBottom>
        E-commerce | Blog | CMS dashboard
      </Text>
    </Box>
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <Browser>test</Browser>
      </Grid>
    </Grid>
  </Box>
);

TimelinePage.propTypes = {};
TimelinePage.defaultProps = {};

export default TimelinePage;
