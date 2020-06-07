import React from 'react';
import { Item, Row, Column } from './index';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

export default () => {
  return (
    <>
      <Row gap={2} position={'bottom'}>
        <Item>
          <AvatarGroup max={4}>
            {new Array(5).fill(0).map((_, index) => (
              <Avatar
                key={index}
                src={`https://i.pravatar.cc/300?img=${Math.floor(
                  Math.random() * 30
                )}`}
              />
            ))}
          </AvatarGroup>
        </Item>
        <Item position={'middle-right'}>
          <Button
            variant={'contained'}
            color={'primary'}
            disableRipple
          >
            Join group
          </Button>
        </Item>
      </Row>
    </>
  );
};
