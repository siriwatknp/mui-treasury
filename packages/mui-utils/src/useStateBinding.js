import { useState, useEffect } from 'react';
import isDefined from './isDefined';

export default (initial, defaultValue) => {
  const [state, setState] = useState(
    isDefined(initial) ? initial : defaultValue
  );
  useEffect(() => {
    if (isDefined(initial)) {
      setState(initial);
    }
  }, [initial, setState]);

  return [state, setState];
};
