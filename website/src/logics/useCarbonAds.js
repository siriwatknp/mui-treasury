import { useRef, useEffect } from 'react';
import useScript from './useScript';

export default (id = '_carbonads_js') => {
  const ref = useRef();
  useEffect(() => {
    ref.current = document.getElementById(id);
  }, [id]);
  return useScript(
    '//cdn.carbonads.com/carbon.js?serve=CE7DL5QE&placement=mui-treasurycom',
    { target: ref.current }
  );
};
