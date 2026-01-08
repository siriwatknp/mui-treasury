"use client";

import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

declare global {
  interface Window {
    _carbonads?: {
      refresh?: () => void;
      reload?: () => void;
    };
  }
}

type CarbonAdsProps = {
  vertical?: boolean | "fullWidth";
  fullWidth?: boolean;
  format?: "cover" | "responsive";
} & React.HTMLProps<HTMLDivElement>;

const CarbonAds = React.memo(function CarbonAds({
  vertical,
  className,
  format,
  ...props
}: CarbonAdsProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const carbonAdsEl = document.getElementById("carbonads");
    const carbonScriptEl = document.getElementById("_carbonads_js");

    if (carbonScriptEl) {
      // If ad element exists, refresh it
      if (carbonAdsEl && window._carbonads?.refresh) {
        window._carbonads.refresh();
        return;
      }

      // If script exists but ad element doesn't (e.g., navigating between categories),
      // reload only if the script is still in DOM
      if (!carbonAdsEl && window._carbonads?.reload) {
        try {
          window._carbonads.reload();
          return;
        } catch {
          // reload failed, fall through to re-inject script
        }
      }
    }

    // Otherwise, load the script fresh (debounced for StrictMode)
    const load = setTimeout(() => {
      if (!ref.current) {
        return;
      }

      // Clean up any orphaned script
      const oldScript = document.getElementById("_carbonads_js");
      if (oldScript) {
        oldScript.remove();
      }

      const script = document.createElement("script");
      script.src = `https://cdn.carbonads.com/carbon.js?serve=CE7DL5QE&placement=mui-treasurycom${
        format === "cover" ? `&format=${format}` : ""
      }`;
      script.id = "_carbonads_js";
      script.async = true;
      ref.current.appendChild(script);
    });

    return () => {
      clearTimeout(load);
    };
  }, [pathname, format]);

  return (
    <div
      {...props}
      className={clsx(vertical && "CarbonVertical", className)}
      ref={ref}
    />
  );
});

export default CarbonAds;
