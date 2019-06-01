import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Typography from 'components/predefined/Typography';
import AmiLargeHeader from './components/header';
import ProductAds from './components/ProductAds';
import ProductCard from './components/ProductCard';
import Expander from './components/Expander';
import CategoryPicker from './components/CategoryPicker';
import theme from './theme';

const url =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css?family=Poppins:200,400,500,700,900|Oswald:400,700&display=swap';

Typography.setSecondFamily("'Oswald', sans-serif");

const AmigoHome = () => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <link href={url} rel="stylesheet" />
      </Helmet>
      <CssBaseline />
      <AmiLargeHeader />
      <Box
        bgcolor={'#CDD5FF'}
        height={{
          xs: 144,
          md: 200,
        }}
        textAlign={'center'}
        pt={{
          xs: 3,
          md: 5,
        }}
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
      <Box
        mt={{
          xs: -5,
          md: -8,
        }}
      >
        <Container fixed>
          <Box
            mx={{
              xs: -2,
              sm: 0,
            }}
          >
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
              <Box py={2} />
              <Divider light />
              <Grid container>
                <Hidden only={'xs'}>
                  <Grid item xs={12} sm={4} md={3}>
                    <Expander label={'CATEGORY'}>
                      <CategoryPicker categories={CategoryPicker.data} />
                    </Expander>
                    <Divider light />
                    <Expander label={'PRICE'}>PRICE</Expander>
                    <Divider light />
                    <Expander label={'BRAND'}>BRAND</Expander>
                    <Divider light />
                    <Expander label={'COLOR'}>COLOR</Expander>
                    <Divider light />
                    <Expander label={'SIZE'}>SIZE</Expander>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={8} md={9}>
                  <Grid container>
                    {ProductCard.data.map(data => (
                      <Grid key={data.name} item xs={6} sm={6} md={4}>
                        <ProductCard {...data} bordered />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  </ThemeProvider>
);

AmigoHome.propTypes = {};
AmigoHome.defaultProps = {};

export default AmigoHome;
