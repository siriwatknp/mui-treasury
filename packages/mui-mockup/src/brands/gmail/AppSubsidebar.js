import React from "react";
import { Box, IconButton, Grid, Avatar } from "@material-ui/core";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import Add from '@material-ui/icons/Add'

const AppSubSidebar = () => {
  const actionStyles = useSizedIconButtonStyles({ childSize: 20, padding: 10 });
  return (
    <Box p={1}>
      <Grid container spacing={2}>
        <Grid item>
          <IconButton classes={actionStyles}>
            <Avatar src="https://www.gstatic.com/companion/icon_assets/calendar_2x.png" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton classes={actionStyles}>
            <Avatar src="https://www.gstatic.com/companion/icon_assets/keep_2x.png" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton classes={actionStyles}>
            <Avatar src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png" />
          </IconButton>
        </Grid>
        <Box borderTop="1px solid #dadce0" my={2} mx="auto" width={20} />
        <Grid item>
          <IconButton classes={actionStyles}>
            <Add />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppSubSidebar;
