/* eslint-disable */
import React from 'react';
import DotIndicator from 'components/indicators/DotIndicator';
import CONSTANT from 'constant';

DotIndicator.Demo = ({ index, setIndex }) => (
  <div>
    {[0, 1, 2].map(i => (
      <DotIndicator
        key={i}
        active={i === index}
        onClick={() => setIndex(i)}
      />
    ))}
  </div>
);

const demoCode = `
  import React from 'react';
  import DotIndicator from './DotIndicator';
  
  const Demo = () => {
    const [index, setIndex] = useState(0);
    return (
      <div>
        {[0, 1, 2].map(i => (
          <DotIndicator
            key={i}
            active={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    );
  }
  
  export default Demo;
`;

const coreCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import cx from 'clsx';
  import { makeStyles } from '@material-ui/styles';
  
  const useStyles = makeStyles(({ palette, transitions, breakpoints }) => {
    const SIZES = {
      xs: 8,
      sm: 10,
      lg: 12,
    };
    return {
      root: ({ active }) => ({
        display: 'inline-block',
        padding: SIZES.xs,
        lineHeight: 0,
        cursor: 'pointer',
        '& + .Indicator-root': {
          marginLeft: SIZES.xs,
        },
        '&:after': {
          content: '""',
          display: 'inline-block',
          width: SIZES.xs,
          height: SIZES.xs,
          borderRadius: '50%',
          backgroundColor: active ? palette.text.primary : palette.text.disabled,
          transition: transitions.create(),
          [breakpoints.up('sm')]: {
            width: SIZES.sm,
            height: SIZES.sm,
          },
          [breakpoints.up('lg')]: {
            '&:after': {
              width: SIZES.lg,
              height: SIZES.lg,
            },
          },
        },
        '&:hover': {
          '&:after': {
            transform: 'scale(1.2)',
          },
        },
        [breakpoints.up('sm')]: {
          padding: SIZES.sm,
          '& + .Indicator-root': {
            marginLeft: SIZES.sm,
          },
        },
        [breakpoints.up('lg')]: {
          padding: SIZES.lg,
          '& + .Indicator-root': {
            marginLeft: SIZES.lg,
          },
        },
      }),
    };
  });
  
  const DotIndicator = ({ className, active, ...props }) => {
    const classes = useStyles({ active });
    return (
      <div
        className={cx(
          className,
          'Indicator-root',
          active && '-active',
          classes.root,
        )}
        {...props}
      />
    );
  };
  
  DotIndicator.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
  };
  DotIndicator.defaultProps = {
    className: '',
    active: false,
  };
  
  export default DotIndicator;

`;

DotIndicator.info = {
  name: 'DotIndicator',
  description: '',
  links: [],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'DotIndicator.js',
      code: coreCode,
      core: true,
    },
  ],
  libraries: [CONSTANT.libraries.clsx],
  dependencies: ['clsx'],
};

export default DotIndicator;
