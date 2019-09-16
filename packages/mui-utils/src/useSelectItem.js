import { useState, useEffect } from 'react';
import isDefined from '@mui-treasury/utils/isDefined';

export default initialSelectedKey => {
  const [selectedKey, setSelectedKey] = useState(
    isDefined(initialSelectedKey) ? initialSelectedKey : ''
  );
  useEffect(() => {
    if (isDefined(initialSelectedKey)) {
      setSelectedKey(selectedKey);
    }
  }, [initialSelectedKey]);

  return { selectedKey, setSelectedKey };
};
