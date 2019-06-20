import React from 'react';
import Box from '@material-ui/core/Box';
import PeaButton from '../lib/PeaButton';
import PeaIcon from '../lib/PeaIcon';

const Button = () => (
  <Box
    css={{
      '& button': {
        marginTop: 8,
        marginLeft: 8,
      },
    }}
  >
    <PeaButton elongated color={'primary'}>
      Default
    </PeaButton>
    <PeaButton elongated variant={'outlined'} color={'primary'}>
      Outlined
    </PeaButton>
    <PeaButton elongated variant={'contained'} color={'primary'}>
      Contained
    </PeaButton>
    <PeaButton
      elongated
      labelExpanded
      variant={'contained'}
      color={'primary'}
      icon={'add'}
      iconPosition={'end'}
      iconProps={{ bgColor: 'lightPrimary' }}
    >
      Create Event
    </PeaButton>
    <PeaButton
      elongated
      fullWidth
      labelExpanded
      variant={'contained'}
      color={'primary'}
      icon={<PeaIcon icon={'fab fa-facebook-f'} bgColor={'white'} />}
    >
      Register with Facebook
    </PeaButton>
  </Box>
);

Button.code = `
  import PeaButton from '../lib/PeaButton';
  import PeaIcon from '../lib/PeaIcon';
  
  const Preview = () => (
    <>
      <PeaButton elongated color={'primary'}>
        Default
      </PeaButton>
      <PeaButton elongated variant={'outlined'} color={'primary'}>
        Outlined
      </PeaButton>
      <PeaButton elongated variant={'contained'} color={'primary'}>
        Contained
      </PeaButton>
      <PeaButton
        elongated
        labelExpanded
        variant={'contained'}
        color={'primary'}
        icon={'add'}
        iconPosition={'end'}
        iconProps={{ bgColor: 'lightPrimary' }}
      >
        Create Event
      </PeaButton>
      <PeaButton
        elongated
        fullWidth
        labelExpanded
        variant={'contained'}
        color={'primary'}
        icon={<PeaIcon icon={'fab fa-facebook-f'} bgColor={'white'} />}
      >
        Register with Facebook
      </PeaButton>
    </>
  )
`;
Button.metadata = {
  name: 'Pea Button',
};

export default Button;
