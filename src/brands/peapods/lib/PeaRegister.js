/* eslint-disable max-len,jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';

import image from './assets/register-poster.png';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    '& .PeaRegister-title': {
      color: palette.secondary.main,
      fontWeight: 800,
      marginBottom: 16,
    },
    '& .MuiCard-root': {
      outline: 'none',
      width: 343,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '& .MuiCardMedia-root': {
      paddingTop: '56.25%',
    },
    '& .MuiCardContent-root': {
      textAlign: 'center',
    },
    '& .MuiCardActions-root': {
      padding: 16,
      borderTop: `1px solid ${palette.grey[200]}`,
      justifyContent: 'center',
    },
    '& .IconButton-google': {
      marginLeft: 16,
      padding: 8,
      border: `1px solid ${palette.grey[300]}`,
      '& img': {
        width: 25,
        height: 25,
      },
    },
    '& .PeaRegister-emailRegister': {
      color: palette.grey[500],
      fontWeight: 'bold',
      cursor: 'pointer',
      '&:hover': {
        color: palette.secondary.main,
      },
    },
    '& .PeaRegister-login': {
      fontWeight: 'bold',
      '& a': {
        color: palette.secondary.main,
        cursor: 'pointer',
      },
    },
  },
}));

const PeaRegister = ({
  open,
  onClose,
  onClickFacebook,
  onClickGoogle,
  onRegisterEmail,
  onLogin,
}) => {
  const classes = useStyles();
  return (
    <Modal className={classes.root} open={open} onClose={onClose}>
      <Card className={'MuiCard-root'} elevation={8}>
        <CardMedia className={'MuiCardMedia-root'} image={image} />
        <CardContent className={'MuiCardContent-root'}>
          <Box py={1}>
            <Typography variant={'h5'} className={'PeaRegister-title'}>
              Peapods
            </Typography>
          </Box>
          <Box display={'flex'} px={0.5} pb={3}>
            <PeaButton
              fullWidth
              labelExpanded
              variant={'contained'}
              color={'primary'}
              icon={
                <PeaIcon
                  icon={'fab fa-facebook-f'}
                  color={'secondary'}
                  bgColor={'white'}
                />
              }
              onClick={onClickFacebook}
            >
              Register with Facebook
            </PeaButton>
            <IconButton
              style={{ width: 45 }}
              className={'IconButton-google'}
              onClick={onClickGoogle}
            >
              <img
                alt={'google'}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                }
              />
            </IconButton>
          </Box>
          <Typography className={'PeaRegister-emailRegister'}>
            <Link
              component={'button'}
              onClick={onRegisterEmail}
              variant={'subtitle1'}
            >
              Or Register with Email
            </Link>
          </Typography>
        </CardContent>
        <CardActions className={'MuiCardActions-root'}>
          <Typography className={'PeaRegister-login'}>
            <span>Already a member?</span>{' '}
            <Link component={'button'} onClick={onLogin} variant={'subtitle1'}>
              Log in
            </Link>
          </Typography>
        </CardActions>
      </Card>
    </Modal>
  );
};

PeaRegister.metadata = {
  name: 'Pea Register',
};
PeaRegister.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickFacebook: PropTypes.func.isRequired,
  onClickGoogle: PropTypes.func.isRequired,
  onRegisterEmail: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default PeaRegister;
