import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import muiWithStyles from '@material-ui/styles/withStyles';
import camelCase from 'lodash/camelCase';
import { getRepeatedItems, pick } from './utils';

const baseTheme = createMuiTheme();

export const getStyleAttrs = stylesCreator => {
  return Object.keys(
    typeof stylesCreator === 'function'
      ? stylesCreator(baseTheme)
      : stylesCreator
  );
};

export const mergeStyleCreators = (...creators) => theme => {
  if (!creators.length) return {};
  if (creators.length === 1) return creators[0](theme);
  if (process.env !== 'production') {
    let list = [];
    creators.forEach(c => {
      list = [...list, ...getStyleAttrs(c)];
    });
    const repeatedList = getRepeatedItems(list);
    if (repeatedList.length) {
      console.warn(
        // eslint-disable-next-line max-len
        `mui-styling: Styles collision alert! attributes: [${repeatedList.join(
          ', '
          // eslint-disable-next-line max-len
        )}]. This might cause bugs in styling, please check these style attributes`
      );
    }
  }
  return creators.reduce(
    (a, b) => ({ ...a, ...(typeof b === 'function' ? b(theme) : b) }),
    {}
  );
};

export const attachStylingParams = (Component, stylesCreator, options = {}) => {
  const { name = '' } = options;
  const attrs = getStyleAttrs(stylesCreator);
  if (process.env !== 'production') {
    if (!name) {
      console.warn(
        // eslint-disable-next-line max-len
        `mui-styling: [attachStylingParams] You forget to pass "name" in options at "${Component.displayName}"`
      );
    }
  }
  const pickClasses = classes => pick(classes, attrs);
  const getOverrides = (css, props = {}) => {
    const { [camelCase(`${name}Overrides`)]: overrides } = props;
    return {
      overrides: pickClasses(overrides || css),
    };
  };

  Component.displayName = name || Component.displayName;
  Component.styleAttrs = attrs;
  Component.pickClasses = pickClasses;
  Component.getOverrides = getOverrides;
};

export const withStyles = (styleCreator, options = {}) => WrappedComponent => {
  const EnhancedComponent = muiWithStyles(styleCreator, options)(props => {
    const { classes, overrides } = props;
    return <WrappedComponent {...props} css={overrides || classes} />;
  });

  attachStylingParams(EnhancedComponent, styleCreator, options);

  return EnhancedComponent;
};
