import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui-treasury/styling';
import createStyles from './FeatureWidget.styles';

const FeatureWidget = withStyles(createStyles, { name: 'FeatureWidget' })(
  props => {
    const { css, renderIcon, title, content, children } = props;
    return (
      <div className={css.root}>
        {renderIcon && (
          <div className={css.iconWrapper}>
            {renderIcon({ className: css.icon })}
          </div>
        )}
        <h2 className={css.title}>{title}</h2>
        <p className={css.content}>{content}</p>
        {typeof children === 'function'
          ? children({ className: css.bottom })
          : children}
      </div>
    );
  }
);

FeatureWidget.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  renderIcon: PropTypes.func,
};
FeatureWidget.defaultProps = {
  title: '',
  content: '',
  renderIcon: undefined,
};

export default FeatureWidget;
