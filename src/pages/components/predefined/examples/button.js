import React from 'react';
import Button from 'components/predefined/Button';
import Icon from 'components/predefined/Icon';

export default [
  {
    render: () => (
      <Button
        variant={'contained'}
        color={'danger'}
        icon={<Icon>delete</Icon>}
        shadowless
      >
        Delete
      </Button>
    ),
    code: `
  import Button from 'path/to/Button';
  import Icon from 'path/to/Icon';
  // look at the icon page
  
  <Button
    variant={'contained'}
    color={'danger'}
    icon={<Icon>delete</Icon>}
    shadowless
  >
    Delete
  </Button>
    `,
  },
  {
    render: () => (
      <Button
        shape={'chubby'}
        variant={'contained'}
        color={'primary'}
        size={'big'}
        icon={'fab fa-facebook-f'}
        iconProps={{
          bgColor: 'white',
          shape: 'circular',
          color: 'primary',
        }}
      >
        Sign in with Facebook
      </Button>
    ),
    code: `
  import Button from 'path/to/Button';
  
  <Button
    shape={'chubby'}
    variant={'contained'}
    color={'primary'}
    size={'big'}
    icon={'fab fa-facebook-f'}
    iconProps={{
      bgColor: 'white',
      shape: 'circular',
      color: 'primary',
    }}
  >
    Sign in with Facebook
  </Button>
    `,
  },
  {
    render: () => (
      <Button
        fullWidth
        labelExpanded
        shape={'square'}
        variant={'outlined'}
        color={'primary'}
        icon={'fab fa-twitter'}
        iconIsolated
        iconProps={{
          shape: 'circular',
          color: 'primary',
          size: 'big',
        }}
      >
        Twitter
      </Button>
    ),
    code: `
  import Button from 'path/to/Button';
  
  <Button
    fullWidth
    labelExpanded
    shape={'square'}
    variant={'outlined'}
    color={'primary'}
    icon={'fab fa-twitter'}
    iconIsolated
    iconProps={{
      shape: 'circular',
      color: 'primary',
      size: 'big',
    }}
  >
    Twitter
  </Button>
    `,
  },
  {
    render: () => (
      <Button loading variant={'contained'} color={'secondary'} size={'big'}>
        Loading...
      </Button>
    ),
    code: `
  import Button from 'path/to/Button';
  
  <Button
    loading
    variant={'contained'}
    color={'secondary'}
    size={'big'}
  >
    Loading...
  </Button>
    `,
  },
];
