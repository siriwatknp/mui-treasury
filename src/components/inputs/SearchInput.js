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

SearchInput.metadata = {
  name: 'Search Input', // mandatory
  description: 'Trust me! you will need it somewhere', // optional
};
SearchInput.getTheme = muiBaseTheme => {
  // ATTENTION!
  // you can customize some important variables here!!
  const backgroundColor = muiBaseTheme.palette.grey[100];
  const space = muiBaseTheme.spacing(1); // default = 8;
  const borderRadius = 0;
  const iconColor = muiBaseTheme.palette.grey[500];
  // end of variables
  return {
    MuiInputBase: {
      root: {
        '&.SearchInput-root': {
          backgroundColor,
          borderRadius,
          padding: `${space}px ${space * 2}px`,
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
SearchInput.codeSandbox = 'https://codesandbox.io/s/nkp97k1mrp';

export default SearchInput;
