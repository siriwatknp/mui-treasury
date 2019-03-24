import Color from 'color';

export default ({
  palette,
  transitions,
  spacing,
  typography,
  secondary,
  red,
}) => {
  const space = spacing.unit; // default = 8;
  const labelColor = secondary.main;
  const { fontFamily } = typography;
  const helperTextColor = '#6c757d';
  const errorColor = '#dc3545';
  const inputFontSize = 16;
  const inputBorderRadius = 4;
  const inputPadding = '10px 12px';
  const helperTextFontSize = 12.8;
  return {
    MuiFormControl: {
      root: {
        '&.PeaFormControl-root': {
          '&.PeaFormControl-error': {
            '& textarea': {
              backgroundColor: Color(red.light)
                .fade(0.87)
                .string(),
            },
            '& .PeaFormLabel-root': {
              color: red.main,
            },
            '& .PeaInput-input': {
              borderColor: `${errorColor} !important`,
            },
            '& .PeaFormHelperText-root': {
              color: errorColor,
            },
          },
          '& label + .PeaInput-formControl': {
            marginTop: space,
            padding: 0,
          },
          '& textarea': {
            width: '100% !important',
          },
          '& .PeaFormLabel-root': {
            position: 'initial',
            textAlign: 'left',
            transform: 'none',
            color: labelColor,
            fontFamily,
          },
          '& .PeaInput-input': {
            borderRadius: inputBorderRadius,
            position: 'relative',
            backgroundColor: palette.grey[100],
            fontSize: inputFontSize,
            width: 'auto',
            padding: inputPadding,
            transition: transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily,
          },
          '& .PeaFormHelperText-root': {
            fontFamily,
            color: helperTextColor,
            lineHeight: '19.2px',
            marginTop: space / 2,
            fontSize: helperTextFontSize,
          },
        },
      },
    },
    MuiInputLabel: {
      root: {
        fontWeight: 500,
      },
      shrink: {
        transform: 'translate(0, 1.5px) scale(0.87)',
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottomWidth: 0,
        },
        '&$error': {
          '&:after': {
            borderBottomWidth: 2,
          },
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: secondary.main,
        },
      },
    },
    MuiFilledInput: {},
  };
};
