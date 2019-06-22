/* eslint-disable */
import React from 'react';
import BootstrapInput from 'components/inputs/BootstrapInput';
import CONSTANT from 'constant';

const demoCode = `
  import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import BootstrapInput from './BootstrapInput';
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
      <BootstrapInput />
    </ThemeProvider>
  )
  
  export default Demo
`;

const theme = `
  export default ({ palette, transitions }) => {
    const { white } = palette.common;
    const inputRadius = 4;
    const borderWidth = 1;
    const inputPadding = '10px 12px';
    const fontFamily = [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',');
    const borderColor = '#ced4da';
    // you can change normal color to primary using
    // palette.primary.main
    const normalColor = '#80bdff';
    const validColor = '#28a745';
    const errorColor = '#dc3545';
    return {
      MuiInputBase: {
        root: {
          '&.BootstrapInput-root': {
            '& .BootstrapInput-input': {
              borderRadius: inputRadius,
              position: 'relative',
              backgroundColor: white,
              borderWidth,
              borderStyle: 'solid',
              borderColor,
              fontSize: 16,
              width: 'auto',
              padding: inputPadding,
              transition: transitions.create(['border-color', 'box-shadow']),
              // Use the system font instead of the default Roboto font.
              fontFamily,
              '&:focus': {
                borderRadius: inputRadius,
                borderColor: validColor,
                boxShadow: \`0 0 0 0.2rem \${Color(normalColor).fade(0.75)}\`,
              },
            },
            '&.BootstrapInput-valid': {
              '& .BootstrapInput-input': {
                borderColor: \`\${validColor} !important\`,
                '&:focus': {
                  boxShadow: \`0 0 0 0.2rem \${Color(validColor).fade(0.75)}\`,
                },
              },
            },
            '&.BootstrapInput-error': {
              '& .BootstrapInput-input': {
                borderColor: \`\${errorColor} !important\`,
                '&:focus': {
                  boxShadow: \`0 0 0 0.2rem \${Color(errorColor).fade(0.75)}\`,
                },
              },
            },
          },
        },
      },
    };
  };
`;

const coreCode = `
  import React from 'react';
  import Color from 'color';
  import InputBase from '@material-ui/core/InputBase';
  
  const BootstrapInput = ({ classes, ...props }) => (
    <div>
      <InputBase
        classes={{
          root: 'BootstrapInput-root',
          input: 'BootstrapInput-input',
          ...classes,
        }}
        placeholder={'Username'}
        {...props}
      />
      <div style={{ paddingBottom: 8 }} />
      <InputBase
        classes={{
          root: 'BootstrapInput-root BootstrapInput-error',
          input: 'BootstrapInput-input',
          ...classes,
        }}
        placeholder={'Username'}
        {...props}
      />
      <div style={{ paddingBottom: 8 }} />
      <InputBase
        classes={{
          root: 'BootstrapInput-root BootstrapInput-valid',
          input: 'BootstrapInput-input',
          ...classes,
        }}
        placeholder={'Username'}
        {...props}
      />
    </div>
  );
  
  export default BootstrapInput;

`;

BootstrapInput.codeSandbox = 'https://codesandbox.io/s/52x3p8rk3n';
BootstrapInput.info = {
  name: 'Bootstrap Input',
  description: 'Implement Bootstrap Input',
  sandboxTemplateUrl: CONSTANT.sandBoxThemeTemplate,
  links: [
    {
      label: 'Official Examples',
      url: 'https://material-ui.com/components/text-fields/',
    },
    {
      label: 'Input API',
      url: 'https://material-ui.com/api/input-base/#inputbase-api',
    },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'BootstrapInput.js',
      code: coreCode,
    },
    {
      label: 'theme.js',
      code: theme,
    },
  ],
  libraries: [CONSTANT.libraries.color],
  dependencies: [],
};

export default BootstrapInput;
