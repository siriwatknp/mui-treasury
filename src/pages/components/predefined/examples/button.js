import React from 'react';
import Box from '@material-ui/core/Box';
import Button from 'components/predefined/Button';
import Icon from 'components/predefined/Icon';
import code from './buttonCode';

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
  shape: 'rectangle',
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
    render: () => (
      <Box bgcolor={'grey.700'} borderRadius={4}>
        {sizes.map(s => (
          <Button
            key={s}
            size={s}
            inverted
            shape={'square'}
            color={colors[s]}
            icon={<Icon>sim_card</Icon>}
          />
        ))}
      </Box>
    ),
    code: code.invertedIconButton,
  },
  {
    render: () =>
      sizes.map(s => (
        <Button
          key={s}
          size={s}
          color={colors[s]}
          shape={'square'}
          icon={<Icon>camera_alt</Icon>}
        />
      )),
    code: code.squareIconButton,
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
    code: code.circularIconButton,
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
    code: code.outlineIconButton,
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
    code: code.loadingButton,
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
    code: code.facebookButton,
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
    code: code.paypalButton,
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
    code: code.twitterButton,
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
    code: code.loadingButton,
  },
];
