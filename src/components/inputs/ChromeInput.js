import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

export const getTheme = ({ spacing }) => {
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
            padding: `${space / 2}px ${space}px`,
            borderRadius,
          },
        },
      },
    },
  };
};

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

ChromeInput.getTheme = getTheme;

export default ChromeInput;
