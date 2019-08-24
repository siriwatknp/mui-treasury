import { useState, useEffect } from 'react';

const isString = str => typeof str === 'string';

const getResult = val => (isString(val) ? [val] : val);

export default initialOpenKeys => {
  const [openKeys, setOpenKeys] = useState(getResult(initialOpenKeys) || []);
  useEffect(() => {
    if (initialOpenKeys) {
      setOpenKeys(getResult(initialOpenKeys));
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
