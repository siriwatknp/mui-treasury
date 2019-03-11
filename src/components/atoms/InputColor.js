/* eslint-disable react/prop-types */
import React from 'react';
import Swatch from './Swatch';
import Input from './Input';
import Text from './Text';
import Box from './Box';

const InputColor = ({
  label,
  name,
  error,
  defaultValue,
  value,
  onChange,
  onBlur,
  rootProps,
  textProps,
  inputProps,
}) => (
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
      <Swatch color={value || defaultValue} />
      <Input
        ml={1}
        maxWidth={100}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        {...inputProps}
      />
    </Box>
  </Box>
);

export default InputColor;
