import React from 'react';
import { storiesOf } from '@storybook/react';
import { FeatureWidget } from '@mui-treasury/components';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import createContainer, { StylesProvider } from './helpers/containerDecorator';
import All from 'components/organisms';
import molecules from 'components/molecules';

const { ShowcaseWidget } = molecules;

storiesOf('Treasury|molecules', module)
  .addDecorator(createContainer({ maxWidth: 'sm' }))
  .add('ShowcaseWidget', () => (
    <ShowcaseWidget name={'Button'} onClickCode={action('code-clicked')} />
  ));
