import React from 'react';
import Box from 'components/atoms/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PeaCardActions from '../lib/PeaCardActions';
import PeaButton from '../lib/PeaButton';
import PeaIcon from '../lib/PeaIcon';

const Comment = () => (
  <PeaButton
    shape={''}
    size={'small'}
    variant={'contained'}
    color={'primary'}
    icon={<PeaIcon icon={'fas fa-comment-alt'} />}
  >
    Comment
  </PeaButton>
);

const Share = () => (
  <PeaButton
    shape={''}
    size={'small'}
    variant={'contained'}
    color={'primary'}
    icon={<PeaIcon icon={'fas fa-share-square'} />}
  >
    Share
  </PeaButton>
);

const Create = () => (
  <PeaButton
    shape={''}
    size={'small'}
    variant={'contained'}
    color={'primary'}
    icon={<PeaIcon icon={'add_circle'} />}
  >
    Create
  </PeaButton>
);

const CardActions = () => (
  <Box width={'100%'}>
    <Card style={{ marginBottom: 20 }}>
      <CardContent style={{ minWidth: 320 }} />
      <PeaCardActions
        left={
          <>
            <Comment />
            <Share />
            <Create />
          </>
        }
      />
    </Card>
    <Card style={{ marginBottom: 20 }}>
      <CardContent style={{ minWidth: 320 }} />
      <PeaCardActions
        left={
          <>
            <Comment />
            <Share />
          </>
        }
        right={<Create />}
      />
    </Card>
    <Card>
      <CardContent style={{ minWidth: 320 }} />
      <PeaCardActions
        centered
        left={
          <>
            <Comment />
            <Share />
            <Create />
          </>
        }
      />
    </Card>
  </Box>
);

CardActions.metadata = {
  name: 'Pea Card Actions',
};
CardActions.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
CardActions.code = `
  import PeaButton from '../lib/PeaButton';
  import PeaIcon from '../lib/PeaIcon';
  import PeaCardActions from '../lib/PeaCardActions';
  
  const Comment = () => (
    <PeaButton
      shape={''}
      size={'small'}
      variant={'contained'}
      color={'primary'}
      icon={<PeaIcon icon={'fas fa-comment-alt'} />}
    >
      Comment
    </PeaButton>
  );
  
  const Share = () => (
    <PeaButton
      shape={''}
      size={'small'}
      variant={'contained'}
      color={'primary'}
      icon={<PeaIcon icon={'fas fa-share-square'} />}
    >
      Share
    </PeaButton>
  );
  
  const Create = () => (
    <PeaButton
      shape={''}
      size={'small'}
      variant={'contained'}
      color={'primary'}
      icon={<PeaIcon icon={'add_circle'} />}
    >
      Create
    </PeaButton>
  );
  
  const Preview = () => (
    <Box width={'100%'}>
      <Card style={{ marginBottom: 20 }}>
        <CardContent style={{ minWidth: 320 }} />
        <PeaCardActions
          left={
            <>
              <Comment />
              <Share />
              <Create />
            </>
          }
        />
      </Card>
      <Card style={{ marginBottom: 20 }}>
        <CardContent style={{ minWidth: 320 }} />
        <PeaCardActions
          left={
            <>
              <Comment />
              <Share />
            </>
          }
          right={<Create />}
        />
      </Card>
      <Card>
        <CardContent style={{ minWidth: 320 }} />
        <PeaCardActions
          centered
          left={
            <>
              <Comment />
              <Share />
              <Create />
            </>
          }
        />
      </Card>
    </Box>
  )
`;

export default CardActions;
