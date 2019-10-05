/* eslint-disable max-len */
/* eslint-disable no-alert */
import React from 'react';
import PeaAutocompleteList from '../lib/PeaAutocompleteList';
import PeaAudienceSelectorInputControl from '../lib/PeaAudienceSelectorInputControl';

const suggestions = [
  { label: 'Activism' },
  { label: 'Art & Culture' },
  { label: 'Community' },
  { label: 'Food' },
  { label: 'Gaming' },
  { label: 'Hobbie' },
  { label: 'Learning' },
  { label: 'Movie' },
  { label: 'Music' },
  { label: 'Networking' },
  { label: 'Outdoor' },
  { label: 'Spirituality' },
  { label: 'Sport' },
  { label: 'Volunteering' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const AudienceSelector = () => (
  <PeaAutocompleteList
    fullWidth
    placeholder="Select"
    suggestions={suggestions}
    InputControl={PeaAudienceSelectorInputControl}
    onChange={data => alert(`"${data.value ? data.value : null}" is selected`)}
  />
);

AudienceSelector.metadata = {
  name: 'Pea AudienceSelector',
  api: 'https://material-ui.com/pt/api/radio-group/#radiogroup-api',
};
AudienceSelector.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
AudienceSelector.code = `
  /* eslint-disable max-len */
  /* eslint-disable no-alert */
  import React from 'react';
  import PeaAutocompleteList from '../lib/PeaAutocompleteList';
  import PeaAudienceSelectorInputControl from '../lib/PeaAudienceSelectorInputControl';

  const suggestions = [
    { label: 'Activism' },
    { label: 'Art & Culture' },
    { label: 'Community' },
    { label: 'Food' },
    { label: 'Gaming' },
    { label: 'Hobbie' },
    { label: 'Learning' },
    { label: 'Movie' },
    { label: 'Music' },
    { label: 'Networking' },
    { label: 'Outdoor' },
    { label: 'Spirituality' },
    { label: 'Sport' },
    { label: 'Volunteering' },
  ].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
  }));

  const AudienceSelector = () => (
    <PeaAutocompleteList
      fullWidth
      placeholder="Select"
      suggestions={suggestions}
      InputControl={PeaAudienceSelectorInputControl}
      onChange={data => alert(\`"\${data.value ? data.value : null}" is selected\`)}
    />
  );

`;

export default AudienceSelector;
