import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'components/atoms';

const PreviewWidget2 = ({
  active,
  name,
  description,
  onClick,
  children,
  contentProps,
}) => (
  <Box
    className={'PreviewWidget2-root'}
    role={'button'}
    onClick={onClick}
    width={'100%'}
    height={'100%'}
    pb={3}
    display={'flex'}
    flexDirection={'column'}
    transition={'0.3s'}
    css={{
      cursor: 'pointer',
    }}
  >
    <Box
      py={2}
      flexGrow={1}
      textAlign={'center'}
      {...Box.allCenter}
      {...contentProps}
    >
      {children}
    </Box>
    <Text
      textAlign={'center'}
      variant={'h6'}
      color={active ? 'primary.dark' : 'text.primary'}
      fontWeight={active ? 900 : 'bold'}
      transition={'0.3s'}
    >
      {name}
    </Text>
    <Text
      textAlign={'center'}
      color={active ? 'primary.dark' : 'grey.500'}
      transition={'0.3s'}
    >
      {description}
    </Text>
  </Box>
);

PreviewWidget2.propTypes = {
  inverted: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.element,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func,
  contentProps: PropTypes.shape({}),
};
PreviewWidget2.defaultProps = {
  inverted: false,
  active: false,
  description: '',
  children: null,
  onClick: () => {},
  contentProps: {},
};

export default PreviewWidget2;
