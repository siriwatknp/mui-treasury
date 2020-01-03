import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CreditCard from '@material-ui/icons/CreditCard';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(45deg, #191D29, #2E3B4D)',
    borderRadius: 12,
    height: '100%',
    '& *': {
      color: '#fff',
    },
  },
  heading: {
    fontWeight: 900,
    fontSize: '2.25rem',
  },
  divider: {
    backgroundColor: '#fff',
    opacity: 0.12,
    margin: '24px 0',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 16,
    opacity: 0.87,
  },
  button: {
    minHeight: 48,
    borderRadius: 40,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
    },
  },
  buttonActive: {
    borderColor: '#fff',
  },
  creditCardLabel: {
    fontSize: 12,
    textTransform: 'initial',
  },
  paypalLabel: {
    fontSize: 20,
    textTransform: 'initial',
    fontStyle: 'italic',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  textField: {
    '& label': {
      opacity: 0.87,
      fontWeight: 'bold',
    },
    '&:hover': {
      '& $inputBase:before': {
        borderColor: 'rgba(255, 255, 255, 0.38)',
      },
    },
  },
  inputBase: {
    '&:before': {
      borderColor: 'rgba(255, 255, 255, 0.12)',
    },
  },
  input: {
    padding: '16px 0',
  },
  select: {
    '& label': {
      opacity: 0.4,
    },
    '&:hover': {
      '& $inputBase:before': {
        borderColor: 'rgba(255, 255, 255, 0.38)',
      },
    },
  },
  checkoutBtn: {
    marginTop: 'auto',
    borderRadius: 40,
    width: '100%',
  },
}));

const DailyCheckout = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root} py={3} px={3.5}>
      <Typography className={styles.heading} variant={'h1'}>
        Payment Info.
      </Typography>
      <Divider className={styles.divider} />
      <Typography className={styles.label}>Payment Method:</Typography>
      <Grid container spacing={2}>
        <Grid xs={6} item>
          <Button
            startIcon={<CreditCard />}
            classes={{
              root: cx(styles.button, styles.buttonActive),
              label: styles.creditCardLabel,
            }}
          >
            Credit Card
          </Button>
        </Grid>
        <Grid xs={6} item>
          <Button classes={{ root: styles.button, label: styles.paypalLabel }}>
            PayPal
          </Button>
        </Grid>
      </Grid>
      <Divider className={styles.divider} />
      <TextField
        className={styles.textField}
        fullWidth
        InputProps={{
          classes: { root: styles.inputBase, input: styles.input },
        }}
        label={'Name On Card:'}
        value={'Siriwat Knp'}
      />
      <Box height={24} />
      <TextField
        className={styles.textField}
        fullWidth
        InputProps={{
          classes: { root: styles.inputBase, input: styles.input },
        }}
        label={'Card Number:'}
        value={'••••  ••••  ••••  1829'}
      />
      <Box height={24} />
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography className={styles.label}>Expiration Date:</Typography>
          <Box mt={'-23px'}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  select
                  className={styles.select}
                  fullWidth
                  InputProps={{
                    classes: { root: styles.inputBase },
                  }}
                  label={'MM'}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  className={styles.select}
                  fullWidth
                  InputProps={{
                    classes: { root: styles.inputBase },
                  }}
                  label={'YYYY'}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={styles.textField}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { root: styles.inputBase, input: styles.input },
            }}
            label={'CCV:'}
            placeholder={'XXX'}
          />
        </Grid>
      </Grid>
      <Box height={24} />
      <Button
        className={styles.checkoutBtn}
        color={'primary'}
        variant={'contained'}
      >
        Check Out.
      </Button>
    </Box>
  );
};

export default DailyCheckout;
