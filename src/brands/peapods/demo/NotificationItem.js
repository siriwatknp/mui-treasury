/* eslint-disable */
import React from 'react';
import Box from 'components/atoms/Box';
import PeaNotificationItem from '../lib/PeaNotificationItem';
import { AVATAR, PEOPLE } from './_mock';

const NotificationItem = () => (
  <Box flex={1}>
    <PeaNotificationItem
      src={AVATAR}
      name={'JunZaa159'}
      description={'requested to follow you'}
      time={'Just now'}
      sticker={'person'}
    />
    <PeaNotificationItem
      src={PEOPLE[0].src}
      name={'Michael'}
      description={'has invited you to PodY'}
      time={'5 minutes ago'}
      sticker={'pea'}
      unread
    />
    <PeaNotificationItem
      src={PEOPLE[1].src}
      name={'Frank'}
      description={'has left your pod for React Europe Conf'}
      time={'4 Jan, 2019'}
      sticker={'remove'}
      unread
    />
    <PeaNotificationItem
      src={PEOPLE[2].src}
      name={'Jamie'}
      description={'Training#2 has been canceled'}
      time={'1 Jan, 2019'}
      sticker={'clear'}
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
        name={'JunZaa159'}
        description={'requested to follow you'}
        time={'Just now'}
        sticker={'person'}
      />
      <PeaNotificationItem
        src={PEOPLE[0].src}
        name={'Michael'}
        description={'has invited you to PodY'}
        time={'5 minutes ago'}
        sticker={'pea'}
        unread
      />
      <PeaNotificationItem
        src={PEOPLE[1].src}
        name={'Frank'}
        description={'has left your pod for React Europe Conf'}
        time={'4 Jan, 2019'}
        sticker={'remove'}
        unread
      />
      <PeaNotificationItem
        src={PEOPLE[2].src}
        name={'Jamie'}
        description={'Training#2 has been canceled'}
        time={'1 Jan, 2019'}
        sticker={'clear'}
      />
    </>
  )
`;

export default NotificationItem;
