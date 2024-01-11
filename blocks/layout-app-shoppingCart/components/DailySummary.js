import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const ButtonBtn = styled(Button)(({ theme: { palette, breakpoints } }) => ({
  width: "100%",
  paddingTop: 16,
  paddingBottom: 16,
  borderRadius: 40,
  border: "1px solid",
  borderColor: palette.grey[400],

  "& > *": {
    fontWeight: "bold",
    textTransform: "none",
  },

  marginRight: 72,

  [breakpoints.up("sm")]: {
    marginRight: "unset",
  },
}));

const BBig = styled("b")(() => ({
  fontSize: 16,
}));

const BoxBig = styled(Box)(() => ({
  fontSize: 16,
}));

const BoxLarge = styled(Box)(() => ({
  fontSize: 24,
}));

const GridMainGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
  [breakpoints.up("sm")]: {
    flexDirection: "row-reverse",
  },
}));

const DailySummary = () => {
  return (
    <GridMainGrid container justify={"space-between"} spacing={2}>
      <Grid item xs={12} sm={5} md={4}>
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <Box align={"right"}>
              <BBig>Subtotal:</BBig>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <BoxBig px={2} align={"right"}>
              <span>$149.96</span>
            </BoxBig>
          </Grid>
          <Grid item xs={5}>
            <Box align={"right"}>
              <BBig>Shipping:</BBig>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <BoxBig px={2} align={"right"}>
              <span>$0</span>
            </BoxBig>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <Box align={"right"}>
              <BBig>Total:</BBig>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <BoxLarge px={2} align={"right"}>
              <span>$149.96</span>
            </BoxLarge>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={5} md={4} container alignItems={"flex-end"}>
        <ButtonBtn startIcon={<KeyboardArrowLeft />}>
          Continue Shopping
        </ButtonBtn>
      </Grid>
    </GridMainGrid>
  );
};

export default DailySummary;
