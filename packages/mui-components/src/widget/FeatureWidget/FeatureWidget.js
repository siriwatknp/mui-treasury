import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './featureWidget.styles';

const FeatureWidget = withStyles(styles, { name: 'FeatureWidget' })(
  props => {
    const { classes, renderIcon, title, content, children } = props;
    return (
      <div className={classes.root}>
        {renderIcon && (
          <div className={classes.iconWrapper}>
            {renderIcon({ className: classes.icon })}
          </div>
        )}
        <h2 className={classes.title} dangerouslySetInnerHTML={{ __html: title }} />
        <p
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {typeof children === 'function'
          ? children({ className: classes.bottom })
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
