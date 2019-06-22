/* eslint-disable */
import React from 'react';
import Box from '@material-ui/core/Box';
import SimpleArrow from 'components/arrows/SimpleArrow';
import Icon from 'components/predefined/Icon';
import { mergeInfo } from 'helpers/function';

const demoCode = `
  import React from 'react';
  import Box from '@material-ui/core/Box';
  import SimpleArrow from './SimpleArrow';
  
  const Demo = () => (
    <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'}>
      <SimpleArrow direction={'left'} />
      <SimpleArrow direction={'right'} />
    </Box>
  );
  
  export default Demo;
`;

SimpleArrow.Demo = () => (
  <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'}>
    <SimpleArrow direction={'left'} />
    <SimpleArrow direction={'right'} />
  </Box>
);

const coreCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/styles';
  import Button from '@material-ui/core/Button';
  import Icon from './Icon';
  
  const useStyles = makeStyles(({ breakpoints }) => ({
    root: {
      borderRadius: '50%',
      border: '1px solid',
      width: 40,
      minWidth: 40,
      height: 40,
      '& .MuiIcon-root': {
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
      },
      '&:hover': {
        '& .MuiIcon-root': {
          transform: 'scale(1.3)',
          [breakpoints.up('md')]: {
            transform: 'scale(1.7)',
          },
        },
      },
      [breakpoints.up('sm')]: {
        width: 48,
        minWidth: 48,
        height: 48,
      },
      [breakpoints.up('md')]: {
        width: 64,
        minWidth: 64,
        height: 64,
      },
    },
  }));
  
  const SimpleArrow = ({ direction, iconProps, ...props }) => {
    const classes = useStyles(props);
    return (
      <Button display={'flex'} alignItem={'center'} {...props} classes={classes}>
        <Icon {...iconProps}>{\`keyboard_arrow_\${direction}\`}</Icon>
      </Button>
    );
  };
  
  SimpleArrow.propTypes = {
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
    iconProps: PropTypes.shape({}),
  };
  SimpleArrow.defaultProps = {
    iconProps: {},
  };
  
  export default SimpleArrow;

`;

SimpleArrow.info = mergeInfo(
  {
    name: 'SimpleArrow',
    description: '',
    links: [
      { label: 'Button API', url: 'https://material-ui.com/api/button/' },
    ],
    files: [
      {
        label: 'Demo.js',
        code: demoCode,
      },
      {
        label: 'SimpleArrow.js',
        code: coreCode,
        core: true,
      },
    ],
    libraries: [],
    dependencies: [],
  },
  Icon.info,
);

export default SimpleArrow;
