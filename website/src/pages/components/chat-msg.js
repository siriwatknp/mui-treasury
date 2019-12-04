import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import molecules from 'components/molecules';
import FullDemoPage from 'containers/Demo';
import ComponentImage from 'containers/Images/ComponentImage';
import { customComponents, DefaultComponent } from 'docs/components/chatMsg';

const { SignTreeItem } = molecules;

const ChatMsgPage = () => (
  <FullDemoPage
    title={'Chat Message'}
    description={`If you're building chat app, you're in the right place.`}
    DemoComponentsProps={{
      componentImage: <ComponentImage name={'button'} />,
      cssTree: (
        <TreeView
          defaultExpanded={['2', '7']}
          defaultCollapseIcon={<SignTreeItem.Minus />}
          defaultExpandIcon={<SignTreeItem.Plus />}
        >
          <SignTreeItem nodeId="1" label="avatar" />
          <SignTreeItem nodeId="2" label="leftRow">
            <SignTreeItem nodeId="3" label="msg" />
            <SignTreeItem nodeId="4" label="left" />
            <SignTreeItem nodeId="5" label="leftFirst" />
            <SignTreeItem nodeId="6" label="leftLast" />
          </SignTreeItem>
          <SignTreeItem nodeId="7" label="rightRow">
            <SignTreeItem nodeId="8" label="msg" />
            <SignTreeItem nodeId="9" label="right" />
            <SignTreeItem nodeId="10" label="rightFirst" />
            <SignTreeItem nodeId="11" label="rightLast" />
          </SignTreeItem>
        </TreeView>
      ),
      customComponents,
      DefaultComponent,
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
      },
    }}
  />
);

export default ChatMsgPage;
