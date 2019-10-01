import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => {
  const blurLength = 5;
  const imageSize = 100;
  const mobileImageSize = 80;
  return {
    root: {},
    imageWrapper: {
      position: 'relative',
      marginBottom: theme.spacing(1),
    },
    imageButton: {
      padding: 0,
      border: 'none',
      transition: 'transform ease 0.3s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    image: {
      display: 'block',
      width: imageSize,
      height: imageSize,
      objectFit: 'cover',
      cursor: 'pointer',
      [theme.breakpoints.only('xs')]: {
        width: mobileImageSize,
        height: mobileImageSize,
      },
    },
    mainImage: {
      position: 'relative',
      zIndex: 1,
    },
    blurredImage: {
      position: 'absolute',
      top: 4,
      left: 0,
      '-webkit-filter': `blur(${blurLength}px)`,
      filter: `blur(${blurLength}px)`,
    },
    formLabelRoot: {
      marginRight: 0,
    },
    formLabelLabel: {
      fontWeight: 500,
      color: theme.palette.secondary.main,
    },
  };
};

const PeaCategoryToggle = withStyles(styles, { name: 'PeaCategoryToggle' })(
  ({
    src,
    classes,
    FormControlLabelProps,
    CheckboxProps,
    label,
    checked,
    onChange,
    value,
  }) => {
    const checkElement = useRef(null);

    const handleImageClick = () => {
      if (checkElement.current) {
        checkElement.current.click();
      }
    };

    return (
      <div className={cx('PeaCategoryToggle-root', classes.root)}>
        <div
          className={cx('PeaCategoryToggle-imageWrapper', classes.imageWrapper)}
        >
          <button
            type="button"
            onClick={handleImageClick}
            className={classes.imageButton}
          >
            <img
              alt={'main'}
              src={src}
              className={cx(classes.image, classes.mainImage)}
            />
            <img
              alt={'blur'}
              src={src}
              className={cx(classes.image, classes.blurredImage)}
            />
          </button>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              color={'primary'}
              {...CheckboxProps}
              checked={checked}
              onChange={onChange}
              ref={checkElement}
              value={value}
            />
          }
          label={label}
          {...FormControlLabelProps}
          classes={{
            root: classes.formLabelRoot,
            label: classes.formLabelLabel,
            ...FormControlLabelProps.classes,
          }}
        />
      </div>
    );
  },
);

PeaCategoryToggle.propTypes = {
  label: PropTypes.string,
  src: PropTypes.string.isRequired,
  FormControlLabelProps: PropTypes.shape({}),
  CheckboxProps: PropTypes.shape({}),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
PeaCategoryToggle.defaultProps = {
  label: '',
  FormControlLabelProps: {},
  CheckboxProps: {},
  checked: undefined,
  onChange: () => {},
  value: undefined,
};
PeaCategoryToggle.metadata = {
  name: 'Pea Category Toggle',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};
PeaCategoryToggle.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaCategoryToggle;
