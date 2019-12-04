import { useState, useEffect } from 'react';
import isDefined from './isDefined';

export default initialSelectedKey => {
  const [selectedKey, setSelectedKey] = useState(
    isDefined(initialSelectedKey) ? initialSelectedKey : ''
  );
  useEffect(() => {
    if (isDefined(initialSelectedKey)) {
      setSelectedKey(() => initialSelectedKey);
    }
  }, [initialSelectedKey, setSelectedKey]);

  return { selectedKey, setSelectedKey };
};
