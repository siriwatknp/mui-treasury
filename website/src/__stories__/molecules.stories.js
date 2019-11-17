import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import TreeView from '@material-ui/lab/TreeView';
import createContainer, { StylesProvider } from './helpers/containerDecorator';

import ShowcaseWidget from 'components/molecules/ShowcaseWidget';
import BoxTabs from 'components/molecules/BoxTabs';
import SignTreeItem from 'components/molecules/SignTreeItem';
import Html from 'components/molecules/Html';
import Prism from 'components/molecules/Prism';

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

storiesOf('Treasury|molecules', module)
  .addDecorator(createContainer({ maxWidth: 'md' }))
  .add('Html', () => (
    <Html
      html={
        '<p><div class="gatsby-highlight" data-language="jsx"><pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n' +
        '<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'@material-ui/core/Button\'</span><span class="token punctuation">;</span>\n' +
        '<span class="token keyword">import</span> <span class="token punctuation">{</span> useGithubBtnStyles<span class="token punctuation">,</span> usePushingGutter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@mui-treasury/styles\'</span><span class="token punctuation">;</span>\n' +
        '\n' +
        '<span class="token keyword">const</span> <span class="token function-variable function">GithubButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n' +
        '  <span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token function">useGithubBtnStyles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n' +
        '  <span class="token keyword">const</span> gutterStyles <span class="token operator">=</span> <span class="token function">usePushingGutter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n' +
        '  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n' +
        '    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gutterStyles<span class="token punctuation">.</span>parent<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n' +
        '      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">classes</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">}</span></span> <span class="token attr-name">variant</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'contained\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n' +
        '        Default\n' +
        '      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n' +
        '      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">classes</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">}</span></span> <span class="token attr-name">variant</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'contained\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'primary\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n' +
        '        Contained\n' +
        '      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n' +
        '    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n' +
        '  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n' +
        '<span class="token punctuation">}</span><span class="token punctuation">;</span>\n' +
        '\n' +
        '\n' +
        '<span class="token keyword">export</span> <span class="token keyword">default</span> GithubButton<span class="token punctuation">;</span></code></pre></div></p>'
      }
      source={'import React from "react";'}
      fileName={'test.js'}
    />
  ))
  .add('Prism', () => (
    <Prism
      code={`
export default ({ shadows, palette }) => ({
  root: {
    borderRadius: 8,
  },
  text: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  contained: {
    boxShadow: 'none',
    '&:active': {
      boxShadow: shadows[0],
    },
  },
  containedPrimary: {
    backgroundColor: '#039be5',
    color: palette.common.white,
    '&:hover': {
      backgroundColor: '#0388ca',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: '#0388ca',
      },
    },
  },
  label: {
    textTransform: 'none',
    letterSpacing: '0.5px',
    fontWeight: 500,
  },
});
      `}
    />
  ));
