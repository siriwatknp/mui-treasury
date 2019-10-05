/* eslint-disable no-alert */
import React from 'react';

import PeaAutocompleteList from '../lib/PeaAutocompleteList';

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const AutocompleteList = () => (
  <PeaAutocompleteList
    fullWidth
    clearOnFocus={false}
    placeholder="Search countries..."
    suggestions={suggestions}
    onChange={value =>
      value
        ? alert(`"${JSON.stringify(value)}" is the current value`)
        : alert('no values')
    }
  />
);

AutocompleteList.metadata = {
  name: 'Pea AutocompleteList',
  api: 'https://material-ui.com/pt/api/radio-group/#radiogroup-api',
};

AutocompleteList.code = `
  /* eslint-disable no-alert */
  import React from 'react';
  import PeaAutocompleteList from '../lib/PeaAutocompleteList';
  import PeaSearchInputControl from '../lib/PeaSearchInputControl';

  const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
  ].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
  }));

  const AutocompleteList = () => (
    <PeaAutocompleteList
      fullWidth
      placeholder="Search countries..."
      suggestions={suggestions}
      InputControl={PeaSearchInputControl}
      onChange={value =>
        value
          ? alert(JSON.stringify(value) + is the current value)
          : alert('no values')
      }
    />
  );
`;

export default AutocompleteList;
