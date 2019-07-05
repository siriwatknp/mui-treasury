import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PeaTag from '../lib/PeaTag';
import PeaAutocompleteList from '../lib/PeaAutocompleteList';
import PeaSearchInputControl from '../lib/PeaSearchInputControl';

const AutocompleteHashtags = () => {
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([
    { label: 'cinema', value: 'cinema' },
    { label: 'sport', value: 'sport' },
    { label: 'nightlife', value: 'nightlife' },
    { label: 'theater', value: 'theater' },
    { label: 'culture', value: 'culture' },
    { label: 'holy', value: 'holy' },
  ]);

  function handleListChange(value) {
    if (!value) {
      return;
    }
    const newTags = [...tags];
    newTags.push(value);
    setTags(newTags);
    const newSuggestions = suggestions.filter(
      item => item.value !== value.value,
    );
    setSuggestions(newSuggestions);
  }

  function handleTagDelete(value) {
    const newTags = tags.filter(item => item.value !== value.value);
    setTags(newTags);
    const newSuggestions = [...suggestions];
    newSuggestions.push(value);
    setSuggestions(newSuggestions);
  }

  return (
    <>
      <Grid container spacing={1}>
        {tags.map(item => (
          <Grid item key={item.label}>
            <PeaTag
              color={'secondary'}
              key={`peatag-${item.value}`}
              label={`#${item.label}`}
              onDelete={() => handleTagDelete(item)}
            />
          </Grid>
        ))}
        <PeaAutocompleteList
          placeholder="Add new tag."
          suggestions={suggestions}
          InputControl={PeaSearchInputControl}
          onChange={handleListChange}
        />
      </Grid>
    </>
  );
};

AutocompleteHashtags.metadata = {
  name: 'Pea AutocompleteHashtags',
  api: 'https://material-ui.com/pt/api/radio-group/#radiogroup-api',
};
AutocompleteHashtags.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
AutocompleteHashtags.code = `
  import React, { useState } from 'react';
  import Grid from '@material-ui/core/Grid';
  import PeaTag from '../lib/PeaTag';
  import PeaAutocompleteList from '../lib/PeaAutocompleteList';
  import PeaSearchInputControl from '../lib/PeaSearchInputControl';

  const AutocompleteHashtags = () => {
    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState([
      { label: 'cinema', value: 'cinema' },
      { label: 'sport', value: 'sport' },
      { label: 'nightlife', value: 'nightlife' },
      { label: 'theater', value: 'theater' },
      { label: 'culture', value: 'culture' },
      { label: 'holy', value: 'holy' },
    ]);

    function handleListChange(value) {
      if (!value) {
        return;
      }
      const newTags = [...tags];
      newTags.push(value);
      setTags(newTags);
      const newSuggestions = suggestions.filter(
        item => item.value !== value.value,
      );
      setSuggestions(newSuggestions);
    }

    function handleTagDelete(value) {
      const newTags = tags.filter(item => item.value !== value.value);
      setTags(newTags);
      const newSuggestions = [...suggestions];
      newSuggestions.push(value);
      setSuggestions(newSuggestions);
    }

    return (
      <>
        <Grid container spacing={1}>
          {tags.map(item => (
            <Grid item key={item.label}>
              <PeaTag
                color={'secondary'}
                key={'peatag-' + item.value}
                label={'#' + item.label}
                onDelete={() => handleTagDelete(item)}
              />
            </Grid>
          ))}
          <PeaAutocompleteList
            placeholder="Add new tag."
            suggestions={suggestions}
            InputControl={PeaSearchInputControl}
            onChange={handleListChange}
          />
        </Grid>
      </>
    );
  };
`;

export default AutocompleteHashtags;
