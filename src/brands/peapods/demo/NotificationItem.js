/* eslint-disable */
import React from 'react';
import Box from 'components/atoms/Box';
import PeaNotificationItem from '../lib/PeaNotificationItem';
import { AVATAR, PEOPLE } from './_mock';

const NotificationItem = () => (
  <Box flex={1}>
    <PeaNotificationItem
      src={AVATAR}
      name={'Tony'}
      time={'Just now'}
      type={'follow'}
      actions
      unread
    />
    <PeaNotificationItem
      src={PEOPLE[0].src}
      name={'Michael'}
      time={'5 minutes ago'}
      type={'pea_request'}
      actions
      unread
    />
    <PeaNotificationItem
      src={PEOPLE[1].src}
      name={'Michael'}
      time={'4 Jan, 2019'}
      type={'left'}
    />
    <PeaNotificationItem
      src={PEOPLE[2].src}
      name={'User X'}
      time={'1 Jan, 2019'}
      type={'pea_invite'}
      actions
    />
    <PeaNotificationItem
      src={PEOPLE[1].src}
      name={'EVENT_NAME X'}
      time={'4 Jan, 2019'}
      type={'cancel'}
    />
    <PeaNotificationItem
      src={PEOPLE[2].src}
      name={'User X'}
      time={'1 Jan, 2019'}
      type={'accept'}
    />
    <PeaNotificationItem
      src={PEOPLE[2].src}
      name={'Frank'}
      time={'1 Jan, 2019'}
      type={'followed'}
    />
    <PeaNotificationItem
      src={[AVATAR, PEOPLE[0].src, PEOPLE[1].src, PEOPLE[2].src]}
      name={['Michael', 'John', 'Frank', 'Tony']}
      time={'1 Jan, 2019'}
      type={'group'}
    />
  </Box>
);

NotificationItem.metadata = {
  name: 'Pea Notification Item',
};
NotificationItem.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
NotificationItem.code = `
  import PeaNotificationItem from '../lib/PeaNotificationItem';
  
  export const AVATAR =
    'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
  export const PEOPLE = [
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example2.svg',
    },
    {
      src: 'https://avatars.dicebear.com/v2/avataaars/example3.svg',
    },
  ];

  const Preview = () => (
    <>
      <PeaNotificationItem
        src={AVATAR}
        name={'Tony'}
        time={'Just now'}
        type={'follow'}
        actions
        unread
      />
      <PeaNotificationItem
        src={PEOPLE[0].src}
        name={'Michael'}
        time={'5 minutes ago'}
        type={'pea_request'}
        actions
        unread
      />
      <PeaNotificationItem
        src={PEOPLE[1].src}
        name={'Michael'}
        time={'4 Jan, 2019'}
        type={'left'}
      />
      <PeaNotificationItem
        src={PEOPLE[2].src}
        name={'User X'}
        time={'1 Jan, 2019'}
        type={'pea_invite'}
        actions
      />
      <PeaNotificationItem
        src={PEOPLE[1].src}
        name={'EVENT_NAME X'}
        time={'4 Jan, 2019'}
        type={'cancel'}
      />
      <PeaNotificationItem
        src={PEOPLE[2].src}
        name={'User X'}
        time={'1 Jan, 2019'}
        type={'accept'}
      />
      <PeaNotificationItem
        src={PEOPLE[2].src}
        name={'Frank'}
        time={'1 Jan, 2019'}
        type={'followed'}
      />
      <PeaNotificationItem
        src={[AVATAR, PEOPLE[0].src, PEOPLE[1].src, PEOPLE[2].src]}
        name={['Michael', 'John', 'Frank', 'Tony']}
        time={'1 Jan, 2019'}
        type={'group'}
      />
    </>
  )
`;

export default NotificationItem;
