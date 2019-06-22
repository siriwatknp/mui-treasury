/* eslint-disable */
import React from 'react';
import ChromeInput from 'components/inputs/ChromeInput';
import CONSTANT from 'constant';

const demoCode = `
  import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import ChromeInput from './ChromeInput';
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
      <ChromeInput />
    </ThemeProvider>
  )
  
  export default Demo
`;

const theme = `
  export default ({ spacing }) => {
    const space = spacing(1); // default = 8;
    const backgroundColor = '#F1F3F4';
    const borderRadius = 100; // rounded
    const inputPadding = space / 4;
    return {
      MuiInputBase: {
        root: {
          '&.ChromeInput-root': {
            backgroundColor,
            borderRadius,
            padding: inputPadding,
            '& .MuiIconButton-root': {
              padding: \`\${space / 2}px \${space}px\`,
              borderRadius,
            },
          },
        },
      },
    };
  };
  
`;

const coreCode = `
  import React from 'react';
  import InputBase from '@material-ui/core/InputBase';
  import IconButton from '@material-ui/core/IconButton';
  import Icon from '@material-ui/core/Icon';
  
  const ChromeInput = props => (
    <InputBase
      className={'ChromeInput-root'}
      placeholder={'https://'}
      startAdornment={
        <IconButton className={'MuiIconButton-root'}>
          <Icon>info_outlined</Icon>
        </IconButton>
      }
      endAdornment={
        <IconButton className={'MuiIconButton-root'}>
          <Icon>star_border</Icon>
        </IconButton>
      }
      {...props}
    />
  );
  
  export default ChromeInput;

`;

ChromeInput.codeSandbox = 'https://codesandbox.io/s/w767xq6547';
ChromeInput.info = {
  name: 'Chrome Input',
  description: 'We use it everyday',
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
      label: 'ChromeInput.js',
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

export default ChromeInput;
