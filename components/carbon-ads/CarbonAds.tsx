"use client";

import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function loadScript(src: string, position: HTMLElement) {
  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.src = src;
  position.appendChild(script);
  return script;
}

type CarbonAdsProps = {
  vertical?: boolean | "fullWidth";
  fullWidth?: boolean;
  format?: "cover" | "responsive";
} & React.HTMLProps<HTMLDivElement>;

function CarbonAdsInner({
  vertical,
  className,
  format,
  ...props
}: CarbonAdsProps) {
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
        `https://cdn.carbonads.com/carbon.js?serve=CE7DL5QE&placement=mui-treasurycom${
          format === "cover" ? `&format=${format}` : ""
        }`,
        ref.current,
      );
      script.id = "_carbonads_js";
    });

    return () => {
      clearTimeout(load);
      // Clean up Carbon Ads global state
      const carbonScript = document.getElementById("_carbonads_js");
      if (carbonScript) {
        carbonScript.remove();
      }
      const carbonAds = document.getElementById("carbonads");
      if (carbonAds) {
        carbonAds.remove();
      }
      // Reset global Carbon Ads state
      if (typeof window !== "undefined") {
        try {
          // @ts-expect-error Carbon Ads global
          window._carbonads = undefined;
        } catch {
          // ignore
        }
      }
    };
  }, [format]);

  return (
    <div
      {...props}
      className={clsx(vertical && "CarbonVertical", className)}
      ref={ref}
    />
  );
}

const CarbonAds = (props: CarbonAdsProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <CarbonAdsInner key={pathname} {...props} />;
};

export default CarbonAds;
