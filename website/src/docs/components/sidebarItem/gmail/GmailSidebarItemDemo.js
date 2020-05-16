import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import GmailSidebarItem from '@mui-treasury/components/sidebarItem/gmail';

import Inbox from '@material-ui/icons/Inbox';
import Star from '@material-ui/icons/Star';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import People from '@material-ui/icons/People';
import Info from '@material-ui/icons/Info';

const GmailSidebarItemDemo = () => {
  const [index, setIndex] = React.useState(0)
  const [collapsed, setCollapsed] = React.useState(false)
  const onClick = () => {
    setCollapsed(!collapsed)
  }
  const commonProps = (i) => ({
    selected: index === i,
    onClick: () => setIndex(i),
    collapsed,
    dotOnCollapsed: true,
  })
  return (
    <Box bgcolor={'common.white'} pr={2} minWidth={256}>
      <Button onClick={onClick}>{collapsed ? 'Expand' : 'Collapse'}</Button>
      <List>
        <GmailSidebarItem
          color={'#da3125'}
          startIcon={<Inbox />}
          label={'Inbox'}
          amount={'1,198'}
          {...commonProps(0)}
          dotOnCollapsed={false}
        />
        <GmailSidebarItem
          startIcon={<Star />}
          label={'Starred'}
          {...commonProps(1)}
        />
        <GmailSidebarItem
          startIcon={<InsertDriveFile />}
          label={<b>Drafts</b>}
          amount={'5'}
          {...commonProps(2)}
        />
        <GmailSidebarItem
          color={'#1a73e8'}
          startIcon={<People />}
          label={<b>Social</b>}
          {...commonProps(3)}
        />
        <GmailSidebarItem
          color={'#e37400'}
          startIcon={<Info />}
          label={'Updates'}
          {...commonProps(4)}
        />
      </List>
    </Box>
  )
};
// hide-start
GmailSidebarItemDemo.metadata = {
  title: 'Gmail',
  path: 'components/sidebarItem/gmail',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat May 16 2020',
  stylesUrl: '',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-components', path: 'sidebarItem/gmail/GmailSidebarItem.tsx'},
  ],
};
// hide-end

export default GmailSidebarItemDemo;
