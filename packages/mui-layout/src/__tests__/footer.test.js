import React from 'react';
import { renderWithinLayout } from 'testingUtils/renderer';
import Footer from '../components/Footer';

test('able to render with empty config', () => {
  expect(() => {
    renderWithinLayout(<Footer>footer</Footer>, { config: {} });
  }).not.toThrow();
});
