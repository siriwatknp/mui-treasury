import { useState, useEffect, useRef } from 'react';

export default (bindValue, onChange, bypassed) => {
  const [value, setValue] = useState(bindValue);
  const ref = useRef({ effectInit: false });
  useEffect(() => {
    setValue(val => (val !== bindValue ? bindValue : val));
  }, [bindValue]);
  useEffect(() => {
    if (ref.current.effectInit && !bypassed && onChange) onChange(value);
  }, [bypassed, onChange, value]);
  useEffect(() => {
    ref.current.effectInit = true;
  }, []);
  return [bypassed ? bindValue : value, setValue];
};
