/* eslint-disable */
import React from 'react';
import SearchInput from 'components/inputs/SearchInput';
import CONSTANT from 'constant';

const demoCode = `
  import React from "react";
  import { createMuiTheme } from "@material-ui/core";
  import { ThemeProvider } from "@material-ui/styles";
  import SearchInput from './SearchInput';
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
      <SearchInput />
    </ThemeProvider>
  )
  
  export default Demo
`;

const theme = `
  export default ({ spacing, palette }) => {
    // ATTENTION!
    // you can customize some important variables here!!
    const backgroundColor = palette.grey[100];
    const space = spacing(1); // default = 8;
    const borderRadius = 0;
    const iconColor = palette.grey[500];
    // end of variables
    return {
      MuiInputBase: {
        root: {
          '&.SearchInput-root': {
            backgroundColor,
            borderRadius,
            padding: \`\${space}px \${space * 2}px\`,
            '& .material-icons': {
              fontSize: 20,
              color: iconColor,
              '&:first-child': {
                marginRight: space,
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
  import InputBase from '@material-ui/core/InputBase';
  import Icon from '@material-ui/core/Icon';
  
  const SearchInput = props => (
    <InputBase
      className={'SearchInput-root'}
      placeholder={'Search...'}
      startAdornment={<Icon>search</Icon>}
      {...props}
    />
  );
  
  export default SearchInput;

`;

SearchInput.codeSandbox = 'https://codesandbox.io/s/nkp97k1mrp';
SearchInput.info = {
  name: 'Search Input', // mandatory
  description: 'Trust me! you will need it somewhere', // optional
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
      label: 'SearchInput.js',
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

export default SearchInput;
