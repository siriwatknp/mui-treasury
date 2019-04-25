import React from 'react';
import PropTypes from 'prop-types';
import './device.min.css';

const IphoneX = ({ children }) => (
  <div className="marvel-device iphone-x landscape">
    <div className="notch">
      <div className="camera" />
      <div className="speaker" />
    </div>
    <div className="top-bar" />
    <div className="sleep" />
    <div className="bottom-bar" />
    <div className="volume" />
    <div className="overflow">
      <div className="shadow shadow--tr" />
      <div className="shadow shadow--tl" />
      <div className="shadow shadow--br" />
      <div className="shadow shadow--bl" />
    </div>
    <div className="inner-shadow" />
    <div className="screen">{children}</div>
  </div>
);

IphoneX.propTypes = {
  children: PropTypes.node,
};
IphoneX.defaultProps = {
  children: null,
};

export default IphoneX;
