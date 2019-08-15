import { useState, useEffect } from 'react';

export default initialSelectedKey => {
  const [selectedKey, setSelectedKey] = useState(initialSelectedKey || '');
  useEffect(() => {
    if (initialSelectedKey) {
      setSelectedKey(selectedKey);
    }
  }, [initialSelectedKey]);

  return { selectedKey, setSelectedKey };
};
