import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles';
import tresuryTheme from '../src/theme/treasury';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={tresuryTheme}>{storyFn()}</ThemeProvider>
);

function loadStories() {
  require('../src/_stories/atomStory');
  require('../src/_stories/moleculeStory');
  require('../src/_stories/organismStory');
}

addDecorator(withKnobs);
addDecorator(ThemeDecorator);

configure(loadStories, module);
