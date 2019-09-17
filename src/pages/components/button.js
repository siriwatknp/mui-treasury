import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import molecules from 'components/molecules';
import organisms from 'components/organisms';

const { SignTreeItem } = molecules;
const { DemoPage } = organisms;

const ButtonPage = () => (
  <DemoPage
    cssTree={
      <TreeView
        defaultExpanded={['1']}
        defaultCollapseIcon={<SignTreeItem.Minus />}
        defaultExpandIcon={<SignTreeItem.Plus />}
      >
        <SignTreeItem nodeId="1" label="root">
          <SignTreeItem nodeId="2" label="label" />
        </SignTreeItem>
      </TreeView>
    }
  />
);

ButtonPage.propTypes = {};
ButtonPage.defaultProps = {};

export default ButtonPage;
