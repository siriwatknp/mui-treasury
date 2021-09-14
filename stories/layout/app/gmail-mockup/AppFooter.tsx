import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";

const useTextStyles = makeStyles({
  root: {
    fontSize: 12,
    color: "#666",
  },
});

const AppFooter = () => {
  const classes = useTextStyles();
  return (
    <Box px={"1rem"} my={"1rem"}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Typography classes={classes}>
            47.43 GB (47%) of 100 GB used
          </Typography>
          <Link classes={classes}>Manage</Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box textAlign="center" color="#666">
            <Link classes={classes}>Terms</Link> •{" "}
            <Link classes={classes}>Privacy</Link> •{" "}
            <Link classes={classes}>Program Policies</Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box textAlign="right">
            <Typography classes={classes}>
              Last account activity: 22 minutes ago
            </Typography>
            <Link classes={classes}>Details</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppFooter;
