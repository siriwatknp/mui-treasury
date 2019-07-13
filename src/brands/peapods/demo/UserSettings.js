/* eslint-disable */
import React, { useState } from 'react';
import PeaUserSettings from '../lib/PeaUserSettings';

const UserSettings = () => {
  const [switchState, setSwitchState] = useState({
    notifications: false,
    receiveEmail: true,
  });

  function handleSwitchChange(name, value) {
    setSwitchState({ ...switchState, [name]: value });
  };

  return (
    <PeaUserSettings
      notifications={switchState.notifications}
      receiveEmail={switchState.receiveEmail}
      onNotificationsChange={value => handleSwitchChange('notifications', value)}
      onReceiveEmailChange={value => handleSwitchChange('receiveEmail', value)}
      onEditProfile={() => {}}
      onContactSupport={() => {}}
      onLogout={() => {}}
      onDeleteProfile={() => {}}
    />
  );
}

UserSettings.metadata = {
  name: 'Pea User Settings',
};
UserSettings.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
UserSettings.code = `
  import React, { useState } from 'react';
  import PeaUserSettings from '../lib/PeaUserSettings';

  const UserSettings = () => {
    const [switchState, setSwitchState] = useState({
      notifications: false,
      receiveEmail: true,
    });

    function handleSwitchChange(name, value) {
      setSwitchState({ ...switchState, [name]: value });
    };

    return (
      <PeaUserSettings
        notifications={switchState.notifications}
        receiveEmail={switchState.receiveEmail}
        onNotificationsChange={value => handleSwitchChange('notifications', value)}
        onReceiveEmailChange={value => handleSwitchChange('receiveEmail', value)}
        onEditProfile={() => {}}
        onContactSupport={() => {}}
        onLogout={() => {}}
        onDeleteProfile={() => {}}
      />
    );
  }
`;

export default UserSettings;
