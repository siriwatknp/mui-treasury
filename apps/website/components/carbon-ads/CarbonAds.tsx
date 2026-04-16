'use client';

import React from 'react';

import clsx from 'clsx';

type CarbonAdsProps = {
  vertical?: boolean | 'fullWidth';
  fullWidth?: boolean;
  format?: 'cover' | 'responsive';
} & React.HTMLProps<HTMLDivElement>;

const CarbonAds = React.memo(function CarbonAds({
  vertical,
  className,
  format,
  ...props
}: CarbonAdsProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const existingScript = document.getElementById('_carbonads_js');
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = `https://cdn.carbonads.com/carbon.js?serve=CE7DL5QE&placement=mui-treasurycom${
      format === 'cover' ? `&format=${format}` : ''
    }`;
    script.id = '_carbonads_js';
    script.async = true;
    container.appendChild(script);
  }, [format]);

  return (
    <div
      {...props}
      className={clsx(vertical && 'CarbonVertical', className)}
      ref={ref}
    />
  );
});

export default CarbonAds;
