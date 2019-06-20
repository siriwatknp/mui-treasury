import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: theme.palette.primary.main,
  },
  list: {
    padding: theme.spacing(2, 1, 1),
  },
  link: {
    cursor: 'pointer',
  },
}));

const PeaTrendingHashtagList = ({ className, tags }) => {
  const classes = useStyles();
  return (
    <Paper className={cx('MuiPaper--overflowHidden', className)}>
      <List
        className={classes.list}
        subheader={
          <ListSubheader className="MuiListSubheader--stretch">
            <Typography color="primary" variant="h6">
              Trending
            </Typography>
          </ListSubheader>
        }
      >
        {tags.map(tag => (
          <ListItem key={tag.name}>
            <ListItemText
              secondary={
                <Typography color="textSecondary" variant="subtitle2">
                  <strong>{`${tag.podCount}`}</strong> Pods
                </Typography>
              }
            >
              <Link
                className={classes.link}
                href={tag.linkto}
                underline="none"
                variant="body1"
              >
                {`#${tag.name}`}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

PeaTrendingHashtagList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      linkTo: PropTypes.string,
      podCount: PropTypes.number,
    }),
  ),
};

PeaTrendingHashtagList.defaultProps = {
  className: '',
  tags: [],
};

PeaTrendingHashtagList.metadata = {
  name: 'Pea Trending Hashtag List',
};

PeaTrendingHashtagList.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaTrendingHashtagList;
