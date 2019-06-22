/* eslint-disable react/prop-types */
import React from 'react';
import Color from 'color';
import InputBase from '@material-ui/core/InputBase';

export const getTheme = ({ palette, transitions }) => {
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
              boxShadow: `0 0 0 0.2rem ${Color(normalColor).fade(0.75)}`,
            },
          },
          '&.BootstrapInput-valid': {
            '& .BootstrapInput-input': {
              borderColor: `${validColor} !important`,
              '&:focus': {
                boxShadow: `0 0 0 0.2rem ${Color(validColor).fade(0.75)}`,
              },
            },
          },
          '&.BootstrapInput-error': {
            '& .BootstrapInput-input': {
              borderColor: `${errorColor} !important`,
              '&:focus': {
                boxShadow: `0 0 0 0.2rem ${Color(errorColor).fade(0.75)}`,
              },
            },
          },
        },
      },
    },
  };
};

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

BootstrapInput.getTheme = getTheme;

export default BootstrapInput;
