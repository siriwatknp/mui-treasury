import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import molecules from 'components/molecules';
import FullDemoPage from 'containers/Demo';
import ComponentImage from 'containers/Images/ComponentImage';
import { customComponents, DefaultComponent } from 'docs/components/tabs';
import Grid from '@material-ui/core/Grid';

const { SignTreeItem } = molecules;

const TabsPage = () => (
  <FullDemoPage
    title={'Tabs'}
    description={'Very useful when you have a multiple categories content.'}
    DemoComponentsProps={{
      componentImage: <ComponentImage name={'button'} />,
      cssTree: (
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <h5>Tabs (container)</h5>
            <TreeView
              defaultExpanded={['1', '2']}
              defaultCollapseIcon={<SignTreeItem.Minus />}
              defaultExpandIcon={<SignTreeItem.Plus />}
            >
              <SignTreeItem nodeId="1" label="root">
                <SignTreeItem nodeId="2" label="scroller">
                  <SignTreeItem nodeId="3" label="flexContainer" />
                  <SignTreeItem nodeId="4" label="PrivateTabIndicator-root" />
                </SignTreeItem>
              </SignTreeItem>
            </TreeView>
          </Grid>
          <Grid item xs={5}>
            <h5>Tab (item)</h5>
            <TreeView
              defaultExpanded={['1']}
              defaultCollapseIcon={<SignTreeItem.Minus />}
              defaultExpandIcon={<SignTreeItem.Plus />}
            >
              <SignTreeItem nodeId="1" label="root, selected">
                <SignTreeItem nodeId="2" label="wrapper" />
              </SignTreeItem>
            </TreeView>
          </Grid>
        </Grid>
      ),
      ShowcaseWidgetProps: {
        frameProps: {
          maxWidth: 700,
          mx: 'auto',
        },
      },
      customComponents,
      DefaultComponent,
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
        maxWidth: 700,
      },
    }}
  />
);

export default TabsPage;
