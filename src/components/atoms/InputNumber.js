/* eslint-disable react/prop-types */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Input from './Input';
import Box from './Box';
import Text from './Text';

const InputNumber = ({
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
}) => {
  const handleChange = operator => () =>
    onChange({ target: { value: value + operator, name } });
  return (
    <Box
      {...rootProps}
      css={{
        '& .TreasuryInput-root': {
          padding: 0,
          '& .MuiInputBase-input': {
            textAlign: 'center',
          },
        },
        '& .MuiIconButton-root': {
          padding: 6,
        },
      }}
    >
      <Text
        fontWeight={500}
        color={error ? 'error.main' : 'grey.500'}
        mb={1}
        {...textProps}
      >
        {label}
      </Text>
      <Box bgcolor={'#f5f5f5'} borderRadius={8} {...Box.alignCenter}>
        <IconButton className={'MuiIconButton-root'} onClick={handleChange(-1)}>
          <Icon>remove_circle_rounded</Icon>
        </IconButton>
        <Input
          className={'MuiInputBase--centered'}
          type={'number'}
          maxWidth={40}
          name={name}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          {...inputProps}
        />
        <IconButton className={'MuiIconButton-root'} onClick={handleChange(1)}>
          <Icon>add_circle_rounded</Icon>
        </IconButton>
      </Box>
    </Box>
  );
};

export default InputNumber;
