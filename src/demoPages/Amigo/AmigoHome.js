import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AmiLargeHeader from './components/header';
import theme from './theme';

const url =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css?family=Poppins:200,400,500,700,900&display=swap';

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
        <Container maxWidth={'sm'}>
          <Box>{[...new Array(20)].map(renderParagraph)}</Box>
        </Container>
      </>
    </ThemeProvider>
  );
};

AmigoHome.propTypes = {};
AmigoHome.defaultProps = {};

export default AmigoHome;
