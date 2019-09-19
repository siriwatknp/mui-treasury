import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import molecules from 'components/molecules';
import DemoPage from 'containers/Demo';
import ComponentImage from 'containers/Images/ComponentImage';
import { customComponents, DefaultComponent } from 'docs/components/button';

const { SignTreeItem } = molecules;

const ButtonPage = () => (
  <DemoPage
    title={'Button'}
    description={'The most common component of any'}
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
  />
);

ButtonPage.propTypes = {};
ButtonPage.defaultProps = {};

export default ButtonPage;
