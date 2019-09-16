import React from 'react';
import { storiesOf } from '@storybook/react';
import { FeatureWidget } from '@mui-treasury/components';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import TreeView from '@material-ui/lab/TreeView';
import createContainer, { StylesProvider } from './helpers/containerDecorator';
import All from 'components/organisms';
import molecules from 'components/molecules';

const { ShowcaseWidget, BoxTabs, SignTreeItem } = molecules;

storiesOf('Treasury|molecules', module)
  .addDecorator(createContainer({ maxWidth: 'sm' }))
  .add('ShowcaseWidget', () => (
    <ShowcaseWidget name={'Button'} onClickCode={action('code-clicked')} />
  ))
  .add('BoxTabs', () => (
    <BoxTabs
      tabs={[
        { label: 'Anatomy' },
        { label: 'CSS API' },
        { label: 'Tab Item 3' },
      ]}
    >
      {([key], { wrapContent }) =>
        wrapContent(
          <>
            {key === 0 && <div>Hello</div>}
            {key === 1 && <div>What's up</div>}
          </>
        )
      }
    </BoxTabs>
  ))
  .add('SignTree', () => (
    <TreeView
      defaultExpanded={['1']}
      defaultCollapseIcon={<SignTreeItem.Minus />}
      defaultExpandIcon={<SignTreeItem.Plus />}
    >
      <SignTreeItem nodeId="1" label="Main">
        <SignTreeItem nodeId="2" label="Hello" />
        <SignTreeItem nodeId="3" label="Subtree with children">
          <SignTreeItem nodeId="6" label="Hello" />
          <SignTreeItem nodeId="7" label="Sub-subtree with children">
            <SignTreeItem nodeId="9" label="Child 1" />
            <SignTreeItem nodeId="10" label="Child 2" />
            <SignTreeItem nodeId="11" label="Child 3" />
          </SignTreeItem>
          <SignTreeItem nodeId="8" label="Hello" />
        </SignTreeItem>
        <SignTreeItem nodeId="4" label="World" />
        <SignTreeItem nodeId="5" label="Something something" />
      </SignTreeItem>
    </TreeView>
  ));
