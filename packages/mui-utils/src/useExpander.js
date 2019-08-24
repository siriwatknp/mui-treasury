import { useState, useEffect } from 'react';
import useToggleItems from './useToggleItems';

export default (initialOpenKeys, options = {}) => {
  const { multiple = false } = options;
  const { openKeys, setOpenKeys, onToggle } = useToggleItems(initialOpenKeys);

};
