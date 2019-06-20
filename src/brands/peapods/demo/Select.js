import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const Tag = () => {
  const [value, onChange] = useState(0);
  return (
    <div>
      <TextField
        select
        fullWidth
        margin={'normal'}
        label={'Sort By'}
        helperText={'Helper Text'}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      >
        <MenuItem value={1}>Popular</MenuItem>
        <MenuItem value={2}>Newest</MenuItem>
      </TextField>
      <TextField
        error
        select
        fullWidth
        margin={'normal'}
        label={'Sort By'}
        helperText={'Helper Text'}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      >
        <MenuItem value={1}>Popular</MenuItem>
        <MenuItem value={2}>Newest</MenuItem>
      </TextField>
    </div>
  );
};

Tag.metadata = {
  name: 'Pea Select',
  api: [
    {
      label: 'Select Demos',
      url: 'https://material-ui.com/components/selects/',
    },
    { label: 'API', url: 'https://material-ui.com/api/select/#select-api' },
  ],
};
Tag.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Tag.code = `
  import React, { useState } from 'react';
  import MenuItem from '@material-ui/core/MenuItem';
  import TextField from '@material-ui/core/TextField';
  
  const Preview = () => {
    const [value, onChange] = useState(0);
    return (
      <>
        <TextField
          select
          fullWidth
          margin={'normal'}
          label={'Sort By'}
          helperText={'Helper Text'}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
        >
          <MenuItem value={1}>Popular</MenuItem>
          <MenuItem value={2}>Newest</MenuItem>
        </TextField>
        <TextField
          error
          select
          fullWidth
          margin={'normal'}
          label={'Sort By'}
          helperText={'Helper Text'}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
        >
          <MenuItem value={1}>Popular</MenuItem>
          <MenuItem value={2}>Newest</MenuItem>
        </TextField>
      </>
    )
  }
`;

export default Tag;
