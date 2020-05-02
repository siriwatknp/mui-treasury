import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(({ palette }) => ({
  avatar: {
    backgroundColor: palette.primary.main,
  },
  action: {
    marginLeft: 8,
  },
}));

const OfficialCardHeader = () => {
  const classes = useStyles();
  return (
    <CardHeader
      classes={{
        action: classes.action,
      }}
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
  );
};

// hide-start
OfficialCardHeader.metadata = {
  title: 'Official',
  path: 'styles/cardHeader/official',
  creators: [require('constants/creators').siriwatknp],
  relates: [
    {
      label: 'Official Demo',
      url: 'https://material-ui.com/components/cards/#complex-interaction',
    },
    { label: 'Official API', url: 'https://material-ui.com/api/card-header/' },
  ],
};
// hide-end

export default OfficialCardHeader;
