import { useState, useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

const isString = str => typeof str === 'string';

const getResult = val => (isString(val) ? [val] : val);

// problem
// useToggleItems([]) will cause effect to run infinitely when 1st rerender is triggered.
// solved by using useRef and some conditional statement
export default (dynamicOpenKeys, options = {}) => {
  const { multiple = true } = options;
  const [openKeys, setOpenKeys] = useState(getResult(dynamicOpenKeys) || []);
  const temp = useRef({
    value: dynamicOpenKeys,
    isToggled: false,
    justUpdated: false,
  }); // store prev dynamicOpenKeys
  useEffect(() => {
    const isFollowedByToggle =
      temp.current.justUpdated && temp.current.isToggled;
    const justUpdated = !isEqual(temp.current.value, dynamicOpenKeys);
    if (
      justUpdated || // new external state
      isFollowedByToggle
    ) {
      // use external state
      setOpenKeys(getResult(dynamicOpenKeys));
    }
    if (justUpdated) {
      temp.current.justUpdated = justUpdated;
    }
    if (isFollowedByToggle) {
      temp.current.isToggled = false;
    }
    // always copy dynamicOpenKeys to temp value
    // whenever dynamicOpenKeys changes
    temp.current.value = dynamicOpenKeys;
  }, [dynamicOpenKeys]);

  const getNewOpenKeys = key => {
    if (openKeys.includes(key)) {
      // use want to hide this key's content
      if (multiple) return openKeys.filter(k => k !== key);
      return [];
    }
    // use want to open this key's content
    if (multiple) return [...openKeys, key];
    return [key];
  };

  const onToggle = key => {
    const newOpenKeys = getNewOpenKeys(key);
    temp.current.isToggled = true;
    setOpenKeys(newOpenKeys);
  };

  return {
    openKeys,
    setOpenKeys,
    onToggle,
  };
};
