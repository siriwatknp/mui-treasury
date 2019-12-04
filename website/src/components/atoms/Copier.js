import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Copier = ({ text, children }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (t, result) => {
    if (result) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };
  return (
    <CopyToClipboard onCopy={handleCopy} text={text}>
      {children({ copied })}
    </CopyToClipboard>
  );
};

Copier.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Copier;
