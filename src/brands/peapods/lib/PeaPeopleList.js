import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PeaPersonListItem from './PeaPersonListItem';

const PeaPeopleList = ({ people, subHeaderLabel, linkLabel, linkProps }) => (
  <Paper className={'MuiPaper--overflowHidden'}>
    <List
      subheader={
        <ListSubheader className={'MuiListSubheader--stretch'} disableSticky>
          <Typography variant={'body1'}>{subHeaderLabel}</Typography>
          <Typography>
            <Link color={'secondary'} {...linkProps}>
              {linkLabel}
            </Link>
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
  subHeaderLabel: PropTypes.string,
  linkLabel: PropTypes.string,
  linkProps: PropTypes.shape({}),
};
PeaPeopleList.defaultProps = {
  people: [],
  subHeaderLabel: 'People to follow',
  linkLabel: 'See all',
  linkProps: {},
};
PeaPeopleList.metadata = {
  name: 'Pea People List',
};
PeaPeopleList.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaPeopleList;
