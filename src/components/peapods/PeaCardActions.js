import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import PeaIcon from './PeaIcon';

const PeaCardActions = ({ left, right, centered }) => (
  <CardActions
    className={cx(
      'MuiCardActions--primary',
      centered && 'MuiCardActions--centered',
    )}
  >
    {left && <div className={'MuiCardActions-left'}>{left}</div>}
    {right && <div className={'MuiCardActions-right'}>{right}</div>}
  </CardActions>
);

// ----------- SAMPLE COMPONENT --------------- //
// FOR DEMO PURPOSE //
PeaCardActions.Comment = () => (
  <Button
    className={'MuiButton--auto'}
    size={'small'}
    variant={'contained'}
    color={'primary'}
  >
    <PeaIcon size={'small'} icon={'fas fa-comment-alt'} />
    <span>Comment</span>
  </Button>
);
PeaCardActions.Share = () => (
  <Button
    className={'MuiButton--auto'}
    size={'small'}
    variant={'contained'}
    color={'primary'}
  >
    <PeaIcon size={'small'} icon={'fas fa-share-square'} />
    <span>Share</span>
  </Button>
);
PeaCardActions.Create = () => (
  <Button
    className={'MuiButton--auto'}
    size={'small'}
    variant={'contained'}
    color={'primary'}
  >
    <PeaIcon size={'small'} icon={'add_circle'} />
    <span>Create</span>
  </Button>
);
// ----------------------- END ----------------------- //

PeaCardActions.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  centered: PropTypes.bool,
};
PeaCardActions.defaultProps = {
  left: null,
  right: null,
  centered: false,
};
PeaCardActions.metadata = {
  name: 'Pea Card Actions',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};
PeaCardActions.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaCardActions;
