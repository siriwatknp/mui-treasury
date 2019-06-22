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

SearchInput.getTheme = ({ spacing, palette }) => {
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

export default SearchInput;
