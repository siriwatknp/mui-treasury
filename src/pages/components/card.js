import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import molecules from 'components/molecules';
import FullDemoPage from 'containers/Demo';
import ComponentImage from 'containers/Images/ComponentImage';
import { customComponents, DefaultComponent } from 'docs/components/card';

const { SignTreeItem } = molecules;

const CardPage = () => (
  <FullDemoPage
    title={'Card'}
    description={'A must for displaying data in grid'}
    DemoComponentsProps={{
      componentImage: <ComponentImage name={'button'} />,
      cssTree: (
        <TreeView
          defaultExpanded={['1']}
          defaultCollapseIcon={<SignTreeItem.Minus />}
          defaultExpandIcon={<SignTreeItem.Plus />}
        >
          <SignTreeItem nodeId="1" label="root">
            <SignTreeItem nodeId="2" label="label" />
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

export default CardPage;
