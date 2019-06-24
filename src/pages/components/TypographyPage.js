/* eslint-disable react/no-array-index-key, max-len */
import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import Grid from '@material-ui/core/Grid/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Box } from 'components/atoms';
import Copier from 'components/atoms/Copier';
import Text from 'extensions/Typography';
import Icon from 'extensions/Icon';
import CodeHighlight from 'components/highlights/CodeHighlight';
import {
  basicExamples,
  advancedExamples,
} from 'pages/extensions/examples/typography';

const exampleCode = `
  /* Example Usage */
  import Typography from 'path/to/Typography.js'
  
  const App = () => (
    <>
      // support code (inspired from antd)
      <Typography>
        <code>Code</code>
      </Typography>
      
      // auto use @material-ui/core/Link
      <Typography link>
        Link
      </Typography>
      
      // support any weight
      <Typography weight={900}>
        Heavy Font
      </Typography>
    </>
  )
`;

const TypographyPage = ({ globalTheme }) => {
  const renderExamples = (label, examples) => (
    <>
      <Text
        variant={'h4'}
        id={kebabCase(label)}
        anchor={<Icon>far fa-link</Icon>}
        hrefAnchor={`#${kebabCase(label)}`}
        weight={'bold'}
        color={'textPrimary'}
        bottomSpace={'medium'}
        topSpace={'big'}
        display={'inline-block'}
      >
        {label}
      </Text>
      <Grid container spacing={2}>
        {examples.map(({ render, code, gridItemProps }, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            {...gridItemProps}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              py={1}
              px={2}
              borderRadius={4}
              mb={1}
              {...Box.justifyCenterColumn}
            >
              {render()}
            </Box>
            <CodeHighlight flexGrow={1} code={code} />
          </Grid>
        ))}
      </Grid>
    </>
  );
  return (
    <Box
      width={'100%'}
      p={{
        xs: 2,
        sm: 4,
      }}
    >
      <Text
        id={'predefined-button'}
        anchor={<Icon>far fa-link</Icon>}
        hrefAnchor={'#predefined-button'}
        variant={'h4'}
        weight={'bold'}
        color={'textPrimary'}
        gutterBottom
      >
        Predefined Typography <code>v1.3</code>
      </Text>
      <Box my={1}>
        <Text variant={'caption'} align={'left'} gutterBottom>
          <b>Last Updated 1 Jun 2019</b>
        </Text>
      </Box>
      <Text gutterBottom>
        The extended version of Material-UI Typography. Look at examples below
        and you will understand why this exist! With pure Material-UI
        Typography, you have to spend hours all these examples.
      </Text>
      <Text variant={'h6'}>How to use</Text>
      <Text component={'div'}>
        <ol>
          <li>
            <code>yarn add @material-ui/core clsx</code>{' '}
            <Copier.Text text={'yarn add @material-ui/core clsx'} />
          </li>
          <li>
            <Text
              link
              href={
                'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fcode%2FTypography.js?alt=media'
              }
              rel={'noopener'}
              target={'_blank'}
            >
              Download Typography File
            </Text>{' '}
            and put it in your project.{' '}
            <Text component={'span'} color={'hint'}>
              ({"don't"} worry, no spam, just a React component)
            </Text>
          </li>
          <li>
            Look at component propTypes, adjust default props to suit your
            project.
            <Text gutterBottom />
            <CodeHighlight code={exampleCode} />
          </li>
        </ol>
      </Text>
      <ThemeProvider theme={createMuiTheme(globalTheme)}>
        {renderExamples('Basic Examples', basicExamples)}
        <Box py={2} />
        {renderExamples('Advanced Examples', advancedExamples)}
      </ThemeProvider>
    </Box>
  );
};

TypographyPage.propTypes = {
  globalTheme: PropTypes.shape({}).isRequired,
};

export default TypographyPage;
