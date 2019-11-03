import React from 'react';
import { render } from '@testing-library/react';
import LayoutContext, {
  LayoutProvider,
  LayoutConsumer,
} from '../layoutContext';

describe('context', () => {
  test('Layout Context has correct default schema', () => {
    const { getByText } = render(
      <LayoutContext.Consumer>
        {value => {
          console.log('value', value);
          return <span>Received: {value}</span>;
        }}
      </LayoutContext.Consumer>
    );
    expect(getByText(/^Received:/).textContent).toBe('Received: value');
  });
});
