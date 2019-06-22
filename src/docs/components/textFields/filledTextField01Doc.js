/* eslint-disable */
import React from 'react';
import FilledTextField01 from 'components/textFields/FilledTextField01';
import CONSTANT from 'constant';

const demoCode = `
  import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import FilledTextField01 from './FilledTextField01';
  import createOverrides from './theme';
  
  const baseTheme = createMuiTheme();
  
  const Demo = () => (
    // Normally, you need just one <ThemeProvider /> at root component
    <ThemeProvider
      theme={{
        ...baseTheme,
        overrides: createOverrides(baseTheme)
      }}
    >
      <FilledTextField01 />
    </ThemeProvider>
  )
  
  export default Demo
`;

const theme = `
  ({ spacing }) => {
    const space = spacing(1); // default = 8;
    return {
      MuiFilledInput: {
        root: {
          borderRadius: space / 2,
          backgroundColor: 'rgba(0,0,0,0.04)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.08)',
          },
        },
        error: {
          backgroundColor: '#fff5f5',
          '&:hover': {
            backgroundColor: '#ffecec',
          },
          '&$focused': {
            backgroundColor: '#ffecec',
          },
        },
      },
      MuiFormHelperText: {
        root: {
          lineHeight: '2em',
        },
        contained: {
          marginTop: space / 4,
        },
      },
    };
  };
`;

const coreCode = `
  import React from 'react';
  import TextField from '@material-ui/core/TextField';
  
  const FilledTextField01 = props => (
    <div>
      <TextField
        variant={'filled'}
        fullWidth
        InputProps={{
          disableUnderline: true,
        }}
        label={'Label'}
        placeholder={'Username'}
        helperText={'Helper Text'}
        {...props}
      />
      <div style={{ paddingBottom: 12 }} />
      <TextField
        variant={'filled'}
        error
        fullWidth
        InputProps={{
          disableUnderline: true,
        }}
        label={'Label'}
        placeholder={'Username'}
        helperText={'Helper Text'}
        {...props}
      />
    </div>
  );
  
  export default FilledTextField01;

`;

FilledTextField01.codeSandbox = 'https://codesandbox.io/s/jlp9jxoqy';
FilledTextField01.info = {
  name: 'Filled TextField I',
  description: 'Custom Filled Variant No.1',
  sandboxTemplateUrl: CONSTANT.sandBoxThemeTemplate,
  links: [
    {
      label: 'Official Examples',
      url: 'https://material-ui.com/components/text-fields/',
    },
    {
      label: 'TextField API',
      url: 'https://material-ui.com/api/text-field',
    },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'FilledTextField01.js',
      code: coreCode,
    },
    {
      label: 'theme.js',
      code: theme,
    },
  ],
  libraries: [],
  dependencies: [],
};

export default FilledTextField01;
