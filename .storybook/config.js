import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import tresuryTheme from '../src/theme/treasury';
import './global.css';

const ThemeDecorator = storyFn => (
  <>
    <CssBaseline />
    <ThemeProvider theme={tresuryTheme}>
      <div style={{ margin: 8 }}>{storyFn()}</div>
    </ThemeProvider>
  </>
);

function loadStories() {
  require('../src/_stories/atomStory');
  require('../src/_stories/moleculeStory');
  require('../src/_stories/organismStory');
}

addDecorator(withKnobs);
addDecorator(ThemeDecorator);

configure(loadStories, module);
