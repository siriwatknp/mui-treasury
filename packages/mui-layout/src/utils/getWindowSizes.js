const getWindowSizes = () => {
  const canUseDOM = typeof window !== 'undefined';

  return {
    width: canUseDOM ? window.innerWidth : null,
    height: canUseDOM ? window.innerHeight : null,
    canUseDOM,
  };
};

export default getWindowSizes;
