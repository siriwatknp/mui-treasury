/* eslint-disable react/prop-types,max-len */
import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import Box from './Box';
import Text from './Text';

class FontFamily extends React.Component {
  constructor() {
    super();
    this.state = {
      fonts: [{ family: 'Roboto' }],
    };
  }

  componentDidMount() {
    const { fonts } = this.state;
    if (fonts.length <= 1) {
      axios
        .get(
          `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${
            process.env.REACT_APP_GOOGLE_FONT_API_KEY
          }`,
        )
        .then(({ data }) => this.setState({ fonts: data.items }));
    }
  }

  render() {
    const {
      label,
      name,
      error,
      value,
      onChange,
      onBlur,
      rootProps,
      textProps,
      inputProps,
    } = this.props;
    const { fonts } = this.state;
    return (
      <Box {...rootProps}>
        <Text
          fontWeight={500}
          color={error ? 'error.main' : 'grey.500'}
          mb={1}
          {...textProps}
        >
          {label}
        </Text>
        <Box {...Box.alignCenter}>
          <Select
            styles={{
              container: provided => ({
                ...provided,
                position: 'initial',
                fontFamily:
                  'system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
              }),
              control: provided => ({
                ...provided,
                minWidth: 160,
              }),
              menu: provided => ({
                ...provided,
                zIndex: 1500,
                maxWidth: '160px',
                top: 82,
                '@media only screen and (max-width: 768px)': {
                  right: 16,
                },
              }),
            }}
            classNamePrefix={'select'}
            options={fonts.map(({ family }) => ({
              label: family,
              value: family,
            }))}
            name={name}
            value={{ label: value, value }}
            onChange={({ value: val }) => onChange({ target: { value: val } })}
            onBlur={onBlur}
            error={error}
            {...inputProps}
          />
        </Box>
      </Box>
    );
  }
}

export default FontFamily;
