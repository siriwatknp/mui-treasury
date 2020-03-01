import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '@material-ui/core/Container';
import FeatureWidget from './FeatureWidget';

storiesOf('mui-components|Widget', module).add('feature', () => (
  <Container maxWidth={'xs'}>
    <FeatureWidget
      title={'Reduce UI Development time'}
      content={
        <>
          No one likes to write the same code twice, same as ui. I strongly
          believe that this project can reduce development time for any starter
          project based on <b>Material-UI</b>
        </>
      }
      renderIcon={({ className }) => (
        <i className={`fa fa-fighter-jet ${className}`} />
      )}
    />
  </Container>
));
