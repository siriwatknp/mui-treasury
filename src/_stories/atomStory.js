import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Sheet from 'components/atoms/Sheet';
import Tag from 'components/atoms/Tag';

storiesOf('atoms', module)
  .add('Sheet', () => (
    <Sheet
      bgColor={select(
        'bgColor',
        ['light', 'dark', 'white', 'transparent', '#ff0000'],
        'light',
      )}
    >
      <div style={{ width: 200, height: 300 }} />
    </Sheet>
  ))
  .add('Tag', () => (
    <>
      <Tag icon={text('icon', 'fal fa-external-link-square')}>Code Sandbox</Tag>
      <Tag
        style={{ marginLeft: 16 }}
        icon={text('icon', 'fal fa-external-link-square')}
        overline={'DEMO'}
      >
        Code Sandbox
      </Tag>
    </>
  ));
