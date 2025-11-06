"use client";

import React from "react";
import clsx from "clsx";
import "./CarbonAds.css";

function loadScript(src: string, position: HTMLElement) {
  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.src = src;
  position.appendChild(script);
  return script;
}

const CarbonAds = ({
  vertical,
  className,
  ...props
}: {
  vertical?: boolean | "fullWidth";
  fullWidth?: boolean;
} & React.HTMLProps<HTMLDivElement>) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // The isolation logic of carbonads is broken.
    // Once the script starts loading, it will asynchronous resolve, with no way to stop it.
    // This leads to duplication of the ad.
    //
    // To solve the issue, for example StrictModel double effect execution, we debounce the load action.
    const load = setTimeout(() => {
      // The DOM node could have unmounted at this point.
      if (!ref.current) {
        return;
      }

      const script = loadScript(
        "https://cdn.carbonads.com/carbon.js?serve=CE7DL5QE&placement=mui-treasurycom",
        ref.current
      );
      script.id = "_carbonads_js";
    });

    return () => {
      clearTimeout(load);
    };
  }, []);

  return (
    <div
      {...props}
      className={clsx(vertical && "CarbonVertical", className)}
      ref={ref}
    />
  );
};

export default CarbonAds;
