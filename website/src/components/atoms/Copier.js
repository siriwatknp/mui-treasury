import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Copier = ({ text, children }) => {
  console.log('text', text);
  const [copied, setCopied] = useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [copied, setCopied]);
  const handleCopy = (t, result) => {
    if (result) {
      setCopied(true);
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
