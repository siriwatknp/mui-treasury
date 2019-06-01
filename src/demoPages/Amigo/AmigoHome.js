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
import PricePicker from './components/PricePicker';
import BrandPicker from './components/BrandPicker';
import ColorPicker from './components/ColorPicker';
import SizePicker from './components/SizePicker';
import Pagination from './components/Pagination';
import EmailInput from './components/EmailInput';
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
      <Box bgcolor={'common.white'}>
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
          mb={-5.5}
          position={'relative'}
          zIndex={1}
        >
          <Container fixed>
            <Box
              mx={{
                xs: -2,
                sm: 0,
              }}
            >
              <Paper style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.12)' }}>
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
                <Box pt={2} pb={3} />
                <Divider light />
                <Grid container>
                  <Hidden only={'xs'}>
                    <Grid item xs={12} sm={4} md={3}>
                      <Expander label={'CATEGORY'}>
                        <CategoryPicker categories={CategoryPicker.data} />
                      </Expander>
                      <Divider light />
                      <Expander label={'PRICE'}>
                        <PricePicker min={10} max={400} />
                      </Expander>
                      <Divider light />
                      <Expander label={'BRAND'}>
                        <BrandPicker brands={BrandPicker.data} />
                      </Expander>
                      <Divider light />
                      <Expander label={'COLOR'}>
                        <Box p={1}>
                          <ColorPicker colors={ColorPicker.data} />
                        </Box>
                      </Expander>
                      <Divider light />
                      <Expander label={'SIZE'}>
                        <Box p={1}>
                          <SizePicker sizes={SizePicker.data} />
                        </Box>
                      </Expander>
                      <Divider light />
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
                    <Pagination
                      rootBoxProps={{
                        mt: '-1px',
                        ml: '-1px',
                        borderLeft: '1px solid #f0f0f0',
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Container>
        </Box>
        <Box
          bgcolor={'grey.200'}
          textAlign={'center'}
          position={'relative'}
          zIndex={0}
          pt={10}
          pb={5}
        >
          <Container maxWidth={'sm'}>
            <Typography
              spacing={'medium'}
              secondFamily
              weight={500}
              gutterBottom
            >
              SUBSCRIBE TO OUR NEWSLETTER
            </Typography>
            <Typography variant={'caption'} display={'block'}>
              To always stay update with our products, news, and special
              discounts
            </Typography>
            <Typography
              variant={'caption'}
              display={'block'}
              bottomSpace={'medium'}
            >
              enter you email below
            </Typography>
            <EmailInput />
          </Container>
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

AmigoHome.propTypes = {};
AmigoHome.defaultProps = {};

export default AmigoHome;
