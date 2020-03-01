import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui-treasury/styling';
import styles from './featureWidget.styles';

const FeatureWidget = withStyles(styles, { name: 'FeatureWidget' })(
  props => {
    const { css, renderIcon, title, content, children } = props;
    return (
      <div className={css.root}>
        {renderIcon && (
          <div className={css.iconWrapper}>
            {renderIcon({ className: css.icon })}
          </div>
        )}
        <h2 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
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
