import { useState, useEffect } from "react";

const id = "root-carbon";

function useScript() {
  const [state, setState] = useState({
    loaded: false,
    error: false,
  });

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    const container = document.getElementById(id);
    if (!container) return;

    // Create script
    const script = document.createElement("script");
    script.src =
      "//cdn.carbonads.com/carbon.js?serve=CE7DL5QE&placement=mui-treasurycom";
    script.id = "_carbonads_js";
    script.type = "text/javascript";
    script.async = true;

    // Script event listener callbacks for load and error
    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false,
      });
    };

    const onScriptError = () => {
      script.remove();
      setState({
        loaded: true,
        error: true,
      });
    };

    script.addEventListener("load", onScriptLoad);
    script.addEventListener("error", onScriptError);

    // Add script to document body
    container.appendChild(script);

    // Remove event listeners on cleanup
    return () => {
      script.removeEventListener("load", onScriptLoad);
      script.removeEventListener("error", onScriptError);
    };
  }, []);

  return { ...state, id };
}

export default useScript;
