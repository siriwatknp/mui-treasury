import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CreditCard from "@mui/icons-material/CreditCard";
import TextField from "@mui/material/TextField";

const BoxRoot = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(45deg, #191D29, #3c5981)",
  borderRadius: 12,
  height: "100%",
  overflow: "auto",

  "& *": {
    color: "#fff",
  },
}));

const TypographyHeading = styled(Typography)(() => ({
  fontWeight: 900,
  fontSize: "2.25rem",
}));

const StyledDivider = styled(Divider)(() => ({
  backgroundColor: "#fff",
  opacity: 0.12,
  margin: "24px 0",
}));

const TypographyLabel = styled(Typography)(() => ({
  fontSize: 12,
  fontWeight: "bold",
  marginBottom: 16,
  opacity: 0.87,
}));

const StyledTextField = styled(TextField)(() => ({
  "& label": {
    color: "#fff",
    opacity: 0.87,
    fontWeight: "bold",
  },
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.38)",
    },
  },
}));

const TextFieldSelect = styled(TextField)(() => ({
  "& label": {
    color: "#fff",
    opacity: 0.4,
  },
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.38)",
    },
  },
}));

const ButtonCheckoutBtn = styled(Button)(() => ({
  marginTop: "auto",
  borderRadius: 40,
  width: "100%",
}));

const DailyCheckout = () => {
  const styles = {
    button: {
      textTransform: "initial",
      minHeight: 48,
      borderRadius: 40,
      borderColor: "rgba(255, 255, 255, 0.12)",
      borderStyle: "solid",
      borderWidth: 1,
      width: "100%",
      color: "#fff",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.12)",
      },
    },
    buttonActive: {
      borderColor: "#fff",
    },
  };
  return (
    <BoxRoot py={3} px={3.5}>
      <TypographyHeading variant={"h1"}>Payment Info.</TypographyHeading>
      <StyledDivider />
      <TypographyLabel>Payment Method:</TypographyLabel>
      <Grid container spacing={2}>
        <Grid xs={6} item>
          <Button
            startIcon={<CreditCard />}
            sx={{
              ...styles.button,
              ...styles.buttonActive,
            }}
          >
            Credit Card
          </Button>
        </Grid>
        <Grid xs={6} item>
          <Button
            sx={{
              ...styles.button,
              ...styles.buttonActive,
              fontSize: 20,
              textTransform: "initial",
              fontStyle: "italic",
              fontFamily:
                "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            PayPal
          </Button>
        </Grid>
      </Grid>
      <StyledDivider />
      <StyledTextField
        fullWidth
        margin="dense"
        label={"Name On Card:"}
        value={"Siriwat Knp"}
      />
      <Box height={24} css={{ flex: "none" }} />
      <StyledTextField
        fullWidth
        margin="dense"
        label={"Card Number:"}
        value={"••••  ••••  ••••  1829"}
      />
      <Box height={24} css={{ flex: "none" }} />
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TypographyLabel>Expiration Date:</TypographyLabel>
          <Box mt={"-23px"}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextFieldSelect
                  select
                  fullWidth
                  InputProps={{
                    classes: { root: styles.inputBase },
                  }}
                  label={"MM"}
                />
              </Grid>
              <Grid item xs={6}>
                <TextFieldSelect
                  select
                  fullWidth
                  InputProps={{
                    classes: { root: styles.inputBase },
                  }}
                  label={"YYYY"}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <StyledTextField
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { root: styles.inputBase, input: styles.input },
            }}
            label={"CCV:"}
            placeholder={"XXX"}
            sx={{ mt: "27px" }}
          />
        </Grid>
      </Grid>
      <Box height={24} css={{ flex: "none" }} />
      <ButtonCheckoutBtn color={"primary"} variant={"contained"}>
        Check Out.
      </ButtonCheckoutBtn>
    </BoxRoot>
  );
};

export default DailyCheckout;
