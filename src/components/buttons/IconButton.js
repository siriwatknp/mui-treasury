/* eslint-disable max-len */
import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export const getTheme = muiBaseTheme => ({
  MuiButton: {
    root: {
      '& svg, .material-icons': {
        marginRight: muiBaseTheme.spacing.unit,
        fontSize: 20,
      },
    },
  },
});

const IconButton = () => (
  <React.Fragment>
    <Button variant={'contained'}>
      <Icon>add_circle_outlined_rounded</Icon>
      Button
    </Button>
  </React.Fragment>
);

IconButton.getTheme = getTheme;
IconButton.displayName = 'Button';
IconButton.metadata = {
  name: 'Icon',
  description: 'More Meaningful',
};
IconButton.codeSandbox = 'https://codesandbox.io/s/3rq39q531';

export default IconButton;
