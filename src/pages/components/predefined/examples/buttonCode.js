const invertedIconButton = `
  import Button from 'path/to/Button';
  import Icon from 'path/to/Icon';
  // look at the icon page
  
  <Button
    inverted
    color={'primary'} // 'secondary', 'danger'
    shape={'square'}
    icon={
      <Icon>sim_card</Icon>
    }
  />
`;

const squareIconButton = `
  import Button from 'path/to/Button';
  import Icon from 'path/to/Icon';
  // look at the icon page
  
  <Button
    color={'primary'} // 'secondary', 'danger'
    shape={'square'}
    icon={
      <Icon>camera_alt</Icon>
    }
  />
`;

const circularIconButton = `
  import Button from 'path/to/Button';
  import Icon from 'path/to/Icon';
  // If you want to fully control by "Icon" props
  // set iconIsolated={true}
  // add any prop that "Icon" support
  
  <Button
    color={'primary'} // 'secondary', 'danger'
    shape={'circular'}
    variant={'contained'}
    iconIsolated
    icon={
      <Icon
        size={'small'} // 'big' | 'large'
        inverted
      >
        far fa-rocket
      </Icon>
    }
  />
`;

const outlineIconButton = `
  import Button from 'path/to/Button';
  import Icon from 'path/to/Icon';
  // look at the icon page
  
  <Button
    color={'primary'} // 'secondary', 'danger'
    shape={'circular'}
    variant={'outlined'}
    icon={
      <Icon>camera_alt</Icon>
    }
  />
`;

const deleteButton = `
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
`;

const facebookButton = `
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
`;

const paypalButton = `
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
    Pay with Paypal
  </Button>
`;

const twitterButton = `
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
`;

const loadingButton = `
  import Button from 'path/to/Button';
  
  <Button
    loading
    variant={'contained'}
    color={'secondary'}
  >
    Loading...
  </Button>
`;

export default {
  invertedIconButton,
  squareIconButton,
  circularIconButton,
  outlineIconButton,
  deleteButton,
  facebookButton,
  paypalButton,
  twitterButton,
  loadingButton,
};
