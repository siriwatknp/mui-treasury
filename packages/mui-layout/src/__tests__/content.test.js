import React from 'react';
import { renderWithinLayout } from 'testingUtils/renderer';
import Content from '../components/Content';

test('able to render with empty config', () => {
  expect(() => {
    renderWithinLayout(<Content>content</Content>, { config: {} });
  }).not.toThrow();
});
