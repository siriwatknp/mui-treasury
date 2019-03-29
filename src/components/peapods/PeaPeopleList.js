/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PeaPersonListItem from './PeaPersonListItem';

const PeaPeopleList = ({ people }) => (
  <Paper className={'MuiPaper--overflowHidden'}>
    <List
      subheader={
        <ListSubheader className={'MuiListSubheader--stretch'} disableSticky>
          <Typography variant={'body1'}>People to follow</Typography>
          <Typography>
            <Link color={'secondary'}>See all</Link>
          </Typography>
        </ListSubheader>
      }
    >
      {people.map((person, index) => (
        <React.Fragment key={person.name}>
          <PeaPersonListItem {...person} />
          {index !== people.length - 1 && (
            <Divider light variant={'fullWidth'} />
          )}
        </React.Fragment>
      ))}
    </List>
  </Paper>
);

PeaPeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({})),
};
PeaPeopleList.defaultProps = {
  people: [],
};
PeaPeopleList.metadata = {
  name: 'Pea People List',
};
PeaPeopleList.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaPeopleList;
