import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PeaMediaUploader from '../lib/PeaMediaUploader';

const MediaUploader = () => {
  const [open, setOpen] = useState(false);
  const config = {
    cloudName: 'peapods',
    apiKey: '722776811676265',
    sources: ['local', 'facebook', 'instagram', 'image_search'],
    facebookAppId: '884558128333147',
    instagramClientId: '38a65f7ede1d4452bc390c4778d02b54',
    googleApiKey: 'AIzaSyDt8VLlYubi76S06fS3n558c67EGaDBG7U',
    searchByRights: true,
    show_powered_by: false,
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Upload Media</Button>
      <PeaMediaUploader
        isVisible={open}
        getConfig={() => config}
        onScriptLoadFailed={() => {
          alert('failed to load script');
        }}
        onWidgetEvent={() => {}}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

MediaUploader.metadata = {
  name: 'Pea Media Uploader',
};
MediaUploader.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
MediaUploader.code = `
  import React, { useState } from 'react';
  import Button from '@material-ui/core/Button';
  import PeaMediaUploader from '../lib/PeaMediaUploader';
  
  const Preview = () => {
    const [open, setOpen] = useState(false);
    const config = {
      cloudName: 'peapods',
      apiKey: '722776811676265',
      sources: ['local', 'facebook', 'instagram', 'image_search'],
      facebookAppId: '884558128333147',
      instagramClientId: '38a65f7ede1d4452bc390c4778d02b54',
      googleApiKey: 'AIzaSyDt8VLlYubi76S06fS3n558c67EGaDBG7U',
      searchByRights: true,
      show_powered_by: false,
    };
    return (
      <>
        <Button onClick={() => setOpen(true)}>Upload Media</Button>
        <PeaMediaUploader
          isVisible={open}
          getConfig={() => config}
          onScriptLoadFailed={() => {
            alert('failed to load script');
          }}
          onWidgetEvent={() => {}}
          onClose={() => setOpen(false)}
        />
      </>
    );
  }
`;

export default MediaUploader;
