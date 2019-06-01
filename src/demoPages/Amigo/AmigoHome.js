import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from 'components/predefined/Typography';
import AmiLargeHeader from './components/header';
import ProductAds from './components/ProductAds';
import Expander from './components/Expander';
import theme from './theme';

const url =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css?family=Poppins:200,400,500,700,900|Oswald:400,700&display=swap';

Typography.setSecondFamily("'Oswald', sans-serif");

const AmigoHome = () => {
  const renderParagraph = () => (
    <>
      <Box height={32} width={'24%'} bgcolor={'grey.300'} mb={2} mt={4.5} />
      <Box height={24} width={'84%'} bgcolor={'grey.200'} mb={1.5} />
      <Box height={24} bgcolor={'grey.200'} mb={1.5} />
      <Box height={24} bgcolor={'grey.200'} mb={1.5} />
      <Box height={24} bgcolor={'grey.200'} mb={1.5} />
      <Box height={24} bgcolor={'grey.200'} mb={1.5} />
    </>
  );
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <link href={url} rel="stylesheet" />
        </Helmet>
        <CssBaseline />
        <AmiLargeHeader />
        <Box
          bgcolor={'#CDD5FF'}
          height={{ xs: 144, md: 200 }}
          textAlign={'center'}
          pt={{ xs: 3, md: 5 }}
        >
          <Typography
            secondFamily
            weight={'bold'}
            size={'big'}
            bottomSpace={'small'}
          >
            MEN’S LIFESTYLE SHOE
          </Typography>
          <Typography>TOTAL 319 ITEMS</Typography>
        </Box>
        <Box mt={{ xs: -5, md: -8 }}>
          <Container fixed>
            <Box mx={{ xs: -2, sm: 0 }}>
              <Paper elevation={6}>
                <Grid container>
                  <Grid item xs={12} sm={6} md={5}>
                    <ProductAds
                      {...ProductAds.test1}
                      contentSide={'left'}
                      contentBoxProps={{ maxWidth: 200 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={7}>
                    <ProductAds
                      {...ProductAds.test2}
                      contentSide={'right'}
                      contentBoxProps={{ maxWidth: 300 }}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} sm={4} md={3}>
                    <Expander label={'CATEGORY'}>test</Expander>
                  </Grid>
                </Grid>
                <Box>{[...new Array(20)].map(renderParagraph)}</Box>
              </Paper>
            </Box>
          </Container>
        </Box>
      </>
    </ThemeProvider>
  );
};

AmigoHome.propTypes = {};
AmigoHome.defaultProps = {};

export default AmigoHome;
