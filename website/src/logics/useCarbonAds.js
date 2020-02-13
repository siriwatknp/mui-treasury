import { useState, useEffect } from 'react';

function useScript() {
  // Keeping track of script loaded and error state
  const id = 'root-carbon';
  const [state, setState] = useState({
    loaded: false,
    error: false,
  });

  useEffect(
    () => {
      // Create script
      let script = document.createElement('script');
      script.src =
        '//cdn.carbonads.com/carbon.js?serve=CE7DL5QE&placement=mui-treasurycom';
      script.id = '_carbonads_js';
      script.type = 'text/javascript';
      script.async = true;

      // Script event listener callbacks for load and error
      const onScriptLoad = () => {
        setState({
          loaded: true,
          error: false,
        });
      };

      const onScriptError = () => {
        // Remove from cachedScripts we can try loading again
        script.remove();

        setState({
          loaded: true,
          error: true,
        });
      };

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('error', onScriptError);

      // Add script to document body
      document.getElementById(id).appendChild(script);

      // Remove event listeners on cleanup
      return () => {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      };
    },
    [] // Only re-run effect if script src changes
  );

  return { ...state, id: 'root-carbon' };
}

export default useScript;
