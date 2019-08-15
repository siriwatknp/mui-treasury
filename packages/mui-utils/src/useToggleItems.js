import { useState, useEffect } from 'react';

export default initialOpenKeys => {
  const [openKeys, setOpenKeys] = useState(initialOpenKeys || []);
  useEffect(() => {
    if (initialOpenKeys) {
      setOpenKeys(initialOpenKeys);
    }
  }, [initialOpenKeys]);

  const onToggle = key => {
    if (openKeys.includes(key)) {
      return setOpenKeys(openKeys.filter(k => k !== key));
    }
    return setOpenKeys([...openKeys, key]);
  };

  return {
    openKeys,
    setOpenKeys,
    onToggle,
  };
};
