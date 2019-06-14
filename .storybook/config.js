import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  require('../src/_stories/atomStory');
}

addDecorator(withKnobs);

configure(loadStories, module);
