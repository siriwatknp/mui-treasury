import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Box from 'components/atoms/Box';
import Text from 'components/atoms/Text';
import Icon from 'extensions/Icon';

const breakpoints = createBreakpoints({});

const Timeline = ({ data, onMouseOver, onFocus, onMouseLeave }) => (
  <Box position={'relative'}>
    <Box
      width={'1px'}
      bgcolor={'grey.300'}
      position={'absolute'}
      left={{
        xs: 16,
        sm: 32,
        md: 80,
      }}
      height={'100%'}
      top={0}
    />
    {data.map(({ id, primary, secondary, state, link, large }) => (
      <Box
        key={id}
        ml={{
          xs: 6,
          sm: large ? 14 : 10,
          md: 20,
        }}
        py={{
          xs: 1.5,
          sm: 2.5,
          md: 3,
        }}
        position={'relative'}
        css={{
          '&:before': {
            content: '" "',
            position: 'absolute',
            width: 12,
            height: 12,
            background: '#e5e5e5',
            ...(large && {
              width: 18,
              height: 18,
              background: '#ffffff',
              border: '2px solid #a5a5a5',
            }),
            borderRadius: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            left: -32,
            [breakpoints.up('sm')]: {
              left: large ? -80 : -48,
            },
            [breakpoints.up('md')]: {
              left: -80,
            },
          },
          ...(large && {
            '&:after': {
              content: '" "',
              position: 'absolute',
              width: 40,
              height: 1,
              background: '#c5c5c5',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'none',
              [breakpoints.up('sm')]: {
                left: large ? -38 : -32,
                display: 'block',
              },
              [breakpoints.up('md')]: {
                left: -38,
              },
            },
          }),
        }}
        onMouseOver={() => onMouseOver(id)}
        onFocus={() => onFocus(id)}
        onMouseLeave={() => onMouseLeave(id)}
      >
        {state && (
          <Box
            position={'absolute'}
            css={{
              top: '50%',
              transform: 'translate(-50%, -50%)',
              left: -32,
              [breakpoints.up('sm')]: {
                left: large ? -60 : -48,
              },
              [breakpoints.up('md')]: {
                left: -80,
              },
            }}
          >
            {state === 'done' && (
              <Icon
                style={{ backgroundColor: '#ffffff' }}
                size={'big'}
                color={'success'}
              >
                fa fa-check-circle
              </Icon>
            )}
            {state === 'processing' && (
              <Icon style={{ backgroundColor: '#ffffff' }} size={'big'}>
                fas fa-circle-notch fa-spin
              </Icon>
            )}
          </Box>
        )}
        {!primary && (
          <Box
            height={{ xs: 12, sm: 16, md: 20 }}
            bgcolor={'grey.200'}
            maxWidth={{ xs: 120, sm: 200 }}
          />
        )}
        <Text
          component={link ? RouterLink : 'p'}
          to={link}
          fontWeight={'bold'}
          color={state === 'done' ? 'primary.main' : 'grey.500'}
          fontSize={{
            xs: 16,
            sm: 20,
            md: 24,
          }}
          my={0}
        >
          {primary}
        </Text>
        {secondary && (
          <Text
            fontSize={{
              xs: 12,
              sm: 16,
            }}
            color={state === 'done' ? 'primary.main' : 'grey.500'}
          >
            {secondary}
          </Text>
        )}
      </Box>
    ))}
  </Box>
);

Timeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onFocus: PropTypes.func,
};
Timeline.defaultProps = {
  data: [],
  onMouseOver: () => {},
  onMouseLeave: () => {},
  onFocus: () => {},
};

export default Timeline;
