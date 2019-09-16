import React from 'react';
import { storiesOf } from '@storybook/react';
import { FeatureWidget } from '@mui-treasury/components';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import createContainer, { StylesProvider } from './helpers/containerDecorator';
import All from 'components/organisms';
import molecules from 'components/molecules';

const { ShowcaseWidget, BoxTabs } = molecules;

storiesOf('Treasury|molecules', module)
  .addDecorator(createContainer({ maxWidth: 'sm' }))
  .add('ShowcaseWidget', () => (
    <ShowcaseWidget name={'Button'} onClickCode={action('code-clicked')} />
  ))
  .add('BoxTabs', () => (
    <BoxTabs tabs={[{ label: 'Anatomy' }, { label: 'CSS API' }, { label: 'Tab Item 3'}]}>
      {([key], { wrapContent }) =>
        wrapContent(
          <>
            {key === 0 && <div>Hello</div>}
            {key === 1 && <div>What's up</div>}
          </>
        )
      }
    </BoxTabs>
  ));
