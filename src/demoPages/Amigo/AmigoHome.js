import React from 'react';
// import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Helmet } from 'react-helmet';
import Div100vh from 'react-div-100vh';
import AmiLargeHeader from './components/header';
import theme from './theme';

const url =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css?family=Poppins:200,400,500,700,900&display=swap';

const AmigoHome = () => (
  <ThemeProvider theme={theme}>
    <Div100vh>
      <Helmet>
        <link href={url} rel="stylesheet" />
      </Helmet>
      <CssBaseline />
      <AmiLargeHeader />
      <div style={{ height: 1000 }} />
    </Div100vh>
  </ThemeProvider>
);

AmigoHome.propTypes = {};
AmigoHome.defaultProps = {};

export default AmigoHome;
