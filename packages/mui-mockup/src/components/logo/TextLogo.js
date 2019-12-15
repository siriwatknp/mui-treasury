import React from 'react';
import Box from '@material-ui/core/Box';

const TextLogo = props => (
  <Box
    mx={'auto'}
    bgcolor={'#fff'}
    width={52}
    height={52}
    borderRadius={16}
    boxShadow={'0 2px 12px 0 rgba(0,0,0,0.4)'}
    fontSize={14}
    fontFamily={
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
    }
    fontWeight={'bold'}
    textAlign={'center'}
    lineHeight={'52px'}
    fontStyle={'italic'}
    {...props}
  />
);

export default TextLogo;
