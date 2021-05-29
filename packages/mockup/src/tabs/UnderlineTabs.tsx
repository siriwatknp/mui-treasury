import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";

export const UnderlineTabs = styled(Tabs)(({ theme }) => ({
  "&:before": {
    content: '""',
    display: "block",
    height: "1px",
    backgroundColor: theme.palette.grey[200],
    left: 0,
    bottom: 0,
    width: "100%",
    position: "absolute",
  },
  "& .MuiTab-root": {
    textTransform: "none",
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "&:first-of-type": {
      marginLeft: 0,
    },
    "&:last-of-type": {
      marginRight: 0,
    },
  },
}));
