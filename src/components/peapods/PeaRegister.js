/* eslint-disable max-len,jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { unstable_Box as Box } from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';

import image from './assets/register-poster.png';

const PeaRegister = ({ open, onClose }) => (
  <Modal className={'PeaRegister'} open={open} onClose={onClose}>
    <Card className={'MuiCard-root'} elevation={8}>
      <CardMedia className={'MuiCardMedia-root'} image={image} />
      <CardContent className={'MuiCardContent-root'}>
        <Box py={1}>
          <Typography variant={'h5'} className={'PeaRegister-title'}>
            Peapods
          </Typography>
        </Box>
        <Box display={'flex'} px={0.5} pb={3}>
          <PeaButton variant={'contained'} color={'primary'} fullWidth>
            <PeaIcon icon={'fab fa-facebook-f'} bgColor={'white'} circular />
            <span>Register with Facebook</span>
          </PeaButton>
          <IconButton className={'IconButton-google'}>
            <img
              alt={'google'}
              src={
                'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              }
            />
          </IconButton>
        </Box>
        <Typography className={'PeaRegister-emailRegister'} component={'a'}>
          Or Register with Email
        </Typography>
      </CardContent>
      <CardActions className={'MuiCardActions-root'}>
        <Typography className={'PeaRegister-login'}>
          <span>Already a member?</span> <a href={'#'}>Log in</a>
        </Typography>
      </CardActions>
    </Card>
  </Modal>
);

PeaRegister.metadata = {
  name: 'Pea Register',
};
PeaRegister.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PeaRegister;
