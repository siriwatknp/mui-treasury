/* eslint-disable max-len */
import React from 'react';
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Box from 'components/atoms/Box';
import Text from 'components/atoms/Text';

const Image = styled('img')({
  width: 24,
  height: 24,
  opacity: 0.7,
  '&:hover': {
    opacity: 1,
  },
});

const PreviewWidget = ({
  libraries,
  white,
  inverted,
  sandboxLink,
  name,
  description,
  onClick,
  children,
  contentProps,
  rootProps,
}) => {
  const getBG = () => {
    if (inverted) return 'text.primary';
    if (white) return '#ffffff';
    return 'grey.100';
  };
  return (
    <Box
      className={'PreviewWidget-root'}
      width={'100%'}
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      transition={'0.3s'}
      // border={'2px solid rgba(0,0,0,0)'}
      borderRadius={16}
      {...rootProps}
    >
      <Box
        py={3}
        px={2}
        bgcolor={getBG()}
        borderRadius={12}
        flexGrow={1}
        textAlign={'center'}
        {...Box.allCenter}
        {...contentProps}
      >
        {children}
      </Box>
      {name && (
        <Box pt={1} p={2} {...Box.alignCenter}>
          <Box flexGrow={1}>
            <Text variant={'h6'}>{name}</Text>
            <Text color={'grey.500'}>{description}</Text>
            {libraries && (
              <Box mt={1}>
                {libraries.map(({ text, link }) => (
                  <Chip
                    key={text}
                    href={link}
                    label={text}
                    target={'_blank'}
                    component={'a'}
                    color={'primary'}
                    deleteIcon={<Icon>call_made</Icon>}
                    onDelete={() => {}}
                    clickable
                    style={{ marginRight: 8 }}
                  />
                ))}
              </Box>
            )}
          </Box>
          {onClick && (
            <IconButton onClick={onClick}>
              <Icon>search</Icon>
            </IconButton>
          )}
          {sandboxLink && (
            <IconButton
              component={'a'}
              href={sandboxLink}
              target={'_blank'}
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <Image
                alt={'code-sandbox'}
                src={
                  'https://camo.githubusercontent.com/237fa1e304ff8d669572cf96784308c87975d149/687474703a2f2f63646e2e656d6265642e6c792f70726f7669646572732f6c6f676f732f636f646573616e64626f782e706e67'
                }
              />
            </IconButton>
          )}
        </Box>
      )}
    </Box>
  );
};

PreviewWidget.propTypes = {
  white: PropTypes.bool,
  inverted: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.element,
  name: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  contentProps: PropTypes.shape({}),
  rootProps: PropTypes.shape({}),
  sandboxLink: PropTypes.string,
  libraries: PropTypes.arrayOf(PropTypes.shape({})),
};
PreviewWidget.defaultProps = {
  white: false,
  inverted: false,
  active: false,
  name: '',
  description: '',
  children: null,
  onClick: undefined,
  contentProps: {},
  rootProps: {},
  sandboxLink: '',
  libraries: undefined,
};

export default PreviewWidget;
