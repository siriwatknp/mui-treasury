import useScript from './useScript';

export default () => {
  const [loaded, error] = useScript(
    '//cdn.carbonads.com/carbon.js?serve=CE7DL5QE&placement=mui-treasurycom'
  );
  return { id: '_carbonads_js', loaded, error };
};
