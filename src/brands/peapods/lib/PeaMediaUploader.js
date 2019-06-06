import React, { Component } from 'react';
import Script from 'react-load-script';
import PropTypes from 'prop-types';

import theme from './theme';

// TODO: cloudinary should provide a native react component
// https://github.com/cloudinary/cloudinary-react/issues/4

// TODO: not all config options work well together
// https://github.com/cloudinary/cloudinary_npm/issues/254

// TODO: customize widget to look native
// https://github.com/cloudinary/cloudinary-react/issues/91

// TODO: polish the theme colors
// https://demo.cloudinary.com/uw/#/

const { primary, secondary, common, grey, error } = theme.palette;

const defaultConfig = {
  styles: {
    palette: {
      tabIcon: secondary.dark,
      menuIcons: secondary.dark,
      link: primary.dark,
      action: primary.dark,
      inactiveTabIcon: secondary.main,
      error: error.main,
      sourceBg: common.white,
      textDark: common.black,
      textLight: common.white,
      window: common.white,
      inProgress: secondary.light,
      complete: primary.main,
      windowBorder: grey['500'],
    },
    fonts: {
      // TODO: how can we pull this from the theme.typography ?
      default: 'Roboto',
      "'Roboto', sans-serif": {
        url: 'https://fonts.googleapis.com/css?family=Roboto',
        active: true,
      },
    },
  },
};

class MediaUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScriptLoaded: false,
      scriptLoadFailed: false,
    };
    this.wasClosed = false; // protect against async race condition
    this.cloudinaryWidget = null;
    this.cloudinaryUrl = 'https://widget.cloudinary.com/v2.0/global/all.js';
  }

  componentWillUnmount() {
    this.cloudinaryWidget = null;
  }

  onScriptLoadSuccess = () => {
    this.setState({
      isScriptLoaded: true,
    });

    this.cloudinaryWidget = window.cloudinary.createUploadWidget(
      this.getConfig(),
      this.onWidgetEvent,
    );
  };

  onScriptLoadFailed = () => {
    const { onScriptLoadFailed } = this.props;

    this.setState({
      scriptLoadFailed: true,
    });

    onScriptLoadFailed();
  };

  getConfig = () => {
    const { getConfig } = this.props;

    const config = getConfig();

    return {
      ...defaultConfig,
      ...config,
    };
  };

  onWidgetEvent = (err, data) => {
    const { isVisible, onWidgetEvent, onClose } = this.props;

    if (isVisible && data.event === 'close') {
      onClose();
    }

    if (onWidgetEvent) {
      onWidgetEvent(err, data);
    }
  };

  render() {
    const { isScriptLoaded, scriptLoadFailed } = this.state;
    const { isVisible, onScriptLoadFailed } = this.props;

    const config = this.getConfig();

    if (
      !scriptLoadFailed &&
      isScriptLoaded &&
      this.cloudinaryWidget &&
      !this.wasClosed
    ) {
      if (isVisible) {
        this.cloudinaryWidget.update(config);
        this.cloudinaryWidget.open();
      } else {
        this.cloudinaryWidget.close();
      }
    }

    if (this.wasClosed && !isVisible) {
      this.wasClosed = false;
    }

    return (
      <Script
        url={this.cloudinaryUrl}
        onError={onScriptLoadFailed}
        onLoad={this.onScriptLoadSuccess}
      />
    );
  }
}

MediaUploader.propTypes = {
  /**
   * function that returns a cloudinary widget config object
   * https://cloudinary.com/documentation/upload_widget#upload_widget_options
   */
  getConfig: PropTypes.func.isRequired,
  /**
   * handle the case where the cloudinary widget fails to load
   */
  onScriptLoadFailed: PropTypes.func.isRequired,
  /**
   * (error, data) => {}
   */
  onWidgetEvent: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  /**
   * set the visibility of the upload modal
   */
  isVisible: PropTypes.bool,
};

MediaUploader.defaultProps = {
  isVisible: false,
};

MediaUploader.metadata = {
  name: 'Pea Media Uploader',
};

export default MediaUploader;
