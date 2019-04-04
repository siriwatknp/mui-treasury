import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PeaConfirmation from './PeaConfirmation';
import PeaButton from './PeaButton';
import PeaAvatar from './PeaAvatar';

const PeaInvitationModal = ({ person, pods, onInvite, onClose, ...props }) => (
  <PeaConfirmation
    className={'PeaInvitationModal'}
    title={`Invite ${person}`}
    content={
      <List
        subheader={
          <Typography className={'ListSubheader-typography'}>
            Your pods
          </Typography>
        }
      >
        {pods.map(pod => {
          const { primary, secondary, full, src } = pod;
          return (
            <ListItem key={primary}>
              <PeaAvatar src={src} size={'big'} />
              <ListItemText
                primaryTypographyProps={{ noWrap: true }}
                secondaryTypographyProps={{
                  noWrap: true,
                  className: full ? 'ListItem-secondaryErrorText' : '',
                }}
                primary={primary}
                secondary={secondary}
              />
              <PeaButton
                className={'MuiButton--auto'}
                variant={'contained'}
                color={'primary'}
                onClick={() => onInvite(pod)}
                disabled={full}
              >
                Invite
              </PeaButton>
            </ListItem>
          );
        })}
      </List>
    }
    actions={[
      <Button color={'secondary'} onClick={onClose}>
        Cancel
      </Button>,
    ]}
    onClose={onClose}
    {...props}
  />
);

PeaInvitationModal.metadata = {
  name: 'Pea Invitation Modal',
};
PeaInvitationModal.propTypes = {
  onInvite: PropTypes.func.isRequired,
  person: PropTypes.string.isRequired,
  pods: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PeaInvitationModal;
