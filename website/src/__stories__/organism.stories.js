import React from 'react';
import { storiesOf } from '@storybook/react';
import { FeatureWidget } from '@mui-treasury/components';
import { text, boolean } from '@storybook/addon-knobs';

import createContainer, { StylesProvider } from './helpers/containerDecorator';

import ComponentHeading from 'components/organisms/ComponentHeading';
import ModuleProjector from 'components/organisms/ModuleProjector';

storiesOf('Treasury|organisms', module)
  .addDecorator(createContainer({ maxWidth: 'md' }))
  .add('ComponentHeading', () => (
    <ComponentHeading
      title={'Button'}
      description={'The most common component of any website'}
    />
  ))
  .add('ModuleProjector', () => <ModuleProjector />);
