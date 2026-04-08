"use client";

import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

declare global {
  interface Window {
    _carbonads?: {
      refresh?: () => void;
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
    const isCarbonExist = document.querySelector("#carbonads");

    if (isCarbonExist && window._carbonads?.refresh) {
      window._carbonads.refresh();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://cdn.carbonads.com/carbon.js?serve=CE7DL5QE&placement=mui-treasurycom${
      format === "cover" ? `&format=${format}` : ""
    }`;
    script.id = "_carbonads_js";
    script.async = true;
    ref.current?.appendChild(script);
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
