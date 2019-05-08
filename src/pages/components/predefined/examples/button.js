import React from 'react';
import Button from 'components/predefined/Button';
import Icon from 'components/predefined/Icon';

const sizes = ['small', '', 'big', 'large'];
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
  children: 'Facebook sign in',
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
const colors = {
  small: 'primary',
  big: 'secondary',
  large: 'danger',
};
export default [
  {
    render: () =>
      sizes.map(s => (
        <Button
          key={s}
          size={s}
          color={colors[s]}
          shape={'circular'}
          icon={<Icon>camera_alt</Icon>}
        >
          button
        </Button>
      )),
    code: `
  import Button from 'path/to/Button';
  import Icon from 'path/to/Icon';
  // look at the icon page
  
  <Button
    shape={'circular'}
    icon={
      <Icon>camera_alt</Icon>
    }
  >
    Button
  </Button>
    `,
  },
  {
    render: () =>
      sizes.map(s => (
        <Button
          key={s}
          size={s}
          color={colors[s]}
          shape={'circular'}
          variant={'contained'}
          iconIsolated
          icon={
            <Icon size={s} inverted>
              far fa-rocket
            </Icon>
          }
        >
          button
        </Button>
      )),
    code: `
  import Button from 'path/to/Button';
  import Icon from 'path/to/Icon';
  // If you want to fully control by "Icon" props
  // set iconIsolated={true}
  // add any prop that "Icon" support
  
  <Button
    shape={'circular'}
    variant={'contained'}
    iconIsolated
    icon={
      <Icon size={'small' | "" | 'big' | 'large'} inverted>far fa-rocket</Icon>
    }
  >
    Button
  </Button>
    `,
  },
  {
    render: () =>
      sizes.map(s => (
        <Button
          key={s}
          size={s}
          color={colors[s]}
          shape={'circular'}
          variant={'outlined'}
          icon={<Icon>camera</Icon>}
        >
          button
        </Button>
      )),
    code: `
  import Button from 'path/to/Button';
  import Icon from 'path/to/Icon';
  // look at the icon page
  
  <Button
    shape={'circular'}
    variant={'outlined'}
    icon={
      <Icon>camera_alt</Icon>
    }
  >
    Button
  </Button>
    `,
  },
  {
    render: () =>
      sizes.map((s, i) => (
        <div key={s}>
          <Button size={s} {...props1} />
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
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
    render: () =>
      sizes.map((s, i) => (
        <div key={s}>
          <Button size={s} {...props2} />
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
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
    render: () =>
      sizes.map((s, i) => (
        <div key={s}>
          <Button
            {...props2}
            fullWidth
            size={s}
            labelExpanded
            color={''}
            icon={'fab fa-paypal'}
          >
            Paypal Checkout
          </Button>
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
    code: `
  import Button from 'path/to/Button';
  
  <Button
    shape={'chubby'}
    variant={'contained'}
    color={'primary'}
    icon={'fab fa-paypal'}
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
    render: () =>
      sizes.map((s, i) => (
        <div key={s}>
          <Button size={s} {...props3} />
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
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
    render: () =>
      sizes.map((s, i) => (
        <div key={s}>
          <Button size={s} loading variant={'contained'} color={'secondary'}>
            Loading...
          </Button>
          <br />
          {i < sizes.length - 1 && <br />}
        </div>
      )),
    code: `
  import Button from 'path/to/Button';
  
  <Button
    loading
    variant={'contained'}
    color={'secondary'}
  >
    Loading...
  </Button>
    `,
  },
];
