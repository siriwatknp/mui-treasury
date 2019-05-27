import React from 'react';
// import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Helmet } from 'react-helmet';
import Button from 'components/predefined/Button';
import Icon from 'components/predefined/Icon';
import Typography from 'components/predefined/Typography';
import AmiHeader from './components/AmiHeader';
import theme from './theme';

const url =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap';

const AmigoHome = () => (
  <ThemeProvider
    theme={merge(theme, {
      overrides: {
        ...Button.getTheme(theme),
        ...Icon.getTheme(theme),
        ...Typography.getTheme(theme),
      },
    })}
  >
    <>
      <Helmet>
        <link href={url} rel="stylesheet" />
      </Helmet>
      <CssBaseline />
      <AmiHeader />
    </>
  </ThemeProvider>
);

AmigoHome.propTypes = {};
AmigoHome.defaultProps = {};

export default AmigoHome;
