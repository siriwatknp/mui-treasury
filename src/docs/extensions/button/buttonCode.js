const invertedIconButton = `
 
  <Button
    inverted
    color={'primary'} // 'secondary', 'danger'
    shape={'square'}
    // seamlessly integrate with "Extended Icon"
    icon={
      <Icon>sim_card</Icon>
    }
  />

`;

const squareIconButton = `

  <Button
    color={'primary'} // 'secondary', 'danger'
    shape={'square'}
    // seamlessly integrate with "Extended Icon"
    icon={
      <Icon>camera_alt</Icon>
    }
  />
  
`;

const circularIconButton = `

  <Button
    color={'primary'} // 'secondary', 'danger'
    shape={'circular'}
    variant={'contained'}
    // If you want to fully control "Icon" props
    // set iconIsolated={true}
    // add any prop that "Icon" support
    iconIsolated
    // seamlessly integrate with "Extended Icon"
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
  
  <Button
    color={'primary'} // 'secondary', 'danger'
    shape={'circular'}
    variant={'outlined'}
    // seamlessly integrate with "Extended Icon"
    icon={
      <Icon>camera_alt</Icon>
    }
  />
  
`;

const deletedButton = `
  
  <Button
    variant={'contained'}
    color={'danger'}
    // seamlessly integrate with "Extended Icon"
    icon={<Icon>delete</Icon>}
    shadowless
  >
    Delete
  </Button>
  
`;

const facebookButton = `
  
  <Button
    shape={'chubby'}
    variant={'contained'}
    color={'primary'}
    // seamlessly integrate with "Extended Icon"
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
  
  <Button
    shape={'chubby'}
    variant={'contained'}
    color={'primary'}
    // seamlessly integrate with "Extended Icon"
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
  
  <Button
    fullWidth
    labelExpanded
    shape={'square'}
    variant={'outlined'}
    color={'primary'}
    // seamlessly integrate with "Extended Icon"
    icon={'fab fa-twitter'}
    iconProps={{
      color: 'primary',
    }}
  >
    Twitter
  </Button>
  
`;

const loadingButton = `
  
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
  deletedButton,
  facebookButton,
  paypalButton,
  twitterButton,
  loadingButton,
};
