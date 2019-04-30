import React from 'react';
import Button from 'components/predefined/Button';
import Icon from 'components/predefined/Icon';

const props1 = {
  variant: 'contained',
  color: 'danger',
  icon: <Icon>delete</Icon>,
  shadowless: true,
  children: 'Delete',
};
const props2 = {
  shape: 'chubby',
  variant: 'contained',
  color: 'primary',
  icon: 'fab fa-facebook-f',
  iconProps: {
    bgColor: 'white',
    shape: 'circular',
    color: 'primary',
  },
  children: 'Sign in with Facebook',
};
const props3 = {
  fullWidth: true,
  labelExpanded: true,
  shape: 'square',
  variant: 'outlined',
  color: 'primary',
  icon: 'fab fa-twitter',
  iconProps: {
    shape: 'circular',
    color: 'primary',
    size: 'big',
  },
  children: 'Twitter sign in',
};
export default [
  {
    render: () => (
      <>
        <Button size={'small'} {...props1} />
        <br />
        <br />
        <Button {...props1} />
        <br />
        <br />
        <Button size={'big'} {...props1} />
      </>
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
      <>
        <Button size={'small'} {...props2} />
        <br />
        <br />
        <Button {...props2} />
        <br />
        <br />
        <Button size={'big'} {...props2} />
      </>
    ),
    code: `
  import Button from 'path/to/Button';
  
  <Button
    shape={'chubby'}
    variant={'contained'}
    color={'primary'}
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
      <>
        <Button {...props3} size={'small'} />
        <br />
        <br />
        <Button {...props3} />
        <br />
        <br />
        <Button {...props3} size={'big'} />
      </>
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
    iconProps={{
      color: 'primary',
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
